import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const workHistory = [
  {
    year: "2023",
    title: "Lead Quality Assurance Automation Enginner",
    description: [
      "Participating on various Scrum ceremonies such as: Daily Scrum (daily standup), Sprint Planning, Sprint Review, Sprint Demo, Sprint Retrospective, Backlog Refinement/grooming and Scrum of Scrum.",
      "Optimized Continuous integration and continous development(CI/CD) pipeline and implemention continous testing",
      "Create and implement test automation framework from scratch",
      "High skilled Regression Testing, Functional Testing adn system integration testing",
    ],
  },
  {
    year: "2021",
    title: "Frontend Developer",
    description: [
      "Worked on UI/UX for e-commerce.",
      "Implemented responsive design.",
      "Improved accessibility.",
    ],
  },
  {
    year: "2019",
    title: "Intern",
    description: [
      "Learned React and JavaScript.",
      "Assisted in bug fixes.",
      "Wrote documentation.",
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
        <LinkedInIcon
          onClick={handleLinkedInClick}
          fontSize="large"
          className="linked-in"
        />
        <GitHubIcon
          className="github"
          fontSize="large"
          onClick={handleGithubClick}
        />
      </div>
      <div className="work-history">
        <h2>Work History</h2>
        {workHistory.map((job, index) => (
          <div key={index} className="work-entry">
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
