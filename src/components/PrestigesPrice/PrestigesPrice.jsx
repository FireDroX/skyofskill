import "./PrestigesPrice.css";
import { useEffect } from "react";
import { FaCoins } from "react-icons/fa6";

import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { prestiges } from "../../utils/values";

const PrestigesPrice = ({
  currentPrestige,
  setCurrentPrestige,
  nextPrestige,
  setNextPrestige,
  price,
  setPrice,
}) => {
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
    <div className="calc-prestige">
      <div>
        <h6>Votre prestige</h6>
        <select
          name="Votre prestige"
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
          name="Prestige souhaité"
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
  );
};

export default PrestigesPrice;
