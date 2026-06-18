// src/data/productos.js
// Todos los precios ya incluyen IVA (precio base × 1.16)
// Para mostrar precio sin IVA: precio / 1.16

export const IVA = 0.16

export const categorias = [
  { id: 'viniles',       nombre: 'Viniles',              icono: 'Layers' },
  { id: 'lonas',         nombre: 'Lonas y Barricadas',   icono: 'Image' },
  { id: 'textiles',      nombre: 'Textiles',             icono: 'Shirt' },
  { id: 'sublimacion',   nombre: 'Sublimación',          icono: 'Coffee' },
  { id: 'promocionales', nombre: 'Promocionales',        icono: 'Gift' },
  { id: 'calcomanias',   nombre: 'Calcomanías y Stickers', icono: 'Sticker' },
  { id: 'impresos',      nombre: 'Impresos',             icono: 'FileText' },
  { id: 'libretas',      nombre: 'Libretas y Agendas',   icono: 'BookOpen' },
  { id: 'senaletica',    nombre: 'Señalética',           icono: 'MapPin' },
  { id: 'sellos',        nombre: 'Sellos',               icono: 'Stamp' },
  { id: 'anuncios',      nombre: 'Anuncios Luminosos',   icono: 'Zap' },
  { id: 'servicios',     nombre: 'Servicios',            icono: 'Wrench' },
]

