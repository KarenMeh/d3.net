interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

export const translations: Translations = {
  en: {
    // Hero Section
    heroTitle: "d3.net – Software and Infrastructure as a Service",
    heroSubtitle: "Highly Automated Software and Infrastructure Solutions for Businesses with Focus on Scalability, High Availability, Security, and Data Sovereignty.",
    heroDescription: "d3.net is an independent, mid-sized hosting provider and software developer based in Bremen. For over 25 years, we have been offering customized SaaS and IaaS products as well as individual IT solutions for companies with the highest demands for security, availability, and data sovereignty.",

    // Navigation
    aboutUs: "About Us",
    softwareSolutions: "Software Solutions",
    serverOfferings: "Server Offerings",
    contactUs: "Contact",
    login: "Login",

    // Server Offerings Section
    serverOfferingsTitle: "Our Server Solutions",
    serverOfferingsIntro: "We offer a comprehensive range of server solutions tailored to your specific needs.",
    managedServerTitle: "Managed Server",
    managedServerDescription: "Fully managed server solutions with 24/7 support and monitoring.",
    rootServerTitle: "Root Server",
    rootServerDescription: "High-performance dedicated servers with full root access.",
    cloudHostingTitle: "Cloud Hosting",
    cloudHostingDescription: "Scalable cloud infrastructure for maximum flexibility.",
    featuresTitle: "Key Features",
    features: [
      "High-availability infrastructure",
      "24/7 monitoring and support",
      "DDoS protection",
      "Regular security updates",
      "Automated backups",
      "Scalable resources"
    ],

    // Industry Solutions Section
    industrySolutionsHeading: "Industry Solutions",
    crossIndustryExpertise: "Enterprise Software Architecture Excellence",
    solutionsDescription: "Drawing from over 25 years of cross-industry expertise, we architect and deliver enterprise-grade solutions that address unique industry challenges while maintaining the highest standards of security, scalability, and compliance.",
    industryName: "Industry",
    industryDescription: "Description",
    industryRequirements: "Requirements",
    industryChallenges: "Critical Challenges",
    industrySolutionsContent: "Enterprise Solutions",

    // Compliance Section
    complianceTitle: "Compliance & Security",
    complianceSubtitle: "Enterprise-Grade Security for Healthcare",
    complianceMainDescription: "Our infrastructure and processes are designed to meet and exceed the strictest security and compliance requirements in healthcare.",
    securityPromise: "Our Security Promise",
    securityPromiseText: "At d3.net, security isn't just a feature—it's the foundation of everything we build. Our systems are designed with multiple layers of protection to safeguard your most sensitive healthcare data.",

    // About Us Section
    aboutUsTitle: "About Us",
    aboutUsSubtitle: "Our Journey",
    aboutUsDescription: "Learn about our company's evolution and mission",
    aboutUsHistory1: "Founded in Bremen, d3.net began as an internet provider and security service provider, offering highly available (satellite-based) internet connections as well as implementing firewall systems, VPN networks, and server services such as email and web hosting.",
    aboutUsDevelopmentTitle: "Development",
    aboutUsDevelopmentDesc: "Over the years, d3.net has evolved into an established provider of hosting and software solutions—particularly for industries with high security requirements such as healthcare, pharmaceuticals, banking, and shipping.",
    aboutUsTodayTitle: "Today",
    aboutUsTodayDesc: "Today, d3.net is an independent, medium-sized hosting provider and software developer based in Bremen. The company specializes in customized SaaS and IaaS products, as well as bespoke IT solutions for enterprises with the highest demands in terms of security, availability, and data sovereignty.",
    aboutUsMissionTitle: "Mission",
    aboutUsMissionDesc: "To provide highly automated, scalable, and secure IT infrastructures and software solutions that meet the specific needs of our clients.",

    // Industry Solutions Section (custom)
    industrySolutionsSectionTitle: "Server Offers",
    industrySolutionsSectionSubtitle: "Our server solutions are flexible and tailored to the individual needs of our customers",
    industrySolutions1Title: "Managed Server",
    industrySolutions1Desc: "Fully managed server solutions for businesses.",
    industrySolutions2Title: "Root Server",
    industrySolutions2Desc: "Customizable servers with full access.",
    industrySolutions3Title: "Cloud Hosting",
    industrySolutions3Desc: "Scalable services for various requirements.",
    industrySolutionsFeaturesTitle: "Features",
    industrySolutionsFeatures: [
      "High-availability infrastructure",
      "GDPR-compliant data storage",
      "Scalability as needed",
      "Use of open-source technologies for maximum data sovereignty"
    ],

    // Contact Section
    contactTitle: "Contact Us",
    contactName: "Name *",
    contactEmail: "Email Address *",
    contactPhone: "Phone Number *",
    contactSubject: "Subject *",
    contactMessage: "Message *",
    contactSend: "Send Message",
    contactSuccessTitle: "Message Sent!",
    contactSuccessDesc: "We'll get back to you shortly.",

    // Software Solutions Section (products)
    softwareSolutionsTitle: "Software Solutions",
    softwareSolutionsIntro: "Our software products are designed to automate business processes and increase efficiency.",
    aisTitle: "AIS (Pharmaceutical Information System)",
    aisDescription: "A specialized system for managing and providing pharmaceutical information for the pharmaceutical industry.",
    aisLink: "Visit AIS",
    centralChatTitle: "CentralChat.ai",
    centralChatDescription: "A central communication system that unifies various channels like email, WhatsApp, and social media in one platform. With an API-first approach, it enables complete integration into your system landscape and offers chatbot and agent connectivity.",
    centralChatLink: "Visit CentralChat",
    teamstarTitle: "TEAMSTAR",
    teamstarDescription: "A task management tool for efficient planning, management, and monitoring of team tasks.",
    teamstarLink: "Visit TEAMSTAR",
    botificationTitle: "Botification.ai",
    botificationDescription: "Develops customized, AI-powered automation solutions for internal business processes, aiming to significantly increase operational efficiency and scalability.",
    botificationLink: "Visit Botification",
    visitWebsite: "Visit Website →",
  },

  de: {
    // Hero Section
    heroTitle: "d3.net – Software und Infrastruktur als Service",
    heroSubtitle: "Hochautomatisierte Software- und Infrastrukturlösungen für Unternehmen mit Fokus auf Skalierbarkeit, Hochverfügbarkeit, Sicherheit und Datensouveränität.",
    heroDescription: "d3.net ist ein unabhängiger, mittelständischer Hosting-Provider und Softwareentwickler mit Sitz in Bremen. Seit über 25 Jahren bieten wir maßgeschneiderte SaaS- und IaaS-Produkte sowie individuelle IT-Lösungen für Unternehmen mit höchsten Anforderungen an Sicherheit, Verfügbarkeit und Datensouveränität.",

    // Navigation
    aboutUs: "Über uns",
    softwareSolutions: "Softwarelösungen",
    serverOfferings: "Serverangebote",
    contactUs: "Kontakt",
    login: "Login",

    // Server Offerings Section
    serverOfferingsTitle: "Unsere Serverlösungen",
    serverOfferingsIntro: "Wir bieten ein umfassendes Spektrum an Serverlösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.",
    managedServerTitle: "Managed Server",
    managedServerDescription: "Vollständig verwaltete Serverlösungen mit 24/7 Support und Überwachung.",
    rootServerTitle: "Root Server",
    rootServerDescription: "Hochleistungs-Dedicated-Server mit vollem Root-Zugriff.",
    cloudHostingTitle: "Cloud Hosting",
    cloudHostingDescription: "Skalierbare Cloud-Infrastruktur für maximale Flexibilität.",
    featuresTitle: "Hauptmerkmale",
    features: [
      "Hochverfügbare Infrastruktur",
      "24/7 Überwachung und Support",
      "DDoS-Schutz",
      "Regelmäßige Sicherheitsupdates",
      "Automatisierte Backups",
      "Skalierbare Ressourcen"
    ],

    // Industry Solutions Section
    industrySolutionsHeading: "Branchenlösungen",
    crossIndustryExpertise: "Exzellenz in Enterprise-Softwarearchitektur",
    solutionsDescription: "Mit über 25 Jahren branchenübergreifender Expertise entwickeln und implementieren wir Enterprise-Lösungen, die spezifische Branchenherausforderungen adressieren und höchste Standards in Sicherheit, Skalierbarkeit und Compliance gewährleisten.",
    industryName: "Branche",
    industryDescription: "Beschreibung",
    industryRequirements: "Anforderungen",
    industryChallenges: "Kritische Herausforderungen",
    industrySolutionsContent: "Enterprise-Lösungen",

    // Compliance Section
    complianceTitle: "Compliance & Sicherheit",
    complianceSubtitle: "Enterprise-Sicherheit für das Gesundheitswesen",
    complianceMainDescription: "Unsere Infrastruktur und Prozesse sind darauf ausgelegt, die strengsten Sicherheits- und Compliance-Anforderungen im Gesundheitswesen zu erfüllen und zu übertreffen.",
    securityPromise: "Unser Sicherheitsversprechen",
    securityPromiseText: "Bei d3.net ist Sicherheit nicht nur ein Feature – sie ist das Fundament all unserer Entwicklungen. Unsere Systeme sind mit mehreren Schutzebenen konzipiert, um Ihre sensibelsten Gesundheitsdaten zu sichern.",

    // About Us Section
    aboutUsTitle: "Über uns",
    aboutUsSubtitle: "Unsere Reise",
    aboutUsDescription: "Erfahren Sie mehr über die Entwicklung und Mission unseres Unternehmens",
    aboutUsHistory1: "Gegründet in Bremen, begann d3.net als Internet- und Sicherheitsdienstleister und bot hochverfügbare (satellitengestützte) Internetverbindungen sowie die Implementierung von Firewallsystemen, VPN-Netzwerken und Serverdiensten wie E-Mail und Webhosting an.",
    aboutUsDevelopmentTitle: "Entwicklung",
    aboutUsDevelopmentDesc: "Im Laufe der Jahre hat sich d3.net zu einem etablierten Anbieter von Hosting- und Softwarelösungen entwickelt – insbesondere für Branchen mit hohen Sicherheitsanforderungen wie Gesundheitswesen, Pharma, Banken und Schifffahrt.",
    aboutUsTodayTitle: "Heute",
    aboutUsTodayDesc: "Heute ist d3.net ein unabhängiger, mittelständischer Hosting-Provider und Softwareentwickler mit Sitz in Bremen. Das Unternehmen ist auf maßgeschneiderte SaaS- und IaaS-Produkte sowie individuelle IT-Lösungen für Unternehmen mit höchsten Anforderungen an Sicherheit, Verfügbarkeit und Datensouveränität spezialisiert.",
    aboutUsMissionTitle: "Mission",
    aboutUsMissionDesc: "Bereitstellung hochautomatisierter, skalierbarer und sicherer IT-Infrastrukturen und Softwarelösungen, die den spezifischen Anforderungen unserer Kunden gerecht werden.",

    // Industry Solutions Section (custom)
    industrySolutionsSectionTitle: "Serverangebote",
    industrySolutionsSectionSubtitle: "Unsere Serverlösungen sind flexibel und auf die individuellen Bedürfnisse unserer Kunden zugeschnitten",
    industrySolutions1Title: "Managed Server",
    industrySolutions1Desc: "Vollständig verwaltete Serverlösungen für Unternehmen.",
    industrySolutions2Title: "Root Server",
    industrySolutions2Desc: "Individuell anpassbare Server mit vollem Zugriff.",
    industrySolutions3Title: "Cloud Hosting",
    industrySolutions3Desc: "Skalierbare Services für verschiedene Anforderungen.",
    industrySolutionsFeaturesTitle: "Funktionen",
    industrySolutionsFeatures: [
      "Hochverfügbare Infrastruktur",
      "DSGVO-konforme Datenspeicherung",
      "Skalierbarkeit nach Bedarf",
      "Einsatz von Open-Source-Technologien für maximale Datensouveränität"
    ],

    // Contact Section
    contactTitle: "Kontakt",
    contactName: "Name *",
    contactEmail: "E-Mail-Adresse *",
    contactPhone: "Telefonnummer *",
    contactSubject: "Betreff *",
    contactMessage: "Nachricht *",
    contactSend: "Nachricht senden",
    contactSuccessTitle: "Nachricht gesendet!",
    contactSuccessDesc: "Wir melden uns in Kürze bei Ihnen.",

    // Software Solutions Section (products)
    softwareSolutionsTitle: "Softwarelösungen",
    softwareSolutionsIntro: "Unsere Softwareprodukte sind darauf ausgerichtet, Unternehmensprozesse zu automatisieren und die Effizienz zu steigern.",
    aisTitle: "AIS (Pharma-Informationssystem)",
    aisDescription: "Ein spezialisiertes System zur Verwaltung und Bereitstellung pharmazeutischer Informationen für die Pharmaindustrie.",
    aisLink: "AIS besuchen",
    centralChatTitle: "CentralChat.ai",
    centralChatDescription: "Ein zentrales Kommunikationssystem, das verschiedene Kanäle wie E-Mail, WhatsApp und Social Media auf einer Plattform vereint. Mit API-First-Ansatz ermöglicht es die vollständige Integration in Ihre Systemlandschaft und bietet Chatbot- und Agenten-Anbindung.",
    centralChatLink: "CentralChat besuchen",
    teamstarTitle: "TEAMSTAR",
    teamstarDescription: "Ein Tool für effiziente Planung, Verwaltung und Überwachung von Teamaufgaben.",
    teamstarLink: "TEAMSTAR besuchen",
    botificationTitle: "Botification.ai",
    botificationDescription: "Entwickelt maßgeschneiderte, KI-gestützte Automatisierungslösungen für interne Geschäftsprozesse, um die betriebliche Effizienz und Skalierbarkeit deutlich zu steigern.",
    botificationLink: "Botification besuchen",
    visitWebsite: "Webseite besuchen →",
  }
};
