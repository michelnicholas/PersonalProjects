import "/styles.css"; // Import the CSS file
import ProfilePic from "./ProfilePic";
import WorkHistory from "./WorkHistory";
import SideHeader from "./SideHeader"; // Import the ProfilePic component
import TopHeader from "./TopHeader";

export default function VerticalDivider() {
  return (
    <div className="container">
      <div className="left-section">
        <ProfilePic />
        <SideHeader />
      </div>
      <div className="right-section">
        <TopHeader />
        <WorkHistory />
      </div>
    </div>
  );
}
