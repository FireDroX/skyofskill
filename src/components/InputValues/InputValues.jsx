import "./InputValues.css";

import { mines, boosts } from "../../utils/values";

const InputValues = ({
  fortune,
  setFortune,
  blocs,
  setBlocs,
  mine,
  setMine,
  boost,
  setBoost
}) => {
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

  return (
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
  );
};

export default InputValues;
