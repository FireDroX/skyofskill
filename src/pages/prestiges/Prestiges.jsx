import "./Prestiges.css";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

import PrestigesChart from "../../components/PrestigesChart/PrestigesChart";
import PrestigesPrice from "../../components/PrestigesPrice/PrestigesPrice";

const Prestiges = () => {
  const {
    page,
    setPage,
    currentPrestige,
    setCurrentPrestige,
    nextPrestige,
    setNextPrestige,
    price,
    setPrice,
  } = useContext(UserContext);

  return (
    <section className="App">
      <div>
        <div className="minage-prestige">
          <PrestigesChart page={page} setPage={setPage} />
          <PrestigesPrice
            currentPrestige={currentPrestige}
            setCurrentPrestige={setCurrentPrestige}
            nextPrestige={nextPrestige}
            setNextPrestige={setNextPrestige}
            price={price}
            setPrice={setPrice}
          />
        </div>
      </div>
    </section>
  );
};

export default Prestiges;
