import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const workHistory = [
  {
    year: "2023",
    title: "Software Engineer",
    description: "Built scalable web apps.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    description: "Worked on UI/UX for e-commerce sites.",
  },
  {
    year: "2019",
    title: "Intern",
    description: "Learned React and JavaScript fundamentals.",
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
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkHistory;
