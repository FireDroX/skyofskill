import "./PrestigesPrice.css";
import { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const MAX_PRESTIGE = 95;

  const calcPrice = useCallback(() => {
    const current =
      currentPrestige >= 1 && currentPrestige <= MAX_PRESTIGE + 1
        ? currentPrestige
        : 56;
    const next =
      nextPrestige >= 1 && nextPrestige <= MAX_PRESTIGE + 1 ? nextPrestige : 61;
    if (current >= next) return setPrice(0);
    const selectedPrestiges = prestiges.slice(current, next);
    const totalPrice = selectedPrestiges.reduce(
      (total, prestige) => total + prestige.prix,
      0
    );
    setPrice(totalPrice);
  }, [currentPrestige, nextPrestige, setPrice]);

  const updateURLParams = (key, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleCurrentPrestige = (prestige) => {
    setCurrentPrestige(prestige);
    updateURLParams("current", prestige - 1);
  };

  const handleNextPrestige = (prestige) => {
    setNextPrestige(prestige);
    updateURLParams("next", prestige - 1);
  };

  useEffect(() => calcPrice(), [currentPrestige, nextPrestige, calcPrice]);

  return (
    <div className="calc-prestige">
      <div>
        <h6>Votre prestige</h6>
        <select
          name="Votre prestige"
          defaultValue={
            currentPrestige >= 1 && currentPrestige <= MAX_PRESTIGE + 1
              ? currentPrestige
              : 76
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
            nextPrestige >= 1 && nextPrestige <= MAX_PRESTIGE + 1
              ? nextPrestige
              : 81
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
