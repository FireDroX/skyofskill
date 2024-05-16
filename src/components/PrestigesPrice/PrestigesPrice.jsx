import "./PrestigesPrice.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const calcPrice = () => {
    const current =
      currentPrestige >= 1 && currentPrestige <= 86 ? currentPrestige : 76;
    const next = nextPrestige >= 1 && nextPrestige <= 86 ? nextPrestige : 81;
    if (current >= next) return setPrice(0);
    const selectedPrestiges = prestiges.slice(current, next);
    const totalPrice = selectedPrestiges.reduce(
      (total, prestige) => total + prestige.prix,
      0
    );
    setPrice(totalPrice);
  };

  const handleCurrentPrestige = (prestige) => {
    setCurrentPrestige(prestige);

    if (document.location.search.match("&current=")) {
      navigate(
        document.location.search.replace(
          "&current=" + (currentPrestige - 1),
          "&current=" + (prestige - 1)
        )
      );
    } else {
      navigate(document.location.search + "&current=" + (prestige - 1));
    }
  };

  const handleNextPrestige = (prestige) => {
    setNextPrestige(prestige);

    if (document.location.search.match("&next=")) {
      navigate(
        document.location.search.replace(
          "&next=" + (currentPrestige - 1),
          "&next=" + (prestige - 1)
        )
      );
    } else {
      navigate(document.location.search + "&next=" + (prestige - 1));
    }
  };

  useEffect(() => calcPrice(), [currentPrestige, nextPrestige]);

  return (
    <div className="calc-prestige">
      <div>
        <h6>Votre prestige</h6>
        <select
          name="Votre prestige"
          defaultValue={
            currentPrestige >= 1 && currentPrestige <= 86 ? currentPrestige : 76
          }
          onChange={(e) => handleCurrentPrestige(Number(e.target.value))}
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
          defaultValue={
            nextPrestige >= 1 && nextPrestige <= 86 ? nextPrestige : 81
          }
          onChange={(e) => handleNextPrestige(Number(e.target.value))}
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
