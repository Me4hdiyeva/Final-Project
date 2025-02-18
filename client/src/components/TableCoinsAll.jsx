import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'symbol', label: 'Symbol', minWidth: 100 },
    { id: 'current_price', label: 'Price (USD)', minWidth: 170, align: 'right' },
    { id: 'market_cap', label: 'Market Cap', minWidth: 170, align: 'right' },
    { id: 'total_volume', label: '24h Volume', minWidth: 170, align: 'right' },
];

const TableCoinsAll = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [coins, setCoins] = useState([]);

    const getCoin = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page: 50,
                    page: 1,
                },
            });
            setCoins(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getCoin();
        const interval = setInterval(() => {
            getCoin();
        }, 240000);
        return () => clearInterval(interval);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' , paddingTop:"30px", marginBottom:"200px"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((coin) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={coin.id}>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {coin[column.id] ? coin[column.id].toLocaleString() : "-"}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={coins.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default TableCoinsAll;
