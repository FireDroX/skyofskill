import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [fortune, setFortune] = useState(2050);
  const [blocs, setBlocs] = useState(16500);
  const [mine, setMine] = useState(14);
  const [boost, setBoost] = useState(12);
  const [page, setPage] = useState(0);
  const [currentPrestige, setCurrentPrestige] = useState(75);
  const [nextPrestige, setNextPrestige] = useState(80);
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
