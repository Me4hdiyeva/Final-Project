import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chance from 'chance';
import axios from 'axios';
import { getAllUserCoins } from '../../services/api';


const chance = new Chance(42);
function createData(id) {
  return {
    id,
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    phone: chance.phone(),
    state: chance.state({ full: true }),
  };
}

const columns = [
  {
    width: 100,
    label: 'Coins',
    dataKey: 'firstName',
  },
  {
    width: 100,
    label: 'Coin price',
    dataKey: 'lastName',
  },
  {
    width: 150,
    label: 'Price change 24h',
    dataKey: 'age',
    numeric: true,
  },
  // {
  //   width: 110,
  //   label: 'State',
  //   dataKey: 'state',
  // },
  // {
  //   width: 130,
  //   label: 'Phone Number',
  //   dataKey: 'phone',
  // },
];

const rows = Array.from({ length: 200 }, (_, index) => createData(index));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};



export default function LabTabs() {
  const [value, setValue] = React.useState();
  const [coins, setCoins] = React.useState([]);
  React.useEffect(() => {
    getAllUserCoins().then(res => {
      console.log(res);
      setCoins(res)
      setValue(res[0]?._id)
    })
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              coins.length && coins.map((item, i) => {
                return <Tab key={i} label={item.type} value={item._id} />
              })
            }
          </TabList>
        </Box>

        {(coins.length >0) &&
          coins.map(item => {
            return (
              <TabPanel  value={item._id}>
                {item.count} {item.type} = {(Number(item?.currency).toFixed(3) * item.count).toFixed(3)}$
              </TabPanel>)
          })
        }
      </TabContext>
    </Box>
  );
}

