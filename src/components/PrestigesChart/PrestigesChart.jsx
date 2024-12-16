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
  const chartPrestiges = prestiges.slice(1);
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
  }, [isSmallSize, setPage]);

  const newPrestige = [[], []];
  for (let i = 0; i < chartPrestiges.length; i += 19) {
    newPrestige[0].push(chartPrestiges.slice(i, i + 19));
  }
  for (let i = 0; i < chartPrestiges.length; i += 5) {
    newPrestige[1].push(chartPrestiges.slice(i, i + 5));
  }

  const handleBtn = (e) => {
    if (e === "+" && page < newPrestige[isSmallSize].length - 1) {
      setPage(page + 1);
    } else if (e === "-" && page > 0) {
      setPage(page - 1);
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
        <button
          style={{
            backgroundColor:
              page === 0 ? "var(--primary15)" : "var(--primary65)",
          }}
          onClick={() => handleBtn("-")}
        >
          -
        </button>
        <button
          style={{
            backgroundColor:
              page === newPrestige[isSmallSize].length - 1
                ? "var(--primary15)"
                : "var(--primary65)",
          }}
          onClick={() => handleBtn("+")}
        >
          +
        </button>
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
