const settings = {
  name: "my-app",
  state: {
    frontity: {
      url: "http://mental-geek.local/",
      title: "Mental Geek",
      description: "A Mental Health Community"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["About", "/about/"],
            ["Resources", "/resources/"],
            ["Connect", "/connect/"],
            ["Home", "/"]
          ],
          category: [
            ["General", "/category/general/"],
            ["News", "/category/news/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://mentalgeek-60854f.ingress-comporellon.easywp.com/wp-json",
          homepage: "/",
          postsPage: "/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
