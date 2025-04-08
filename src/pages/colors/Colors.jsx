import "./Colors.css";

import ColoredSentence from "../../components/ColoredSentence/ColoredSentence";
import MinecraftColoredText from "../../components/MinecraftColoredText/MinecraftColoredText";
import ExampleTexts from "../../components/ExampleTexts/ExampleTexts";

const Colors = () => {
  return (
    <section className="App">
      <div>
        <MinecraftColoredText />
        <ColoredSentence />
        <ExampleTexts />
      </div>
    </section>
  );
};

export default Colors;
