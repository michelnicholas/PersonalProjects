import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const workHistory = [
  {
    year: "Dec 2022 - Present",
    company: "Scholastic",
    title: " Lead Quality Assurance Automation Enginner",
    description: [
      "Participating on various Scrum ceremonies such as: Daily Scrum (daily standup), Sprint Planning, Sprint Review, Sprint Demo, Sprint Retrospective, Backlog Refinement/grooming and Scrum of Scrum.",
      "Optimized Continuous integration and continous development(CI/CD) pipeline and implemention continous testing",
      "Create and implement test automation framework from scratch",
      "High skilled Regression Testing, Functional Testing adn system integration testing",
      "Implemented Design Patterns that are extensively used in test automation",
    ],
  },
  {
    year: "March 2022 - November 2022",
    company: "AcquireCrowd",
    title: "Lead Quality Assurance Test Architect",
    description: [
      "Participating on various scrum ceremonies such as: Daily Scrum(daily standup), Sprint Planning, Sprint Review, Sprint Demo, Sprint Retrospective, Backlog Refinement/grooming and scrum of scrums",
      "As part of SDLC and STLC, worked in DevOps enviroment",
      "Implemented Design Patterns that are extensively used in test automation",
    ],
  },
  {
    year: "October 2020 - February 2022",
    company: "AWS",
    title: " Software Development Engineer in Test (SDET)",
    description: [
      "Highly Skilled in smoke testing, regresstion testing, functional testing,back-end testing,apritesting,system integration testing and performance testing",
      "For all our UI web elements i created object repository where we placed their element locator (Xpath,ID,Name,CSS path and class name)",
      "Configured Github jobs for continous integration/ continous development",
    ],
  },
];

function WorkHistory() {
  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/michel-nicholas-65166112a/");
  }

  function handleGithubClick() {
    window.open(
      "https://github.com/michelnicholas?tab=overview&from=2025-02-01&to=2025-02-10"
    );
  }

  return (
    <>
      <div className="social-links">
        <h5 className="linked-in-text">Linkedin</h5>
        <LinkedInIcon
          onClick={handleLinkedInClick}
          fontSize="large"
          className="linked-in"
        />
        <h5>Github</h5>
        <GitHubIcon
          className="github"
          fontSize="large"
          onClick={handleGithubClick}
        />
      </div>
      <div>
        <h2 className="work-history">Work History</h2>
        <hr className="line-2"></hr>
        {workHistory.map((job, index) => (
          <div key={index} className="work-entry">
            <h2>{job.company}</h2>
            <h3>
              {job.title} ({job.year})
            </h3>
            {Array.isArray(job.description) && job.description.length > 0 ? (
              <ul>
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>No description available.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkHistory;
