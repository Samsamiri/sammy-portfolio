import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs, dedalus, darty, angular, java, mysql, egytronics, mindset,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "realisation",
    title: "Mes réalisations",
  },
  {
    id: "technique",
    title: "Compétences Techniques ",
  },
  {
    id: "transverse",
    title: "Compétences Transverse ",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur Logiciel",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Développeur Smartphone (IOS/Android)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Alternant Développeur Java/Angular",
    company_name: "Dedalus HealthCare France",
    icon: dedalus,
    iconBg: "#383E56",
    date: "Sep 2023 - Aujourd'hui",
    points: [
      "Conception et maintenance d'applications web / client lourd avec Angular et intégration de solutions back-end en Java.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des UX designers, des Product Owner/manager, ainsi que d'autre corp de métier pour développer des produits de haute qualité.",
      "Mise en place et amélioration continue de l'architecture logicielle.",
      "Résolution de Defect dans les applications, garantissant ainsi la fiabilité et la performance des systèmes.",
      "Application de la méthode Agile pour une gestion de projet efficace.",
    ],
  },
  {
    title: "Stagiaire Développeur Java/Angular",
    company_name: "Dedalus HealthCare France",
    icon: dedalus,
    iconBg: "#383E56",
    date: "Fev 2023 - Sep 2023",
    points: [
      "Adoption et mise en pratique des principes de la méthode Agile pour le suivi des projets et la collaboration au sein des équipes de développement.",
      "Développement d’un tableau de bord d'indicateurs pour les professionnels de santé, facilitant la consultation et le suivi des dossiers de patients à risque.",
    ],
  },
  {
    title: "Développeur de Boutiques web",
    company_name: "Auto-entrepreneur",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Conception et lancement de boutiques en ligne sur la plateforme Shopify, ciblant divers marchés et niches pour maximiser les ventes et la visibilité des produits.",
      "Application des principes de design web pour créer des interfaces attractives et conviviales, augmentant l'engagement client et le taux de conversion.",
      "Gestion complète du cycle de vie des projets e-commerce, depuis l'idéation jusqu'au déploiement, en assurant le suivi des performances et l'ajustement des stratégies en fonction des analyses de données.",
      "Mise en place de campagne marqueting pour les produits de chaques boutiques.",
      "Optimisation des sites pour le référencement (SEO).",
    ],
  },
  {
    title: "Développeur de Sites Vitrines",
    company_name: "Auto-entrepreneur",
    icon: figma,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Conception et réalisation de sites vitrines pour une variété de clients, en mettant l'accent sur des designs attrayants et fonctionnels qui valorisent l'identité de marque et facilitent la communication avec les cibles.",
      "Optimisation des sites pour le référencement (SEO), assurant une visibilité accrue sur les moteurs de recherche et un trafic ciblé vers les sites des clients.",
      "Gestion de projets de A à Z, incluant la définition des besoins clients, la planification, le développement, le déploiement, et le suivi post-lancement pour garantir la satisfaction client et l'atteinte des objectifs commerciaux.",
      "Mise en œuvre de techniques de responsive design pour garantir une excellente expérience utilisateur sur tous les appareils, augmentant l'accessibilité et la portée du site.",
    ],
  },
  {
    title: "Vendeur multimédia et électroménager (Top 100 France)",
    company_name: "Darty",
    icon: darty,
    iconBg: "#383E56",
    date: "Jan 2022 - Fev 2023",
    points: [
      "Analyse besoin client.",
      "Merch.",
      "Vente de services (Assurance et crédit).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tableaux de bord d'indicateurs pour la surveillance de patients à risque ",
    description:
      "Ce projet a consisté à développer un tableau de bord d'indicateurs pour la surveillance de patients à risque en hopital. L'objectif était de fournir au personnel soignant un outil efficace pour le suivi en temps réel des données critiques, améliorant ainsi la réactivité face aux situations potentiellement dangereuses.",
    tagsTechnique: [
      {
        name: "Angular",
        color: "text-rose-900",
      },
      {
        name: "HTML",
        color: "text-pink-900",
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
      },
      {
        name: "CSS",
        color: "text-pink-500",
      },
    ],
    tagsTransverse: [
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
    ],
    image: carrent,
    source_code_link: "/tableauIndicateur",
  },
  {
    name: "Site web de Support de solution logistique",
    description:
        "Ce projet a impliqué le développement d'un site web de contact dédié au support d'une solution logistique, ciblant des spécialistes des secteurs militaire, naval, et d'autres industries majeures. Conçu pour toucher un public international, le site avait pour but de faciliter la communication directe avec des utilisateurs de divers pays.",
    tagsTechnique: [
      {
        name: "CSS",
        color: "text-pink-500",
      },
      {
        name: "HTML",
        color: "text-pink-900",
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },

    ],
    image: egytronics,
    source_code_link: "/logisticSupportSite",
  },
  {
    name: "Logiciel de gestion de santé pour hopitaux",
    description:
        "Ce projet, Orbis, représente un logiciel de gestion de santé conçu pour répondre aux besoins complexes des hôpitaux et cliniques de grandes envergures. Au sein de ce vaste écosystème, je contribue spécifiquement à l'équipe dédiée à la pharmacie, travaillant à l'optimisation et à l'intégration des processus pharmaceutiques au sein du système général.",
    tagsTechnique: [
      {
        name: "HTML",
        color: "text-pink-900",
      },
      {
        name: "CSS",
        color: "text-pink-500",
      },
      {
        name: "Angular",
        color: "text-rose-900",
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },

    ],
    image: egytronics,
    source_code_link: "/orbisProject",
  },
  {
    name: "Application de rencontre à l'aveugle",
    description:
    "Le projet \"Mindset\" incarne une application de rencontre à l'aveugle innovante. Centrée sur la mise en relation des individus en fonction de leur personnalité plutôt que de leur apparence physique, Mindset ambitionne de faciliter des connexions authentiques et profondes. Cette application se démarque par une approche unique où les images des profils sont révélées progressivement, encourageant ainsi les utilisateurs à établir un lien basé sur des affinités mutuelles avant toute rencontre visuelle.",
    tagsTechnique: [
      {
        name: "Flutter",
        color: "text-pink-400",
      },
      {
        name: "Dart",
        color: "text-pink-600",
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },

    ],
    image: mindset,
    source_code_link: "/mindset",
  },
];

