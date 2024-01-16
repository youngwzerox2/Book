import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider, OutlinedInput, Paper, Button } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="자주 묻는 질문" {...a11yProps(0)} />

        <Tab label="문의내역" {...a11yProps(1)} />
        <Tab label="문의하기" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box sx={{ width: '100%', height: 300, maxWidth: 360, bgcolor: 'background.paper' }}>
          <FixedSizeList height={300} width={500} itemSize={46} itemCount={20} overscanCount={5}>
            {renderRow}
          </FixedSizeList>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ width: '100%', height: 300, maxWidth: 360, bgcolor: 'background.paper' }}>
          <FixedSizeList height={300} width={500} itemSize={46} itemCount={20} overscanCount={5}>
            {renderRow}
          </FixedSizeList>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 420,
              minWidth: 200,
              height: 300
            }
          }}
        >
          <Paper elevation={3}>
            <OutlinedInput sx={{ margin: '20px', width: '350px', minWidth: '100px' }} placeholder="제목" />
            <Divider />
          </Paper>
        </Box>

        <Button variant="contained"> 등록 </Button>
      </TabPanel>
    </Box>
  );
}
