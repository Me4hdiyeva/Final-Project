// import React, { useState } from "react";
// import QrScanner from "react-qr-scanner";
// import { useNavigate } from "react-router-dom";

// const QRScanner = () => {
//   const [data, setData] = useState("QR kodu oxut!");
//   const navigate = useNavigate(); // React Router Navigate Hook

//   const handleScan = (result) => {
//     if (result) {
//       setData(result.text);
//       // QR kod oxunduqdan sonra istifadəçini Binance URL-ə yönləndiririk:
//       navigate("https://www.binance.com/en/download?pageType=normal"); 
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   return (
//     <div>
//       <h2>QR Kod Skaneri</h2>
//       <QrScanner
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: "300px" }}
//       />
//       <p>Oxunan məlumat: {data}</p>
//     </div>
//   );
// };

// export default QRScanner;