const projectsInJava = [
  {
    name: "Tableaux de bord d'indicateurs pour la surveillance de patients à risque ",
    description:
      "Ce projet a consisté à développer un tableau de bord d'indicateurs pour la surveillance de patients à risque en hopital. L'objectif était de fournir au personnel soignant un outil efficace pour le suivi en temps réel des données critiques, améliorant ainsi la réactivité face aux situations potentiellement dangereuses.",
    tagsTechnique: [
      {
        name: "Angular",
        color: "text-rose-900",
        taille : "text-[14px]"
      },
      {
        name: "HTML",
        color: "text-pink-900",
        taille : "text-[14px]"
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
        taille : "text-[16px] font-bold"
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
        taille : "text-[14px]"
      },
      {
        name: "CSS",
        color: "text-pink-500",
        taille : "text-[14px]"
      },
    ],
    tagsTransverse: [
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
    ],
    image: carrent,
    source_code_link: "/tableauIndicateur",
  },
  {
    name: "Logiciel de gestion de santé pour hopitaux",
    description:
        "Ce projet, Orbis, représente un logiciel de gestion de santé conçu pour répondre aux besoins complexes des hôpitaux et cliniques de grandes envergures. Au sein de ce vaste écosystème, je contribue spécifiquement à l'équipe dédiée à la pharmacie, travaillant à l'optimisation et à l'intégration des processus pharmaceutiques au sein du système général.",
    tagsTechnique: [
      {
        name: "HTML",
        color: "text-pink-900",
        taille : "text-[14px]"
      },
      {
        name: "CSS",
        color: "text-pink-500",
        taille : "text-[14px]"
      },
      {
        name: "Angular",
        color: "text-rose-900",
        taille : "text-[14px]"
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
        taille : "text-[16px] font-bold"
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },

    ],
    image: egytronics,
    source_code_link: "/orbisProject",
  },
  {
    name: "Application de rencontre à l'aveugle",
    description:
    "Le projet \"Mindset\" incarne une application de rencontre à l'aveugle innovante. Centrée sur la mise en relation des individus en fonction de leur personnalité plutôt que de leur apparence physique, Mindset ambitionne de faciliter des connexions authentiques et profondes. Cette application se démarque par une approche unique où les images des profils sont révélées progressivement, encourageant ainsi les utilisateurs à établir un lien basé sur des affinités mutuelles avant toute rencontre visuelle.",
    tagsTechnique: [
      {
        name: "Flutter",
        color: "text-pink-400",
        taille : "text-[14px]"

      },
      {
        name: "Dart",
        color: "text-pink-600",
        taille : "text-[14px]"
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
        taille : "text-[16px] font-bold"
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
        taille : "text-[14px]"
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },

    ],
    image: mindset,
    source_code_link: "/mindset",
  },
];
const projectsInAngular = [
  {
    name: "Tableaux de bord d'indicateurs pour la surveillance de patients à risque ",
    description:
      "Ce projet a consisté à développer un tableau de bord d'indicateurs pour la surveillance de patients à risque en hopital. L'objectif était de fournir au personnel soignant un outil efficace pour le suivi en temps réel des données critiques, améliorant ainsi la réactivité face aux situations potentiellement dangereuses.",
    tagsTechnique: [
      {
        name: "Angular",
        color: "text-rose-900",
        taille : "text-[16px] font-bold"
      },
      {
        name: "HTML",
        color: "text-pink-900",
        taille : "text-[14px]"
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
        taille : "text-[14px]"
      },
      {
        name: "Maquettage Web",
        color: "text-purple-900",
        taille : "text-[14px]"
      },
      {
        name: "CSS",
        color: "text-pink-500",
        taille : "text-[14px]"
      },
    ],
    tagsTransverse: [
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
    ],
    image: carrent,
    source_code_link: "/tableauIndicateur",
  },
  {
    name: "Logiciel de gestion de santé pour hopitaux",
    description:
        "Ce projet, Orbis, représente un logiciel de gestion de santé conçu pour répondre aux besoins complexes des hôpitaux et cliniques de grandes envergures. Au sein de ce vaste écosystème, je contribue spécifiquement à l'équipe dédiée à la pharmacie, travaillant à l'optimisation et à l'intégration des processus pharmaceutiques au sein du système général.",
    tagsTechnique: [
      {
        name: "HTML",
        color: "text-pink-900",
        taille : "text-[14px]"
      },
      {
        name: "CSS",
        color: "text-pink-500",
        taille : "text-[14px]"
      },
      {
        name: "Angular",
        color: "text-rose-900",
        taille : "text-[16px] font-bold"
      },
      {
        name: "JAVA",
        color: "text-fuchsia-900",
        taille : "text-[14px]"
      },
    ],
    tagsTransverse: [
      {
        name: "Analyse du besoin client",
        color: "text-amber-300",
      },
      {
        name: "Agilité",
        color: "text-orange-300",
      },
      {
        name: "Communication",
        color: "text-yellow-300",
      },
      {
        name: "Auto-formation",
        color: "text-emerald-300",
      },
      {
        name: "Conformité Légale",
        color: "text-green-300",
      },
      {
        name: "Analyse du retour sur investissement",
        color: "text-lime-300",
      },

    ],
    image: egytronics,
    source_code_link: "/orbisProject",
  },
];

export { services, technologies, experiences, testimonials, projects, projectsInJava, projectsInAngular };
