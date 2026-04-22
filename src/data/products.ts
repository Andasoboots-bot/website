// ANDASO Product Catalog - Cougar Paws Collection
// Prices and SKUs based on CougarPaws.com reference

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  shortDescription: {
    en: string;
    es: string;
  };
  price: number;
  compareAtPrice?: number;
  category: string;
  subcategory?: string;
  images: string[];
  variants: ProductVariant[];
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface ProductVariant {
  id: string;
  sku: string;
  size?: string;
  color?: string;
  colorHex?: string;
  price?: number;
  inStock: boolean;
}

export const categories = [
  {
    id: "roofing-boots",
    slug: "roofing-boots",
    name: { en: "Roofing Boots", es: "Botas para Techos" },
    description: {
      en: "Professional-grade safety boots engineered for maximum traction on shingle and metal roof surfaces",
      es: "Botas de seguridad de grado profesional diseñadas para máxima tracción en superficies de techo de asfalto y metal"
    },
    image: "/images/categories/roofing-boots.jpg"
  },
  {
    id: "replacement-pads",
    slug: "replacement-pads",
    name: { en: "Replacement Pads", es: "Pads de Repuesto" },
    description: {
      en: "High-traction replacement grip pads for extending the life of your Cougar Paws boots",
      es: "Pads de agarre de alta tracción para extender la vida útil de tus botas Cougar Paws"
    },
    image: "/images/categories/replacement-pads.jpg"
  },
  {
    id: "covers-accessories",
    slug: "covers-accessories",
    name: { en: "Covers & Accessories", es: "Cubiertas y Accesorios" },
    description: {
      en: "Protective covers, boot accessories, and maintenance items for your safety footwear",
      es: "Cubiertas protectoras, accesorios para botas y artículos de mantenimiento para tu calzado de seguridad"
    },
    image: "/images/categories/covers.jpg"
  },
  {
    id: "mountain-claws",
    slug: "mountain-claws",
    name: { en: "Mountain Claws", es: "Mountain Claws" },
    description: {
      en: "Specialized traction footwear for steep slope and mountain terrain applications",
      es: "Calzado de tracción especializado para aplicaciones en terrenos de pendiente pronunciada y montaña"
    },
    image: "/images/categories/mountain-claws.jpg"
  }
];

