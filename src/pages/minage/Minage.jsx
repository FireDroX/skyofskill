import "./Minage.css";
import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { mines, boosts } from "../../utils/values";

import { useContext } from "react";

import { UserContext } from "../../utils/UserContext";

import InputValues from "../../components/InputValues/InputValues";
import OutputValues from "../../components/OutputValues/OutputValues";

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
          <OutputValues
            mine={mine}
            fortune={fortune}
            blocs={blocs}
            boost={boost}
          />
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
