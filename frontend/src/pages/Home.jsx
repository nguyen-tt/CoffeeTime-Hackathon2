import home from "../assets/home.jpg";

export default function Home() {
  return (
    <div className="home-text">
      <div className="home-image">
        <img src={home} alt="Accueil" />
      </div>
      <div className="text-on-image">
        <h3>Luttons contre la fracture numérique !</h3>
      </div>
    </div>
  );
}
