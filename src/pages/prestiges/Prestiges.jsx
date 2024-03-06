import "./Prestiges.css";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label,
} from "recharts";
import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { FaCoins } from "react-icons/fa6";

const { prestiges } = require("../../utils/values.json");

/**
 * FIXME: Make the chart smaller on small screens so it can fit in the div "minage-prestige"
 * NOTE: Make more pages with half the values in each.
 */

const Prestiges = () => {
  const [page, setPage] = useState(4);
  const [currentPrestige, setCurrentPrestige] = useState(70);
  const [nextPrestige, setNextPrestige] = useState(85);
  const [price, setPrice] = useState(0);

  const newPrestige = [];
  for (let i = 0; i < prestiges.length; i += 17) {
    newPrestige.push(prestiges.slice(i, i + 17));
  }

  const handleBtn = (e) => {
    switch (e) {
      case "+":
        if (page !== 4) setPage(page + 1);
        break;
      case "-":
        if (page !== 0) setPage(page - 1);
        break;
      default:
        break;
    }
  };

  const calcPrice = () => {
    if (currentPrestige >= nextPrestige) return setPrice(0);
    const selectedPrestiges = prestiges.slice(currentPrestige, nextPrestige);
    const totalPrice = selectedPrestiges.reduce(
      (total, prestige) => total + prestige.prix,
      0
    );
    setPrice(totalPrice);
  };

  useEffect(() => calcPrice(), [currentPrestige, nextPrestige]);

  return (
    <section className="App">
      <div>
        <div className="minage-prestige">
          <div className="input-prestige">
            <LineChart
              layout="vertical"
              width={500}
              height={300}
              data={newPrestige[page]}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <YAxis
                dataKey="prix"
                tickFormatter={compactNumber}
                type="number"
                domain={["dataMin", "dataMax"]}
                reversed
              />
              <XAxis dataKey="name" type="category">
                <Label value="Prestiges" offset={0} position="insideBottom" />
              </XAxis>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--bg)",
                  border: "var(--primary)",
                  color: "var(--text)",
                  borderRadius: "25%",
                  textTransform: "uppercase",
                }}
              />
              <Line type="monotone" dataKey="name" stroke="var(--primary)" />
            </LineChart>
            <div className="input-btns">
              <button onClick={() => handleBtn("-")}>-</button>
              <button onClick={() => handleBtn("+")}>+</button>
            </div>
            <small>
              Prix de {newPrestige[page][0].name} à {newPrestige[page][16].name}
            </small>
          </div>
          <div className="calc-prestige">
            <div>
              <h6>Votre prestige</h6>
              <select
                defaultValue={currentPrestige}
                onChange={(e) => setCurrentPrestige(e.target.value)}
              >
                {prestiges.map((p, index) => (
                  <option key={index} value={index + 1}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h6>Prestige souhaité</h6>
              <select
                defaultValue={nextPrestige}
                onChange={(e) => setNextPrestige(e.target.value)}
              >
                {prestiges.map((p, index) => (
                  <option key={index} value={index + 1}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h6>Prix du passage</h6>
              <div>
                <h4>{compactNumber(price)}</h4>
                <FaCoins />
              </div>
              <small>
                ( {formatNumberWithSpaces(price)}) <FaCoins />
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prestiges;
