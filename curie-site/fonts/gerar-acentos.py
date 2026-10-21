# -*- coding: utf-8 -*-
"""
A Analog Typewriter so tem ASCII. Este script constroi os acentos do
portugues a partir das pecas que a propria fonte ja tem, para que
"BIOCOSMETICOS" e "BIOCOSMÉTICOS" saiam com o mesmo desenho.

  agudo      = crase espelhada
  circunflexo= acento circunflexo do teclado (^), achatado
  til        = til do teclado (~), reduzido
  cedilha    = virgula, abaixo da linha de base
"""
import glob, sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables._g_l_y_f import Glyph, GlyphComponent

ORIG = glob.glob(r'C:/Users/pedro/OneDrive/Área de Trabalho/pepe/landingPAges/curie/brandguide/**/analog*/Web-TT/*.ttf', recursive=True)[0]
SAIDA = r'C:/Users/pedro/OneDrive/Área de Trabalho/pepe/landingPAges/curie/curie-site/fonts/analog-typewriter.woff2'

f = TTFont(ORIG)
glyf, hmtx = f['glyf'], f['hmtx']

def caixa(nome):
    g = glyf[nome]
    g.recalcBounds(glyf)
    return g.xMin, g.yMin, g.xMax, g.yMax

# peca de origem, escala horizontal, escala vertical, espelhar, folga acima da base
ACENTOS = {
    'agudo':  ('grave',       0.82, 0.82, True,  28),
    'crase':  ('grave',       0.82, 0.82, False, 28),
    'circ':   ('asciicircum', 0.78, 0.46, False, 30),
    'til':    ('asciitilde',  0.52, 0.52, False, 34),
}

# caractere: (glifo base, acento)
MAPA = {
    0x00C0:('A','crase'), 0x00C1:('A','agudo'), 0x00C2:('A','circ'), 0x00C3:('A','til'),
    0x00C9:('E','agudo'), 0x00CA:('E','circ'),  0x00C8:('E','crase'),
    0x00CD:('I','agudo'),
    0x00D3:('O','agudo'), 0x00D4:('O','circ'),  0x00D5:('O','til'), 0x00D2:('O','crase'),
    0x00DA:('U','agudo'),
    0x00E0:('a','crase'), 0x00E1:('a','agudo'), 0x00E2:('a','circ'), 0x00E3:('a','til'),
    0x00E9:('e','agudo'), 0x00EA:('e','circ'),  0x00E8:('e','crase'),
    0x00ED:('dotlessi','agudo'),
    0x00F3:('o','agudo'), 0x00F4:('o','circ'),  0x00F5:('o','til'), 0x00F2:('o','crase'),
    0x00FA:('u','agudo'),
}
CEDILHA = {0x00C7:'C', 0x00E7:'c'}

novos = {}

def composto(partes, largura):
    """partes: [(glifo, transform2x2|None, dx, dy)]"""
    g = Glyph()
    g.numberOfContours = -1
    g.components = []
    for i, (nome, tr, dx, dy) in enumerate(partes):
        c = GlyphComponent()
        c.glyphName = nome
        c.x, c.y = int(round(dx)), int(round(dy))
        c.flags = 0x0002 | 0x0004            # offsets em x/y, arredondados na grade
        if i == 0:
            c.flags |= 0x0200                # usa as metricas do glifo base
        if tr:
            c.transform = tr
        g.components.append(c)
    return g

# ---- i sem pingo: o pingo e o primeiro contorno do 'i' ----
def sem_pingo(nome_base, nome_novo):
    import copy
    g = copy.deepcopy(glyf[nome_base])
    g.expand(glyf)
    coords, endPts, flags = g.getCoordinates(glyf)
    # o pingo e o contorno cujo ponto mais baixo fica acima do resto
    inicio, contornos = 0, []
    for fim in endPts:
        contornos.append((inicio, fim))
        inicio = fim + 1
    alturas = [min(y for _, y in coords[a:b+1]) for a, b in contornos]
    pingo = alturas.index(max(alturas))
    manter = [c for k, c in enumerate(contornos) if k != pingo]
    nc, nf, ne = [], [], []
    for a, b in manter:
        nc.extend(coords[a:b+1]); nf.extend(flags[a:b+1]); ne.append(len(nc) - 1)
    ng = Glyph()
    ng.numberOfContours = len(ne)
    from fontTools.ttLib.tables._g_l_y_f import GlyphCoordinates
    ng.coordinates = GlyphCoordinates(nc)
    ng.flags = bytearray(nf)
    ng.endPtsOfContours = ne
    ng.program = glyf[nome_base].program
    ng.recalcBounds(glyf)
    novos[nome_novo] = (ng, hmtx[nome_base])
    glyf.glyphs[nome_novo] = ng
    hmtx.metrics[nome_novo] = hmtx[nome_base]
    return nome_novo

f.setGlyphOrder(f.getGlyphOrder() + ['dotlessi'])
sem_pingo('i', 'dotlessi')

ordem = f.getGlyphOrder()
def registrar(nome, g, metrica):
    if nome not in ordem:
        ordem.append(nome)
    glyf.glyphs[nome] = g
    hmtx.metrics[nome] = metrica

for cp, (base, acento) in MAPA.items():
    peca, ex, ey, espelhar, folga = ACENTOS[acento]
    bxmin, bymin, bxmax, bymax = caixa(base)
    axmin, aymin, axmax, aymax = caixa(peca)
    centro_base = (bxmin + bxmax) / 2
    centro_ac = (axmin + axmax) / 2
    if espelhar:
        tr = ((-ex, 0), (0, ey))
        dx = centro_base + ex * centro_ac
    else:
        tr = ((ex, 0), (0, ey))
        dx = centro_base - ex * centro_ac
    dy = (bymax + folga) - ey * aymin
    nome = 'uni%04X' % cp
    registrar(nome, composto([(base, None, 0, 0), (peca, tr, dx, dy)], hmtx[base][0]), hmtx[base])

for cp, base in CEDILHA.items():
    bxmin, bymin, bxmax, bymax = caixa(base)
    axmin, aymin, axmax, aymax = caixa('comma')
    e = 0.62
    dx = (bxmin + bxmax) / 2 - e * (axmin + axmax) / 2
    dy = -18 - e * aymax
    nome = 'uni%04X' % cp
    registrar(nome, composto([(base, None, 0, 0), ('comma', ((e, 0), (0, e)), dx, dy)], hmtx[base][0]), hmtx[base])

f.setGlyphOrder(ordem)

# cmap: aponta os codigos novos para os glifos novos
for tb in f['cmap'].tables:
    for cp in list(MAPA) + list(CEDILHA):
        tb.cmap[cp] = 'uni%04X' % cp
    # 0xD2..0xD5 vinham herdados do MacRoman apontando para aspas
    # agora apontam para as vogais certas

f['head'].modified = f['head'].modified
f.flavor = 'woff2'
f.save(SAIDA)
print('salvo:', SAIDA)

# conferencia
v = TTFont(SAIDA); c = set()
for tb in v['cmap'].tables: c |= set(tb.cmap.keys())
falta = [chr(x) for x in list(MAPA)+list(CEDILHA) if x not in c]
print('glifos agora:', len(c), '| faltando:', falta or 'nenhum')
