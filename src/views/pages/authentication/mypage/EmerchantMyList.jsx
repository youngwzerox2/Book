import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const style = {
  py: 0,
  marginTop: '10px',
  width: '100%',
  maxWidth: 500,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper'
};

export default function VirtualizedList() {
  const [views, setViews] = useState([]);
  const sess = localStorage;
  // const formatted = new Intl.DateTimeFormat('ko-KR', {
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric'
  // }).format(views.start_date);

  // const payed = () => {
  //   switch (views.merchant_type) {
  //     case 'month':
  //       setViews.merchant_type('한달구독권');
  //       break;
  //     case 'year':
  //       setViews.merchant_type('일년구독권');
  //       break;
  //     case 'forever':
  //       setViews.merchant_type('정기구독권');
  //       break;
  //   }
  // };

  const contentLoad = () => {
    axios.get(`/merchant/selectByUser?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViews(re.data);
      // payed();
    });
  };
  useEffect(() => {
    contentLoad();
  }, []);

  return (
    <Box sx={{ width: '100%', height: 400, maxWidth: 700, padding: '20px', bgcolor: 'background.paper' }}>
      <Divider></Divider>
      <Button sx={{ padding: '10px' }}>History</Button>
      <Divider></Divider>
      <List sx={style}>
        {views.map((item) => {
          return (
            <>
              <ListItem key={item.merchant_id}>
                <ListItemText
                  sx={{ marginLeft: '5px' }}
                  primary={`${item.start_date.substr(0, 10)} / ${item.merchant_type}/ ${item.merchant_cost}`}
                />
                <Button size="small">자세히</Button>
              </ListItem>
              <Divider component="li" />
            </>
          );
        })}
      </List>
    </Box>
  );
}
