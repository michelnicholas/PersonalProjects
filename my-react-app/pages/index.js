import styles from "../styles/Home.module.css"; // Make sure you have a styles file if you want to use classes.

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return { props: { teams: data.response.teamList } }; // Pass teams to the page
}

export default function Home({ teams }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>NBA Teams</h1>
      <div className={styles.teamList}>
        {teams && teams.length > 0 ? (
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
              <h3 className={styles.teamName}>{team.name}</h3>
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
          <p>No teams found</p>
        )}
      </div>
    </div>
  );
}
