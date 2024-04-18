import "./Caisses.css";
import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

import { LoadCaisse, caissesDates } from "../../utils/LoadCaisse";

const Caisses = () => {
  const {
    boxPage,
    setBoxPage,
    isClicked,
    setIsClicked,
  } = useContext(UserContext);

  return (
    <section className="App">
      <div>
        <LoadCaisse pageID={0} itemID={isClicked} setItemID={setIsClicked}/>
        {/* TODO: Add pages handling "<" & ">" with "caissesDates" as the length */}
      </div>
    </section>
  );
};

export default Caisses;
