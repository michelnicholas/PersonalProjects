import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

function Contact() {
  return (
    <>
      <header>
        <h2 className="header">Contact</h2>
        <hr className="line" />
        <span className="header-info">
          <LocalPhoneIcon className="icon" />
          <p className="contact-spacing">5714126186</p>
        </span>
        <span className="header-info">
          <EmailIcon className="icon" />
          <p className="contact-spacing">michelnicholas1993@gmail.com</p>
        </span>
        <span className="header-info">
          <PlaceIcon className="icon" />
          <p className="contact-spacing">Virginia</p>
        </span>
        <span className="header-info">
          <LanguageIcon className="icon" />
          <p className="contact-spacing">
            Click here for more
            <a href="https://github.com/michelnicholas"> projects</a>
          </p>
        </span>
      </header>
      ;
    </>
  );
}

export default Contact;
