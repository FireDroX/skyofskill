import './Minage.css';
import { compactNumber, formatNumberWithSpaces } from "../../utils/functions";

import { useState } from 'react';
import { FaCoins } from "react-icons/fa6";


const { f0 } = require('../../utils/mines.json');

const Minage = () => {
  const prestiges = Array.from({length: 17}, (_, i) => "Prestige " + (i * 5 + 5));
  const [ fortune, setFortune ] = useState(1900);
  const [ blocs, setBlocs ] = useState(17000);
  const [ mine, setMine ] = useState(13);
  const [ boost, setBoost ] = useState(7);

  const handleInputChangeFortune = (event) => {
    let newValue = event.target.value.replace(/[^0-9]/g, '');
    if(newValue === '') newValue = 1;
    setFortune(Number(newValue));
  };

  const handleInputChangeBlocs = (event) => {
    let newValue = event.target.value.replace(/[^0-9]/g, '');
    if(newValue === '') newValue = 1;
    setBlocs(Number(newValue));
  };

  const calcBloc = (fx = Number, pioche = Number, booster = Number) => Math.round(fx * (pioche + 1) * booster);
  const calc15min = (rendement = Number, blocs = Number) => Math.round(rendement * blocs); 
  const calc30sec = (_15min = Number) => Math.round(_15min / 30);

  const CalcValues = () => {
    let bloc = calcBloc(f0[mine], fortune, boost);
    let _15min = calc15min(bloc, blocs);
    let _30sec = calc30sec(_15min);
    return (
      <>
        <div>
          <div>
            <h4>{compactNumber(bloc)}</h4>
            <FaCoins />
            <h5>/ Bloc</h5>
          </div>
          <small>( {formatNumberWithSpaces(bloc)} <FaCoins />)</small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_30sec)}</h4>
            <FaCoins />
            <h5>/ 30s</h5>
          </div>
          <small>( {formatNumberWithSpaces(_30sec)} <FaCoins />)</small>
        </div>
        <div>
          <div>
            <h4>{compactNumber(_15min)}</h4>
            <FaCoins />
            <h5>/ 15min</h5>  
          </div>
          <small>( {formatNumberWithSpaces(_15min)} <FaCoins />)</small>
        </div>
      </>
    )
  }

  return (
    <section className="App">
      <div>
        <div className='minage-values'>
          <div className="input-values">
            <div>
              <small>Fortune de votre pioche</small>
              <input type="text" value={fortune} onChange={handleInputChangeFortune}/>
            </div>
            <div>
              <small>Votre mine prestige</small>
              <select defaultValue={mine} onChange={(e) => setMine(e.target.value)}>
                {prestiges.map((value, index) => (
                  <option value={index}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <small>Votre boost de minage</small>
              <select defaultValue={boost} onChange={(e) => setBoost(e.target.value)}>
                {Array.from({length: 9}, (_, i) => "Boost x" + (i === 0 ? "0" : (i === 8 ? "10" : i + 1))).map((value, index) => (
                  <option value={(index === 8 ? 10 : index + 1)}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <small>Blocs cassé / 15 minutes</small>
              <input type="text" value={blocs} onChange={handleInputChangeBlocs}/>
            </div>
          </div>
          <div className='calc-values'>
            <CalcValues />
          </div>
        </div>
        <div className="footer">
          <h5>Formulé selon le principe qu'un bloc cassé avec une fortune 0 équivaut à :</h5>
          <small>
              {prestiges.map((value, index) => (
                value + " = " + formatNumberWithSpaces(f0[index])
              )).join(" ; ")}
          </small>
        </div>
      </div>
    </section>
  );
}

export default Minage;