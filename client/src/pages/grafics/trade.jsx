import { useState, useEffect } from "react";

export default function CryptoTradingUI() {
  const [orderBook, setOrderBook] = useState([]);
  const [trades, setTrades] = useState([]);
  const [price, setPrice] = useState(0.9951);
  const [amount, setAmount] = useState(0);
 
  useEffect(() => {
    // Simulated order book data
    setOrderBook([
      { price: 0.9975, amount: 500 },
      { price: 0.9970, amount: 800 },
      { price: 0.9965, amount: 1200 },
      { price: 0.9960, amount: 1500 },
    ]);
    
    // Simulated trades data
    setTrades([
      { price: 0.9955, amount: 300, time: "17:47:47" },
      { price: 0.9952, amount: 500, time: "17:47:45" },
      { price: 0.9950, amount: 200, time: "17:47:40" },
    ]);
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Crypto Trading UI</h1>
      
      {/* Order Book */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Order Book</h2>
          <ul>
            {orderBook.map((order, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-red-500">{order.price.toFixed(4)}</span>
                <span>{order.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Recent Trades */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Recent Trades</h2>
          <ul>
            {trades.map((trade, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-green-500">{trade.price.toFixed(4)}</span>
                <span>{trade.amount}</span>
                <span className="text-gray-400">{trade.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Trading Panel */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Trade</h2>
        <div className="flex flex-col gap-2">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="bg-gray-700 p-2 rounded text-white"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="bg-gray-700 p-2 rounded text-white"
          />
          <button className="bg-green-500 p-2 rounded">Buy</button>
          <button className="bg-red-500 p-2 rounded">Sell</button>
        </div>
      </div>
    </div>
  );
}
