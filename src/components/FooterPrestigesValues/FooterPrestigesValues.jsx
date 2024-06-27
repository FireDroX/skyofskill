import "./FooterPrestigesValues.css";

import { formatNumberWithSpaces } from "../../utils/functions";
import { mines } from "../../utils/values";

const FooterPrestigesValues = () => {
  return (
    <details className="footer">
      <summary>
        Formulé selon le principe qu'un bloc cassé avec une fortune 0 équivaut à
        :
      </summary>
      <table>
        <tbody className="parent">
          {mines.map((mine, index) => (
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
