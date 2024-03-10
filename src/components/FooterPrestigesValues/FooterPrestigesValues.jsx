import "./FooterPrestigesValues.css";

import { formatNumberWithSpaces } from "../../utils/functions";
import { mines } from "../../utils/values";

const FooterPrestigesValues = () => {
  return (
    <div className="footer">
      <h6>
        Formulé selon le principe qu'un bloc cassé avec une fortune 0 équivaut à
        :
      </h6>
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
    </div>
  );
};

export default FooterPrestigesValues;
