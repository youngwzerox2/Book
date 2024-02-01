import * as React from 'react';
// import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Divider, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

// import 멩이s
import meng1 from '../../../../assets/images/costume/costume1.png';
import meng2 from '../../../../assets/images/costume/costume2.png';
import meng3 from '../../../../assets/images/costume/costume3.png';
import meng4 from '../../../../assets/images/costume/costume4.png';
import meng5 from '../../../../assets/images/costume/costume5.png';
import meng6 from '../../../../assets/images/costume/costume6.png';
import meng7 from '../../../../assets/images/costume/costume7.png';
import meng8 from '../../../../assets/images/costume/costume8.png';
import meng9 from '../../../../assets/images/costume/costume9.png';
import meng10 from '../../../../assets/images/costume/costume10.png';

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

  const [memberImg, setMemberImg] = useState('');
  const updateImg = () => {
    axios.post(`/user/updateImg?memberId=${userId}&memberImg=${memberImg}`).then((re) => {
      if (re.data == 1) {
        // alert(memberImg);
        alert('프로필 사진이 변경되었습니다.');
        location.reload();
      } else {
        alert('리드미 플러스 회원만 이용 가능합니다.');
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  // 프로필 사진 변경
  const style = {
    py: 0,
    width: '100%',
    marginTop: '15px',
    maxWidth: 600,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper'
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          }
        }}
      >
        <DialogTitle>프로필 사진 변경</DialogTitle>
        <DialogContent>
          <DialogContentText>리드미 플러스를 이용 중인 회원님께만 제공해 드리는 혜택입니다.</DialogContentText>
          <List sx={style}>
            <Divider component="li" />
            <Grid container spacing={2} sx={{ padding: '2%' }}>
              <Grid item xs={3} sm={3}>
                <CardMedia
                  component="img"
                  width="150px"
                  image={meng1}
                  alt="멩이1"
                  onClick={() => setMemberImg(1)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="150px"
                  image={meng2}
                  alt="멩이2"
                  onClick={() => setMemberImg(2)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="150px"
                  image={meng3}
                  alt="멩이3"
                  onClick={() => setMemberImg(3)}
                  sx={{ cursor: 'pointer' }}
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <CardMedia
                  component="img"
                  width="150px"
                  image={meng4}
                  alt="멩이4"
                  onClick={() => setMemberImg(4)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="150px"
                  image={meng5}
                  alt="멩이5"
                  onClick={() => setMemberImg(5)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="10%"
                  image={meng6}
                  alt="멩이6"
                  onClick={() => setMemberImg(6)}
                  sx={{ cursor: 'pointer' }}
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <CardMedia
                  component="img"
                  width="10%"
                  image={meng7}
                  alt="멩이7"
                  onClick={() => setMemberImg(7)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="10%"
                  image={meng8}
                  alt="멩이8"
                  onClick={() => setMemberImg(8)}
                  sx={{ cursor: 'pointer' }}
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <CardMedia
                  component="img"
                  width="10%"
                  image={meng9}
                  alt="멩이9"
                  onClick={() => setMemberImg(9)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardMedia
                  component="img"
                  width="10%"
                  image={meng10}
                  alt="멩이10"
                  onClick={() => setMemberImg(10)}
                  sx={{ cursor: 'pointer' }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ left: '50%', transform: 'translateX(-50%)', margin: '2%' }}
              onClick={() => {
                updateImg();
                handleClose();
              }}
            >
              변경하기
            </Button>
          </List>
        </DialogContent>
      </Dialog>
      <List>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Tooltip title="프로필 사진 수정하기">
            <IconButton sx={{ left: '85%' }} onClick={handleClickOpen}>
              <SettingsApplicationsIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          {/* <CardMedia component="img" width="50%" image={meng1} alt="프로필 사진" /> */}
          <CardMedia
            component="img"
            width="50%"
            image={`${process.env.PUBLIC_URL}/costume/costume${users.memberImg}.png`}
            alt="프로필 사진"
          />
          {/* <img src={meng4} alt="gdgd" /> */}
          {/* <CardMedia component="img" sx={{ width: 151 }} image={meng4} alt="Live from space album cover" /> */}
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
