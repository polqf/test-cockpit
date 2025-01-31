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
          description: "Wingle Blog: Stay updated with Wingle, the first app that lets travelers on the same flight meet, connect, and chat—no internet needed. Explore news &amp; insights!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-pilots",
          title: "pilots",
          description: "Get to know the team behind Wingle, the pilots steering the future of social travel. ✈️",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
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
      
      description: "Big things are happening! See what’s ahead in Episode 9 of the Cockpit Diaries. 🌍",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/cockpit-episode-9/";
        
      },
    },{id: "post-episode-8-rearview-mirror",
      
        title: "Episode 8: Rearview mirror",
      
      description: "Reflecting on the journey so far—explore the milestones in Episode 8 of the Cockpit Diaries. 🔄",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-8/";
        
      },
    },{id: "post-episode-7-hustle",
      
        title: "Episode 7: Hustle",
      
      description: "The journey never stops! Follow the grind and momentum in Episode 7 of the Cockpit Diaries. 💼",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-7/";
        
      },
    },{id: "post-episode-6-connecting-flights",
      
        title: "Episode 6: Connecting flights",
      
      description: "Travel, connections, and the journey ahead—dive into Episode 6 of the Cockpit Diaries. 🌍",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-6/";
        
      },
    },{id: "post-episode-5-chicken-or-pasta",
      
        title: "Episode 5: Chicken or pasta?",
      
      description: "Decisions, decisions! Take a lighthearted look at travel choices in Episode 5 of the Cockpit Diaries. 🍽️",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-5/";
        
      },
    },{id: "post-episode-4-gear-up",
      
        title: "Episode 4: Gear up!",
      
      description: "Fasten your seatbelts! Wingle is gaining altitude in Episode 4 of the Cockpit Diaries. ✈️",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-4/";
        
      },
    },{id: "post-episode-3-takeoff",
      
        title: "Episode 3: Takeoff!",
      
      description: "Wingle is airborne! Experience the excitement of launch in Episode 3 of the Cockpit Diaries. 🚀",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-3/";
        
      },
    },{id: "post-episode-2-ready-for-takeoff",
      
        title: "Episode 2: Ready for takeoff",
      
      description: "Discover how Wingle is gearing up for takeoff in Episode 2 of the Cockpit Diaries. 🚀",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cockpit-episode-2/";
        
      },
    },{id: "post-episode-1-calibrating-the-radar",
      
        title: "Episode 1: Calibrating the radar",
      
      description: "The journey begins! See how Wingle is setting the course in Episode 1 of the Cockpit Diaries. 🛫",
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
            },},{id: "publications-networking-at-35-000-feet-turn-flights-into-wins",
          title: 'Networking at 35,000 Feet: Turn Flights into Wins',
          description: "Turn your flight into an opportunity! Discover how to make the most of your time in the air by connecting with fellow travelers",
          section: "Publications",handler: () => {
              window.location.href = "/publications/art-of-networking/";
            },},{id: "publications-5-essential-travel-hacks-to-do-before-your-next-flight",
          title: '5 Essential Travel Hacks to Do Before Your Next Flight',
          description: "Prepare like a pro! Follow these five must-do travel tips before your flight to enjoy a smoother and stress-free journey.",
          section: "Publications",handler: () => {
              window.location.href = "/publications/five-before-your-flight/";
            },},{id: "publications-turn-your-flight-into-an-adventure-with-wingle",
          title: 'Turn Your Flight Into an Adventure with Wingle',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/flight-into-adventure/";
            },},{id: "publications-5-unexpected-lessons-you-ll-learn-from-fellow-travelers",
          title: '5 Unexpected Lessons You’ll Learn from Fellow Travelers',
          description: "Every traveler has a story! Find out the surprising insights you can gain just by chatting with the people around you.",
          section: "Publications",handler: () => {
              window.location.href = "/publications/learn-from-travelers/";
            },},{id: "publications-top-5-ways-to-make-new-friends-while-traveling-solo",
          title: 'Top 5 Ways to Make New Friends While Traveling Solo',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/make-friends-travelling-solo/";
            },},{id: "publications-why-talking-to-strangers-can-transform-your-travels",
          title: 'Why Talking to Strangers Can Transform Your Travels',
          description: "Open up to new experiences! See how meeting strangers on your journey can lead to unforgettable moments and valuable connections.",
          section: "Publications",handler: () => {
              window.location.href = "/publications/pre-flight-checklist/";
            },},{id: "publications-make-every-flight-count-connect-amp-engage-in-the-air",
          title: 'Make Every Flight Count: Connect &amp;amp; Engage in the Air',
          description: "Turn your flight into an opportunity! Discover how to make the most of your time in the air by connecting with fellow travelers.",
          section: "Publications",handler: () => {
              window.location.href = "/publications/what-to-do-on-your-next-flight/";
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
