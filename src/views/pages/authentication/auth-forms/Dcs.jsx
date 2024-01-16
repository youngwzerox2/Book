import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import Notice from '../Esubcontents/Enotice';
import Ask from '../Esubcontents/Eask';
import AppInfo from '../Esubcontents/EAppinfo';
import Warning from '../Esubcontents/Ewarning';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2" padding={'20px'}>
        {' '}
        고객센터{' '}
      </Typography>
      <Divider></Divider>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="공지사항" {...a11yProps(0)} />
          <Tab label="FAQ/문의" {...a11yProps(1)} />
          <Tab label="신고 내역" {...a11yProps(2)} />
          <Tab label="앱 정보/이용약관" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Notice />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Ask />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Warning />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AppInfo />
      </CustomTabPanel>
    </Box>
  );
}
