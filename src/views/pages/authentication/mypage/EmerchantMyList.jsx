import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Divider } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function VirtualizedList() {
  const sess = localStorage;
  const [views, setViews] = useState([]);
  const contentLoad = () => {
    axios.get(`/merchant/selectByUser?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViews(re.data);
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
      {views.map((item) => {
        return (
          <FixedSizeList key={item.merchant_id} height={300} width={'100%'} itemSize={46} itemCount={6} overscanCount={5}>
            <ListItem component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={`귀가 희망`} />
              </ListItemButton>
            </ListItem>
          </FixedSizeList>
        );
      })}
    </Box>
  );
}
