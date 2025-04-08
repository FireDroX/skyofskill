import "../MinecraftColoredText/MinecraftColoredText.css";
import { useState } from "react";

import ConvertFinalText from "../ConverFinalText/ConvertFinalText";

const ColoredSentence = () => {
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState([]);
  const [nbOfColors, setNbOfColors] = useState(1);

  const handleCopy = () => {
    navigator.clipboard.writeText([...modifiedText].join(""));
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    setFinalText(e.target.value.split(""));
  };

  // Stocke les préfixes des inputs
  const [prefixes, setPrefixes] = useState(Array(nbOfColors).fill(""));

  // Met à jour un préfixe spécifique
  const handleChange = (index, value) => {
    const newPrefixes = [...prefixes];
    newPrefixes[index] = value;
    setPrefixes(newPrefixes);
  };

  // Génère le texte modifié
  const modifiedText = finalText.map((char, index) => {
    const prefixIndex = index % nbOfColors;
    return `${prefixes[prefixIndex] || ""}${char}&r`;
  });

  return (
    <div className="minecraft-colors">
      <div className="minecraft-txt">
        <div>
          <small style={{ color: "var(--text85)" }}>
            Mot ou Caractère à ajouter
          </small>
          <input
            name="Mot / Caractère à ajouter"
            type="text"
            value={text}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="btns-selector">
          <button onClick={handleCopy}>Copy</button>
        </div>
        <div className="final-txt">
          <small>
            {[...modifiedText].map((e, i) => (
              <ConvertFinalText text={e} key={i} />
            ))}
          </small>
          <small className="txt-copy">{[...finalText].join("")}</small>
        </div>
      </div>
      <div className="minecraft-btns">
        <div>
          <small style={{ color: "var(--text85)" }}>Nombre de couleurs</small>
          <input
            name="Nombre de couleurs"
            type="number"
            value={nbOfColors}
            min={1}
            max={6}
            onChange={(e) => setNbOfColors(e.target.value)}
          />
        </div>
        <div>
          {(() => {
            const colorsInputs = [];

            for (let i = 0; i < nbOfColors; i++) {
              colorsInputs.push(
                <input
                  key={i}
                  type="text"
                  placeholder={`Prefix ${i + 1}`}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
              );
            }

            return colorsInputs;
          })()}
        </div>
      </div>
    </div>
  );
};

export default ColoredSentence;
