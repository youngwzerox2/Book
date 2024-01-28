import * as React from 'react';
// import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Divider, IconButton } from '@mui/material';
import customed from '../../../../assets/images/costume/costume4.png';
import CardMedia from '@mui/material/CardMedia';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Tooltip from '@mui/material/Tooltip';

export default function Review() {
  const session = localStorage;
  const userId = session.getItem('loginId');
  const [users, setUsers] = useState([]);
  const getUser = () => {
    axios.get(`/user/selectByNum?memberId=${userId}`).then((re) => {
      setUsers(re.data);
      console.log(re.data);
      console.log(users);
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <React.Fragment>
      <List>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Tooltip title="프로필 사진 수정하기">
            <IconButton sx={{ left: '85%' }}>
              <SettingsApplicationsIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <CardMedia component="img" width="50%" image={customed} alt="프로필 사진" />

          {/* <img src={customed} alt="gdgd" /> */}
          {/* <CardMedia component="img" sx={{ width: 151 }} image={customed} alt="Live from space album cover" /> */}
        </ListItem>
      </List>
      <Divider />
      <List sx={{ width: '100%' }}>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>아이디</Button>
          <ListItemText primary={users.memberId} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>비밀번호</Button>
          <ListItemText primary="*******" />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>이름</Button>
          <ListItemText primary={users.memberName} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>닉네임</Button>
          <ListItemText primary={users.memberNickname} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>전화번호</Button>
          <ListItemText primary={users.memberTel} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Button sx={{ width: '100px' }}>이메일</Button>
          <ListItemText primary={users.memberEmail} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
