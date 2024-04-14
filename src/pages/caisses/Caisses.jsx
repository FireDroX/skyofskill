import "./Caisses.css";
import { LoadCaisse, caissesDates } from "../../utils/LoadCaisse";

const Caisses = () => {
  return (
    <section className="App">
      <div>
        <LoadCaisse index={0} />
      </div>
    </section>
  );
};

export default Caisses;
