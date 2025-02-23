import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CryptoChart = () => {
  const [cryptoData, setCryptoData] = useState({ labels: [], datasets: [] });

  const fetchCryptoData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1")
      .then((response) => response.json())
      .then((data) => {
        setCryptoData({
          labels: data.map((coin) => coin.name),
          datasets: [
            {
              label: "Qiymət (USD)",
              data: data.map((coin) => coin.current_price),
              backgroundColor: "rgb(245, 39, 39)",
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching crypto data:", error));
  };

  useEffect(() => {
    fetchCryptoData(); 
    const interval = setInterval(fetchCryptoData, 300000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{ maxWidth: "1000px", height: "800px", margin: "0 auto", marginTop: "90px" }}>
      <h2>Crypto Currency Prices</h2>
      {cryptoData.labels.length > 0 ? <Bar data={cryptoData} /> : <p>Loading...</p>}
    </div>
  );
};

export default CryptoChart;
