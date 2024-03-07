import "./Minage.css";
import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { mines, boosts } from "../../utils/values";

import { useContext } from "react";
import { FaCoins } from "react-icons/fa6";

import { UserContext } from "../../utils/UserContext";

const Minage = () => {
  const {
    fortune,
    setFortune,
    blocs,
    setBlocs,
    mine,
    setMine,
    boost,
    setBoost,
  } = useContext(UserContext);

  const namesTable = [];
  for (let i = 0; i < mines.length; i += 9) {
    namesTable.push(mines.slice(i, i + 9));
  }

  const handleInputChange = (e, v) => {
    let newValue = e.target.value.replace(/[^0-9]/g, "");
    if (newValue === "") newValue = 1;
    if (newValue > 999999) newValue = 999999;

    switch (v) {
      case "fortune":
        setFortune(Number(newValue));
        break;
      case "blocs":
        setBlocs(Number(newValue));
        break;
      default:
        break;
    }
  };

  const CalcValues = () => {
    const bloc = Math.round(
      mines[mine].value * (fortune + 1) * boosts[boost].multiplicateur
    );
    const _15min = Math.round(bloc * blocs);
    const _30sec = Math.round(_15min / 30);

    return (
      <>
        <div>
          <div>
            <h4>{compactNumber(bloc)}</h4>
            <FaCoins />
            <h6>/ Bloc</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(bloc)} <FaCoins />)
          </small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_30sec)}</h4>
            <FaCoins />
            <h6>/ 30s</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(_30sec)} <FaCoins />)
          </small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_15min)}</h4>
            <FaCoins />
            <h6>/ 15min</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(_15min)} <FaCoins />)
          </small>
        </div>
      </>
    );
  };

  return (
    <section className="App">
      <div>
        <div className="minage-values">
          <div className="input-values">
            <div>
              <small>Fortune de votre pioche</small>
              <input
                name="Fortune de votre pioche"
                type="text"
                value={fortune}
                onChange={(e) => handleInputChange(e, "fortune")}
              />
            </div>
            <div>
              <small>Votre mine prestige</small>
              <select
                name="Votre mine prestige"
                defaultValue={mine}
                onChange={(e) => setMine(e.target.value)}
              >
                {mines.map((mine, index) => (
                  <option key={index} value={index}>
                    {mine.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <small>Votre boost de minage</small>
              <select
                name="Votre boost de minage"
                defaultValue={boost}
                onChange={(e) => setBoost(e.target.value)}
              >
                {boosts.map((b, index) => (
                  <option key={index} value={index}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <small>Blocs cassé / 15 minutes</small>
              <input
                name="Blocs cassé / 15 minutes"
                type="text"
                value={blocs}
                onChange={(e) => handleInputChange(e, "blocs")}
              />
            </div>
          </div>
          <div className="calc-values">
            <CalcValues />
          </div>
        </div>
        <div className="footer">
          <h6>
            Formulé selon le principe qu'un bloc cassé avec une fortune 0
            équivaut à :
          </h6>
          <table>
            <tbody className="parent">
              {mines.map((mine, index) => (
                <tr key={index}>
                  <td>
                    <small>
                      {mine.name} = {formatNumberWithSpaces(mine.value)}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Minage;
