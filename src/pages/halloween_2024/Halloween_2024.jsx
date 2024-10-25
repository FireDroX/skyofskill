import { useState, useEffect } from "react";
import "./Halloween_2024.css";

const citrouilles = [
  { coords: "-1971 5078", zone: "SPAWN" },
  { coords: "-1949 5096", zone: "SPAWN" },
  { coords: "-1982 4991", zone: "SPAWN" },
  { coords: "-2024 5127", zone: "SPAWN" },
  { coords: "-2041 5017", zone: "SPAWN" },
  { coords: "-1997 5075", zone: "SPAWN" },
  { coords: "-1915 5388", zone: "WARZONE" },
  { coords: "-2120 5387", zone: "WARZONE" },
  { coords: "-2055 5273", zone: "WARZONE" },
  { coords: "-2028 5270", zone: "WARZONE" },
  { coords: "-2090 5176", zone: "WARZONE" },
  { coords: "-2104 5175", zone: "WARZONE" },
  { coords: "-2003 5131", zone: "WARZONE" },
  { coords: "-2078 5304", zone: "WARZONE" },
  { coords: "-1936 5263", zone: "WARZONE" },
  { coords: "-1918 5387", zone: "WARZONE" },
  { coords: "-1992 5260", zone: "WARZONE" },
  { coords: "-2066 5239", zone: "WARZONE" },
  { coords: "-1927 5224", zone: "WARZONE" },
  { coords: "-1912 5246", zone: "WARZONE" },
];

const Halloween_2024 = () => {
  const [newTime, setNewTime] = useState(new Date());
  const eventTimer = new Date("Nov 22, 2024 23:59:59 GMT+00:00");

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

  const TableCitrouille = ({ index, coords, zone }) => {
    return (
      <tr className="halloween-container">
        <td className="halloween-place">
          <p>{index}</p>
        </td>
        <td className="halloween-coords">
          <p>{coords}</p>
        </td>
        <td className="halloween-zone">
          <p>{zone}</p>
        </td>
      </tr>
    );
  };

  return (
    <section className="App">
      <div>
        <div className="halloween-event">
          <p className="halloween-timer">
            L'evenement Halloween ce termine dans : {getTime()}
          </p>
          <div className="halloween-citrouilles">
            <small>Chasse aux citrouilles</small>
            <table className="halloween-container">
              <tbody>
                {citrouilles.map((citrouille, index) => (
                  <TableCitrouille
                    coords={citrouille.coords}
                    zone={citrouille.zone}
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

export default Halloween_2024;
