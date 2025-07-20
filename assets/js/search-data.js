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
          title: "Teaching",
          description: "Overview of teaching experience, including university courses, thesis supervision, and language teaching in China and Japan.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-ppps",
          title: 'PPPs',
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
              window.location.href = "/projects/a_project/";
            },},{id: "projects-chocolatey",
          title: 'Chocolatey',
          description: "A short tutorial on how to use Chocolatey to install, update, and manage Windows programs from the command line.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/b_project/";
            },},{id: "projects-podcast-mover-amp-tagger",
          title: 'Podcast Mover &amp;amp; Tagger',
          description: "batch-download, tag, and sort podcast episodes for long-term local use",
          section: "Projects",handler: () => {
              window.location.href = "/projects/c_project/";
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
