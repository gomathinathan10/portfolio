/**
 * =============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION & CONTENT DATA
 * =============================================================================
 * 
 * Edit this file to update your portfolio.
 * Everything on the website automatically updates from here.
 */

export const portfolioData = {
  // ===========================================================================
  // 1. PERSONAL INFORMATION
  // ===========================================================================
  personal: {
    name: "Gomathinathan.V",
    initials: "GV",
    title: "Full Stack Developer & Aspiring Data Analyst",
    tagline: "I build responsive web applications and analyze data to find helpful insights.",
    avatar: "./assets/profile.jpg",
    resumeUrl: "./assets/resume.pdf",
    location: "Tirunelveli, Tamil Nadu, India",
    relocation: "Open to Remote and On-Site Work",
    availability: {
      status: "Available for Work",
      type: "Full-Time Roles & Projects",
      badgeColor: "success"
    },
    // Main highlights shown under the introduction
    stats: [
      {
        value: "Full Stack",
        label: "Web Development",
        helper: "React, Node.js, Express & SQL"
      },
      {
        value: "M.Sc.",
        label: "Data Analytics",
        helper: "Completed in April 2026"
      },
      {
        value: "Grownoww",
        label: "Current Work",
        helper: "Technologies in Tirunelveli"
      },
      {
        value: "Revamp",
        label: "Internship",
        helper: "Web development training"
      }
    ]
  },

  // ===========================================================================
  // 2. SOCIAL AND CONTACT LINKS
  // ===========================================================================
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/gomathinathan10",
      username: "@gomathinathan10",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gomathinathan-v",
      username: "in/gomathinathan-v",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:gomathinathanv9@gmail.com",
      username: "gomathinathanv9@gmail.com",
      icon: "mail"
    },
    {
      name: "Phone / WhatsApp",
      url: "tel:+916382988134",
      username: "+91 6382988134",
      icon: "phone"
    }
  ],

  // ===========================================================================
  // 3. ABOUT ME
  // ===========================================================================
  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "A summary of my education, experience, and work.",
    paragraphs: [
      "I am a full stack developer and data analyst from Tirunelveli, Tamil Nadu. Currently, I work at Grownoww Technologies in Tirunelveli. I develop websites and web applications that are fast, simple to use, and reliable.",
      "I completed my Master of Science degree in Data Analytics in April 2026. Before that, I completed my Bachelor of Science degree in Computer Science in April 2024. I know how to build web applications using React, Node.js, and databases, and how to analyze data using Python and SQL.",
      "Earlier, I completed a web development internship at Revamp Technologies where I practiced building real web projects. I enjoy writing clean code, learning new tools, and solving problems."
    ],
    principles: [
      {
        title: "Reliable Websites",
        description: "Building websites that run smoothly and look clear on both mobile phones and laptops."
      },
      {
        title: "Helpful Data Analysis",
        description: "Using data and charts to find patterns and help people make good decisions."
      },
      {
        title: "Clean and Simple Code",
        description: "Writing code that is organized, easy to read, and easy for teams to maintain."
      },
      {
        title: "Continuous Learning",
        description: "Always practicing new tools and programming languages to improve my work."
      }
    ],
    quickFacts: [
      { label: "Current Company", value: "Grownoww Technologies (Tirunelveli)" },
      { label: "Previous Internship", value: "Revamp Technologies" },
      { label: "Location", value: "Tirunelveli, Tamil Nadu, India" },
      { label: "Post Graduation", value: "M.Sc. Data Analytics (April 2026)" },
      { label: "Under Graduation", value: "B.Sc. Computer Science (April 2024)" },
      { label: "Languages Known", value: "English and Tamil" }
    ]
  },

  // ===========================================================================
  // 4. TECHNICAL SKILLS
  // ===========================================================================
  skills: {
    sectionTitle: "Technical Skills",
    sectionSubtitle: "The tools and technologies that I use regularly.",
    categories: [
      {
        id: "web-development",
        name: "Full Stack Web Development",
        icon: "layout",
        description: "Frontend design and backend server programming.",
        items: [
          { name: "JavaScript & TypeScript", level: 90, tag: "Proficient" },
          { name: "React.js", level: 88, tag: "Proficient" },
          { name: "HTML5 & CSS3", level: 94, tag: "Advanced" },
          { name: "Node.js & Express.js", level: 86, tag: "Proficient" },
          { name: "REST APIs", level: 90, tag: "Proficient" }
        ]
      },
      {
        id: "data-analytics",
        name: "Data Analytics",
        icon: "database",
        description: "Working with data, numbers, and visual charts.",
        items: [
          { name: "Python", level: 88, tag: "Proficient" },
          { name: "Pandas & NumPy", level: 86, tag: "Proficient" },
          { name: "Data Visualization", level: 85, tag: "Proficient" },
          { name: "Exploratory Data Analysis", level: 88, tag: "Proficient" },
          { name: "Machine Learning Basics", level: 80, tag: "Familiar" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        icon: "server",
        description: "Storing and querying application data.",
        items: [
          { name: "SQL (MySQL & PostgreSQL)", level: 88, tag: "Proficient" },
          { name: "MongoDB", level: 84, tag: "Familiar" },
          { name: "Database Table Design", level: 86, tag: "Proficient" },
          { name: "Writing Database Queries", level: 85, tag: "Proficient" }
        ]
      },
      {
        id: "tools",
        name: "Developer Tools",
        icon: "cloud",
        description: "Tools for coding, testing, and saving project versions.",
        items: [
          { name: "Git & GitHub", level: 90, tag: "Proficient" },
          { name: "VS Code Editor", level: 92, tag: "Advanced" },
          { name: "Postman API Testing", level: 86, tag: "Proficient" },
          { name: "npm & Vite", level: 88, tag: "Proficient" }
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. WORK EXPERIENCE
  // ===========================================================================
  experience: {
    sectionTitle: "Work Experience",
    sectionSubtitle: "My work history and internship experience.",
    roles: [
      {
        role: "Full Stack Developer",
        company: "Grownoww Technologies",
        companyUrl: "https://example.com/grownoww",
        location: "Tirunelveli, Tamil Nadu",
        period: "Present",
        badge: "Current Job",
        description: "Developing and supporting web applications for company clients.",
        highlights: [
          "Building responsive web pages that look good on all devices.",
          "Creating backend APIs and connecting them to database storage.",
          "Working with team members in Tirunelveli to build requested features on time.",
          "Testing website functions to make sure there are no errors."
        ],
        techStack: ["React.js", "Node.js", "Express", "JavaScript", "SQL", "MongoDB", "CSS3", "Git"]
      },
      {
        role: "Full Stack Web Development Intern",
        company: "Revamp Technologies",
        companyUrl: "https://example.com/revamp",
        location: "Tamil Nadu, India",
        period: "Internship",
        badge: "Internship",
        description: "Worked on practical web development tasks and user interfaces.",
        highlights: [
          "Built web components using HTML, CSS, and JavaScript.",
          "Connected frontend screens to backend API endpoints.",
          "Learned Git workflows and collaborative team programming on GitHub."
        ],
        techStack: ["JavaScript", "HTML5", "CSS3", "React", "Node.js", "REST APIs", "GitHub"]
      }
    ]
  },

  // ===========================================================================
  // 6. EDUCATION
  // ===========================================================================
  education: {
    sectionTitle: "Education",
    sectionSubtitle: "My degrees and schooling details.",
    degrees: [
      {
        degree: "Master of Science (M.Sc.) in Data Analytics",
        institution: "Post-Graduate Degree",
        institutionUrl: "#",
        location: "Tamil Nadu, India",
        period: "Completed April 2026",
        grade: "Post Graduate",
        highlights: [
          "Studied data analytics, statistical methods, machine learning, and data visualization.",
          "Practiced cleaning data, finding insights, and creating visual charts using Python."
        ]
      },
      {
        degree: "Bachelor of Science (B.Sc.) in Computer Science",
        institution: "Undergraduate Degree",
        institutionUrl: "#",
        location: "Tamil Nadu, India",
        period: "Completed April 2024",
        grade: "Graduate",
        highlights: [
          "Studied computer programming, data structures, algorithms, databases, and web technology.",
          "Built foundational knowledge in computer science and software development."
        ]
      },
      {
        degree: "Higher Secondary Certificate (12th Standard)",
        institution: "State Board School Education",
        institutionUrl: "#",
        location: "Tamil Nadu, India",
        period: "Completed 2021",
        grade: "Higher Secondary",
        highlights: [
          "Studied Mathematics, Computer Science, and Science subjects."
        ]
      },
      {
        degree: "Secondary School Leaving Certificate (10th Standard)",
        institution: "State Board School Education",
        institutionUrl: "#",
        location: "Tamil Nadu, India",
        period: "Completed 2019",
        grade: "Secondary School",
        highlights: [
          "Completed general school subjects with good marks."
        ]
      }
    ],
    certifications: [
      {
        title: "Full Stack Web Development Certificate",
        issuer: "Web Development Course",
        date: "2024",
        credentialId: "FSWD-2024",
        verifyUrl: "https://github.com/gomathinathan10"
      },
      {
        title: "Data Analytics with Python Certificate",
        issuer: "Data Science Training",
        date: "2025",
        credentialId: "DATA-2025",
        verifyUrl: "https://github.com/gomathinathan10"
      }
    ]
  },

  // ===========================================================================
  // 7. FEATURED PROJECTS
  // ===========================================================================
  projects: {
    sectionTitle: "Projects",
    sectionSubtitle: "Selected projects that I have worked on.",
    categories: ["All", "Full-Stack", "Data Analytics"],
    items: [
      {
        id: "grownoww-app",
        title: "Company Web Application",
        category: "Full-Stack",
        badge: "Web App",
        image: "./assets/project-observability.jpg",
        description: "A complete web application built with React and Node.js. It has clean navigation, responsive layout, and interactive forms.",
        keyImpact: "Loads quickly and works smoothly on mobile phones, tablets, and desktops.",
        techStack: ["React.js", "Node.js", "Express", "CSS3", "REST APIs", "MongoDB"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Built modular components that are easy to update.",
          "Created input forms with instant validation.",
          "Connected backend routes to save and read data safely."
        ]
      },
      {
        id: "data-analytics-dashboard",
        title: "Data Analytics Dashboard",
        category: "Data Analytics",
        badge: "Data Project",
        image: "./assets/project-fintech.jpg",
        description: "An analytics project that takes raw datasets and generates clear visual charts to understand key trends and numbers.",
        keyImpact: "Helps users see data patterns quickly through clear graphs and summary tables.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Cleaned and prepared raw dataset files for analysis.",
          "Generated charts to show trends and important statistics.",
          "Wrote SQL queries to filter and group information."
        ]
      },
      {
        id: "revamp-portal",
        title: "Client Information Portal",
        category: "Full-Stack",
        badge: "Internship Project",
        image: "./assets/project-developer-platform.jpg",
        description: "A web portal created during my internship to manage client details and records in one organized place.",
        keyImpact: "Simplified record keeping and search with a clean user interface.",
        techStack: ["JavaScript", "React", "Node.js", "REST APIs", "Git", "GitHub"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Created responsive tables to show records clearly.",
          "Added form checks so users enter correct information.",
          "Used GitHub to save code versions cleanly."
        ]
      }
    ]
  },

  // ===========================================================================
  // 8. SERVICES / WHAT I DO
  // ===========================================================================
  services: {
    sectionTitle: "What I Do",
    sectionSubtitle: "Services and skills that I can provide for your team or project.",
    items: [
      {
        title: "Web Development",
        icon: "code",
        description: "Building responsive websites and web applications using React, Node.js, and modern CSS.",
        deliverables: ["Responsive web pages", "Backend APIs", "Clean user interfaces", "Database connections"]
      },
      {
        title: "Data Analytics",
        icon: "database",
        description: "Cleaning data, analyzing trends, and building visual dashboards with Python and SQL.",
        deliverables: ["Data cleaning", "Visual charts", "Summary reports", "SQL query writing"]
      },
      {
        title: "Website Improvement",
        icon: "zap",
        description: "Updating existing websites to load faster and look better on mobile phones.",
        deliverables: ["Mobile friendly layout", "Speed improvements", "Design updates", "Bug fixes"]
      }
    ]
  },

  // ===========================================================================
  // 9. CONTACT INFORMATION
  // ===========================================================================
  contact: {
    sectionTitle: "Contact Me",
    sectionSubtitle: "Looking for a full stack developer or data analyst? Feel free to reach out.",
    email: "gomathinathanv9@gmail.com",
    phone: "+91 6382988134",
    location: "Tirunelveli, Tamil Nadu, India",
    calendarUrl: "",
    responseTime: "I usually reply within 24 hours.",
    formFields: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email address",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message here..."
    }
  },

  // ===========================================================================
  // 10. SITE FOOTER
  // ===========================================================================
  footer: {
    copyrightText: "Gomathinathan.V. All rights reserved.",
    builtWith: "Built with HTML, CSS, JavaScript, and a centralized configuration file.",
    topButtonLabel: "Back to top"
  }
};
