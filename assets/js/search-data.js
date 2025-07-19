// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool¹ projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Complete CV in PDF, Update July, 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Overview of my teaching experience, including lectures, seminars, thesis supervision, and language teaching in China and Japan.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-patents-amp-papers",
          title: 'Patents &amp;amp; papers',
          description: "Identifying Patent-Paper-Pairs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-webscraping",
          title: 'Webscraping',
          description: "Scraping Patent Claims",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-zotero",
          title: 'Zotero',
          description: "Tutorial for the open-source bibliography and citation manager Zotero.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-chocolatey",
          title: 'Chocolatey',
          description: "how to use the package manager for Windows",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-scraping-patent-claims",
          title: 'Scraping Patent Claims',
          description: "extracting legal boundaries of inventions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "teaching-economics-of-innovation-introduction",
          title: 'Economics of Innovation: Introduction',
          description: "Seminar on why firms and countries innovate differently",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/econ-innovation/";
            },},{id: "teaching-economic-policy",
          title: 'Economic Policy',
          description: "Seminar on microeconomic tools for policy",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/econ-policy/";
            },},{id: "teaching-network-society-citation-networks",
          title: 'Network Society: Citation Networks',
          description: "Lecture on patent-citation network structure",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/network-society/";
            },},{id: "teaching-patents-design-rights-amp-standards",
          title: 'Patents, Design Rights &amp;amp; Standards',
          description: "Seminar on IP strategy and standardization",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/patents-standards/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62.%62%75%65%74%74%6E%65%72@%74%75%65.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/b-benja", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/benjamin-buettner", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8-m27h4AAAAJ", "_blank");
        },
      },{
        id: 'social-TUe',
        title: 'Tue',
        section: 'Socials',
        handler: () => {
          window.open("https://research.tue.nl/en/persons/benjamin-b%C3%BCttner", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
