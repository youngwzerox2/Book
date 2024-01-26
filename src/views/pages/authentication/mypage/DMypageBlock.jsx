import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function AlignItemsList() {
  const sess = localStorage;
  const [viewContent, setViewContent] = useState([]);

  const boardLoad = () => {
    axios.get(`/blocking/selectByUser?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViewContent(re.data);
    });
  };
  useEffect(() => {
    boardLoad();
  }, []);

  const deleting = () => {
    alert('ㅎㅇㅎㅇ');
    axios.post(`/blocking/delete?blockedNumber=${item.blocked_number}`).then((re) => {
      console.log('결과', re.data);
    });
  };

  return (
    <List sx={{ width: '100%', minWidth: '500px', bgcolor: 'background.paper' }}>
      {viewContent.map((item) => {
        const numbers = item.blocked_number;
        return (
          <>
            <ListItem alignItems="flex-start" key={numbers}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.blocked_member} / ${item.blocked_date}`}
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                      {item.blocked_reason}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button
                variant="outlined"
                onClick={(numbers) => {
                  deleting(numbers);
                }}
              >
                차단 취소
              </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
