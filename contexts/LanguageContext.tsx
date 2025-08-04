'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.exploreProjects': 'Explore Projects',
    'nav.submitProject': 'Submit Project',
    'nav.about': 'About',
    'nav.signUp': 'Sign Up',
    'nav.logIn': 'Log In',
    
    // Hero buttons
    'hero.participate': 'Participate',
    'hero.promote': 'Promote',
    
    // Homepage
    'home.hero.title': 'Habitable makes high-impact urban projects happen in the right places',
    'home.hero.subtitle': 'A platform that streamlines pre-development and aligns key players early around projects that benefit people and cities.',
    'home.hero.exploreProjects': 'Explore Projects',
    'home.hero.getStarted': 'Get Started',
    
    // Hero Component
    'hero.subtitle': 'Sustainable Urban Development Platform',
    'hero.description': 'Aligning key actors in urban housing development around investable, sustainable, and resilient projects in overlooked urban areas.',
    'hero.cta.explore': 'Explore Projects',
    'hero.cta.submit': 'Submit Project',
    'hero.stats.projects': 'Active Projects',
    'hero.stats.cities': 'Cities',
    'hero.stats.investment': 'Total Investment',
    
    // Features Component
    'features.title': 'Why Choose Habitable',
    'features.subtitle': 'Our platform brings together the right stakeholders at the right time to create sustainable urban development.',
    'features.curated.title': 'Curated Opportunities',
    'features.curated.description': 'Access pre-vetted development projects with clear investment potential and community impact.',
    'features.network.title': 'Stakeholder Network',
    'features.network.description': 'Connect with architects, developers, investors, and communities aligned around sustainable development.',
    'features.investment.title': 'Investment Ready',
    'features.investment.description': 'Projects come with financial models, feasibility studies, and clear investment structures.',
    'features.sustainable.title': 'Sustainability Focus',
    'features.sustainable.description': 'Every project prioritizes environmental sustainability and community resilience.',
    'features.location.title': 'Strategic Locations',
    'features.location.description': 'Focus on overlooked urban areas with high potential for positive transformation.',
    'features.collaboration.title': 'Collaborative Process',
    'features.collaboration.description': 'Structured approach to align all stakeholders from concept to completion.',
    'features.cta.text': 'Ready to get started with sustainable urban development?',
    'features.cta.participate': 'Join as Participant',
    'features.cta.promote': 'Join as Promoter',
    
    // CTA Component
    'cta.title': 'Ready to Transform Urban Development?',
    'cta.subtitle': 'Join our community of architects, developers, investors, and cities working together to create sustainable urban communities.',
    'cta.getStarted': 'Get Started Today',
    'cta.learnMore': 'Learn More',
    'cta.participate.title': 'For Participants',
    'cta.participate.description': 'Architects, developers, investors, and buyers looking to collaborate on sustainable projects.',
    'cta.participate.action': 'Explore Projects',
    'cta.promote.title': 'For Promoters',
    'cta.promote.description': 'Cities and landowners looking to promote sustainable development in their communities.',
    'cta.promote.action': 'Submit Project',
    'cta.note': 'Join thousands of professionals already transforming urban development through collaboration.',
    // Features - Habitable Process
    'home.process.title': 'How Habitable Works',
    
    'home.process.step1.title': 'Smart Urban Analysis',
    'home.process.step1.description': 'We detect urban areas with high potential through geospatial and data analysis.',
    'home.process.step2.title': 'Site Selection',
    'home.process.step2.description': 'We choose strategic sites within those areas to develop key projects.',
    'home.process.step3.title': 'Opportunity Models',
    'home.process.step3.description': 'We design viable prototypes based on data, with architectural and financial vision.',
    'home.process.step4.title': 'Land Structuring',
    'home.process.step4.description': 'We agree on participation schemes with owners to activate land without speculation.',
    'home.process.step5.title': 'Pre-approval & Validation',
    'home.process.step5.description': 'We validate feasibility with authorities and community to ensure early support.',
    'home.process.step6.title': 'Platform Launch',
    'home.process.step6.description': 'We publish RDPs with structured information, ready to connect stakeholders.',
    'home.process.step7.title': 'Project Matchmaking',
    'home.process.step7.description': 'We connect the project with investment, design, construction and users.',
    'home.process.step8.title': 'Execution & Monitoring',
    'home.process.step8.description': 'We support development to meet social, urban and financial objectives.',
    
    'home.cta.title': 'Ready to Make an Impact?',
    'home.cta.subtitle': 'Join our community of change-makers working to create sustainable, resilient urban communities.',
    
    'home.cta.participate.title': 'Participate',
    'home.cta.participate.description': 'For architects, developers, investors, and buyers looking to collaborate on sustainable projects.',
    'home.cta.participate.button': 'Join as Participant',
    
    'home.cta.promote.title': 'Promote',
    'home.cta.promote.description': 'For cities and landowners looking to promote sustainable development in their communities.',
    'home.cta.promote.button': 'Join as Promoter',
    
    // Footer
    'footer.platform': 'Platform',
    'footer.community': 'Community',
    'footer.legal': 'Legal',
    'footer.join': 'Join',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copyright': ' 2024 HABITABLE. All rights reserved.',
    'footer.tagline': 'Building sustainable communities through aligned urban development.',
    
    // Projects page
    'projects.title': 'Ready to Develop Projects',
    'projects.subtitle': 'Discover curated, data-informed development opportunities in overlooked urban areas. Each project has been vetted for impact potential and stakeholder alignment.',
    'projects.search.placeholder': 'Search projects by name, location, or description...',
    'projects.filters': 'Filters',
    'projects.showing': 'Showing',
    'projects.of': 'of',
    'projects.projects': 'projects',
    'projects.noResults.title': 'No projects found',
    'projects.noResults.description': 'Try adjusting your search terms or filters to find more projects.',
    'projects.clearSearch': 'Clear Search',
    'projects.expressInterest': 'Express Interest',
    'projects.cta.title': "Don't see what you're looking for?",
    'projects.cta.description': 'Have a project site or development opportunity that could benefit from our platform? Submit it for review by our team.',
    'projects.cta.button': 'Submit Your Project',
    
    // Project Interest Modal
    'project.interest.title': 'Express Your Interest',
    'project.interest.subtitle': 'How would you like to be involved with',
    'project.interest.invest': 'I want to invest',
    'project.interest.develop': 'I want to develop',
    'project.interest.collaborate': 'I want to collaborate',
    'project.interest.live': 'I want to live here',
    'project.interest.bring': 'Bring Habitable to my city',
    'project.interest.cancel': 'Cancel',
    
    // Login Page
    'login.title': 'Welcome Back',
    'login.subtitle': 'Sign in to your Habitable account',
    'login.email': 'Email Address',
    'login.password': 'Password',
    'login.emailPlaceholder': 'Enter your email',
    'login.passwordPlaceholder': 'Enter your password',
    'login.rememberMe': 'Remember me',
    'login.forgotPassword': 'Forgot password?',
    'login.signIn': 'Sign In',
    'login.signingIn': 'Signing in...',
    'login.noAccount': "Don't have an account?",
    'login.signUpLink': 'Sign up',
    'login.orContinue': 'Or continue with',
    'login.google': 'Google',
    'login.facebook': 'Facebook',
    'login.successful': 'Login successful! In a real app, this would authenticate with Supabase and redirect to dashboard.',
    
    // Signup Page
    'signup.title': 'Join Habitable',
    'signup.subtitle': 'Choose how you\'d like to participate in sustainable urban development',
    'signup.participate.title': 'Join as Participant',
    'signup.participate.subtitle': 'Connect with sustainable development opportunities and aligned stakeholders',
    'signup.participate.benefits.1': 'Access to curated project opportunities',
    'signup.participate.benefits.2': 'Connect with aligned stakeholders',
    'signup.participate.benefits.3': 'Collaboration tools and resources',
    'signup.participate.benefits.4': 'Impact tracking and reporting',
    'signup.participate.button': 'Join as Participant',
    'signup.promote.title': 'Join as Promoter',
    'signup.promote.subtitle': 'Promote sustainable development in your community',
    'signup.promote.benefits.1': 'Submit sites for development consideration',
    'signup.promote.benefits.2': 'Access to qualified development partners',
    'signup.promote.benefits.3': 'Community engagement tools',
    'signup.promote.benefits.4': 'Project progress tracking',
    'signup.promote.button': 'Join as Promoter',
    'signup.firstName': 'First Name',
    'signup.lastName': 'Last Name',
    'signup.email': 'Email Address',
    'signup.organization': 'Organization',
    'signup.role': 'Role/Title',
    'signup.location': 'Primary Location',
    'signup.interests': 'Areas of Interest (select all that apply)',
    'signup.experience': 'Experience & Background',
    'signup.goals': 'Goals & Objectives',
    'signup.terms': 'I agree to the',
    'signup.termsLink': 'Terms of Service',
    'signup.and': 'and',
    'signup.privacyLink': 'Privacy Policy',
    'signup.createAccount': 'Create Account',
    'signup.haveAccount': 'Already have an account?',
    'signup.signInLink': 'Sign in',
    
    // Submit Project Page
    'submit.title': 'Submit Your Project',
    'submit.subtitle': 'Have a development opportunity that could benefit from aligned stakeholders? Submit your project for review and potential inclusion in our platform.',
    'submit.basicInfo': 'Basic Information',
    'submit.projectName': 'Project Name',
    'submit.projectNamePlaceholder': 'Enter a descriptive name for your project',
    'submit.location': 'Location',
    'submit.locationPlaceholder': 'Street address, City, State',
    'submit.projectType': 'Project Type',
    'submit.selectProjectType': 'Select project type',
    'submit.description': 'Project Description',
    'submit.descriptionPlaceholder': 'Describe the project vision, goals, and potential impact',
    'submit.siteDetails': 'Site Details',
    'submit.siteSize': 'Site Size',
    'submit.siteSizePlaceholder': 'e.g., 2.5 acres, 50,000 sq ft',
    'submit.currentUse': 'Current Use',
    'submit.currentUsePlaceholder': 'e.g., Vacant lot, Former factory, Parking lot',
    'submit.zoning': 'Zoning',
    'submit.zoningPlaceholder': 'Current zoning designation',
    'submit.ownership': 'Ownership Status',
    'submit.selectOwnership': 'Select ownership',
    'submit.developmentVision': 'Development Vision',
    'submit.proposedUse': 'Proposed Use',
    'submit.proposedUsePlaceholder': 'Describe the proposed development and its intended use',
    'submit.investmentRange': 'Estimated Investment Range',
    'submit.selectRange': 'Select range',
    'submit.timeline': 'Development Timeline',
    'submit.selectTimeline': 'Select timeline',
    'submit.sustainabilityFeatures': 'Sustainability Features (select all that apply)',
    'submit.contactInfo': 'Contact Information',
    'submit.submitterType': 'Submitter Type',
    'submit.selectSubmitterType': 'Select submitter type',
    'submit.organizationPlaceholder': 'Organization or agency name',
    'submit.contactName': 'Contact Name',
    'submit.phone': 'Phone',
    'submit.supportingDocs': 'Supporting Documents',
    'submit.uploadFiles': 'Upload Files (optional)',
    'submit.uploadDescription': 'Include site photos, maps, plans, studies, or other relevant documents (max 10MB per file)',
    'submit.uploadedFiles': 'Uploaded Files:',
    'submit.remove': 'Remove',
    'submit.additionalInfo': 'Additional Information',
    'submit.communityBenefits': 'Community Benefits',
    'submit.communityBenefitsPlaceholder': 'How will this project benefit the local community?',
    'submit.challenges': 'Known Challenges',
    'submit.challengesPlaceholder': 'What challenges or obstacles do you anticipate?',
    'submit.additionalInfoPlaceholder': 'Any other relevant information about the project or site',
    'submit.submitButton': 'Submit Project for Review',
    'submit.reviewTime': 'Our team will review your submission and get back to you within 5-7 business days.',
  },
  es: {
    // Navigation
    'nav.exploreProjects': 'Explorar Proyectos',
    'nav.submitProject': 'Enviar Proyecto',
    'nav.about': 'Acerca de',
    'nav.signUp': 'Registrarse',
    'nav.logIn': 'Iniciar Sesión',
    
    // Hero buttons
    'hero.participate': 'Participar',
    'hero.promote': 'Promover',
    
    // Homepage
    'home.hero.title': 'Habitable impulsa proyectos urbanos de alto impacto en los lugares correctos.',
    'home.hero.subtitle': 'Una plataforma que agiliza el pre-desarrollo y alinea actores clave temprano en torno a proyectos que benefician a las personas y ciudades.',
    'home.hero.exploreProjects': 'Explorar Proyectos',
    'home.hero.getStarted': 'Comenzar',
    // Features - Proceso Habitable
    'home.process.title': 'Cómo Funciona Habitable',
    
    'home.process.step1.title': 'Análisis Urbano Inteligente',
    'home.process.step1.description': 'Detectamos zonas urbanas con alto potencial mediante análisis geoespacial y de datos.',
    'home.process.step2.title': 'Selección de Sitios',
    'home.process.step2.description': 'Elegimos predios estratégicos dentro de esas zonas para desarrollar proyectos clave.',
    'home.process.step3.title': 'Modelos de Oportunidad',
    'home.process.step3.description': 'Diseñamos prototipos viables basados en datos, con visión arquitectónica y financiera.',
    'home.process.step4.title': 'Estructuración de Tierra',
    'home.process.step4.description': 'Acordamos esquemas de participación con dueños para activar suelo sin especulación.',
    'home.process.step5.title': 'Pre-aprobación y Validación',
    'home.process.step5.description': 'Validamos factibilidad con autoridades y comunidad para asegurar apoyo temprano.',
    'home.process.step6.title': 'Lanzamiento en Plataforma',
    'home.process.step6.description': 'Publicamos los RDPs con información estructurada, lista para conectar actores.',
    'home.process.step7.title': 'Matchmaking de Proyecto',
    'home.process.step7.description': 'Conectamos el proyecto con inversión, diseño, construcción y usuarios.',
    'home.process.step8.title': 'Ejecución y Seguimiento',
    'home.process.step8.description': 'Acompañamos el desarrollo para cumplir objetivos sociales, urbanos y financieros.',
    
    'home.cta.title': '¿Listo para Generar Impacto?',
    'home.cta.subtitle': 'Únete a nuestra comunidad de agentes de cambio trabajando para crear comunidades urbanas sostenibles y resilientes.',
    
    'home.cta.participate.title': 'Participar',
    'home.cta.participate.description': 'Para arquitectos, desarrolladores, inversionistas y compradores que buscan colaborar en proyectos sostenibles.',
    'home.cta.participate.button': 'Unirse como Participante',
    
    'home.cta.promote.title': 'Promover',
    'home.cta.promote.description': 'Para ciudades y propietarios de terrenos que buscan promover el desarrollo sostenible en sus comunidades.',
    'home.cta.promote.button': 'Unirse como Promotor',
    
    // Footer
    'footer.platform': 'Plataforma',
    'footer.community': 'Comunidad',
    'footer.legal': 'Legal',
    'footer.join': 'Unirse',
    'footer.contact': 'Contacto',
    'footer.support': 'Soporte',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.copyright': '© 2024 HABITABLE. Todos los derechos reservados.',
    'footer.tagline': 'Construyendo comunidades sostenibles a través del desarrollo urbano alineado.',
    
    // Projects page
    'projects.title': 'Proyectos Listos para Desarrollar',
    'projects.subtitle': 'Descubre oportunidades de desarrollo curadas e informadas por datos en áreas urbanas desatendidas. Cada proyecto ha sido evaluado por su potencial de impacto y alineación de partes interesadas.',
    'projects.search.placeholder': 'Buscar proyectos por nombre, ubicación o descripción...',
    'projects.filters': 'Filtros',
    'projects.showing': 'Mostrando',
    'projects.of': 'de',
    'projects.projects': 'proyectos',
    'projects.noResults.title': 'No se encontraron proyectos',
    'projects.noResults.description': 'Intenta ajustar tus términos de búsqueda o filtros para encontrar más proyectos.',
    'projects.clearSearch': 'Limpiar Búsqueda',
    'projects.expressInterest': 'Expresar Interés',
    'projects.cta.title': '¿No encuentras lo que buscas?',
    'projects.cta.description': '¿Tienes un sitio de proyecto u oportunidad de desarrollo que podría beneficiarse de nuestra plataforma? Envíalo para revisión por nuestro equipo.',
    'projects.cta.button': 'Enviar Tu Proyecto',
    
    // Project Interest Modal
    'project.interest.title': 'Expresar Tu Interés',
    'project.interest.subtitle': '¿Cómo te gustaría involucrarte con',
    'project.interest.invest': 'Quiero invertir',
    'project.interest.develop': 'Quiero desarrollar',
    'project.interest.collaborate': 'Quiero colaborar',
    'project.interest.live': 'Quiero vivir aquí',
    'project.interest.bring': 'Traer Habitable a mi ciudad',
    'project.interest.cancel': 'Cancelar',
    
    // Login Page
    'login.title': 'Bienvenido de Vuelta',
    'login.subtitle': 'Inicia sesión en tu cuenta de Habitable',
    'login.email': 'Dirección de Correo',
    'login.password': 'Contraseña',
    'login.emailPlaceholder': 'Ingresa tu correo',
    'login.passwordPlaceholder': 'Ingresa tu contraseña',
    'login.rememberMe': 'Recordarme',
    'login.forgotPassword': '¿Olvidaste tu contraseña?',
    'login.signIn': 'Iniciar Sesión',
    'login.signingIn': 'Iniciando sesión...',
    'login.noAccount': '¿No tienes una cuenta?',
    'login.signUpLink': 'Regístrate',
    'login.orContinue': 'O continúa con',
    'login.google': 'Google',
    'login.facebook': 'Facebook',
    'login.successful': '¡Inicio de sesión exitoso! En una aplicación real, esto autenticaría con Supabase y redirigiría al panel.',
    
    // Signup Page
    'signup.title': 'Únete a Habitable',
    'signup.subtitle': 'Elige cómo te gustaría participar en el desarrollo urbano sostenible',
    'signup.participate.title': 'Unirse como Participante',
    'signup.participate.subtitle': 'Conéctate con oportunidades de desarrollo sostenible y partes interesadas alineadas',
    'signup.participate.benefits.1': 'Acceso a oportunidades de proyectos curados',
    'signup.participate.benefits.2': 'Conectar con partes interesadas alineadas',
    'signup.participate.benefits.3': 'Herramientas y recursos de colaboración',
    'signup.participate.benefits.4': 'Seguimiento e informes de impacto',
    'signup.participate.button': 'Unirse como Participante',
    'signup.promote.title': 'Unirse como Promotor',
    'signup.promote.subtitle': 'Promueve el desarrollo sostenible en tu comunidad',
    'signup.promote.benefits.1': 'Enviar sitios para consideración de desarrollo',
    'signup.promote.benefits.2': 'Acceso a socios de desarrollo calificados',
    'signup.promote.benefits.3': 'Herramientas de participación comunitaria',
    'signup.promote.benefits.4': 'Seguimiento del progreso del proyecto',
    'signup.promote.button': 'Unirse como Promotor',
    'signup.firstName': 'Nombre',
    'signup.lastName': 'Apellido',
    'signup.email': 'Dirección de Correo',
    'signup.organization': 'Organización',
    'signup.role': 'Rol/Título',
    'signup.location': 'Ubicación Principal',
    'signup.interests': 'Áreas de Interés (selecciona todas las que apliquen)',
    'signup.experience': 'Experiencia y Antecedentes',
    'signup.goals': 'Metas y Objetivos',
    'signup.terms': 'Acepto los',
    'signup.termsLink': 'Términos de Servicio',
    'signup.and': 'y',
    'signup.privacyLink': 'Política de Privacidad',
    'signup.createAccount': 'Crear Cuenta',
    'signup.haveAccount': '¿Ya tienes una cuenta?',
    'signup.signInLink': 'Iniciar sesión',
    
    // Submit Project Page
    'submit.title': 'Enviar Tu Proyecto',
    'submit.subtitle': '¿Tienes una oportunidad de desarrollo que podría beneficiarse de partes interesadas alineadas? Envía tu proyecto para revisión e inclusión potencial en nuestra plataforma.',
    'submit.basicInfo': 'Información Básica',
    'submit.projectName': 'Nombre del Proyecto',
    'submit.projectNamePlaceholder': 'Ingresa un nombre descriptivo para tu proyecto',
    'submit.location': 'Ubicación',
    'submit.locationPlaceholder': 'Dirección, Ciudad, Estado',
    'submit.projectType': 'Tipo de Proyecto',
    'submit.selectProjectType': 'Selecciona tipo de proyecto',
    'submit.description': 'Descripción del Proyecto',
    'submit.descriptionPlaceholder': 'Describe la visión, metas e impacto potencial del proyecto',
    'submit.siteDetails': 'Detalles del Sitio',
    'submit.siteSize': 'Tamaño del Sitio',
    'submit.siteSizePlaceholder': 'ej., 2.5 acres, 50,000 pies cuadrados',
    'submit.currentUse': 'Uso Actual',
    'submit.currentUsePlaceholder': 'ej., Lote vacío, Fábrica anterior, Estacionamiento',
    'submit.zoning': 'Zonificación',
    'submit.zoningPlaceholder': 'Designación de zonificación actual',
    'submit.ownership': 'Estado de Propiedad',
    'submit.selectOwnership': 'Selecciona propiedad',
    'submit.developmentVision': 'Visión de Desarrollo',
    'submit.proposedUse': 'Uso Propuesto',
    'submit.proposedUsePlaceholder': 'Describe el desarrollo propuesto y su uso previsto',
    'submit.investmentRange': 'Rango de Inversión Estimado',
    'submit.selectRange': 'Selecciona rango',
    'submit.timeline': 'Cronograma de Desarrollo',
    'submit.selectTimeline': 'Selecciona cronograma',
    'submit.sustainabilityFeatures': 'Características de Sostenibilidad (selecciona todas las que apliquen)',
    'submit.contactInfo': 'Información de Contacto',
    'submit.submitterType': 'Tipo de Remitente',
    'submit.selectSubmitterType': 'Selecciona tipo de remitente',
    'submit.organizationPlaceholder': 'Nombre de organización o agencia',
    'submit.contactName': 'Nombre de Contacto',
    'submit.phone': 'Teléfono',
    'submit.supportingDocs': 'Documentos de Apoyo',
    'submit.uploadFiles': 'Subir Archivos (opcional)',
    'submit.uploadDescription': 'Incluye fotos del sitio, mapas, planos, estudios u otros documentos relevantes (máx. 10MB por archivo)',
    'submit.uploadedFiles': 'Archivos Subidos:',
    'submit.remove': 'Eliminar',
    'submit.additionalInfo': 'Información Adicional',
    'submit.communityBenefits': 'Beneficios Comunitarios',
    'submit.communityBenefitsPlaceholder': '¿Cómo beneficiará este proyecto a la comunidad local?',
    'submit.challenges': 'Desafíos Conocidos',
    'submit.challengesPlaceholder': '¿Qué desafíos u obstáculos anticipas?',
    'submit.additionalInfoPlaceholder': 'Cualquier otra información relevante sobre el proyecto o sitio',
    'submit.submitButton': 'Enviar Proyecto para Revisión',
    'submit.reviewTime': 'Nuestro equipo revisará tu envío y te contactará en 5-7 días hábiles.',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('habitable-language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('habitable-language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
