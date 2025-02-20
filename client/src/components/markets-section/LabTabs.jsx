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
import { TableVirtuoso } from 'react-virtuoso';
import Chance from 'chance';

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
      label: 'First Name',
      dataKey: 'firstName',
    },
    {
      width: 100,
      label: 'Last Name',
      dataKey: 'lastName',
    },
    {
      width: 50,
      label: 'Age',
      dataKey: 'age',
      numeric: true,
    },
    {
      width: 110,
      label: 'State',
      dataKey: 'state',
    },
    {
      width: 130,
      label: 'Phone Number',
      dataKey: 'phone',
    },
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
  
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? 'right' : 'left'}
            style={{ width: column.width }}
            sx={{ backgroundColor: 'background.paper' }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }
  
  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }
  

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item Three" value="4" />

            <Tab label="Item Three" value="5" />
            <Tab label="Item Three" value="6" />

          </TabList>
        </Box>
        <TabPanel value="1">

        <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Threez</TabPanel>
        <TabPanel value="4">Item Threew</TabPanel>
        <TabPanel value="5">Item Threewf</TabPanel>
        <TabPanel value="6">Item Threed</TabPanel>


      </TabContext>
    </Box>
  );
}

