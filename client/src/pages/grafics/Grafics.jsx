import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getCoins } from "../../services/api";

export default function Grafic() {
  const [chartData, setChartData] = useState([]);
  const [araliq, setAraliq] = useState({ min: 0, max: 100 })
  useEffect(() => {
    handleGrafic()
    const interval = setInterval(handleGrafic, 5000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  function handleGrafic() {
    getCoins().then(res => {
      setChartData(res.graficStatistic)
      const yeniArr = res.graficStatistic.map(item => item.price)
      console.log(Math.min(...yeniArr));
      console.log(Math.max(...yeniArr));

      setAraliq({
        min: Math.floor(Math.min(...yeniArr)),
        max: Math.ceil(Math.max(...yeniArr))
      })
    })

  }

  return (

    <div style={{
      marginLeft: "100px",
      backgroundColor: "black",
      height:500 
      // yerlesdireceyin componentin icine uygun css i bura yazacam!!!
    }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" stroke="#8884d8" />
          <YAxis stroke="#8884d8" domain={[araliq.min, araliq.max]} />
          <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }} />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={1} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>


  );
}
