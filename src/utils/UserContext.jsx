import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [fortune, setFortune] = useState(1900);
  const [blocs, setBlocs] = useState(17000);
  const [mine, setMine] = useState(13);
  const [boost, setBoost] = useState(12);
  const [page, setPage] = useState(0);
  const [currentPrestige, setCurrentPrestige] = useState(70);
  const [nextPrestige, setNextPrestige] = useState(85);
  const [price, setPrice] = useState(0);

  return (
    <UserContext.Provider
      value={{
        fortune,
        setFortune,
        blocs,
        setBlocs,
        mine,
        setMine,
        boost,
        setBoost,
        page,
        setPage,
        currentPrestige,
        setCurrentPrestige,
        nextPrestige,
        setNextPrestige,
        price,
        setPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
