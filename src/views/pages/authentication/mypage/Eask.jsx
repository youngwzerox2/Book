import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider, OutlinedInput, Paper, Button, List, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

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
const style = {
  py: 0,
  // marginTop: '10px',
  width: '100%',
  maxWidth: 600,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper'
};

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
// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

export default function VerticalTabs() {
  const sess = localStorage;

  // FAQ 불러오기
  const [faq, setFaq] = useState([]);
  const boardLoadFAQ = () => {
    axios.get('/cs/selectFAQ').then((re) => {
      console.log('faq', re.data);
      setFaq(re.data);
    });
  };
  // 1대ㅣ 문의내역 불러오기
  const [asked, setAsked] = useState([]);
  const selectComplain = () => {
    axios.get(`/cs/selectByUser?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log('흠?', re.data);
      setAsked(re.data);
    });
  };

  // 1대1 문의 작성하기
  const [askTitle, setAskTitle] = useState('');
  const [askContent, setAskContent] = useState('');
  const askWrite = () => {
    axios.post(`/cs/write?memberId=${sess.getItem('loginId')}&askTitle=${askTitle}&askContent=${askContent}`);
  };

  useEffect(() => {
    boardLoadFAQ();
    selectComplain();
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '400px' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="FAQ" {...a11yProps(0)} />

        <Tab label="문의내역" {...a11yProps(1)} />
        <Tab label="문의하기" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box sx={{ width: '100%', height: 200, maxWidth: 450, bgcolor: 'background.paper' }}>
          <List sx={style}>
            {faq.map((item) => {
              return (
                <>
                  <ListItem key={item.notice_number}>
                    <ListItemText sx={{ marginLeft: '5px' }} primary={`${item.notice_title}`} />
                    <Button size="small">자세히</Button>
                  </ListItem>
                  <Divider component="li" key={item.notice_title} />
                </>
              );
            })}
          </List>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ width: '100%', height: 300, maxWidth: 450, bgcolor: 'background.paper' }}>
          <List sx={style}>
            {asked.map((item) => {
              return (
                <>
                  <ListItem key={item.ask_id}>
                    <ListItemText sx={{ marginLeft: '5px' }} primary={`${item.ask_title}`} />
                    <Button size="small">자세히</Button>
                  </ListItem>
                  <Divider component="li" key={item.ask_content} />
                </>
              );
            })}
          </List>
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
            <OutlinedInput
              sx={{ margin: '20px', width: '350px', minWidth: '100px' }}
              placeholder="제목"
              onChange={(e) => {
                setAskTitle(e.target.value);
              }}
            />
            <Divider />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={15}
              variant="standard"
              fullWidth
              sx={{ margin: '5px' }}
              placeholder="내용을 입력해주세요"
              opacity="1"
              onChange={(e) => {
                setAskContent(e.target.value);
              }}
            />
          </Paper>
        </Box>

        <Button variant="contained" onClick={askWrite}>
          등록
        </Button>
      </TabPanel>
    </Box>
  );
}
