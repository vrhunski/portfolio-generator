/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains skills displayed in the Skills section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example skills with your actual skills
 * 2. Set proficiency levels honestly (0-100)
 * 3. Organize skills by category
 * 4. Update spoken languages if applicable
 *
 * PROFICIENCY LEVEL GUIDE:
 * - 90-100: Expert (can teach others, deep knowledge)
 * - 70-89:  Advanced (proficient, used extensively)
 * - 50-69:  Intermediate (comfortable, moderate experience)
 * - 30-49:  Basic (familiar, some experience)
 * - 10-29:  Beginner (learning, minimal experience)
 *
 * TO ADD A NEW SKILL:
 * { name: 'Skill Name', level: 85, category: 'Category', yearsOfExperience: 3 }
 *
 * TO ADD A NEW CATEGORY:
 * 1. Add the category name to the skillCategories array
 * 2. Add skills with that category to the skills array
 * =============================================================================
 */

/**
 * Skill entry type definition
 */
export interface Skill {
  /** Skill name (e.g., "React", "Python", "Project Management") */
  name: string;

  /**
   * Proficiency level from 0-100
   * See guide above for recommended ranges
   */
  level: number;

  /**
   * Category for grouping skills
   * Must match one of the categories in skillCategories array
   */
  category: string;

  /**
   * Icon identifier (optional)
   * Can be used to display skill icons
   */
  icon?: string;

  /**
   * Years of experience with this skill (optional)
   */
  yearsOfExperience?: number;
}

/**
 * Spoken language type definition
 */
export interface Language {
  /** Language name (e.g., "English", "Spanish") */
  name: string;

