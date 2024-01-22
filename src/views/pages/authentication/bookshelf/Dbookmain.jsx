// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import * as React from 'react';
import Bookcase from '../../../../assets/images/bookcaseB_full.png';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, Divider, Grid } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
// import { width } from '@mui/system';

import Myrecord from './EbookRecord';
import MyRecommanding from './EbookRecommanding';
import Recommanded from './EbookRecommanded';
import HotBook from './EhotBook';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// -------------------------------------------------------------------------------
const MainPage = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  // ---------------------------------------------------
  // testing2 컴포넌트에서 발생하는 이벤트
  // ---------------------------------------------------
  // 1. 000의 방 클릭 ----------------------------
  // confirm 에서 확인 / 취소에 따른 값 처리 작업 필요
  const myroomClicked = () => {
    confirm('로그아웃하시겠습니까?');
  };

  // 클릭에 따른 페이지 이동
  const [choosed, setChoosed] = useState('fullcase');

  // 추천하는 도서 **************************************************
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  // 나의 독서기록 ************************************************
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  // 추천받은 책 **************************************************

  // 세션 *****************************************************
  const session = localStorage;

  return (
    <>
      <React.Fragment>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={12}></Grid>

          <Grid item xs={12} textAlign="center">
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
              <Button
                id="exit-test"
                onClick={myroomClicked}
                // style={`background : url(${theimg}); width : 100px`}
                variant="outlined"
                sx={{
                  // cursor: 'unset',
                  m: 2,
                  py: 0.5,
                  px: 7,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  color: `${theme.palette.grey[900]}!important`,
                  fontWeight: 500,
                  borderRadius: `${customization.borderRadius}px`
                }}
                disableRipple
                // disabled
              >
                나의 책장
              </Button>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
        </Grid>
        <FormControl fullWidth>
          {choosed === 'fullcase' && (
            <>
              <img src={Bookcase} useMap="#image-map" alt="책장" />

              <map name="image-map">
                <area
                  target="_self"
                  alt="나의 추천 책장"
                  title="나의 추천 책장"
                  role="presentation"
                  coords="138,35,577,159"
                  shape="rect"
                  onClick={handleClickOpen1}
                />
                <area
                  target="_self"
                  alt="나의 독서 기록"
                  title="나의 독서 기록"
                  role="presentation"
                  coords="140,202,577,319"
                  shape="rect"
                  onClick={handleClickOpen2}
                />
                <area
                  target="_self"
                  alt="추천받은 책장"
                  title="추천받은 책장"
                  role="presentation"
                  coords="141,362,580,488"
                  shape="rect"
                  onClick={() => {
                    setChoosed('recommanded');
                  }}
                />
                <area
                  target="_self"
                  alt="인기도서"
                  title="인기도서"
                  role="presentation"
                  coords="141,525,579,647"
                  shape="rect"
                  onClick={() => {
                    setChoosed('hotbook');
                  }}
                />
              </map>
              <Link to="/readme/main">
                <Button variant="contained">뒤로가기</Button>
              </Link>
              <Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{'나의 추천 책장으로 이동하기'}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {session.getItem('loginId')}님이 추천하고 싶은 도서들을 기록하여 다른 사용자들과 공유해보세요. 공유를 원치 않을 경우
                    추천기록 비공개 여부는 마이페이지에서 설정하실 수 있습니다.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      setChoosed('recommanding');
                    }}
                  >
                    이동하기
                  </Button>
                  <Button onClick={handleClose1} autoFocus>
                    닫기
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog open={open2} onClose={handleClose2} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{'나의 독서기록 책장으로 이동하기'}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {session.getItem('loginId')}님이 읽은 도서들의 기록을 남겨보세요. 도서에 대한 감상평과 별점, 태그를 함께 입력할 수
                    있어요.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      setChoosed('myrecord');
                    }}
                  >
                    이동하기
                  </Button>
                  <Button onClick={handleClose2} autoFocus>
                    닫기
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
          {choosed === 'myrecord' && <Myrecord />}
          {choosed === 'recommanding' && <MyRecommanding />}
          {choosed === 'recommanded' && <Recommanded />}
          {choosed === 'hotbook' && <HotBook />}
        </FormControl>
      </React.Fragment>
    </>
  );
};

export default MainPage;
