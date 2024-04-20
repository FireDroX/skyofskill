import "./Caisses.css";
import { useContext, useState } from "react";
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

  const [convertedTxt, setConvertedTxt] = useState("nothing");

  const convertText = (text) => {
    setConvertedTxt(text.replace(/§/g, "&").replace(/&([^lmonk&])/g, "&r&$1"));
  };

  return (
    <section className="App">
      <div>
        <input type="text" onChange={(e) => convertText(e.target.value)} />
        <small style={{ userSelect: "all" }}>{convertedTxt}</small>
        <div className="caisses-container">
          <LoadCaisse
            pageID={boxPage}
            itemID={isClicked}
            setItemID={setIsClicked}
          />
          {caissesDates[boxPage].match("_") ? (
            <small>Box de {getDate()}</small>
          ) : (
            false
          )}
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
