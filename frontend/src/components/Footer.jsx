import facebook from "@assets/facebook.svg";
import linkedin from "@assets/linkedin.svg";
import twitter from "@assets/twitter.svg";
import youtube from "@assets/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-block">
        <div className="social">
          <a
            href="https://fr-fr.facebook.com/WildCodeSchool/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/WildCodeSchool"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/school/wild-code-school/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.youtube.com/c/WildCodeSchool4ever"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div className="footer-text">
          <span>About</span>
          <span>Privacy</span>
          <span>Terms of Use</span>
          <span>Jobs</span>
        </div>
        <p>Copyright © 2023 Coffee Time - All rights reserved.</p>
      </div>
    </footer>
  );
}
