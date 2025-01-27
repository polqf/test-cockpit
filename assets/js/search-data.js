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
          description: "Wingle&#39;s Blog. Follow all the news around the first app that allows people on the same plane to meet, connect and chat; all without the need of internet connection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-download-the-app",
          title: "download the app",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/letswingle.com";
          },
        },{id: "post-episode-9-it-s-in-the-air",
      
        title: "Episode 9: It’s in the air",
      
      description: "Cockpit Diaries - It’s in the air",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-9/";
        
      },
    },{id: "post-episode-8-rearview-mirror",
      
        title: "Episode 8: Rearview mirror",
      
      description: "Cockpit Diaries - Rearview mirror",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-8/";
        
      },
    },{id: "post-episode-7-hustle",
      
        title: "Episode 7: Hustle",
      
      description: "Cockpit Diaries - Hustle",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-7/";
        
      },
    },{id: "post-episode-6-connecting-flights",
      
        title: "Episode 6: Connecting flights",
      
      description: "Cockpit Diaries - Connecting flights",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-6/";
        
      },
    },{id: "post-episode-5-chicken-or-pasta",
      
        title: "Episode 5: Chicken or pasta?",
      
      description: "Cockpit Diaries - Chicken or pasta?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-5/";
        
      },
    },{id: "post-episode-4-gear-up",
      
        title: "Episode 4: Gear up!",
      
      description: "Cockpit Diaries - Gear up!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-4/";
        
      },
    },{id: "post-episode-3-takeoff",
      
        title: "Episode 3: Takeoff!",
      
      description: "Cockpit Diaries - Takeoff!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-3/";
        
      },
    },{id: "post-episode-2-ready-for-takeoff",
      
        title: "Episode 2: Ready for takeoff",
      
      description: "Cockpit Diaries - Ready for takeoff",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-2/";
        
      },
    },{id: "post-episode-1-calibrating-the-radar",
      
        title: "Episode 1: Calibrating the radar",
      
      description: "Cockpit Diaries - Calibrating the radar",
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
            },},{id: "news-meet-people-at-the-airport",
          title: 'Meet people at the airport',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/meet-people-at-the-airport/";
            },},{id: "news-wingle-x-iberia-express",
          title: 'Wingle x Iberia Express',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/wingle-x-iberia-express/";
            },},{id: "news-become-a-pilot-wingle-39-s-ambassador-program",
          title: 'Become a Pilot - Wingle&amp;#39;s Ambassador Program',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/become-a-pilot-wingles-ambassador-program/";
            },},{id: "news-wingle-x-terravision",
          title: 'Wingle x Terravision',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/wingle-x-terravision/";
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
