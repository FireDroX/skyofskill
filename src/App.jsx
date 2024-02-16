import { useState } from 'react';
import './App.css';

const { f0 } = require('./mines.json');

const compactNumber = (number = Number) => {
  const suffixes = ["", "K", "M", "B", "T", "Q"];
  let suffixNum = Math.floor(("" + number).length / 3);
  
  let shortValue = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(4));
  
  if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(3);
  }
  
  if (shortValue < 1 && suffixNum > 0) {
      shortValue *= 1000;
      suffixNum--;
  }

  return shortValue + suffixes[suffixNum];
};

const formatNumberWithSpaces = (number = 0) => {
  const numberString = number.toString();
  const groups = [];
  for (let i = numberString.length; i > 0; i -= 3) {
    groups.unshift(numberString.substring(Math.max(0, i - 3), i));
  }
  return groups.join(' ');
}

function App() {
  const prestiges = Array.from({length: 17}, (_, i) => "Prestige " + (i * 5 + 5));
  const [ fortune, setFortune ] = useState(1900);
  const [ blocs, setBlocs ] = useState(17500);
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
          <p>{compactNumber(bloc)} / bloc cassé</p>
          <p>({formatNumberWithSpaces(bloc)})</p>
        </div>
        <div>
          <p>{compactNumber(_30sec)} / 30 secondes</p>
          <p>({formatNumberWithSpaces(_30sec)})</p>
        </div>
        <div>
          <p>{compactNumber(_15min)} / 15 minutes</p>
          <p>({formatNumberWithSpaces(_15min)})</p>
        </div>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="input-values">
            <div>
              <p>Fortune de votre pioche</p>
              <input type="text" value={fortune} onChange={handleInputChangeFortune}/>
            </div>
            <select defaultValue={mine} onChange={(e) => setMine(e.target.value)}>
              {prestiges.map((value, index) => (
                <option value={index}>{value}</option>
              ))}
            </select>
            <select defaultValue={boost} onChange={(e) => setBoost(e.target.value)}>
              {Array.from({length: 9}, (_, i) => "Boost x" + (i === 0 ? "0" : (i === 8 ? "10" : i + 1))).map((value, index) => (
                <option value={(index === 8 ? 10 : index + 1)}>{value}</option>
              ))}
            </select>
            <div>
              <p>Blocs cassé / 15 minutes</p>
              <input type="text" value={blocs} onChange={handleInputChangeBlocs}/>
            </div>
          </div>
          <div className='calc-values'>
            <CalcValues />
          </div>
          <div className="footer">
            <p className="footer-title">Formulé selon le principe qu'un bloc cassé avec une fortune 0 équivaut à :"</p>
            <p className="footer-prestiges">
                {prestiges.map((value, index) => (
                  value + " = " + formatNumberWithSpaces(f0[index])
                )).join(" ; ")}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
