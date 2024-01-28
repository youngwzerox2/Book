import * as React from 'react';
import { Box, Card, CardContent, Button, Grid, Typography, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
import testImage from '../../../../assets/images/book360.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useTheme } from '@mui/material/styles';
export default function ImgMediaCard() {
  const theme = useTheme();
  // 각 요소 클릭 시 해당하는 글 넘버 받고 상세창 띄우기
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 데이터 로드
  const [viewContent, setViewContent] = useState([]);
  const session = localStorage;
  const boardLoad = () => {
    axios
      .get('/chatData/selectByUser', { params: { memberId: session.getItem('loginId') } })
      .then((re) => {
        setViewContent(re.data);

        console.log('ㅎㅇㅎㅇ', re.data);
        // console.log(viewContent[5].bookname);
      })
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
  }, []);

  const getValue = (re) => {
    alert(re);
  };
  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{`1월 27일 - `}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
            <Grid item xs={12} sm={12} md={12}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia component="img" sx={{ width: 151 }} image={testImage} alt="Live from space album cover" />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      여기에 책 제목을 입력해버겠읍니다 지기지기쟝쟝ㅇ쟝
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      여기에 저자
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}</IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}</IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>닫기</Button>
            <Button onClick={handleClose} autoFocus>
              삭제
            </Button>
          </DialogActions>
        </Dialog>
        <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
        <React.Fragment>
          <Box
            sx={{ position: 'absolute', top: '6%', left: '27%' }}
            onClick={() => {
              getValue(1);
              handleClickOpen();
            }}
          >
            {viewContent[0] != undefined && <img src={viewContent[0].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>

          <Box sx={{ position: 'absolute', top: '6%', left: '45%' }}>
            {viewContent[1] != undefined && <img src={viewContent[1].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>

          <Box sx={{ position: 'absolute', top: '6%', left: '63%' }}>
            {viewContent[2] != undefined && <img src={viewContent[2].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '27%' }}>
            {viewContent[3] != undefined && <img src={viewContent[3].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '45%' }}>
            {viewContent[4] != undefined && <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '63%' }}>
            {viewContent[5] != undefined && <img src={viewContent[5].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '27%' }}>
            {viewContent[6] != undefined && <img src={viewContent[6].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '45%' }}>
            {viewContent[7] != undefined && <img src={viewContent[7].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '63%' }}>
            {viewContent[8] != undefined && <img src={viewContent[8].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box sx={{ position: 'absolute', top: '74%', left: '27%' }}>
            {viewContent[9] != undefined && <img src={viewContent[9].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box
            sx={{ position: 'absolute', top: '74%', left: '45%' }}
            onClick={() => {
              alert('11');
            }}
          >
            {viewContent[10] != undefined && <img src={viewContent[10].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>
          <Box
            sx={{ position: 'absolute', top: '74%', left: '63%' }}
            onClick={() => {
              alert('setOpen12였음');
            }}
          >
            {viewContent[11] != undefined && <img src={viewContent[11].bookImageURL} alt="이미지입니다" height="100px" />}
          </Box>

          <Button
            variant="contained"
            sx={{ position: 'absolute', top: '92%', right: '43%' }}
            onClick={() => {
              location.reload();
              setStatus('하');
            }}
          >
            뒤로가기
          </Button>
        </React.Fragment>
      </Card>
    </>
  );
}
