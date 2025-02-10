import { Avatar } from "@mui/material";
import "/App.css";

function ProfilePic() {
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
}

export default ProfilePic;
