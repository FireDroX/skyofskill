import "./Minage.css";

import { useContext } from "react";
import { UserContext } from "../../utils/contexts/UserContext";

import UnbanTimer from "../../components/UnbanTimer/UnbanTimer";
import InputValues from "../../components/InputValues/InputValues";
import OutputValues from "../../components/OutputValues/OutputValues";
import FooterPrestigesValues from "../../components/FooterPrestigesValues/FooterPrestigesValues";

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

  return (
    <section className="App">
      <div>
        <UnbanTimer />
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
        <FooterPrestigesValues />
      </div>
    </section>
  );
};

export default Minage;
