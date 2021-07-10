const projectsArr = [
  {
    name: "My Fleet Tracker",
    goal:
      "   As a veteran of the transportation industry, I have had years of experience working with sub-par software in my day to day job.  The reason I began learning web development is so that I would have the ability to build better software that I would be able to use myself in the logistics sector.  MyFleetTracker is my first such application, designed to increase the productivity of dispatchers and minimize communication issues between colleagues. One of the many features of this application is its leveraging of the EIA.gov API (US Energy Information Administration), to provide users with current diesel price averages, which directly impacts negotiations with brokers for freight lane prices.  ",
    approach:
      "In the logistics sector, colleagues often have to exchange information or keep (for lack of a better term) a ledger of sorts to communicate through in real time.   Though there are multiple features of MyFleetTracker, it is ultimately a ledger used to organize truck fleets and is designed to allow for multiple people to use simultaneously to update the content.  This was the first challenge when I first began developing this application, and the reason I eventually implemented a GraphQL subscription model through websockets as opposed to making numerous API calls to fetch information.  GatsbyJS and MaterialUI were used on the front end and Hasura for the backend/database because of their easy integration and consistency when building larger applications.  Since MyFleetTracker is meant to have features only accessible to certain employees, I opted for AuthO to easily manage authorization based on user accounts.  ",
    url: "https://fleet-tracker-demo.netlify.app/",
    git: "https://github.com/mikebabz426/fleet-tracker-revamp",
    stack: {
      front: ["Typescript", "GatsbyJS", "React", "Material-UI"],
      back: ["Hasura", "GraphQL", "Auth0", "API"],
    },
  },
  {
    name: "Sunset Canines",
    goal:
      "   Sunset Canines is a company out of Arizona which specializes in providing proffessional pet training around the country.  They reached out to me to see if I would be able to assist with establishing a web presence for their company.",
    approach:
      "Due to their minimalistic needs, we decided on an informational site and optimizing for functionality and speed.  My go to React framework when looking for performance is GatsbyJS and naturaly was my first choice due to its out of the box optimizations for performance and SEO.  My approach to CSS usually involves a Material Design based component library, but in this particular case I really wanted to focus on making the website as lightweight as possible.  CSS modules are an out of the box option with GatsbyJS but I opted for using Styled Components as an alternative for a smoother development experience.  ",
    url: "https://www.sunsetcanines.com",
    git: "https://github.com/mikebabz426/sunset-revamp",
    stack: { front: ["GatsbyJS", "React", "Styled Components"], back: [] },
  },
  {
    name: "Lucky Charm English Academy",
    goal:
      "   Lucky Charm English Academy is a small local language center, that was in need of an online placement test suite to determine the language profficiency of students.  Prior to having this platform they were still using in person written tests to gauge the level of their new students.  I offered to help them create an online testing platfrom from which they could both test their students and track their progress through an admin dashboard.",
    approach:
      "The need for an admin dashboard from which the employees of the school could easily view test results meant I would need to develop a backend api to handle the test results being sent from the front end.  Due to time constraints, instead of building this in a Node.js enviornment from scratch and connecting to a database from there, I decided to utilize Hasura for my backend needs.  Hasura offered me quick way to get a GraphQL api up and running with a Postgres database to boot.  I am a big advocate for using GatsbyJS on the front end and Hasura intergrates seemlesly with it. ",
    url: "https://lucky-charm.netlify.app/",
    git: "https://github.com/mikebabz426/placement-test-suite",
    stack: {
      front: ["Typescript", "GatsbyJS", "React", "Material-UI"],
      back: ["Hasura", "GraphQL", "Auth0"],
    },
  },
]

export default projectsArr
