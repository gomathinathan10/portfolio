/**
 * =============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION & CONTENT DATA
 * =============================================================================
 * 
 * Centralized data source for Gomathinathan.V portfolio.
 * Automatically synchronizes personal profile, projects, education & contact details.
 */

export const portfolioData = {
  // ===========================================================================
  // 1. PERSONAL INFORMATION
  // ===========================================================================
  personal: {
    name: "GOMATHINATHAN.V",
    initials: "GV",
    title: "Aspiring Data Analyst | M.Sc. Data Analytics",
    tagline: "Motivated and Postgraduated in M.Sc seeking a job to apply my knowledge of handling data, analytical skills, communication abilities and knowledge to support company projects. Eager to contribute to data driven insights and grow professionally while adding value to the organization.",
    avatar: "./assets/gomathinathan.png",
    resumeUrl: "./assets/resume.pdf",
    location: "73, VVK Street, Pettai, Tirunelveli, Tamil Nadu",
    relocation: "Open to Remote and On-Site Opportunities",
    availability: {
      status: "Actively Seeking Opportunities",
      type: "Data Analyst & Developer Roles",
      badgeColor: "success"
    },
    stats: [
      {
        value: "8.5 CGPA",
        label: "M.Sc. Data Analytics",
        helper: "Manonmaniam Sundaranar University (2024-2026)"
      },
      {
        value: "6.8 CGPA",
        label: "B.Sc. Computer Science",
        helper: "The MDT Hindu College (2021-2024)"
      },
      {
        value: "3+",
        label: "Certifications",
        helper: "Simplilearn (ML & AI) & NPTEL (NLP)"
      },
      {
        value: "4+",
        label: "Key Projects",
        helper: "ML, NLP, Computer Vision & Power BI"
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
      url: "mailto:gomathinathanvgn@gmail.com",
      username: "gomathinathanvgn@gmail.com",
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
    sectionSubtitle: "Educational background, technical expertise, certifications, and career objective.",
    paragraphs: [
      "I am Gomathinathan.V, an Aspiring Data Analyst pursuing M.Sc. in Data Analytics (CGPA: 8.5, 2024–2026) at Manonmaniam Sundaranar University, Tirunelveli, with a B.Sc. in Computer Science (CGPA: 6.8, 2021–2024) from The Madurai Diraviyam Thayumanavar Hindu College, Tirunelveli.",
      "Motivated and Postgraduated in M.Sc seeking a job to apply my knowledge of handling data, analytical skills, communication abilities and knowledge to support company projects. Eager to contribute to data driven insights and grow professionally while adding value to the organization.",
      "Certified in Machine Learning Using Python (Simplilearn, 2026), Artificial Intelligence for Business (Simplilearn, 2026), and Natural Language Processing (NPTEL, 2025). Presented technical research papers and participated in Big Data & AI workshops across Tamil Nadu."
    ],
    principles: [
      {
        title: "Analytical Thinking & Problem Solving",
        description: "Applying machine learning, statistical modeling, and data manipulation to uncover insights from complex datasets."
      },
      {
        title: "Power BI & Dashboard Visualisation",
        description: "Designing dynamic Business Intelligence dashboards with DAX calculations and interactive KPI reporting."
      },
      {
        title: "Programming & Database Architecture",
        description: "Developing robust workflows using Python, HTML, CSS, and writing structured PostgreSQL queries."
      },
      {
        title: "Collaboration & Continuous Learning",
        description: "Active learner engaged in academic paper presentations, industrial AI workshops, and Big Data training."
      }
    ],
    quickFacts: [
      { label: "Post Graduation", value: "M.Sc. Data Analytics (CGPA: 8.5), MSU" },
      { label: "Under Graduation", value: "B.Sc. Computer Science (CGPA: 6.8), MDT Hindu College" },
      { label: "HSC & SSLC", value: "89.6% & 84.2%, Meenakshi Matriculation" },
      { label: "Location", value: "73, VVK Street, Pettai, Tirunelveli – 627004" },
      { label: "Languages Known", value: "Tamil, English, Hindi (R&W), Malayalam (R&W)" },
      { label: "Contact Email", value: "gomathinathanvgn@gmail.com" }
    ]
  },

  // ===========================================================================
  // 4. TECHNICAL & SOFT SKILLS
  // ===========================================================================
  skills: {
    sectionTitle: "Technical & Soft Skills",
    sectionSubtitle: "Core programming languages, databases, tools, and professional competencies.",
    categories: [
      {
        id: "programming",
        name: "Programming Languages & Web",
        icon: "layout",
        description: "Core programming and web development technologies.",
        items: [
          { name: "Python", level: 94, tag: "Proficient" },
          { name: "HTML5", level: 95, tag: "Advanced" },
          { name: "CSS3", level: 92, tag: "Advanced" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        icon: "server",
        description: "Relational database querying and modeling.",
        items: [
          { name: "PostgreSQL", level: 90, tag: "Proficient" },
          { name: "SQL Query Optimization", level: 88, tag: "Proficient" },
          { name: "Data Modeling & Schemas", level: 86, tag: "Proficient" }
        ]
      },
      {
        id: "tools-devops",
        name: "Tools & DevOps",
        icon: "cloud",
        description: "BI visual analytics, version control, and office suites.",
        items: [
          { name: "PowerBI", level: 92, tag: "Advanced" },
          { name: "Git & GitHub", level: 90, tag: "Proficient" },
          { name: "MS Office Suite (Word, Excel, PPT)", level: 94, tag: "Proficient" },
          { name: "VS Code Editor", level: 92, tag: "Advanced" }
        ]
      },
      {
        id: "soft-skills",
        name: "Soft Skills & Professional Competencies",
        icon: "zap",
        description: "Communication, analytical thinking, and collaboration.",
        items: [
          { name: "Strong Communication Skills", level: 95, tag: "Advanced" },
          { name: "Analytical Thinking & Problem Solving", level: 94, tag: "Advanced" },
          { name: "Time Management & Organizational Skills", level: 92, tag: "Proficient" },
          { name: "Team Collaboration & Coordination", level: 92, tag: "Proficient" },
          { name: "Critical Thinking & Decision Making", level: 90, tag: "Proficient" }
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. CERTIFICATIONS
  // ===========================================================================
  certifications: [
    {
      title: "Machine Learning Using Python",
      issuer: "Simplilearn SkillUp",
      date: "3 April 2026",
      credentialId: "10050156",
      verifyUrl: "assets/certificates/simplilearn_ml_python.png"
    },
    {
      title: "Artificial Intelligence for Business",
      issuer: "Simplilearn SkillUp",
      date: "13 March 2026",
      credentialId: "9956385",
      verifyUrl: "assets/certificates/simplilearn_ai_for_business.png"
    },
    {
      title: "Get Started with SQL Analytics and BI on Databricks",
      issuer: "Databricks & Simplilearn",
      date: "13 March 2026",
      credentialId: "9947078",
      verifyUrl: "assets/certificates/databricks_sql_analytics.png"
    },
    {
      title: "Natural Language Processing (NLP)",
      issuer: "NPTEL (IIT Kharagpur / SWAYAM)",
      date: "Jan–Apr 2025",
      credentialId: "NPTEL25CS51S458800820",
      verifyUrl: "assets/certificates/nptel_nlp_certificate.png"
    }
  ],

  // ===========================================================================
  // 6. WORK EXPERIENCE & INTERNSHIPS (DESCENDING)
  // ===========================================================================
  experience: {
    sectionTitle: "Work Experience",
    sectionSubtitle: "Professional developer roles and technical internships.",
    items: [
      {
        role: "Developer",
        company: "Grownoww Technologies",
        period: "September 2026 – Present",
        status: "Current Role",
        badge: "Full-Time",
        image: "assets/institutes/institute_grownoww.jpg",
        location: "Tirunelveli / India",
        highlights: [
          "Building scalable full-stack web applications and robust data pipelines.",
          "Engineering Python backend microservices, REST APIs, and PostgreSQL database schemas.",
          "Collaborating on data-driven business solutions, UI performance, and production deployments."
        ]
      },
      {
        role: "Developer / Data Analyst Intern",
        company: "Revamp Technologies",
        period: "April 2026 – August 2026",
        status: "Completed",
        badge: "Internship",
        image: "assets/institutes/institute_revamp.jpg",
        location: "Tamil Nadu, India",
        highlights: [
          "Completed 5-month intensive developer and data analyst internship.",
          "Developed automated data extraction pipelines, ETL workflows, and interactive Power BI KPI dashboards.",
          "Participated in agile sprints, code reviews, and software feature implementation."
        ]
      }
    ]
  },

  // ===========================================================================
  // 7. EDUCATIONAL QUALIFICATIONS (DESCENDING)
  // ===========================================================================
  education: {
    sectionTitle: "Educational Qualifications",
    sectionSubtitle: "Academic degrees, grades, and institutions in descending order.",
    degrees: [
      {
        degree: "M.Sc. Data Analytics",
        institution: "Manonmaniam Sundaranar University, Tirunelveli",
        institutionUrl: "#",
        location: "Tirunelveli, Tamil Nadu",
        period: "2024 – 2026",
        grade: "CGPA: 8.5 (First Class with Distinction)",
        image: "assets/institutes/institute_msu.jpg",
        highlights: [
          "Secured outstanding academic score (CGPA: 8.5) in Data Analytics, NLP, Machine Learning, and Big Data.",
          "Authored & presented research paper 'Next–Gen Resume Ranking Using BM25 & SBERT Embeddings' at ICIRET-2026.",
          "Hands-on projects: CNN Driver Fatigue Detection, Voice AI Assistant, and Power BI electricity analytics."
        ]
      },
      {
        degree: "B.Sc. Computer Science",
        institution: "The Madurai Diraviyam Thayumanavar Hindu College, Tirunelveli",
        institutionUrl: "#",
        location: "Tirunelveli, Tamil Nadu",
        period: "2021 – 2024",
        grade: "CGPA: 6.8 (First Class)",
        image: "assets/institutes/institute_mdt.jpg",
        highlights: [
          "Graduated First Class in B.Sc. Computer Science.",
          "Comprehensive foundation in Python, Relational Database Systems (PostgreSQL/SQL), Web Development, and Algorithms."
        ]
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Meenakshi Matriculation Higher Secondary School, Tirunelveli",
        institutionUrl: "#",
        location: "Tirunelveli, Tamil Nadu",
        period: "2019 – 2021",
        grade: "89.6% (Distinction)",
        image: "assets/institutes/institute_meenakshi.jpg",
        highlights: [
          "Graduated Higher Secondary with 89.6% distinction focusing on Mathematics and Computer Science."
        ]
      },
      {
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "Meenakshi Matriculation Higher Secondary School, Tirunelveli",
        institutionUrl: "#",
        location: "Tirunelveli, Tamil Nadu",
        period: "2019",
        grade: "84.2% (Distinction)",
        image: "assets/institutes/institute_meenakshi.jpg",
        highlights: [
          "Completed secondary school examination with 84.2% distinction."
        ]
      }
    ]
  },

  // ===========================================================================
  // 7. FEATURED PROJECTS
  // ===========================================================================
  projects: {
    sectionTitle: "Projects",
    sectionSubtitle: "Featured technical projects across Machine Learning, Computer Vision, Voice AI, and Power BI.",
    categories: ["All", "Machine Learning", "Data Analytics", "AI & Vision"],
    items: [
      {
        id: "resume-ranking",
        title: "Next–Gen Resume Ranking Using BM25 & SBERT Embeddings",
        category: "Machine Learning",
        badge: "NLP & ML",
        image: "./assets/project-observability.jpg",
        description: "Automatically analyze and rank Resumes according to job description, calculating scores using ML models, combining BM25 keyword matching with SBERT deep contextual embeddings.",
        keyImpact: "Presented as a research paper at A.V.C. College of Engineering, Mayiladuthurai (2026).",
        techStack: ["Python", "BM25", "SBERT Embeddings", "NLP", "Machine Learning", "Scikit-Learn"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Combined BM25 for lexical relevance and SBERT embeddings for deep semantic match scoring.",
          "Automated resume parsing against job specifications with ranked score calculation.",
          "Paper presented at A.V.C. College of Engineering National Conference (2026)."
        ]
      },
      {
        id: "driver-fatigue",
        title: "Driver Fatigue Detection System",
        category: "AI & Vision",
        badge: "Computer Vision",
        image: "./assets/project-developer-platform.jpg",
        description: "Vision based fatigue detection and alarm system using Convolutional Neural Networks (CNN) and OpenCV to monitor driver drowsiness and trigger real-time alerts.",
        keyImpact: "Real-time webcam stream processing detecting eye closure duration and head tilt to trigger instant acoustic alarms.",
        techStack: ["Python", "CNN", "OpenCV", "Deep Learning", "Computer Vision", "Real-Time Detection"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Trained CNN model for accurate facial landmark and eyelid closure recognition.",
          "Constructed high-speed OpenCV image stream pipeline with zero latency.",
          "Integrated alert alarm mechanism when driver fatigue is detected."
        ]
      },
      {
        id: "datatalk-bot",
        title: "DataTalk – Conversational Analytical Assistant",
        category: "Machine Learning",
        badge: "Voice AI",
        image: "./assets/project-fintech.jpg",
        description: "A voice conversational chatbot for Data Analytical Queries connecting with API key, providing conversational natural language access to complex dataset metrics.",
        keyImpact: "Hands-free voice querying of datasets, translating speech into analytical SQL queries and spoken summary responses.",
        techStack: ["Python", "Voice AI", "REST API", "PostgreSQL", "NLP", "Data Analytics"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Engineered voice-to-text recognition and text-to-speech audio synthesis.",
          "Connected to backend APIs with API key authentication for dynamic query execution.",
          "Parsed complex data queries and formatted intuitive conversational analytics."
        ]
      },
      {
        id: "electricity-consumption",
        title: "Analysis of Commercial Electricity Consumption in Indian State",
        category: "Data Analytics",
        badge: "Power BI",
        image: "./assets/project-fintech.jpg",
        description: "Dashboard Visualisation of Electricity Consumption using Powerbi, analyzing commercial sector consumption patterns, peak demands, and geographical distributions across an Indian state.",
        keyImpact: "Interactive dashboards with multi-level drill-down capabilities, KPI metrics, and energy demand forecasting.",
        techStack: ["PowerBI", "Data Analytics", "Dashboard Visualization", "DAX", "Data Modeling"],
        liveUrl: "https://github.com/gomathinathan10",
        githubUrl: "https://github.com/gomathinathan10",
        details: [
          "Modeled commercial power consumption data across diverse Indian state regions.",
          "Created interactive Power BI dashboards with DAX calculations and visual slicers.",
          "Identified seasonal peaks and demand variance to assist power grid planning."
        ]
      }
    ]
  },

  // ===========================================================================
  // 8. EXTRA-CURRICULAR ACTIVITIES & WORKSHOPS
  // ===========================================================================
  extraCurricular: {
    paperPresentation: [
      {
        title: "Next – Gen Resume Ranking Using BM25 & SBERT Embeddings",
        year: "2026",
        venue: "A.V.C. College of Engineering, Mayiladuthurai"
      }
    ],
    workshops: [
      {
        title: "AI – Driven Industry Oriented Programming & Training",
        year: "2026",
        venue: "Dr. Sivanthi Aditanar College of Engineering, Tiruchendur"
      },
      {
        title: "Hadoop Tools for Big Data",
        year: "2025",
        venue: "Manonmaniam Sundaranar University, Tirunelveli"
      },
      {
        title: "PowerBI Workshop",
        year: "2025",
        venue: "Dr. Sivanthi Aditanar College of Engineering, Tiruchendur"
      }
    ]
  },

  // ===========================================================================
  // 9. CONTACT INFORMATION
  // ===========================================================================
  contact: {
    sectionTitle: "Contact Me",
    sectionSubtitle: "Get in touch for Data Analyst roles, machine learning opportunities, or technical collaborations.",
    email: "gomathinathanvgn@gmail.com",
    phone: "+91 6382988134",
    location: "73, VVK Street, Pettai, Tirunelveli, Tamil Nadu",
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
    copyrightText: "GOMATHINATHAN.V. All rights reserved.",
    builtWith: "Built with HTML, CSS, JavaScript, and centralized portfolio data.",
    topButtonLabel: "Back to top"
  }
};
