/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION (or most recent)
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Senior Software Developer – Application Manager',
    company: 'MHP Management- und IT-Beratung GmbH',
    location: 'Ludwigsburg, Germany',
    type: 'full-time',
    startDate: '2018-08',
    current: true,
    description:
      'Developing aftersales business web applications for Porsche AG. Managing applications as Application Manager with technical and managerial responsibilities.',
    achievements: [
      'Developing aftersales business web applications for Porsche AG using Java, Spring Boot, Spring Batch, Angular, Hibernate, Gradle, Tomcat, RESTful API, SOAP, ElasticSearch and DB2',
      'Completely rewriting, continuously improving and maintaining several applications in World Warranty System, both backends and UIs',
      'Writing technical project specifications and document specifications',
      'Consulting with the project owner on project status, proposals and technical issues',
      'Providing direction and interaction with developer daily tasks and projects as Application Manager',
      'Using Continuous Delivery practices with SVN, Git, Jenkins, Bamboo, GitLab, Sonar and Artifactory',
      'Using SCRUM and SAFe agile methodology with JIRA for issue tracking and project management',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Batch',
      'Angular',
      'Hibernate',
      'Gradle',
      'Tomcat',
      'RESTful API',
      'SOAP',
      'ElasticSearch',
      'DB2',
      'Jenkins',
      'Git',
      'JIRA',
      'SAFe',
    ],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Senior Java Developer and Service Manager',
    company: 'NTT Data Romania',
    location: 'Novi Sad, Serbia',
    type: 'full-time',
    startDate: '2016-12',
    endDate: '2018-08',
    current: false,
    description:
      'Developing aftersales business web applications for Porsche AG. Serving as Service Manager with team leading responsibilities.',
    achievements: [
      'Developing aftersales business web applications for Porsche AG using Java, Spring Boot, Angular, Hibernate, Gradle, RESTful API, SOAP, ElasticSearch and DB2',
      'Completely rewriting, continuously improving and maintaining several applications in World Warranty System',
      'Writing project technical specifications and document specifications',
      'Consulting with project owner on project status, proposals and technical issues',
      'Providing direction and interaction with developer daily tasks as team leader and service manager',
      'Using Continuous Delivery practices with SVN, Git, Jenkins, Bamboo, GitLab, Sonar and Artifactory',
      'Using SCRUM and SAFe agile methodology with JIRA',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'Hibernate',
      'Gradle',
      'RESTful API',
      'SOAP',
      'ElasticSearch',
      'DB2',
      'Jenkins',
      'Git',
      'JIRA',
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-3',
    title: 'Senior Java Developer and Technical Team Leader',
    company: 'Levi9',
    location: 'Novi Sad, Serbia',
    type: 'full-time',
    startDate: '2010-10',
    endDate: '2016-12',
    current: false,
    description:
      'Development of energy platform and performance management platform. Technical team leader responsibilities.',
    achievements: [
      'Development of power house energy platform with microservices architecture using Spring Boot and Spring Cloud on AWS',
      'Team leader for NetX application performance management platform',
      'Development of Autotelegraaf advertising system for automotive market',
      'Consulting with customers on project status, proposals and technical issues',
      'Preparing detailed reports concerning project specifications and activities',
      'Leading team members during planning, design and development of robust solutions',
      'Using SCRUM agile methodology with JIRA for issue tracking and project management',
      'Using Continuous Delivery with GitLab, Jenkins, Sonar and Nexus',
    ],
    technologies: [
      'Java 8',
      'Java EE 7',
      'Spring Boot',
      'Spring Cloud',
      'AWS',
      'JSF',
      'PrimeFaces',
      'RichFaces',
      'JPA',
      'WildFly',
      'JSP',
      'Spring',
      'Hibernate',
      'Solr',
      'Tomcat',
      'GitLab',
      'Jenkins',
      'JIRA',
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-4',
    title: 'Senior Software Developer',
    company: 'Navigator',
    location: 'Novi Sad, Serbia',
    type: 'full-time',
    startDate: '2009-06',
    endDate: '2010-10',
    current: false,
    description:
      'Development of digital learning system and B2B e-commerce platform.',
    achievements: [
      'Development of online digital learning system Mentor using Java EE 6, ICEfaces, JPA and Tomcat',
      'Development of B2B system eSquirrel commerce using Java EE 6, ICEfaces, EJB3, JPA and GlassFish Server',
      'Actively participated in team with more than ten members using SCRUM agile methodology with JIRA',
    ],
    technologies: [
      'Java EE 6',
      'ICEfaces',
      'JPA',
      'EJB3',
      'Tomcat',
      'GlassFish Server',
      'JIRA',
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-5',
    title: 'Medior Java Developer',
    company: 'Hintech',
    location: 'Novi Sad, Serbia',
    type: 'full-time',
    startDate: '2009-01',
    endDate: '2009-06',
    current: false,
    description:
      'Development of payment platform PAY.ON working on core transaction-processing engine.',
    achievements: [
      'Development of payment platform PAY.ON working on core transaction-processing engine',
      'Built to process massive concurrent transaction loads in high-availability environment',
      'Technologies used: Java, Spring Framework, Hibernate, JSP and Tomcat',
      'Communicated daily with project owner discussing problems and solutions',
    ],
    technologies: ['Java', 'Spring Framework', 'Hibernate', 'JSP', 'Tomcat'],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-6',
    title: 'Application Programmer',
    company: 'Archives of Vojvodina',
    location: 'Novi Sad, Serbia',
    type: 'full-time',
    startDate: '2007-03',
    endDate: '2009-01',
    current: false,
    description:
      'Research, design and implementation of scalable applications for information systems.',
    achievements: [
      'Researched, designed and implemented scalable applications for information identification, extraction, analysis, retrieval and indexing',
      'Development of information system ISAV for Archive of Vojvodina',
      'Development of document management system - electronic archive for banks',
      'Development of PhoneArchiver for analyzing and tracking phone calls',
    ],
    technologies: [
      'Java',
      'Java EE 5',
      'JSF',
      'JPA',
      'Swing',
      'GlassFish Server',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
