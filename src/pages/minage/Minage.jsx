import "./Minage.css";
import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { mines, boosts } from "../../utils/values";

import { useContext } from "react";
import { FaCoins } from "react-icons/fa6";

import { UserContext } from "../../utils/UserContext";

import InputValues from "../../components/InputValues/InputValues";

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
          <InputValues
            fortune={fortune}
            setFortune={setFortune}
            blocs={blocs}
            setBlocs={setBlocs}
            mine={mine}
            setMine={setMine}
            boost={boost}
            setBoost={setBoost}
          />
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
