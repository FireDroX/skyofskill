import "./Caisses.css";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

import {
  LoadCaisse,
  caissesDates,
} from "../../components/LoadCaisse/LoadCaisse";
import { numberToMonth } from "../../utils/functions";

const Caisses = () => {
  const { boxPage, setBoxPage, isClicked, setIsClicked } =
    useContext(UserContext);

  const handleBtn = (e) => {
    switch (e) {
      case "+":
        if (boxPage !== caissesDates.length - 1) {
          setBoxPage(boxPage + 1);
          setIsClicked({ clicked: false, index: 0 });
        }
        break;
      case "-":
        if (boxPage !== 0) {
          setBoxPage(boxPage - 1);
          setIsClicked({ clicked: false, index: 0 });
        }
        break;
      default:
        break;
    }
  };

  const getDate = () => {
    let dateArray = caissesDates[boxPage].split("_");
    return `${numberToMonth(dateArray[0]) + " 20" + dateArray[1]}`;
  };

  return (
    <section className="App">
      <div>
        <div className="caisses-container">
          <LoadCaisse
            pageID={boxPage}
            itemID={isClicked}
            setItemID={setIsClicked}
          />
          <small>Box de {getDate()}</small>
          <div className="input-btns">
            <button onClick={() => handleBtn("-")}>{"<"}</button>
            <button onClick={() => handleBtn("+")}>{">"}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caisses;