  /**
   * Proficiency level
   * Options: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
   */
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

/**
 * =============================================================================
 * SKILL CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * These categories are used to group skills in the UI.
 * Add, remove, or rename categories as needed.
 */
export const skillCategories: string[] = [
  'Languages',     // Programming languages
  'Frontend',     // Frontend frameworks & libraries
  'Backend',      // Backend frameworks & technologies
  'Frameworks',   // Java frameworks
  'Databases',    // Database technologies
  'Cloud',        // Cloud platforms & services
  'DevOps',       // DevOps tools & practices
  'Tools',        // Development tools
  // Add more categories here:
  // 'Mobile',
  // 'Design',
  // 'Soft Skills',
  // 'Other',
];

/**
 * =============================================================================
 * YOUR SKILLS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example skills with your actual skills.
 * Group skills by category for better organization.
 */
export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // PROGRAMMING LANGUAGES
  // ---------------------------------------------------------------------------
  {
    name: 'Java',
    level: 95,
    category: 'Languages',
    yearsOfExperience: 15,
  },
  {
    name: 'SQL',
    level: 85,
    category: 'Languages',
    yearsOfExperience: 12,
  },
  {
    name: 'JavaScript',
    level: 80,
    category: 'Languages',
    yearsOfExperience: 8,
  },
  {
    name: 'TypeScript',
    level: 75,
    category: 'Languages',
    yearsOfExperience: 5,
  },
  {
    name: 'HTML/CSS',
    level: 80,
    category: 'Languages',
    yearsOfExperience: 10,
  },
  {
    name: 'PHP',
    level: 65,
    category: 'Languages',
    yearsOfExperience: 5,
  },
  {
    name: 'C/C++',
    level: 50,
    category: 'Languages',
    yearsOfExperience: 3,
  },
  {
    name: 'Python',
    level: 45,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'MATLAB',
    level: 40,
    category: 'Languages',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------------
  {
    name: 'Angular',
    level: 85,
    category: 'Frontend',
    yearsOfExperience: 6,
  },
  {
    name: 'JSF',
    level: 80,
    category: 'Frontend',
    yearsOfExperience: 8,
  },
  {
    name: 'PrimeFaces',
    level: 80,
    category: 'Frontend',
    yearsOfExperience: 7,
  },
  {
    name: 'RichFaces',
    level: 75,
    category: 'Frontend',
    yearsOfExperience: 6,
  },
  {
    name: 'ICEfaces',
    level: 70,
    category: 'Frontend',
    yearsOfExperience: 4,
  },
  {
    name: 'JSP',
    level: 85,
    category: 'Frontend',
    yearsOfExperience: 12,
  },
  {
    name: 'jQuery',
    level: 70,
    category: 'Frontend',
    yearsOfExperience: 6,
  },
  {
    name: 'Selenium',
    level: 70,
    category: 'Frontend',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------------
  {
    name: 'RESTful API',
    level: 90,
    category: 'Backend',
    yearsOfExperience: 10,
  },
  {
    name: 'SOAP',
    level: 85,
    category: 'Backend',
    yearsOfExperience: 8,
  },
  {
    name: 'GraphQL',
    level: 50,
    category: 'Backend',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // JAVA FRAMEWORKS
  // ---------------------------------------------------------------------------
  {
    name: 'Spring Framework',
    level: 90,
    category: 'Frameworks',
    yearsOfExperience: 10,
  },
  {
    name: 'Spring Boot',
    level: 90,
    category: 'Frameworks',
    yearsOfExperience: 8,
  },
  {
    name: 'Spring Batch',
    level: 80,
    category: 'Frameworks',
    yearsOfExperience: 5,
  },
  {
    name: 'Spring Cloud',
    level: 75,
    category: 'Frameworks',
    yearsOfExperience: 5,
  },
  {
    name: 'Java EE',
    level: 90,
    category: 'Frameworks',
    yearsOfExperience: 12,
  },
  {
    name: 'EJB',
    level: 80,
    category: 'Frameworks',
    yearsOfExperience: 8,
  },
  {
    name: 'Hibernate',
    level: 90,
    category: 'Frameworks',
    yearsOfExperience: 12,
  },

  // ---------------------------------------------------------------------------
  // DATABASES
  // ---------------------------------------------------------------------------
  {
    name: 'DB2',
    level: 80,
    category: 'Databases',
    yearsOfExperience: 6,
  },
  {
    name: 'MySQL',
    level: 75,
    category: 'Databases',
    yearsOfExperience: 8,
  },
  {
    name: 'PostgreSQL',
    level: 70,
    category: 'Databases',
    yearsOfExperience: 5,
  },
  {
    name: 'Oracle',
    level: 65,
    category: 'Databases',
    yearsOfExperience: 5,
  },
  {
    name: 'ElasticSearch',
    level: 75,
    category: 'Databases',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // CLOUD
  // ---------------------------------------------------------------------------
  {
    name: 'AWS',
    level: 75,
    category: 'Cloud',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // DEVOPS
  // ---------------------------------------------------------------------------
  {
    name: 'Docker',
    level: 70,
    category: 'DevOps',
    yearsOfExperience: 4,
  },
  {
    name: 'Jenkins',
    level: 80,
    category: 'DevOps',
    yearsOfExperience: 8,
  },
  {
    name: 'Bamboo',
    level: 75,
    category: 'DevOps',
    yearsOfExperience: 5,
  },
  {
    name: 'GitLab',
    level: 80,
    category: 'DevOps',
    yearsOfExperience: 7,
  },
  {
    name: 'Sonar',
    level: 75,
    category: 'DevOps',
    yearsOfExperience: 6,
  },
  {
    name: 'Artifactory',
    level: 70,
    category: 'DevOps',
    yearsOfExperience: 5,
  },
  {
    name: 'Nexus',
    level: 70,
    category: 'DevOps',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // TOOLS
  // ---------------------------------------------------------------------------
  {
    name: 'Git',
    level: 85,
    category: 'Tools',
    yearsOfExperience: 10,
  },
  {
    name: 'SVN',
    level: 80,
    category: 'Tools',
    yearsOfExperience: 10,
  },
  {
    name: 'IntelliJ',
    level: 90,
    category: 'Tools',
    yearsOfExperience: 10,
  },
  {
    name: 'Eclipse IDE',
    level: 85,
    category: 'Tools',
    yearsOfExperience: 12,
  },
  {
    name: 'Visual Studio Code',
    level: 80,
    category: 'Tools',
    yearsOfExperience: 5,
  },
  {
    name: 'NetBeans',
    level: 75,
    category: 'Tools',
    yearsOfExperience: 8,
  },
  {
    name: 'JIRA',
    level: 85,
    category: 'Tools',
    yearsOfExperience: 10,
  },
  {
    name: 'Maven',
    level: 85,
    category: 'Tools',
    yearsOfExperience: 10,
  },
  {
    name: 'Gradle',
    level: 80,
    category: 'Tools',
    yearsOfExperience: 7,
  },
  {
    name: 'Ant',
    level: 70,
    category: 'Tools',
    yearsOfExperience: 8,
  },
  {
    name: 'Tomcat',
    level: 90,
    category: 'Tools',
    yearsOfExperience: 12,
  },
  {
    name: 'GlassFish',
    level: 80,
    category: 'Tools',
    yearsOfExperience: 8,
  },
  {
    name: 'WildFly',
    level: 75,
    category: 'Tools',
    yearsOfExperience: 5,
  },
  {
    name: 'JBoss',
    level: 70,
    category: 'Tools',
    yearsOfExperience: 5,
  },
];

/**
 * =============================================================================
 * SPOKEN LANGUAGES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * List the languages you speak and your proficiency level.
 */
export const languages: Language[] = [
  { name: 'Serbian', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Intermediate' },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get top N skills sorted by proficiency level
 */
export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

/**
 * Get all unique skill categories actually used in skills array
 */
export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  // Return in the order defined in skillCategories
  return skillCategories.filter((cat) => categories.has(cat));
}

/**
 * Get skills grouped by category
 */
export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

/**
 * Calculate average skill level
 */
export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/**
 * Get proficiency label for a skill level
 */
export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  if (level >= 30) return 'Basic';
  return 'Beginner';
}
