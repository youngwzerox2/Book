import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, InputLabel, OutlinedInput, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [ticket, setTicket] = React.useState('한달구독권');

  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  // **********************************************************
  const session = localStorage;
  const memberId = session.getItem('loginId');
  const { payUrl, setPayUrl } = useState('');
  console.log('payUrl 출력', payUrl);

  const payingBtn = async () => {
    alert(`${memberId}`);
    try {
      const response = await axios
        .post('/pay/kakaopay', null, {
          params: {
            partner_user_id: memberId, // 가맹점 회원 ID
            item_name: '감자'
          }
        })
        .then((re) => {
          console.log('잘 받아지고 있긴 한건지 ,,,', re.data.next_redirect_pc_url);
          // window.open(re.data.next_redirect_pc_url, '카카오페이', 'popup=yes');
          location = re.data.next_redirect_pc_url;
        });
      setPayUrl(response.data.next_redirect_pc_url);
    } catch (error) {
      console.error('에러입니다1.');
      console.error(error);
    }
  };

  return (
    <List
      sx={{ minWidth: 330, width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          결제 방법을 선택해주세요
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카카오페이" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">구독권 선택</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={ticket} label="Age" onChange={handleChange}>
                <MenuItem value={'한달구독권'}>한달구독권</MenuItem>
                <MenuItem value={'1년구독권'}>1년구독권</MenuItem>
                <MenuItem value={'정기구독권'}>정기구독권</MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카드결제" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">구독권 선택</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={ticket} label="Age" onChange={handleChange}>
                <MenuItem value={'한달구독권'}>한달구독권</MenuItem>
                <MenuItem value={'1년구독권'}>1년구독권</MenuItem>
                <MenuItem value={'정기구독권'}>정기구독권</MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>카드번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>CVC번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>유효기간</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>비밀번호 앞 두 자리</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
      <Button color="primary" variant="contained" onClick={payingBtn}>
        결제
      </Button>
    </List>
  );
}
