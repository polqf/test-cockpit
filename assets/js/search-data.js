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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-episode-9-it-s-in-the-air",
      
        title: "Episode 9: It’s in the air",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-9/";
        
      },
    },{id: "post-episode-8-rearview-mirror",
      
        title: "Episode 8: Rearview mirror",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-8/";
        
      },
    },{id: "post-episode-7-hustle",
      
        title: "Episode 7: Hustle",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-7/";
        
      },
    },{id: "post-episode-6-connecting-flights",
      
        title: "Episode 6: Connecting flights",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-6/";
        
      },
    },{id: "post-episode-5-chicken-or-pasta",
      
        title: "Episode 5: Chicken or pasta?",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-5/";
        
      },
    },{id: "post-episode-4-gear-up",
      
        title: "Episode 4: Gear up!",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-4/";
        
      },
    },{id: "post-episode-3-takeoff",
      
        title: "Episode 3: Takeoff!",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-3/";
        
      },
    },{id: "post-episode-2-ready-for-takeoff",
      
        title: "Episode 2: Ready for takeoff",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-2/";
        
      },
    },{id: "post-episode-1-calibrating-the-radar",
      
        title: "Episode 1: Calibrating the radar",
      
      description: "Cockpit diaries series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-1/";
        
      },
    },{id: "news-wingle-lands-in-south-summit",
          title: 'Wingle lands in South Summit!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/wingle-lands-in-south-summit/";
            },},{id: "news-wingle-launches-in-europe",
          title: 'Wingle launches in Europe!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/wingle-launch/";
            },},{id: "news-wingle-x-bmg-music",
          title: 'Wingle x BMG Music',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/wingle-x-bmg-music/";
            },},{
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
