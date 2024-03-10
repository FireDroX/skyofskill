import "./PrestigesChart.css";
import { useState, useEffect } from "react";
import { compactNumber } from "../../utils/functions";
import { prestiges } from "../../utils/values";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const PrestigesChart = ({ page, setPage }) => {
  const [isSmallSize, setIsSmallSize] = useState(() => {
    const width = window.innerWidth;
    if (width <= 824) return Number(1);
    else return Number(0);
  });

  useEffect(() => {
    const handleWidth = () => {
      const width = window.innerWidth;
      if (width <= 824) return setIsSmallSize(Number(1));
      else return setIsSmallSize(Number(0));
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      setPage(Number(0));
      window.removeEventListener("resize", handleWidth);
    };
  }, [isSmallSize]);

  const newPrestige = [[], []];
  for (let i = 0; i < prestiges.length; i += 17) {
    newPrestige[0].push(prestiges.slice(i, i + 17));
  }
  for (let i = 0; i < prestiges.length; i += 5) {
    newPrestige[1].push(prestiges.slice(i, i + 5));
  }

  const handleBtn = (e) => {
    switch (e) {
      case "+":
        if (page !== newPrestige[isSmallSize].length - 1) setPage(page + 1);
        break;
      case "-":
        if (page !== 0) setPage(page - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="input-prestige">
      <div className="input-chart">
        <LineChart
          layout="vertical"
          width={isSmallSize === 0 ? 500 : 280}
          height={300}
          data={newPrestige[isSmallSize][page]}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <YAxis
            dataKey="prix"
            tickFormatter={compactNumber}
            type="number"
            domain={["dataMin", "dataMax"]}
            reversed
          />
          <XAxis dataKey="name" type="category" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg)",
              border: "var(--primary)",
              color: "var(--text)",
              borderRadius: "25%",
              textTransform: "uppercase",
            }}
          />
          <Line type="monotone" dataKey="name" stroke="var(--primary)" />
        </LineChart>
      </div>
      <div className="input-btns">
        <button onClick={() => handleBtn("-")}>-</button>
        <button onClick={() => handleBtn("+")}>+</button>
      </div>
      <small>
        Prix de {newPrestige[isSmallSize][page]?.[0]?.name} à{" "}
        {
          newPrestige[isSmallSize][page]?.[
            newPrestige[isSmallSize][page]?.length - 1
          ].name
        }
      </small>
    </div>
  );
};

export default PrestigesChart;
