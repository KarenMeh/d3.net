interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Navigation
    aboutUs: "About Us",
    services: "Services",
    compliance: "Compliance",
    globalPresence: "Global Presence",
    contactUs: "Contact Us",

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
  },

  de: {
    // Navigation
    aboutUs: "Über Uns",
    services: "Dienstleistungen",
    compliance: "Compliance",
    globalPresence: "Globale Präsenz",
    contactUs: "Kontakt",

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
  }
};
