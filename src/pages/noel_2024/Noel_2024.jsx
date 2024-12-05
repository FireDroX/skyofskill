import { useState, useEffect } from "react";
import "./Noel_2024.css";

const etoiles = [
  { coords: "-2052 95 5016", zone: "SPAWN" },
  { coords: "-1968 95 5007", zone: "SPAWN" },
  { coords: "-1952 85 5074", zone: "SPAWN" },
  { coords: "-1950 89 5100", zone: "SPAWN" },
  { coords: "-1974 91 5102", zone: "SPAWN" },
  { coords: "-2050 90 5087", zone: "SPAWN" },
  { coords: "-2043 86 5073", zone: "SPAWN" },
  { coords: "-2021 88 5057", zone: "SPAWN" },
  { coords: "-2056 69 5158", zone: "WARZONE" },
  { coords: "-2116 62 5201", zone: "WARZONE" },
  { coords: "-2084 64 5236", zone: "WARZONE" },
  { coords: "-2100 59 5232", zone: "WARZONE" },
  { coords: "-2001 59 5302", zone: "WARZONE" },
  { coords: "-1983 59 5333", zone: "WARZONE" },
  { coords: "-1941 75 5182", zone: "WARZONE" },
  { coords: "-1891 63 5181", zone: "WARZONE" },
  { coords: "-1902 59 5238", zone: "WARZONE" },
  { coords: "-1967 64 5382", zone: "WARZONE" },
  { coords: "-1894 65 5363", zone: "WARZONE" },
  { coords: "-1974 25 5212", zone: "WARZONE" },
];
const Noel_2024 = () => {
  const [newTime, setNewTime] = useState(new Date());
  const eventTimer = new Date("Dec 25, 2024 23:59:59 GMT+00:00");

  const getTime = () => {
    const timeDiff = eventTimer - newTime;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${days}d - ${hours}h - ${minutes}min - ${seconds}s`;
  };
  useEffect(() => {
    let timer = setInterval(() => setNewTime(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });

  const TableEtoiles = ({ index, coords, zone }) => {
    return (
      <tr className="noel-container">
        <td className="noel-place">
          <p>{index}</p>
        </td>
        <td className="noel-coords">
          <p>{coords}</p>
        </td>
        <td className="noel-zone">
          <p>{zone}</p>
        </td>
      </tr>
    );
  };

  return (
    <section className="App">
      <div>
        <div className="noel-event">
          <p className="noel-timer">
            L'evenement Noel ce termine dans : {getTime()}
          </p>
          <div className="noel-citrouilles">
            <small>Chasse aux Etoiles</small>
            <table className="noel-container">
              <tbody>
                {etoiles.map((etoile, index) => (
                  <TableEtoiles
                    coords={etoile.coords}
                    zone={etoile.zone}
                    index={index + 1}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noel_2024;
