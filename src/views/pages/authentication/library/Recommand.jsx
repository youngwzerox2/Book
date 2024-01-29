// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import { Button } from '@mui/material';
import theimg from '../../../../assets/images/bookcaseB_meng_Basic.png';
// import { width } from '@mui/system';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// -------------------------------------------------------------------------------
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const MainPage = () => {
  const sess = localStorage;

  // 추천 유저리스트 받기

  const [viewContent, setViewContent] = useState([]);
  const boardLoad = () => {
    axios.post(`/library/recommendBookshelf?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViewContent(re.data);
    });
  };
  useEffect(() => {
    boardLoad();
    alert(viewContent);
    ImageMap('img[useMap]'); // imageMap 삽입코드
  }, []);

  // 모달창 띄우기
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        {/* <img src={theimg} alt="tlqkf" useMap="#image-map" /> */}
        <img src={theimg} alt="책장" useMap="#image-map" />

        <map name="image-map">
          <area target="_self" alt="멩이1" title="멩이1" role="presentation" coords="234,110,41" shape="circle" onClick={handleClickOpen} />
          <area target="_self" alt="멩이2" title="멩이2" role="presentation" coords="360,109,40" shape="circle" />
          <area target="_self" alt="멩이3" title="멩이3" role="presentation" coords="489,110,39" shape="circle" />
          <area target="_self" alt="멩이4" title="멩이4" role="presentation" coords="234,275,38" shape="circle" />
          <area target="_self" alt="멩이5" title="멩이5" role="presentation" coords="360,278,39" shape="circle" />
          <area target="_self" alt="멩이6" title="멩이6" role="presentation" coords="489,277,39" shape="circle" />
          <area target="_self" alt="멩이7" title="멩이7" role="presentation" coords="236,438,39" shape="circle" />
          <area target="_self" alt="멩이8" title="멩이8" role="presentation" coords="361,439,39" shape="circle" />
          <area target="_self" alt="멩이9" title="멩이9" role="presentation" coords="489,439,41" shape="circle" />
          <area target="_self" alt="멩이10" title="멩이10" role="presentation" coords="234,603,39" shape="circle" />
          <area target="_self" alt="멩이11" title="멩이11" role="presentation" coords="360,602,41" shape="circle" />
          <area target="_self" alt="멩이12" title="멩이12" role="presentation" coords="489,602,39" shape="circle" />
        </map>
        <React.Fragment>
          <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              사용자 정보
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>닉네임 : </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                책장 방문하기
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
        <Button
          variant="contained"
          color="primary"
          sx={{ position: 'absolute', top: '92%', left: '44%' }}
          onClick={() => {
            location.reload();
          }}
        >
          뒤로가기
        </Button>
      </>
    </>
  );
};

export default MainPage;
