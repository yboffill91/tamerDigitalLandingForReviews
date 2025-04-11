// Tipado para siteMetadata
interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  siteName: string;
  twitterHandle: string;
  locale: string;
  keywords: string;
  author: string;
  languages: readonly ['en', 'es'];
  organization: Organization;
  faq: readonly FAQ[];
}

// Tipado para la organización
interface Organization {
  name: string;
  legalName: string;
  foundingDate: string; // Formato ISO de fecha
  logo: string; // URL de la imagen
  phone: string; // Número de teléfono en formato internacional
  email: string; // Dirección de correo electrónico
  address: Address;
  geo: GeoLocation;
  openingHours: OpeningHoursSpecification;
  paymentAccepted: readonly ['Cash', 'Credit Card', 'Debit Card']; // Métodos de pago aceptados
  areaServed: readonly [
    'Hialeah',
    'Hialeah Gardens',
    'Miami Gardens',
    'Opa-locka',
    'Miami',
    'Doral',
    'Miramar',
    'Pembroke Pines',
    'North Miami Beach',
    'North Miami',
    'Sweetwater',
    'Little Havana',
    'Westchester',
    'Kendall',
    'Pinecrest',
  ]; // Áreas geográficas servidas
  socialLinks: SocialLinks; // Enlaces sociales
}

// Tipado para la dirección
interface Address {
  street: string;
  city: string;
  region: string; // Estado o región
  postalCode: string; // Código postal
  country: string; // Código de país (ISO)
}

// Tipado para la geolocalización
interface GeoLocation {
  latitude: string; // Latitud en formato decimal
  longitude: string; // Longitud en formato decimal
}

// Tipado para el horario de apertura
interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: readonly [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]; // Días de la semana (ej. "Monday", "Tuesday")
  opens: string; // Hora de apertura en formato HH:mm (24 horas)
  closes: string; // Hora de cierre en formato HH:mm (24 horas)
}

// Tipado para los enlaces sociales
interface SocialLinks {
  facebook?: string; // URL de Facebook (opcional)
  instagram?: string; // URL de Instagram (opcional)
  youtube?: string; // URL de YouTube (opcional)
  tiktok?: string; // URL de TikTok (opcional)
}

// Tipado para las preguntas frecuentes (FAQ)
interface FAQ {
  question: string; // Pregunta frecuente
  answer: string; // Respuesta correspondiente
}

// Exportación del objeto con tipado constante
export const siteMetadata: SiteMetadata = {
  title: 'TAMER Digital | Digital Marketing & SEO Agency',
  description:
    'TAMERDigital is dedicated to helping businesses achieve their digital marketing goals. We specialize in crafting impactful strategies to boost your online visibility and drive meaningful results.',
  siteUrl: 'https://www.tamerdigital.com',
  siteName: 'TAMER Digital',
  twitterHandle: '@tamerdigital',
  locale: 'en',
  keywords:
    'digital marketing agency, marketing consultant, digital marketing company, seo agency, seo consultant',
  author: 'TAMER Digital',
  languages: ['en', 'es'],
  organization: {
    name: 'TAMERCode LLC',
    legalName: 'TAMERCode LLC',
    foundingDate: '2023-10-01',
    logo: 'https://www.tamerdigital.com/lightThemeLogo.png',
    phone: '+1 786 458 2823',
    email: 'tamercodellc@gmail.com',
    address: {
      street: '6175 NW 186th street',
      city: 'Hialeah',
      region: 'FL',
      postalCode: '33015',
      country: 'US',
    },
    geo: {
      latitude: '25.9437414',
      longitude: '-80.2976751',
    },
    openingHours: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    areaServed: [
      'Hialeah',
      'Hialeah Gardens',
      'Miami Gardens',
      'Opa-locka',
      'Miami',
      'Doral',
      'Miramar',
      'Pembroke Pines',
      'North Miami Beach',
      'North Miami',
      'Sweetwater',
      'Little Havana',
      'Westchester',
      'Kendall',
      'Pinecrest',
    ],
    socialLinks: {
      facebook: 'https://www.facebook.com/TAMERDigit4l',
      instagram: 'https://www.instagram.com/raydel.sanchz/',
      youtube: 'https://www.youtube.com/@tamerdigital',
      tiktok: 'https://www.tiktok.com/@raydelsg',
    },
  },
  faq: [
    {
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive digital marketing services including SEO (Local and National), Social Media Management, Facebook and Instagram Ads, Sales Funnels, Google Ads, and Content Marketing.',
    },
  ],
} as const;
