import "./OutputValues.css";

import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";
import { mines, boosts } from "../../utils/values";
import { FaCoins } from "react-icons/fa6";

const OutputValues = ({ mine, fortune, boost, blocs }) => {
  const CalcValues = () => {
    const bloc = Math.round(
      mines[mine].value * (fortune + 1) * boosts[boost].multiplicateur
    );
    const _15min = Math.round(bloc * blocs);
    const _30sec = Math.round(_15min / 30);

    return (
      <>
        <div>
          <div>
            <h4>{compactNumber(bloc)}</h4>
            <FaCoins />
            <h6>/ Bloc</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(bloc)} <FaCoins />)
          </small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_30sec)}</h4>
            <FaCoins />
            <h6>/ 30s</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(_30sec)} <FaCoins />)
          </small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_15min)}</h4>
            <FaCoins />
            <h6>/ 15min</h6>
          </div>
          <small>
            ( {formatNumberWithSpaces(_15min)} <FaCoins />)
          </small>
        </div>
      </>
    );
  };

  return (
    <div className="calc-values">
      <CalcValues />
    </div>
  );
};

export default OutputValues;
