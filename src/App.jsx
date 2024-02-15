import { useState } from 'react';
import './App.css';

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

const formatNumberWithSpaces = (number = Number) => {
  const numberString = number.toString();
  const groups = [];
  let remainingDigits = numberString.length % 3 || 3;
  for (let i = numberString.length - 3; i >= 0; i -= 3) {
      groups.push(numberString.substr(i, 3));
  }
  groups.push(numberString.substr(0, remainingDigits));

  return groups.reverse().join(' ');
}

function App() {
  const f0 = [
    480,   // p5
    750,   // p10
    1250,  // p15
    3000,  // p20
    3750,  // p25
    5600,  // p30
    7000,  // p35
    9500,  // p40
    11500, // p45
    14500, // p50
    16000, // p55
    18000, // p60
    21000, // p65
    24000, // p70
    28000, // p75
    32000, // p80
    36000, // p85
  ]
  const prestiges = Array.from({length: 17}, (_, i) => "Prestige " + (i * 5 + 5));
  const [ fortune, setFortune ] = useState(1900);
  const [ blocs, setBlocs ] = useState(17500);
  const [ mine, setMine ] = useState(13);
  const [ boost, setBoost ] = useState(7);

  const handleInputChangeFortune = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setFortune(newValue);
  };

  const handleInputChangeBlocs = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setBlocs(newValue);
  };

  const calcBloc = (fx = Number, pioche = Number, booster = Number) => {
    return Math.round(fx * (pioche + 1) * booster);
  }

  const calc15min = (rendement = Number, blocs = Number) => {
    return Math.round(rendement * blocs);
  }

  const calc30sec = (_15min = Number) => {
    return Math.round(_15min / 30);
  }

  const CalcValues = () => {
    let bloc = calcBloc(f0[mine], fortune, boost);
    let _15min = calc15min(bloc, blocs);
    let _30sec = calc30sec(_15min);
    return (
      <div>
        <p>{compactNumber(bloc)} / bloc cassé<br />( {formatNumberWithSpaces(bloc)} )</p>
        <p>{compactNumber(_30sec)} / 30 secondes<br />( {formatNumberWithSpaces(_30sec)} )</p>
        <p>{compactNumber(_15min)} / 15 minutes<br />( {formatNumberWithSpaces(_15min)} )</p>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <input type="text" value={fortune} onChange={handleInputChangeFortune}/>
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
            <input type="text" value={blocs} onChange={handleInputChangeBlocs}/>
          </div>
          <div>
            <CalcValues />
          </div>
          <div className="footer">
            <p className="footer-title">Développer sous principe que 1 bloc cassé avec une fortune 0 est égal à :</p>
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
