import "./Caisses.css";
import { LoadCaisse, caissesDates } from "../../utils/LoadCaisse";

const Caisses = () => {
  return (
    <section className="App">
      <div>
        <LoadCaisse index={0} />
        {/* TODO: Add pages handling "<" & ">" with "caissesDates" as the length */}
      </div>
    </section>
  );
};

export default Caisses;
