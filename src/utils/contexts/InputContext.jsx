import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [itemType, setItemType] = useState(4);
  const [normalTxt, setNormalTxt] = useState(
    "§b§kt§r§f§kt§r§9☛§b❤§9☚§f§kt§r§b§kt§r§9  (╯°□°)╯︵ ┻━┻  §b§kt§r§f§kt§r§9☛§b❤§9☚§f§kt§r§b§kt§r"
  );
  const [convertedTxt, setConvertedTxt] = useState(
    "&r&b&kt&r&r&r&f&kt&r&r&r&9☛&r&b❤&r&9☚&r&f&kt&r&r&r&b&kt&r&r&r&9  (╯°□°)╯︵ ┻━┻  &r&b&kt&r&r&r&f&kt&r&r&r&9☛&r&b❤&r&9☚&r&f&kt&r&r&r&b&kt&r&r"
  );
  const [defaultName, setDefaultName] = useState("(╯°□°)╯︵ ┻━┻");
  const [enchantValue, setEnchantValue] = useState("69");
  const [DLOD, setDLOD] = useState(false);

  return (
    <InputContext.Provider
      value={{
        itemType,
        setItemType,
        normalTxt,
        setNormalTxt,
        convertedTxt,
        setConvertedTxt,
        defaultName,
        setDefaultName,
        enchantValue,
        setEnchantValue,
        DLOD,
        setDLOD,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
