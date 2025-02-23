import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./tableCrypto.css"
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const TableCrypto = () => {
    const [cryptoData, setCryptoData] = useState([]);

    const getCoins = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1");
            setCryptoData(response.data.slice(0,10));
        } catch (error) {
            console.error("Error fetching crypto data:", error);
        }
    };

    useEffect(() => {
        getCoins();
    }, []);


    return (
        <>
        <div className="container">

            <TableContainer className='tableCryptos' style={{ paddingLeft: "30px", paddingRight: "30px" }} component={Paper}>
                <Table  sx={{ minWidth: 600 }} aria-label="caption table">
                    <TableHead >
                        <TableRow className='tableCryptoCell'>
                            <TableCell className='tableCryptoCell'>Name</TableCell>
                            <TableCell className='tableCryptoCell' align="right"></TableCell>
                            <TableCell className='tableCryptoCell' align="right">Price (USD)</TableCell>
                            <TableCell className='tableCryptoCell' align="right">24h Change (%)</TableCell>
                            {/* <TableCell className='tableCryptoCell' align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody  className='tableCryptoCell'>
                        {cryptoData.map((coin) => (
                            <TableRow  key={coin.id}>
                                <TableCell style={{width:"10px", height:"10px"}} className='tableCryptoCell' component="th" scope="row">
                                    <img src={coin.image} alt={coin.name} width="10px" height="10px" />
                                </TableCell>
                                <TableCell  className='tableCryptoCell'>{coin.name}</TableCell>
                                <TableCell  className='tableCryptoCell' align="right">${coin.current_price.toFixed(2)}</TableCell>
                                <TableCell align="right" style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
        </>
    )
}

export default TableCrypto
