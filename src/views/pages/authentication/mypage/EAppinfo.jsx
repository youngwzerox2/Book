import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import testing from '../../../../assets/images/이용약관1.png';
import Image2 from '../../../../assets/images/이용약관2.png';
import Image3 from '../../../../assets/images/이용약관3.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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
        <Tab label="앱 정보" {...a11yProps(0)} />
        <Tab label="이용약관1" {...a11yProps(1)} />
        <Tab label="이용약관2" {...a11yProps(2)} />
        <Tab label="이용약관3" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography sx={{ margin: '5px' }} textAlign="left">
          [앱 버전: v.0.0.1]
        </Typography>
        <Typography sx={{ margin: '5px' }} textAlign="left">
          (주)멤버교체가 되었지만 인원수는 똑같은 New시돌컴퍼니의 두번째 작품
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={testing} alt="testing" style={{ width: '450px' }} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img src={Image2} alt="testing" style={{ width: '450px' }} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img src={Image3} alt="testing" style={{ width: '450px' }} />
      </TabPanel>
    </Box>
  );
}
