import "./FooterPrestigesValues.css";

import { formatNumberWithSpaces } from "../../utils/functions";
import { mines } from "../../utils/values";

const FooterPrestigesValues = () => {
  return (
    <details className="footer">
      <summary>Mine de la moins rentable à la plus rentable :</summary>
      <table>
        <tbody className="parent">
          {[...mines]
            .sort((a, b) => a.value - b.value)
            .map((mine, index) => (
              <tr key={index}>
                <td>
                  <small>
                    {mine.name} = {formatNumberWithSpaces(mine.value)}
                  </small>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </details>
  );
};

export default FooterPrestigesValues;
