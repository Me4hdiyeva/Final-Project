import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getCoins } from "../../services/api";
import "../grafics/grafic.css";
import BuyCrypto from "../BuyCrypto/BuyCrypto";
import CryptoChart from "../../components/ChartCrypto.jsx/Chart";
import TableCrypto from "../../components/TableCrypto/TableCrypto";
import { useLocation } from "react-router-dom";

export default function Grafic() {
  const location = useLocation();
  const [chartData, setChartData] = useState([]);
  const [araliq, setAraliq] = useState({ min: 0, max: 100 });
  const [param, setParam] = useState(
    new URLSearchParams(location.search).get("param")
  );

  useEffect(() => {
    handleGrafic(param);
  }, [param]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentParam = new URLSearchParams(window.location.search).get(
        "param"
      );

      if (currentParam !== param) {
        setParam(currentParam);
      } else {
        handleGrafic(currentParam);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [param]);

  function handleGrafic(param) {
    getCoins(param).then((res) => {
      setChartData(res.graficStatistic);
      const yeniArr = res.graficStatistic.map((item) => item.price);

      setAraliq({
        min: Math.floor(Math.min(...yeniArr)),
        max: Math.ceil(Math.max(...yeniArr)),
      });
    });
  }

  return (
    <>
      <div className="trading">
        <h1>Markets, everywhere</h1>
        <div
          style={{
            // marginLeft: "100px",
            backgroundColor: "black",
            height: 500,
            marginTop: "70px",
            marginLeft: "30px",
            marginRight: "30px",
            // yerlesdireceyin componentin icine uygun css i bura yazacam!!!
          }}
        >
          <ResponsiveContainer>
            <LineChart className="grafichart" data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#808080" />
              <YAxis stroke="#808080" domain={[araliq.min, araliq.max]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#ff0000"
                strokeWidth={1}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <BuyCrypto />
        <CryptoChart />

        <TableCrypto />
      </div>
    </>
  );
}
