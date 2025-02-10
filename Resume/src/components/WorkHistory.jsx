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

const WorkHistory = () => {
  return (
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
  );
};

export default WorkHistory;
