/* eslint-disable @next/next/no-img-element */
// Import the CSS module for styling
import styles from "../styles/Home.module.css"; // Make sure you have a styles file if you want to use classes.

// Fetch data from the API and pass it as props to the page component
export async function getServerSideProps() {
  // Fetch data from the API endpoint
  const res = await fetch("http://localhost:3000/api/east-atlantic-teams");
  // Parse the JSON response
  const data = await res.json();

  // Return the data as props to the page component
  return { props: { teams: data.response.teamList } }; // Pass teams to the page
}

// Define the Home component which receives the teams data as props
export default function Home({ teams }) {
  return (
    <div className={styles.container}>
      {/* Page heading */}
      <h1 className={styles.heading}>East Atlantic Teams</h1>
      <div className={styles.teamList}>
        {/* Check if teams data is available and has elements */}
        {teams && teams.length > 0 ? (
          // Map through the teams array and render each team
          teams.map((team) => (
            <div className={styles.teamCard} key={team.id}>
              {/* Conditionally render logo if it exists, otherwise use a default image */}
              <div className={styles.logoContainer}>
                {team.logo ? (
                  <img
                    src={team.logo}
                    alt={team.name}
                    className={styles.teamLogo}
                  />
                ) : (
                  <img
                    src="/default-logo.png" // Path to a default image
                    alt="Default logo"
                    className={styles.teamLogo}
                  />
                )}
              </div>
              {/* Render the team name */}
              <h3 className={styles.teamName}>{team.name}</h3>
              {/* Link to the team's page */}
              <a
                href={team.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visit Team Page
              </a>
            </div>
          ))
        ) : (
          // Render a message if no teams are found
          <p>No teams found</p>
        )}
      </div>
    </div>
  );
}
