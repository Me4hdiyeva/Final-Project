import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getCoins } from "../../services/api";

export default function Grafic() {
  const [chartData, setChartData] = useState([]);
  const [araliq, setAraliq] = useState({ min: 0, max: 100 })
  useEffect(() => {
    const interval = setInterval(handleGrafic, 5000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  function handleGrafic() {
    getCoins().then(res => {
      setChartData(res.graficStatistic)
      const yeniArr = res.graficStatistic.map(item => item.price)
      setAraliq({
        min: Math.min(...yeniArr),
        max: Math.max(...yeniArr)
      })
    })
  }

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Trading Chart</h2>
        <ResponsiveContainer width="80%" height={600}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis stroke="#8884d8" domain={[araliq.min, araliq.max]} />
            <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "5px" }} />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={1} dot={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
