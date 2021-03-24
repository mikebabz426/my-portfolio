const projectsArr = [
  {
    name: "My Fleet Tracker",
    description:
      "   As a veteran of the transportation industry, I have had years of experience working with sub-par software in my day to day job.  The reason I began learning web development is so that I would have the ability to build better software that I would be able to use myself in the logistics sector.  MyFleetTracker is my first such application, designed to increase the productivity of dispatchers and minimize communication issues between colleagues. One of the many features of this application is its leveraging of the EIA.gov API (US Energy Information Administration), to provide users with current diesel price averages, which directly impacts negotiations with brokers for freight lane prices.  ",
    url: "https://fleet-speed.netlify.app/",
    git: "https://github.com/mikebabz426/fleet-tracker-revamp",
    stack: {
      front: ["Typescript", "GatsbyJS", "React", "Material-UI"],
      back: ["Hasura", "GraphQL"],
    },
  },
  {
    name: "Sunset Canines",
    description:
      "   Sunset Canines is a company out of Arizona which specializes in providing proffessional pet training around the country.  They reached out to me to see if I would be able to assist with establishing a web presence for their company.  Due to their minimalistic needs, we decided on an informational site using GatsbyJS and optimizing for functionality and speed.",
    url: "https://www.sunsetcanines.com",
    git: "https://github.com/mikebabz426/sunset-revamp",
    stack: { front: ["GatsbyJS", "React", "Styled Components"], back: [] },
  },
  {
    name: "Lucky Charm English Academy",
    description:
      "   Lucky Charm English Academy is a small local language center, that was in need of an online placement test suite to determine the language profficiency of students.  Prior to having this platform they were still using in person written tests to gauge the level of their new students.  I offered to help them create a basic online testing platfrom from which they could both test their students and track their progress through an admin dashboard.",
    url: "https://lucky-charm.netlify.app/",
    git: "https://github.com/mikebabz426/placement-test-suite",
    stack: {
      front: ["Typescript", "GatsbyJS", "React", "Material-UI"],
      back: ["Hasura", "GraphQL"],
    },
  },
]

export default projectsArr
