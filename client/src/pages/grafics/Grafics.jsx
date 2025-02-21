import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "17:40", price: 0.9950 },
  { time: "17:42", price: 0.9952 },
  { time: "17:44", price: 0.9954 },
  { time: "17:46", price: 0.9953 },
  { time: "17:48", price: 0.9955 },
]; 

export default function Grafic() {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-2">Custom Trading Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
