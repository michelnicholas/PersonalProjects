import "/styles.css"; // Import the CSS file
import ProfilePic from "./ProfilePic";
import WorkHistory from "./WorkHistory";
import Header from "./Header"; // Import the ProfilePic component

export default function VerticalDivider() {
  return (
    <div className="container">
      <div className="left-section">
        <ProfilePic />
        <Header />
      </div>
      <div className="right-section">
        <WorkHistory />
      </div>
    </div>
  );
}