export const products: Product[] = [
  // ROOFING BOOTS
  {
    id: "estimator-boot",
    slug: "estimator-boot",
    sku: "CPEST",
    name: {
      en: "The Estimator Boot",
      es: "Bota Estimator"
    },
    description: {
      en: "Lightweight roofing boot designed for estimators and inspectors who need to access roofs frequently. Features our patented traction technology in a lighter, more flexible package. Perfect for professionals who value agility without compromising safety.",
      es: "Bota ligera para techos diseñada para estimadores e inspectores que necesitan acceder a techos frecuentemente. Cuenta con nuestra tecnología de tracción patentada en un paquete más ligero y flexible. Perfecta para profesionales que valoran la agilidad sin comprometer la seguridad."
    },
    shortDescription: {
      en: "Lightweight boot for estimators and inspectors",
      es: "Bota ligera para estimadores e inspectores"
    },
    price: 199.99,
    category: "roofing-boots",
    images: [
      "/images/products/estimator-boot-1.jpg",
      "/images/products/estimator-boot-2.jpg"
    ],
    variants: [
      { id: "est1", sku: "CPEST-7", size: "7", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "est2", sku: "CPEST-8", size: "8", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "est3", sku: "CPEST-9", size: "9", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "est4", sku: "CPEST-10", size: "10", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "est5", sku: "CPEST-11", size: "11", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "est6", sku: "CPEST-12", size: "12", color: "Black", colorHex: "#1a1a1a", inStock: true }
    ],
    features: [
      "Lightweight design",
      "Patented traction pad system",
      "Waterproof leather construction",
      "Replaceable grip pads",
      "Flexible sole for comfort",
      "Ideal for frequent roof access"
    ],
    specifications: {
      "Weight": "2.4 lbs per boot",
      "Material": "Full-grain leather",
      "Waterproof": "Yes",
      "Safety Rating": "ASTM F2413-18",
      "Made in": "USA"
    },
    inStock: true
  },
  {
    id: "performer-boot",
    slug: "performer-boot",
    sku: "CPPP",
    name: {
      en: "The Performer Boot",
      es: "Bota Performer"
    },
    description: {
      en: "Our flagship roofing boot designed for professional roofers who demand the best. Features patented traction technology with replaceable grip pads, waterproof leather construction, and ANSI-compliant safety toe. The Performer delivers exceptional comfort and safety on steep slopes.",
      es: "Nuestra bota para techos insignia diseñada para techistas profesionales que exigen lo mejor. Cuenta con tecnología de tracción patentada con pads de agarre reemplazables, construcción de cuero impermeable y puntera de seguridad conforme a ANSI. La Performer ofrece comodidad y seguridad excepcionales en pendientes pronunciadas."
    },
    shortDescription: {
      en: "Professional roofing boot with patented traction technology",
      es: "Bota profesional para techos con tecnología de tracción patentada"
    },
    price: 259.99,
    category: "roofing-boots",
    images: [
      "/images/products/performer-boot-1.jpg",
      "/images/products/performer-boot-2.jpg",
      "/images/products/performer-boot-3.jpg"
    ],
    variants: [
      { id: "p1", sku: "CPPP7", size: "7", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p2", sku: "CPPP8", size: "8", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p3", sku: "CPPP9", size: "9", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p4", sku: "CPPP10", size: "10", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p5", sku: "CPPP11", size: "11", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p6", sku: "CPPP12", size: "12", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "p7", sku: "CPPP13", size: "13", color: "Black", colorHex: "#1a1a1a", inStock: false }
    ],
    features: [
      "Patented traction pad system",
      "Waterproof full-grain leather",
      "ANSI/ASTM safety toe protection",
      "Replaceable grip pads",
      "Oil and slip resistant outsole",
      "Padded collar and tongue"
    ],
    specifications: {
      "Weight": "2.8 lbs per boot",
      "Material": "Full-grain leather",
      "Waterproof": "Yes",
      "Safety Rating": "ASTM F2413-18",
      "Made in": "USA"
    },
    inStock: true,
    isBestseller: true
  },
  {
    id: "steel-walker-ii",
    slug: "steel-walker-ii",
    sku: "CPSW2",
    name: {
      en: "Steel Walker II",
      es: "Steel Walker II"
    },
    description: {
      en: "Heavy-duty roofing boot with steel shank support and enhanced ankle stability. The Steel Walker II is built for roofers who need extra support during long days on steep surfaces. Features reinforced stitching and durable construction.",
      es: "Bota robusta para techos con soporte de empuñadura de acero y estabilidad de tobillo mejorada. La Steel Walker II está construida para techistas que necesitan soporte adicional durante largas jornadas en superficies pronunciadas. Cuenta con costuras reforzadas y construcción duradera."
    },
    shortDescription: {
      en: "Heavy-duty boot with steel shank support",
      es: "Bota robusta con soporte de empuñadura de acero"
    },
    price: 229.99,
    category: "roofing-boots",
    images: [
      "/images/products/steel-walker-1.jpg",
      "/images/products/steel-walker-2.jpg"
    ],
    variants: [
      { id: "sw1", sku: "CPSW2-8", size: "8", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "sw2", sku: "CPSW2-9", size: "9", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "sw3", sku: "CPSW2-10", size: "10", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "sw4", sku: "CPSW2-11", size: "11", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "sw5", sku: "CPSW2-12", size: "12", color: "Black", colorHex: "#1a1a1a", inStock: true }
    ],
    features: [
      "Steel shank for arch support",
      "Enhanced ankle stability",
      "Reinforced construction",
      "Replaceable traction pads",
      "Padded insole",
      "Heavy-duty eyelets"
    ],
    specifications: {
      "Weight": "3.2 lbs per boot",
      "Material": "Nubuck leather",
      "Waterproof": "Water resistant",
      "Safety Rating": "ASTM F2413-18",
      "Made in": "USA"
    },
    inStock: true
  },

  // REPLACEMENT PADS
  {
    id: "replacement-pad-standard",
    slug: "replacement-pad-standard",
    sku: "CPRP",
    name: {
      en: "Standard Replacement Pads",
      es: "Pads de Repuesto Estándar"
    },
    description: {
      en: "Genuine Cougar Paws replacement traction pads. These high-quality foam pads provide excellent grip on shingles and metal roofs. Easy to install and essential for maintaining peak performance of your boots.",
      es: "Pads de tracción de repuesto originales Cougar Paws. Estos pads de espuma de alta calidad proporcionan excelente agarre en techos de asfalto y metal. Fáciles de instalar y esenciales para mantener el rendimiento óptimo de tus botas."
    },
    shortDescription: {
      en: "Genuine replacement traction pads",
      es: "Pads de tracción de repuesto originales"
    },
    price: 39.95,
    category: "replacement-pads",
    images: [
      "/images/products/replacement-pads-1.jpg",
      "/images/products/replacement-pads-2.jpg"
    ],
    variants: [
      { id: "rp1", sku: "CPRP-1", size: "One Size", color: "Black/Gray", colorHex: "#374151", inStock: true },
      { id: "rp2", sku: "CPRP-2", size: "One Size", color: "Black/Gray", colorHex: "#374151", inStock: true }
    ],
    features: [
      "Genuine Cougar Paws parts",
      "High-traction foam surface",
      "Easy peel-and-stick installation",
      "Long-lasting durability",
      "Compatible with all CP boots"
    ],
    specifications: {
      "Quantity": "2 pads (one pair)",
      "Material": "High-density foam",
      "Adhesive": "Industrial strength",
      "Made in": "USA"
    },
    inStock: true,
    isBestseller: true
  },
  {
    id: "pads-installation-kit",
    slug: "pads-installation-kit",
    sku: "CPIK",
    name: {
      en: "Pads Installation Kit",
      es: "Kit de Instalación de Pads"
    },
    description: {
      en: "Everything you need to install replacement pads on your Cougar Paws boots. Includes adhesive primer, application brush, alignment guides, and detailed instructions for professional-quality pad replacement at home.",
      es: "Todo lo que necesitas para instalar pads de repuesto en tus botas Cougar Paws. Incluye imprimador adhesivo, brocha de aplicación, guías de alineación e instrucciones detalladas para un reemplazo de pads de calidad profesional en casa."
    },
    shortDescription: {
      en: "Complete kit for pad installation",
      es: "Kit completo para instalación de pads"
    },
    price: 9.95,
    category: "replacement-pads",
    images: [
      "/images/products/installation-kit-1.jpg"
    ],
    variants: [
      { id: "ik1", sku: "CPIK", size: "One Size", color: "Kit", inStock: true }
    ],
    features: [
      "Adhesive primer included",
      "Application brush",
      "Alignment guides",
      "Step-by-step instructions",
      "Enough for multiple replacements"
    ],
    specifications: {
      "Contents": "Primer, brush, guides, instructions",
      "Coverage": "Multiple pad replacements",
      "Made in": "USA"
    },
    inStock: true
  },
  {
    id: "replacement-pad-heavy-duty",
    slug: "replacement-pad-heavy-duty",
    sku: "CPRPHD",
    name: {
      en: "Heavy-Duty Replacement Pads",
      es: "Pads de Repuesto Uso Rudo"
    },
    description: {
      en: "Extra-durable replacement pads designed for intensive daily use. Features thicker foam construction and enhanced adhesive for maximum longevity. Perfect for professional roofers who work daily.",
      es: "Pads de repuesto extra duraderos diseñados para uso diario intensivo. Cuentan con construcción de espuma más gruesa y adhesivo mejorado para máxima longevidad. Perfectos para techistas profesionales que trabajan diariamente."
    },
    shortDescription: {
      en: "Extra-durable pads for daily use",
      es: "Pads extra duraderos para uso diario"
    },
    price: 49.99,
    category: "replacement-pads",
    images: [
      "/images/products/hd-pads-1.jpg",
      "/images/products/hd-pads-2.jpg"
    ],
    variants: [
      { id: "rp-hd1", sku: "CPRPHD", size: "One Size", color: "Black/Red", colorHex: "#a41e21", inStock: true }
    ],
    features: [
      "50% thicker foam",
      "Enhanced industrial adhesive",
      "Extended lifespan",
      "Aggressive traction pattern",
      "All-weather performance"
    ],
    specifications: {
      "Quantity": "2 pads (one pair)",
      "Material": "High-density premium foam",
      "Adhesive": "Enhanced industrial strength",
      "Thickness": "15mm",
      "Made in": "USA"
    },
    inStock: true
  },

  // MOUNTAIN CLAWS
  {
    id: "mc-original",
    slug: "mc-original",
    sku: "MCO",
    name: {
      en: "Mountain Claws Original",
      es: "Mountain Claws Original"
    },
    description: {
      en: "The Mountain Claws Original combines the proven Cougar Paws traction technology with outdoor boot styling. Ideal for steep slope construction, mountain work, and challenging terrain conditions.",
      es: "El Mountain Claws Original combina la tecnología de tracción probada de Cougar Paws con estilo de bota outdoor. Ideal para construcción en pendiente pronunciada, trabajo en montaña y condiciones de terreno difíciles."
    },
    shortDescription: {
      en: "Steep slope traction boots",
      es: "Botas de tracción para pendientes"
    },
    price: 189.99,
    category: "mountain-claws",
    images: [
      "/images/products/mc-original-1.jpg",
      "/images/products/mc-original-2.jpg"
    ],
    variants: [
      { id: "mc1", sku: "MCO-8", size: "8", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mc2", sku: "MCO-9", size: "9", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mc3", sku: "MCO-10", size: "10", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mc4", sku: "MCO-11", size: "11", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mc5", sku: "MCO-12", size: "12", color: "Tan", colorHex: "#d4c4a8", inStock: true }
    ],
    features: [
      "Outdoor styling",
      "CP traction technology",
      "Waterproof construction",
      "Reinforced toe cap",
      "All-terrain outsole"
    ],
    specifications: {
      "Weight": "2.6 lbs per boot",
      "Material": "Nubuck leather",
      "Waterproof": "Yes",
      "Made in": "USA"
    },
    inStock: true,
    isNew: true
  },
  {
    id: "mc-tan-stud",
    slug: "mc-tan-stud",
    sku: "MCTS",
    name: {
      en: "Mountain Claws Tan Stud",
      es: "Mountain Claws Tan Stud"
    },
    description: {
      en: "The Tan Stud features integrated metal studs for ultimate ice and snow grip. Combines the Mountain Claws platform with specialized winter traction technology. Perfect for winter roofing and alpine conditions.",
      es: "El Tan Stud cuenta con tacos metálicos integrados para el máximo agarre en hielo y nieve. Combina la plataforma Mountain Claws con tecnología de tracción especializada para invierno. Perfecto para techado en invierno y condiciones alpina."
    },
    shortDescription: {
      en: "Winter traction boots with metal studs",
      es: "Botas de tracción para invierno con tacos metálicos"
    },
    price: 219.99,
    category: "mountain-claws",
    images: [
      "/images/products/mc-tan-stud-1.jpg",
      "/images/products/mc-tan-stud-2.jpg"
    ],
    variants: [
      { id: "mcts1", sku: "MCTS-8", size: "8", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mcts2", sku: "MCTS-9", size: "9", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mcts3", sku: "MCTS-10", size: "10", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mcts4", sku: "MCTS-11", size: "11", color: "Tan", colorHex: "#d4c4a8", inStock: true },
      { id: "mcts5", sku: "MCTS-12", size: "12", color: "Tan", colorHex: "#d4c4a8", inStock: false }
    ],
    features: [
      "Integrated metal studs",
      "Ice and snow traction",
      "Winter-rated insulation",
      "Waterproof membrane",
      "Replaceable studs"
    ],
    specifications: {
      "Weight": "2.9 lbs per boot",
      "Material": "Nubuck leather",
      "Waterproof": "Yes",
      "Insulation": "200g Thinsulate",
      "Made in": "USA"
    },
    inStock: true,
    isNew: true
  },

  // COVERS & ACCESSORIES
  {
    id: "boot-cover-standard",
    slug: "boot-cover-standard",
    sku: "CPBC",
    name: {
      en: "Protective Boot Covers",
      es: "Cubiertas Protectoras para Botas"
    },
    description: {
      en: "Heavy-duty boot covers protect your Cougar Paws when not on the roof. Prevents pad wear on hard surfaces and keeps floors clean. Elastic top for secure fit.",
      es: "Cubiertas robustas para proteger tus Cougar Paws cuando no estás en el techo. Previenen el desgaste de los pads en superficies duras y mantienen los pisos limpios. Parte superior elástica para ajuste seguro."
    },
    shortDescription: {
      en: "Protective covers for floor protection",
      es: "Cubiertas protectoras para protección de pisos"
    },
    price: 24.99,
    category: "covers-accessories",
    images: [
      "/images/products/boot-covers-1.jpg"
    ],
    variants: [
      { id: "bc1", sku: "CPBC-SM", size: "S/M", color: "Black", colorHex: "#1a1a1a", inStock: true },
      { id: "bc2", sku: "CPBC-LXL", size: "L/XL", color: "Black", colorHex: "#1a1a1a", inStock: true }
    ],
    features: [
      "Durable fabric construction",
      "Protects traction pads",
      "Prevents floor damage",
      "Elastic secure fit",
      "Machine washable"
    ],
    specifications: {
      "Material": "Heavy-duty polyester",
      "Care": "Machine washable",
      "Quantity": "One pair",
      "Made in": "Imported"
    },
    inStock: true
  },
  {
    id: "boot-care-kit",
    slug: "boot-care-kit",
    sku: "CPCK",
    name: {
      en: "Boot Care Kit",
      es: "Kit de Cuidado para Botas"
    },
    description: {
      en: "Complete care kit to maintain your Cougar Paws investment. Includes leather cleaner, waterproofing treatment, pad adhesive, and cleaning brush. Everything you need to extend boot life.",
      es: "Kit de cuidado completo para mantener tu inversión en Cougar Paws. Incluye limpiador de cuero, tratamiento impermeabilizante, adhesivo para pads y cepillo de limpieza. Todo lo que necesitas para extender la vida de tus botas."
    },
    shortDescription: {
      en: "Complete maintenance kit",
      es: "Kit de mantenimiento completo"
    },
    price: 34.99,
    category: "covers-accessories",
    images: [
      "/images/products/care-kit-1.jpg"
    ],
    variants: [
      { id: "ck1", sku: "CPCK", size: "One Size", color: "N/A", inStock: true }
    ],
    features: [
      "Leather cleaner",
      "Waterproofing treatment",
      "Pad adhesive",
      "Cleaning brush",
      "Instruction guide"
    ],
    specifications: {
      "Contents": "4 items + guide",
      "Made in": "USA"
    },
    inStock: true
  }
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getBestsellers(): Product[] {
  return products.filter(p => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}
