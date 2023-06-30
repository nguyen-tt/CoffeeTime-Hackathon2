import logo404 from "../assets/logo404.svg";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="cup">
        <span className="steam" />
        <span className="steam" />
        <span className="steam" />
        <div className="cup-handle" />
      </div>
      <div className="notfound-text">
        <img src={logo404} alt="404" className="logo404" />
      </div>
    </div>
  );
}
