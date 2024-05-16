import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryParams = new URLSearchParams(document.location.search);
  const [fortune, setFortune] = useState(2050);
  const [blocs, setBlocs] = useState(15500);
  const [mine, setMine] = useState(14);
  const [boost, setBoost] = useState(12);
  const [page, setPage] = useState(0);
  const [currentPrestige, setCurrentPrestige] = useState(
    parseInt(queryParams.get("current")) + 1 || 76
  );
  const [nextPrestige, setNextPrestige] = useState(
    parseInt(queryParams.get("next")) + 1 || 81
  );
  const [price, setPrice] = useState(0);
  const [boxPage, setBoxPage] = useState(parseInt(queryParams.get("box")) || 0);
  const [isClicked, setIsClicked] = useState({
    clicked: Boolean(queryParams.get("clicked")) || false,
    index: parseInt(queryParams.get("index")) || 0,
  });
  const [search, setSearch] = useState(
    queryParams.get("item")?.toLowerCase() || ""
  );

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
        boxPage,
        setBoxPage,
        isClicked,
        setIsClicked,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
