(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const l={personal:{name:"Gomathinathan.V",initials:"GV",title:"Full Stack Developer & Aspiring Data Analyst",tagline:"I build responsive web applications and analyze data to find helpful insights.",avatar:"./assets/profile.jpg",resumeUrl:"./assets/resume.pdf",location:"Tirunelveli, Tamil Nadu, India",relocation:"Open to Remote and On-Site Work",availability:{status:"Available for Work",type:"Full-Time Roles & Projects",badgeColor:"success"},stats:[{value:"Full Stack",label:"Web Development",helper:"React, Node.js, Express & SQL"},{value:"M.Sc.",label:"Data Analytics",helper:"Completed in April 2026"},{value:"Grownoww",label:"Current Work",helper:"Technologies in Tirunelveli"},{value:"Revamp",label:"Internship",helper:"Web development training"}]},socialLinks:[{name:"GitHub",url:"https://github.com/gomathinathan10",username:"@gomathinathan10",icon:"github"},{name:"LinkedIn",url:"https://linkedin.com/in/gomathinathan-v",username:"in/gomathinathan-v",icon:"linkedin"},{name:"Email",url:"mailto:gomathinathanv9@gmail.com",username:"gomathinathanv9@gmail.com",icon:"mail"},{name:"Phone / WhatsApp",url:"tel:+916382988134",username:"+91 6382988134",icon:"phone"}],about:{sectionTitle:"About Me",sectionSubtitle:"A summary of my education, experience, and work.",paragraphs:["I am a full stack developer and data analyst from Tirunelveli, Tamil Nadu. Currently, I work at Grownoww Technologies in Tirunelveli. I develop websites and web applications that are fast, simple to use, and reliable.","I completed my Master of Science degree in Data Analytics in April 2026. Before that, I completed my Bachelor of Science degree in Computer Science in April 2024. I know how to build web applications using React, Node.js, and databases, and how to analyze data using Python and SQL.","Earlier, I completed a web development internship at Revamp Technologies where I practiced building real web projects. I enjoy writing clean code, learning new tools, and solving problems."],principles:[{title:"Reliable Websites",description:"Building websites that run smoothly and look clear on both mobile phones and laptops."},{title:"Helpful Data Analysis",description:"Using data and charts to find patterns and help people make good decisions."},{title:"Clean and Simple Code",description:"Writing code that is organized, easy to read, and easy for teams to maintain."},{title:"Continuous Learning",description:"Always practicing new tools and programming languages to improve my work."}],quickFacts:[{label:"Current Company",value:"Grownoww Technologies (Tirunelveli)"},{label:"Previous Internship",value:"Revamp Technologies"},{label:"Location",value:"Tirunelveli, Tamil Nadu, India"},{label:"Post Graduation",value:"M.Sc. Data Analytics (April 2026)"},{label:"Under Graduation",value:"B.Sc. Computer Science (April 2024)"},{label:"Languages Known",value:"English and Tamil"}]},skills:{sectionTitle:"Technical Skills",sectionSubtitle:"The tools and technologies that I use regularly.",categories:[{id:"web-development",name:"Full Stack Web Development",icon:"layout",description:"Frontend design and backend server programming.",items:[{name:"JavaScript & TypeScript",level:90,tag:"Proficient"},{name:"React.js",level:88,tag:"Proficient"},{name:"HTML5 & CSS3",level:94,tag:"Advanced"},{name:"Node.js & Express.js",level:86,tag:"Proficient"},{name:"REST APIs",level:90,tag:"Proficient"}]},{id:"data-analytics",name:"Data Analytics",icon:"database",description:"Working with data, numbers, and visual charts.",items:[{name:"Python",level:88,tag:"Proficient"},{name:"Pandas & NumPy",level:86,tag:"Proficient"},{name:"Data Visualization",level:85,tag:"Proficient"},{name:"Exploratory Data Analysis",level:88,tag:"Proficient"},{name:"Machine Learning Basics",level:80,tag:"Familiar"}]},{id:"databases",name:"Databases & Storage",icon:"server",description:"Storing and querying application data.",items:[{name:"SQL (MySQL & PostgreSQL)",level:88,tag:"Proficient"},{name:"MongoDB",level:84,tag:"Familiar"},{name:"Database Table Design",level:86,tag:"Proficient"},{name:"Writing Database Queries",level:85,tag:"Proficient"}]},{id:"tools",name:"Developer Tools",icon:"cloud",description:"Tools for coding, testing, and saving project versions.",items:[{name:"Git & GitHub",level:90,tag:"Proficient"},{name:"VS Code Editor",level:92,tag:"Advanced"},{name:"Postman API Testing",level:86,tag:"Proficient"},{name:"npm & Vite",level:88,tag:"Proficient"}]}]},experience:{sectionTitle:"Work Experience",sectionSubtitle:"My work history and internship experience.",roles:[{role:"Full Stack Developer",company:"Grownoww Technologies",companyUrl:"https://example.com/grownoww",location:"Tirunelveli, Tamil Nadu",period:"Present",badge:"Current Job",description:"Developing and supporting web applications for company clients.",highlights:["Building responsive web pages that look good on all devices.","Creating backend APIs and connecting them to database storage.","Working with team members in Tirunelveli to build requested features on time.","Testing website functions to make sure there are no errors."],techStack:["React.js","Node.js","Express","JavaScript","SQL","MongoDB","CSS3","Git"]},{role:"Full Stack Web Development Intern",company:"Revamp Technologies",companyUrl:"https://example.com/revamp",location:"Tamil Nadu, India",period:"Internship",badge:"Internship",description:"Worked on practical web development tasks and user interfaces.",highlights:["Built web components using HTML, CSS, and JavaScript.","Connected frontend screens to backend API endpoints.","Learned Git workflows and collaborative team programming on GitHub."],techStack:["JavaScript","HTML5","CSS3","React","Node.js","REST APIs","GitHub"]}]},education:{sectionTitle:"Education",sectionSubtitle:"My degrees and schooling details.",degrees:[{degree:"Master of Science (M.Sc.) in Data Analytics",institution:"Post-Graduate Degree",institutionUrl:"#",location:"Tamil Nadu, India",period:"Completed April 2026",grade:"Post Graduate",highlights:["Studied data analytics, statistical methods, machine learning, and data visualization.","Practiced cleaning data, finding insights, and creating visual charts using Python."]},{degree:"Bachelor of Science (B.Sc.) in Computer Science",institution:"Undergraduate Degree",institutionUrl:"#",location:"Tamil Nadu, India",period:"Completed April 2024",grade:"Graduate",highlights:["Studied computer programming, data structures, algorithms, databases, and web technology.","Built foundational knowledge in computer science and software development."]},{degree:"Higher Secondary Certificate (12th Standard)",institution:"State Board School Education",institutionUrl:"#",location:"Tamil Nadu, India",period:"Completed 2021",grade:"Higher Secondary",highlights:["Studied Mathematics, Computer Science, and Science subjects."]},{degree:"Secondary School Leaving Certificate (10th Standard)",institution:"State Board School Education",institutionUrl:"#",location:"Tamil Nadu, India",period:"Completed 2019",grade:"Secondary School",highlights:["Completed general school subjects with good marks."]}],certifications:[{title:"Full Stack Web Development Certificate",issuer:"Web Development Course",date:"2024",credentialId:"FSWD-2024",verifyUrl:"https://github.com/gomathinathan10"},{title:"Data Analytics with Python Certificate",issuer:"Data Science Training",date:"2025",credentialId:"DATA-2025",verifyUrl:"https://github.com/gomathinathan10"}]},projects:{sectionTitle:"Projects",sectionSubtitle:"Selected projects that I have worked on.",categories:["All","Full-Stack","Data Analytics"],items:[{id:"grownoww-app",title:"Company Web Application",category:"Full-Stack",badge:"Web App",image:"./assets/project-observability.jpg",description:"A complete web application built with React and Node.js. It has clean navigation, responsive layout, and interactive forms.",keyImpact:"Loads quickly and works smoothly on mobile phones, tablets, and desktops.",techStack:["React.js","Node.js","Express","CSS3","REST APIs","MongoDB"],liveUrl:"https://github.com/gomathinathan10",githubUrl:"https://github.com/gomathinathan10",details:["Built modular components that are easy to update.","Created input forms with instant validation.","Connected backend routes to save and read data safely."]},{id:"data-analytics-dashboard",title:"Data Analytics Dashboard",category:"Data Analytics",badge:"Data Project",image:"./assets/project-fintech.jpg",description:"An analytics project that takes raw datasets and generates clear visual charts to understand key trends and numbers.",keyImpact:"Helps users see data patterns quickly through clear graphs and summary tables.",techStack:["Python","Pandas","NumPy","Matplotlib","SQL"],liveUrl:"https://github.com/gomathinathan10",githubUrl:"https://github.com/gomathinathan10",details:["Cleaned and prepared raw dataset files for analysis.","Generated charts to show trends and important statistics.","Wrote SQL queries to filter and group information."]},{id:"revamp-portal",title:"Client Information Portal",category:"Full-Stack",badge:"Internship Project",image:"./assets/project-developer-platform.jpg",description:"A web portal created during my internship to manage client details and records in one organized place.",keyImpact:"Simplified record keeping and search with a clean user interface.",techStack:["JavaScript","React","Node.js","REST APIs","Git","GitHub"],liveUrl:"https://github.com/gomathinathan10",githubUrl:"https://github.com/gomathinathan10",details:["Created responsive tables to show records clearly.","Added form checks so users enter correct information.","Used GitHub to save code versions cleanly."]}]},services:{sectionTitle:"What I Do",sectionSubtitle:"Services and skills that I can provide for your team or project.",items:[{title:"Web Development",icon:"code",description:"Building responsive websites and web applications using React, Node.js, and modern CSS.",deliverables:["Responsive web pages","Backend APIs","Clean user interfaces","Database connections"]},{title:"Data Analytics",icon:"database",description:"Cleaning data, analyzing trends, and building visual dashboards with Python and SQL.",deliverables:["Data cleaning","Visual charts","Summary reports","SQL query writing"]},{title:"Website Improvement",icon:"zap",description:"Updating existing websites to load faster and look better on mobile phones.",deliverables:["Mobile friendly layout","Speed improvements","Design updates","Bug fixes"]}]},contact:{sectionTitle:"Contact Me",sectionSubtitle:"Looking for a full stack developer or data analyst? Feel free to reach out.",email:"gomathinathanv9@gmail.com",phone:"+91 6382988134",location:"Tirunelveli, Tamil Nadu, India",calendarUrl:"",responseTime:"I usually reply within 24 hours.",formFields:{namePlaceholder:"Your name",emailPlaceholder:"Your email address",subjectPlaceholder:"Subject",messagePlaceholder:"Write your message here..."}},footer:{copyrightText:"Gomathinathan.V. All rights reserved.",builtWith:"Built with HTML, CSS, JavaScript, and a centralized configuration file.",topButtonLabel:"Back to top"}};function b(t){const a=document.getElementById("siteHeaderContainer"),e=document.getElementById("siteFooterContainer");if(a&&(a.innerHTML=`
      <header class="site-header" id="siteHeader">
        <div class="container header-inner">
          <a href="#" class="logo-brand" id="headerLogoBrand" aria-label="${t.personal.name} Portfolio">
            <span class="logo-monogram">${t.personal.initials||"GV"}</span>
            <span class="logo-name">${t.personal.name}</span>
          </a>

          <nav class="nav-desktop" id="navDesktop" aria-label="Main Navigation">
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#education" class="nav-link">Education</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>

          <div class="header-actions">
            <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle dark/light mode" title="Toggle theme">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
              </svg>
            </button>
            <a href="${t.personal.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" id="headerResumeBtn" download>
              <span>Resume</span>
            </a>
            <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle mobile menu" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="mobile-nav-drawer" id="mobileNavDrawer">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="${t.personal.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 8px;" download>
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </header>
    `),e){const s=new Date().getFullYear(),i=t.socialLinks.map(n=>`
      <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${n.name}" title="${n.name}: ${n.username}">
        ${f(n.icon)}
      </a>
    `).join("");e.innerHTML=`
      <footer class="site-footer" id="siteFooter">
        <div class="container footer-inner">
          <div class="footer-col-left">
            <div class="logo-brand" style="margin-bottom: 8px;">
              <span class="logo-monogram">${t.personal.initials||"GV"}</span>
              <span>${t.personal.name}</span>
            </div>
            <p style="font-size: var(--text-xs); color: var(--text-muted);">
              Copyright ${s} ${t.footer.copyrightText||`${t.personal.name}. All rights reserved.`}
            </p>
            <p style="font-size: var(--text-xs); color: var(--text-muted); margin-top: 4px;">
              ${t.footer.builtWith}
            </p>
          </div>

          <div class="footer-col-right">
            <div class="footer-social-row" style="margin-bottom: 12px;">
              ${i}
            </div>
            <a href="#siteHeader" class="back-to-top-btn" id="backToTopBtn">
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </footer>
    `}}function f(t){switch(t){case"github":return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';case"linkedin":return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>';case"twitter":return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>';case"phone":return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';case"mail":default:return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>'}}function y(t){var i,n;const a=document.getElementById("heroContainer");if(!a)return;const{personal:e}=t,s=(e.stats||[]).map(o=>`
    <div class="stat-item">
      <div class="stat-number">${o.value}</div>
      <div class="stat-label">${o.label}</div>
      <div class="stat-helper">${o.helper}</div>
    </div>
  `).join("");a.innerHTML=`
    <section class="section hero-section" id="hero" aria-label="Introduction">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-status-badge">
              <span class="status-indicator-dot"></span>
              <span>${((i=e.availability)==null?void 0:i.status)||"Available"} &bull; ${((n=e.availability)==null?void 0:n.type)||"Full-Time & Consulting"}</span>
            </div>

            <h1 class="hero-title">
              Hello, I am <span class="gradient-text">${e.name}</span>
            </h1>

            <div class="hero-subtitle">
              ${e.title}
            </div>

            <p class="hero-tagline">
              ${e.tagline}
            </p>

            <div class="hero-ctas">
              <a href="#projects" class="btn btn-lg btn-primary" id="heroExploreProjectsBtn">
                <span>View Projects</span>
              </a>
              <a href="#contact" class="btn btn-lg btn-secondary" id="heroContactBtn">
                <span>Contact Me</span>
              </a>
              <a href="${e.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-secondary" id="heroDownloadResumeBtn" download>
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          <div class="hero-avatar-container">
            <div class="hero-avatar-wrapper">
              <div class="hero-avatar-glow"></div>
              <img 
                src="${e.avatar}" 
                alt="Photograph of ${e.name}" 
                class="hero-avatar-img"
                loading="eager"
              />
              <div class="hero-floating-card">
                <div>
                  <div class="floating-card-title">${e.location}</div>
                  <div class="floating-card-desc">${e.relocation||"Open to Work"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stats-row">
          ${s}
        </div>
      </div>
    </section>
  `}function k(t){const a=document.getElementById("aboutContainer");if(!a)return;const{about:e}=t,s=(e.paragraphs||[]).map(o=>`
    <p>${o}</p>
  `).join(""),i=(e.principles||[]).map(o=>`
    <div class="principle-box">
      <div class="principle-title">${o.title}</div>
      <div class="principle-desc">${o.description}</div>
    </div>
  `).join(""),n=(e.quickFacts||[]).map(o=>`
    <div class="quick-fact-item">
      <span class="quick-fact-label">${o.label}</span>
      <span class="quick-fact-value">${o.value}</span>
    </div>
  `).join("");a.innerHTML=`
    <section class="section about-section" id="about" aria-label="About Me">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Background</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <div class="about-paragraphs">
              ${s}
            </div>

            <div class="about-principles">
              ${i}
            </div>
          </div>

          <div class="quick-facts-card">
            <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-2); color: var(--primary-light);">
              Quick Information
            </h3>
            ${n}
          </div>
        </div>
      </div>
    </section>
  `}function w(t){const a=document.getElementById("skillsContainer");if(!a)return;const{skills:e}=t,s=(e.categories||[]).map(i=>{const n=i.items.map(o=>`
      <div class="skill-item">
        <div class="skill-meta">
          <span class="skill-name">${o.name}</span>
          <span class="skill-tag">${o.tag}</span>
        </div>
        <div class="skill-progress-track" role="progressbar" aria-valuenow="${o.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${o.name} proficiency">
          <div class="skill-progress-bar" style="width: ${o.level}%;"></div>
        </div>
      </div>
    `).join("");return`
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${x(i.icon)}</div>
          <div>
            <h3 class="skill-cat-title">${i.name}</h3>
          </div>
        </div>
        <p class="skill-cat-desc">${i.description}</p>
        <div class="skill-items-list">
          ${n}
        </div>
      </div>
    `}).join("");a.innerHTML=`
    <section class="section skills-section" id="skills" aria-label="Skills">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Skills</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="skills-grid">
          ${s}
        </div>
      </div>
    </section>
  `}function x(t){switch(t){case"layout":return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>';case"server":return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>';case"cloud":return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>';case"database":default:return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>'}}function S(t){const a=document.getElementById("experienceContainer");if(!a)return;const{experience:e}=t,s=(e.roles||[]).map(i=>{const n=(i.highlights||[]).map(r=>`
      <li>${r}</li>
    `).join(""),o=(i.techStack||[]).map(r=>`
      <span class="tech-tag">${r}</span>
    `).join("");return`
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${i.role}</h3>
            <span class="timeline-period">${i.period}</span>
          </div>

          <div class="timeline-company">
            <span>at</span>
            <a href="${i.companyUrl||"#"}" target="_blank" rel="noopener noreferrer" style="font-weight: 700; color: var(--primary-light);">
              ${i.company}
            </a>
            <span style="color: var(--text-muted); font-size: var(--text-xs);">&bull; ${i.location}</span>
          </div>

          <p style="font-size: var(--text-sm); margin-bottom: var(--space-4); color: var(--text-secondary);">
            ${i.description}
          </p>

          <ul class="timeline-highlights">
            ${n}
          </ul>

          <div class="timeline-tech-tags">
            ${o}
          </div>
        </div>
      </div>
    `}).join("");a.innerHTML=`
    <section class="section experience-section" id="experience" aria-label="Work Experience">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Work Experience</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="experience-timeline">
          ${s}
        </div>
      </div>
    </section>
  `}function $(t){const a=document.getElementById("educationContainer");if(!a)return;const{education:e}=t,s=(e.degrees||[]).map(n=>{const o=(n.highlights||[]).map(r=>`<li>${r}</li>`).join("");return`
      <div class="edu-card">
        <h4 class="edu-title">${n.degree}</h4>
        <div class="edu-institution">
          <span>${n.institution}</span>
          <span style="font-size: var(--text-xs); color: var(--text-muted); font-weight: normal;">&bull; ${n.location}</span>
        </div>
        <div class="edu-period">${n.period}</div>
        ${n.grade?`<div class="edu-grade">${n.grade}</div>`:""}
        <ul class="edu-highlights">
          ${o}
        </ul>
      </div>
    `}).join(""),i=(e.certifications||[]).map(n=>`
    <div class="cert-card">
      <h4 class="cert-title">${n.title}</h4>
      <div class="cert-issuer">${n.issuer}</div>
      <div class="cert-date">${n.date}</div>
      ${n.credentialId?`<div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: 4px;">ID: ${n.credentialId}</div>`:""}
      <a href="${n.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
        <span>View Certificate</span>
      </a>
    </div>
  `).join("");a.innerHTML=`
    <section class="section education-section" id="education" aria-label="Education">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Education</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="edu-cert-grid">
          <div class="edu-column">
            <h3 class="column-heading">
              <span>Degrees and Schooling</span>
            </h3>
            ${s}
          </div>

          <div class="cert-column">
            <h3 class="column-heading">
              <span>Certificates</span>
            </h3>
            ${i}
          </div>
        </div>
      </div>
    </section>
  `}function C(t){const a=document.getElementById("projectsContainer");if(!a)return;const{projects:e}=t,i=(e.categories||["All"]).map((o,r)=>`
    <button class="filter-btn ${r===0?"active":""}" data-category="${o}">
      ${o}
    </button>
  `).join(""),n=(e.items||[]).map(o=>{const r=(o.techStack||[]).map(c=>`<span class="tech-tag">${c}</span>`).join("");return`
      <article class="project-card" data-category="${o.category}">
        <div class="project-thumbnail-wrapper">
          <img 
            src="${o.image}" 
            alt="${o.title} Preview" 
            class="project-thumbnail"
            width="600"
            height="340"
            loading="lazy"
          />
          <div class="project-badge-overlay">${o.badge||o.category}</div>
        </div>

        <div class="project-body">
          <h3 class="project-title">${o.title}</h3>
          <p class="project-desc">${o.description}</p>

          <div class="project-impact-box">
            <strong>Summary:</strong> ${o.keyImpact}
          </div>

          <div class="project-tags-row">
            ${r}
          </div>

          <div class="project-actions">
            ${o.liveUrl?`
              <a href="${o.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="View live project ${o.title}">
                <span>Live Demo</span>
              </a>
            `:""}
            ${o.githubUrl?`
              <a href="${o.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="View code for ${o.title}">
                <span>Source Code</span>
              </a>
            `:""}
          </div>
        </div>
      </article>
    `}).join("");a.innerHTML=`
    <section class="section projects-section" id="projects" aria-label="Projects">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Projects</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="projects-filter-bar" id="projectsFilterBar">
          ${i}
        </div>

        <div class="projects-grid" id="projectsGrid">
          ${n}
        </div>
      </div>
    </section>
  `,T()}function T(){const t=document.querySelectorAll("#projectsFilterBar .filter-btn"),a=document.querySelectorAll("#projectsGrid .project-card");t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(i=>i.classList.remove("active")),e.classList.add("active");const s=e.getAttribute("data-category");a.forEach(i=>{const n=i.getAttribute("data-category");s==="All"||n===s?i.style.display="flex":i.style.display="none"})})})}function j(t){const a=document.getElementById("servicesContainer");if(!a||!t.services)return;const{services:e}=t,s=(e.items||[]).map(i=>{const n=(i.deliverables||[]).map(o=>`
      <li>${o}</li>
    `).join("");return`
      <div class="service-card">
        <div class="service-icon-box">
          ${B(i.icon)}
        </div>
        <h3 class="service-title">${i.title}</h3>
        <p class="service-desc">${i.description}</p>
        <ul class="service-deliverables">
          ${n}
        </ul>
      </div>
    `}).join("");a.innerHTML=`
    <section class="section services-section" id="services" aria-label="Services">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">What I Do</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="services-grid">
          ${s}
        </div>
      </div>
    </section>
  `}function B(t){switch(t){case"code":return'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';case"database":return'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>';case"zap":default:return'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}}function E(t){var n,o,r,c;const a=document.getElementById("contactContainer");if(!a)return;const{contact:e}=t;a.innerHTML=`
    <section class="section contact-section" id="contact" aria-label="Contact Information">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Contact</div>
          <h2 class="section-title">${e.sectionTitle}</h2>
          <p class="section-subtitle">${e.sectionSubtitle}</p>
        </div>

        <div class="contact-grid">
          <!-- Left Column: Channels & Availability -->
          <div class="contact-info-card">
            <h3 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              Direct Contact
            </h3>

            <!-- Email Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Email</span>
                <a href="mailto:${e.email}" class="channel-value" id="directEmailLink">${e.email}</a>
                <button class="copy-email-btn" id="copyEmailBtn" aria-label="Copy email address to clipboard">
                  <span id="copyEmailLabel">Copy address</span>
                </button>
              </div>
            </div>

            <!-- Phone Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Phone / WhatsApp</span>
                <a href="tel:${e.phone.replace(/\s+/g,"")}" class="channel-value">${e.phone}</a>
              </div>
            </div>

            <!-- Location Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Location</span>
                <span class="channel-value">${e.location}</span>
              </div>
            </div>

            <!-- Response Time & Timezone Widget -->
            <div class="contact-timezone-widget">
              <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                Response Time
              </div>
              <div>${e.responseTime}</div>
              <div style="margin-top: 8px; font-size: var(--text-xs); color: var(--primary-light);">
                Current Time in India: <span id="bengaluruLiveClock" style="font-weight: bold;">--:-- IST</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="contact-form-card">
            <h3 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              Send a Direct Message
            </h3>

            <form class="contact-form" id="contactForm" novalidate>
              <div class="form-group">
                <label for="senderName" class="form-label">Your Name *</label>
                <input 
                  type="text" 
                  id="senderName" 
                  class="form-input" 
                  placeholder="${((n=e.formFields)==null?void 0:n.namePlaceholder)||"Enter your name"}" 
                  required
                />
                <span class="form-error">Please enter your name.</span>
              </div>

              <div class="form-group">
                <label for="senderEmail" class="form-label">Your Email *</label>
                <input 
                  type="email" 
                  id="senderEmail" 
                  class="form-input" 
                  placeholder="${((o=e.formFields)==null?void 0:o.emailPlaceholder)||"name@example.com"}" 
                  required
                />
                <span class="form-error">Please enter a valid email address.</span>
              </div>

              <div class="form-group">
                <label for="senderSubject" class="form-label">Subject</label>
                <input 
                  type="text" 
                  id="senderSubject" 
                  class="form-input" 
                  placeholder="${((r=e.formFields)==null?void 0:r.subjectPlaceholder)||"Job opportunity / project"}"
                />
              </div>

              <div class="form-group">
                <label for="senderMessage" class="form-label">Your Message *</label>
                <textarea 
                  id="senderMessage" 
                  class="form-textarea" 
                  placeholder="${((c=e.formFields)==null?void 0:c.messagePlaceholder)||"Write your message here..."}" 
                  required
                ></textarea>
                <span class="form-error">Please enter a message (at least 10 characters).</span>
              </div>

              <button type="submit" class="btn btn-lg btn-primary" id="contactSubmitBtn">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;const s=document.getElementById("copyEmailBtn"),i=document.getElementById("copyEmailLabel");s&&i&&s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e.email),i.textContent="Copied to clipboard!",setTimeout(()=>{i.textContent="Copy address"},3e3)}catch{i.textContent=e.email}}),v(),setInterval(v,1e3)}function v(){const t=document.getElementById("bengaluruLiveClock");if(!t)return;const e=new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});t.textContent=`${e} (IST)`}function I(t){const a=document.getElementById("customizerDrawerContainer");if(!a)return;a.innerHTML=`
    <!-- Floating Trigger Pill -->
    <button class="config-trigger-btn" id="configTriggerBtn" aria-label="Open portfolio edit guide">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
      <span>Edit Portfolio File</span>
    </button>

    <!-- Drawer Backdrop -->
    <div class="config-drawer-overlay" id="configDrawerOverlay"></div>

    <!-- Slide-over Drawer -->
    <aside class="config-drawer" id="configDrawer" aria-label="Portfolio Data Configuration Guide">
      <div class="config-drawer-header">
        <div>
          <h3 style="font-size: var(--text-base); font-weight: 700;">Portfolio Edit Guide</h3>
          <p style="font-size: var(--text-xs); color: var(--text-muted);">How to update your information</p>
        </div>
        <button id="closeConfigDrawerBtn" class="btn btn-sm btn-secondary" aria-label="Close drawer">Close</button>
      </div>

      <div class="config-drawer-body">
        <div style="background: var(--bg-pill); border: 1px solid var(--border-medium); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: var(--text-sm); margin-bottom: 4px; color: var(--primary-light);">
            How to edit your portfolio:
          </div>
          <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5;">
            Open <code>portfolio-data.js</code> in your code editor. You can change your name, photo, phone, email, education, experience, and projects. Saving the file will update this website immediately.
          </p>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; color: var(--text-muted);">
              Current Settings (JSON)
            </span>
            <button id="copyConfigJsonBtn" class="btn btn-sm btn-secondary">
              <span id="copyJsonBtnLabel">Copy Settings</span>
            </button>
          </div>
          <pre class="config-code-preview" id="configCodePreview"><code>${L(JSON.stringify(t,null,2))}</code></pre>
        </div>
      </div>
    </aside>
  `;const e=document.getElementById("configTriggerBtn"),s=document.getElementById("closeConfigDrawerBtn"),i=document.getElementById("configDrawerOverlay"),n=document.getElementById("configDrawer"),o=document.getElementById("copyConfigJsonBtn"),r=document.getElementById("copyJsonBtnLabel");function c(){i.classList.add("open"),n.classList.add("open")}function d(){i.classList.remove("open"),n.classList.remove("open")}e&&e.addEventListener("click",c),s&&s.addEventListener("click",d),i&&i.addEventListener("click",d),o&&o.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t,null,2)),r.textContent="Copied!",setTimeout(()=>{r.textContent="Copy Settings"},2500)}catch{r.textContent="Error copying"}})}function L(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const m="portfolio_theme_preference";function A(){const t=localStorage.getItem(m),a=window.matchMedia("(prefers-color-scheme: dark)").matches;h(t||(a?"dark":"light")),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{localStorage.getItem(m)||h(s.matches?"dark":"light")})}function P(){const a=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";return localStorage.setItem(m,a),h(a),a}function h(t){document.documentElement.setAttribute("data-theme",t),document.querySelectorAll(".theme-toggle-btn").forEach(e=>{t==="dark"?e.innerHTML=`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `:e.innerHTML=`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `,e.setAttribute("aria-label",`Switch to ${t==="dark"?"light":"dark"} mode`),e.setAttribute("title",`Switch to ${t==="dark"?"light":"dark"} mode`)})}const u='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',D='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';function M(){const t=document.getElementById("mobileNavToggle"),a=document.getElementById("mobileNavDrawer"),e=document.querySelectorAll(".nav-link"),s=document.getElementById("backToTopBtn");t&&a&&(t.innerHTML=u,t.addEventListener("click",()=>{const r=a.classList.toggle("open");t.setAttribute("aria-expanded",r),t.innerHTML=r?D:u}),e.forEach(r=>{r.addEventListener("click",()=>{a.classList.remove("open"),t.setAttribute("aria-expanded","false"),t.innerHTML=u})}));const i=document.querySelectorAll("section[id]"),n={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(r=>{r.forEach(c=>{if(c.isIntersecting){const d=c.target.getAttribute("id");e.forEach(p=>{p.getAttribute("href")===`#${d}`?p.classList.add("active"):p.classList.remove("active")})}})},n);i.forEach(r=>o.observe(r)),s&&s.addEventListener("click",r=>{r.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})}function H(t){const a=document.getElementById("contactForm"),e=document.getElementById("contactSubmitBtn");document.getElementById("toastNotification"),!(!a||!e)&&(a.querySelectorAll("input, textarea").forEach(s=>{s.addEventListener("input",()=>{var i;(i=s.closest(".form-group"))==null||i.classList.remove("has-error")})}),a.addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("senderName"),n=document.getElementById("senderEmail");document.getElementById("senderSubject");const o=document.getElementById("senderMessage");let r=!0;if((!i.value.trim()||i.value.trim().length<2)&&(i.closest(".form-group").classList.add("has-error"),r=!1),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.trim())||(n.closest(".form-group").classList.add("has-error"),r=!1),(!o.value.trim()||o.value.trim().length<10)&&(o.closest(".form-group").classList.add("has-error"),r=!1),!r)return;const d=e.innerHTML;e.disabled=!0,e.innerHTML=`
      <span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid currentColor; border-right-color:transparent; border-radius:50%; animation:spin 0.8s linear infinite; margin-right:8px;"></span>
      Sending Message...
    `,await new Promise(p=>setTimeout(p,900)),e.disabled=!1,e.innerHTML=d,F(`Thank you, ${i.value.trim()}! Your message has been received. ${t.responseTime||"I'll reply shortly."}`),a.reset()}))}function F(t){const a=document.getElementById("toastNotification"),e=document.getElementById("toastMessageText");!a||!e||(e.textContent=t,a.classList.add("show"),setTimeout(()=>{a.classList.remove("show")},5e3))}function z(t){document.title=`${t.personal.name} — ${t.personal.title}`;const a=document.querySelector('meta[name="description"]');a&&a.setAttribute("content",`${t.personal.name}: ${t.personal.title}. ${t.personal.tagline}`)}function g(){z(l),b(l),y(l),k(l),w(l),S(l),$(l),C(l),j(l),E(l),I(l),A(),M(),H(l.contact);const t=document.getElementById("themeToggleBtn");t&&t.addEventListener("click",()=>{P()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
//# sourceMappingURL=index-4HwnCbky.js.map
