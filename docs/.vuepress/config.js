const { path } = require("@vuepress/utils");

module.exports = {
  alias: {
    "@assets": path.resolve(__dirname, "./assets/"),
  },
  lang: "en-US",
  title: "AppStand",
  description: "Apps from AppStand.",
  lastUpdated: false,
  contributors: false,
  markdown: {
    anchor: false,
  },
  themeConfig: {
    //logo: "https://vuejs.org/images/logo.png",
    sidebar: false,
    lastUpdated: false,
    contributors: false,
    themePlugins: {
      mediumZoom: false,
    },
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Apps",
        children: [
          {
            text: "RiverBuddy",
            children: [
              // {
              //   text: "AareBuddy",
              //   link: "/apps/aarebuddy",
              // },
              {
                text: "LimmatBuddy",
                link: "/apps/limmatbuddy",
              },
            ],
          },

          {
            text: "More",
            children: [
              {
                text: "TheBarApp",
                link: "/apps/thebarapp",
              },
              {
                text: "Restdiensttage",
                link: "/apps/restdiensttage",
              },
            ],
          },
        ],
      },
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Contact",
        link: "/contact/",
      },
    ],
  },
};