export const productos = [
  // ─── VINILES ────────────────────────────────────────────────────────────────
  {
    id: 'vinil-adhesivo',
    categoria: 'viniles',
    nombre: 'Vinil Adhesivo',
    unidad: 'metro',
    variantes: [
      { nombre: 'Estándar', precio: 580 },
    ],
  },
  {
    id: 'vinil-textil',
    categoria: 'viniles',
    nombre: 'Vinil Textil',
    unidad: 'metro',
    variantes: [
      { nombre: 'Colores básicos',    precio: 432 },
      { nombre: 'Colores especiales', precio: 450 },
      { nombre: 'Reflejante',         precio: 1300 },
      { nombre: 'Brillante',          precio: 580 },
    ],
  },
  {
    id: 'vinil-microperforado',
    categoria: 'viniles',
    nombre: 'Vinil Microperforado',
    unidad: 'metro',
    variantes: [
      { nombre: 'Estándar', precio: 280 },
    ],
  },
  {
    id: 'vinil-estatico',
    categoria: 'viniles',
    nombre: 'Vinil Estático',
    unidad: '1.20 metros',
    variantes: [
      { nombre: 'Estándar', precio: 620 },
    ],
  },
  {
    id: 'vinil-transparente',
    categoria: 'viniles',
    nombre: 'Vinil Transparente',
    unidad: 'metro',
    variantes: [
      { nombre: 'Estándar', precio: 580 },
    ],
  },

  // ─── LONAS Y BARRICADAS ──────────────────────────────────────────────────────
  {
    id: 'lona-brillante',
    categoria: 'lonas',
    nombre: 'Lona Brillante',
    unidad: 'metro',
    variantes: [
      { nombre: 'Calidad Media', precio: 185 },
      { nombre: 'Calidad HD',    precio: 200 },
    ],
  },
  {
    id: 'barricada-reflejante',
    categoria: 'lonas',
    nombre: 'Barricada Reflejante',
    unidad: 'metro',
    notas: 'Deben ser múltiplos de 3. El cliente manda el diseño.',
    variantes: [
      { nombre: 'Reflejante', precio: 480 },
    ],
  },

  // ─── TEXTILES ────────────────────────────────────────────────────────────────
  {
    id: 'textil-vinil',
    categoria: 'textiles',
    nombre: 'Estampado en Textil (Vinil)',
    descripcion: 'Aplicable en: mochilas, playeras, camisas, camisolas, sudaderas, chalecos, overoles, uniformes, cachuchas.',
    unidad: 'metro',
    variantes: [
      { nombre: 'Colores básicos',    precio: 432 },
      { nombre: 'Colores especiales', precio: 450 },
      { nombre: 'Reflejante',         precio: 1300 },
      { nombre: 'Brillante',          precio: 580 },
    ],
  },

  // ─── SUBLIMACIÓN ─────────────────────────────────────────────────────────────
  {
    id: 'taza',
    categoria: 'sublimacion',
    nombre: 'Taza Sublimada',
    unidad: 'pieza',
    variantes: [
      { nombre: 'Blanca (1-9 pzas)',   precio: 100 },
      { nombre: 'Blanca (+10 pzas)',   precio: 95 },
      { nombre: 'Blanca (+20 pzas)',   precio: 90 },
      { nombre: 'Blanca (+30 pzas)',   precio: 85 },
      { nombre: 'Blanca (+40 pzas)',   precio: 80 },
      { nombre: 'Mágica',              precio: 130 },
      { nombre: 'Cónica',              precio: 110 },
      { nombre: 'Sujetador de color',  precio: 110 },
      { nombre: 'Otros',               precio: 130 },
    ],
  },
  {
    id: 'termo',
    categoria: 'sublimacion',
    nombre: 'Termo Sublimado',
    unidad: 'pieza',
    variantes: [
      { nombre: 'Chico',   precio: 240 },
      { nombre: 'Mediano', precio: 290 },
      { nombre: 'Grande',  precio: 450 },
    ],
  },

  // ─── PROMOCIONALES ───────────────────────────────────────────────────────────
  {
    id: 'llavero',
    categoria: 'promocionales',
    nombre: 'Llavero',
    unidad: 'pieza',
    variantes: [
      { nombre: 'Metal',   precio: 32 },
      { nombre: 'Acrílico', precio: 26 },
      { nombre: 'MDF',     precio: 18 },
      { nombre: 'MDF especial', precio: 23 },
    ],
  },
  {
    id: 'pulsera',
    categoria: 'promocionales',
    nombre: 'Pulsera',
    variantes: [
      { nombre: 'Papel (100 pzas)',   precio: 5,  unidad: 'pieza' },
      { nombre: 'Plástico (100 pzas)', precio: 15, unidad: 'pieza' },
      { nombre: 'Listón (50 pzas)',   precio: 6,  unidad: 'pieza' },
    ],
  },

  // ─── CALCOMANÍAS Y STICKERS ──────────────────────────────────────────────────
  {
    id: 'calcomanias',
    categoria: 'calcomanias',
    nombre: 'Calcomanía Adhesiva',
    notas: 'El precio varía según el tamaño.',
    variantes: [
      { nombre: '13x19 inch (hoja)', precio: 40, unidad: 'hoja' },
      { nombre: 'Carta (hoja)',      precio: 20, unidad: 'hoja' },
    ],
  },
  {
    id: 'vinil-calco',
    categoria: 'calcomanias',
    nombre: 'Calcomanía de Vinil',
    variantes: [
      { nombre: '10 cm', precio: 5.8, unidad: 'pieza' },
    ],
  },
  {
    id: 'sticker-holografico',
    categoria: 'calcomanias',
    nombre: 'Sticker Holográfico',
    variantes: [
      { nombre: 'Carta (hoja)', precio: 80, unidad: 'hoja' },
    ],
  },

  // ─── IMPRESOS ────────────────────────────────────────────────────────────────
  {
    id: 'catalogos',
    categoria: 'impresos',
    nombre: 'Catálogos y Folletos',
    unidad: 'hoja',
    variantes: [
      { nombre: 'Couche 120g', precio: 35 },
      { nombre: 'Bond',        precio: 3.8 },
      { nombre: 'Cartulina',   precio: 5 },
    ],
  },
  {
    id: 'notas',
    categoria: 'impresos',
    nombre: 'Notas / Talonarios',
    variantes: [
      { nombre: 'Sin copia – 1/8 hoja (100 pzas)',  precio: 85,  unidad: 'paquete' },
      { nombre: 'Sin copia – 1/4 hoja (100 pzas)',  precio: 110, unidad: 'paquete' },
      { nombre: 'Sin copia – 1/2 hoja (100 pzas)',  precio: 220, unidad: 'paquete' },
      { nombre: '1 copia – 1/8 hoja (100 pzas)',    precio: 170, unidad: 'paquete' },
      { nombre: '1 copia – 1/4 hoja (100 pzas)',    precio: 220, unidad: 'paquete' },
      { nombre: '1 copia – 1/2 hoja (100 pzas)',    precio: 440, unidad: 'paquete' },
      { nombre: '2 copias – 1/8 hoja (100 pzas)',   precio: 255, unidad: 'paquete' },
      { nombre: '2 copias – 1/4 hoja (100 pzas)',   precio: 330, unidad: 'paquete' },
      { nombre: '2 copias – 1/2 hoja (100 pzas)',   precio: 660, unidad: 'paquete' },
    ],
  },
  {
    id: 'credencial',
    categoria: 'impresos',
    nombre: 'Credencial',
    variantes: [
      { nombre: 'Rígida (4 pzas)',  precio: 69, unidad: 'paquete' },
      { nombre: 'Rígida (< 4 pzas)', precio: 80, unidad: 'pieza' },
    ],
  },
  {
    id: 'boletos',
    categoria: 'impresos',
    nombre: 'Boletos',
    variantes: [
      { nombre: '+100 piezas', precio: 110, unidad: 'paquete' },
    ],
  },
  {
    id: 'tarjeta-presentacion',
    categoria: 'impresos',
    nombre: 'Tarjeta de Presentación',
    notas: 'Papel Couche. +30% en corte.',
    variantes: [
      { nombre: 'Simple (1 cara)',  precio: 1.6, unidad: 'pieza' },
      { nombre: 'Doble cara',       precio: 2.4, unidad: 'pieza' },
    ],
  },

  // ─── LIBRETAS Y AGENDAS ──────────────────────────────────────────────────────
  {
    id: 'libreta',
    categoria: 'libretas',
    nombre: 'Libreta Hiper',
    unidad: 'pieza',
    variantes: [
      { nombre: '1/2 hoja', precio: 265 },
      { nombre: '1/4 hoja', precio: 230 },
    ],
  },
  {
    id: 'agenda',
    categoria: 'libretas',
    nombre: 'Agenda',
    unidad: 'pieza',
    variantes: [
      { nombre: 'Con grabado láser',             precio: 320 },
      { nombre: 'Con engargolado y grabado láser', precio: 380 },
    ],
  },

  // ─── SEÑALÉTICA ──────────────────────────────────────────────────────────────
  {
    id: 'senaletica',
    categoria: 'senaletica',
    nombre: 'Señalética',
    unidad: 'metro',
    variantes: [
      { nombre: 'Coroplas',          precio: 120 },
      { nombre: 'Trobicel',          precio: 1900 },
      { nombre: 'PVC',               precio: 2100 },
      { nombre: 'Lámina galvanizada', precio: 2500 },
      { nombre: 'Uso rudo (reflejante)', precio: 2800 },
    ],
  },

  // ─── SELLOS ──────────────────────────────────────────────────────────────────
  {
    id: 'sello',
    categoria: 'sellos',
    nombre: 'Sello',
    notas: 'Se suma el porcentaje indicado al precio base.',
    variantes: [
      { nombre: 'Trodat autoentintable',          precio: null,  unidad: 'pieza', notas: 'Precio Trodat + 50%' },
      { nombre: 'Madera y goma – Redondo 2x2',    precio: 120,   unidad: 'pieza', notas: '+30%' },
      { nombre: 'Madera y goma – Cuadrado 3x3',   precio: 120,   unidad: 'pieza', notas: '+30%' },
      { nombre: 'Madera y goma – Rectángulo 2x4', precio: 220,   unidad: 'pieza', notas: '+30%' },
    ],
  },

  // ─── ANUNCIOS LUMINOSOS ──────────────────────────────────────────────────────
  {
    id: 'anuncio-luminoso',
    categoria: 'anuncios',
    nombre: 'Anuncio Luminoso',
    unidad: 'pieza',
    variantes: [
      { nombre: 'Circular 50 cm',        precio: 1120 },
      { nombre: 'Circular 60 cm',        precio: 1280 },
      { nombre: 'Circular 80 cm',        precio: 1840 },
      { nombre: 'Circular 100 cm',       precio: 2800 },
      { nombre: 'Rectangular 40x60 cm',  precio: 1120 },
      { nombre: 'Rectangular 50x70 cm',  precio: 1280 },
    ],
  },

  // ─── SERVICIOS ───────────────────────────────────────────────────────────────
  {
    id: 'enmicado',
    categoria: 'servicios',
    nombre: 'Enmicado',
    variantes: [
      { nombre: 'Carta',      precio: 30, unidad: 'pieza' },
      { nombre: '1/2 hoja',   precio: 15, unidad: 'pieza' },
      { nombre: '1/4 hoja',   precio: 10, unidad: 'pieza' },
    ],
  },
  {
    id: 'engargolado',
    categoria: 'servicios',
    nombre: 'Engargolado',
    variantes: [
      { nombre: 'Estándar', precio: 25, unidad: 'pieza' },
      { nombre: 'Especial',  precio: 30, unidad: 'pieza' },
    ],
  },
]

// Helper: obtener productos por categoría
export function productosPorCategoria(categoriaId) {
  return productos.filter(p => p.categoria === categoriaId)
}

// Helper: precio mínimo de un producto (para mostrar "Desde $X")
export function precioMinimo(producto) {
  const precios = producto.variantes
    .map(v => v.precio)
    .filter(p => p !== null)
  return precios.length ? Math.min(...precios) : null
}