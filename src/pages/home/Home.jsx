import "./Home.css";

import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <section className="App">
      <div>
        <div className="home-container">
          <div className="home-logo">
            <a
              href="https://github.com/FireDroX/skyofskill/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a href="https://skyofskill.fr/" target="_blank" rel="noreferrer">
              <img
                src="https://skyofskill.fr/storage/img/newlog.png"
                alt="skyofskill"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            </a>
          </div>
          <div className="home-title">
            <h5>Boîte à Outils SkyOfSkill</h5>
            <h5>🛠️🎮</h5>
          </div>
        </div>
        <div className="home-warp">
          <small>/is warp FireDroX</small>
        </div>
        <div className="home-imgs">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&colorB=555"
              alt="React-icon"
            />
          </a>
          <a
            href="https://github.com/FireDroX/skyofskill/graphs/contributors"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/github/contributors/firedrox/skyofskill.svg?style=for-the-badge"
              alt="Contributors-icon"
            />
          </a>
          <a
            href="https://github.com/FireDroX/skyofskill/stargazers"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/github/stars/firedrox/skyofskill.svg?style=for-the-badge"
              alt="Stars-icon"
            />
          </a>
          <a
            href="https://discord.gg/Zmmqd9Tbnn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&colorB=555"
              alt="Discord-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
