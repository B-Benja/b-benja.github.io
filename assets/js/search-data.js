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
          description: "A growing collection of your cool projects.",
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
        },{id: "projects-tracing-science-in-patents",
          title: 'Tracing Science in Patents',
          description: "identifying patent–paper pairs through visual and textual overlap",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-scraping-patent-claims",
          title: 'Scraping Patent Claims',
          description: "extracting legal boundaries of inventions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-tracing-science-in-patents",
          title: 'Tracing Science in Patents',
          description: "identifying patent–paper pairs through visual and textual overlap",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a/";
            },},{id: "projects-scraping-patent-claims",
          title: 'Scraping Patent Claims',
          description: "extracting legal boundaries of inventions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/b/";
            },},{id: "projects-scraping-patent-claims",
          title: 'Scraping Patent Claims',
          description: "extracting legal boundaries of inventions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/c/";
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
