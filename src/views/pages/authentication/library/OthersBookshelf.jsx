import { Link } from 'react-router-dom';
import theimg from '../../../../assets/images/bookcaseB_meng_Basic.png';
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Divider, Grid, Typography } from '@mui/material';
// project imports
import Background from '../Abackground';
import BasicFrame from '../BbasicFrame';
import { useEffect } from 'react';
// import AuthFooter from 'ui-component/cards/AuthFooter';
// import imageTest from '../../../../assets/images/Untitled.png';
import Logo from '../../../../assets/images/ReadMe2.png';
// import Library from './DLibrary';
import { styled } from '@mui/material/styles';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, IconButton } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.
import ImageMap from 'image-map';
// npm install image-map
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { FavoriteBorder } from '@mui/icons-material';
// ===============================|| AUTH3 - REGISTER ||=============================== //
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const Register = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  const sess = localStorage;

  // 추천 유저리스트 받기
  const [viewContent, setViewContent] = useState([]);
  const boardLoad = () => {
    axios.post(`/library/recommendBookshelf?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViewContent(re.data);
      console.log(viewContent);
    });
  };
  useEffect(() => {
    boardLoad();
    ImageMap('img[useMap]'); // imageMap 삽입코드
  }, []);

  // 모달창 띄우기
  const thisUser = sess.getItem('loginId');

  const [open0, setOpen0] = React.useState(false);
  const handleClickOpen0 = () => {
    setOpen0(true);
  };
  const handleClose0 = () => {
    setOpen0(false);
  };

  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false);
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = React.useState(false);
  const handleClickOpen8 = () => {
    setOpen8(true);
  };
  const handleClose8 = () => {
    setOpen8(false);
  };

  return (
    <>
      <Background>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <BasicFrame>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} textAlign="center">
                      <img id="logo-image" src={Logo} alt="logo" width={'250px'} />
                      {/* </a> */}

                      {/* <Library /> */}

                      <React.Fragment>
                        <Grid container direction="column" justifyContent="center" spacing={2}>
                          <Grid item xs={12} sm={12} md={12}></Grid>

                          <Grid item xs={12} textAlign="center">
                            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                              <Button
                                id="exit-test"
                                // onClick={myroomClicked}
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
                                000 님의 책장
                              </Button>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>
                          </Grid>
                        </Grid>
                        <FormControl fullWidth>
                          <>
                            <IconButton variant="contained" sx={{ position: 'absolute', top: '3%', left: '92%', backgroundColor: 'white' }}>
                              <FavoriteBorder />
                            </IconButton>
                            {/* <img src={theimg} alt="tlqkf" useMap="#image-map" /> */}
                            <img src={theimg} alt="책장" useMap="#image-map" />

                            <map name="image-map">
                              <area
                                target="_self"
                                alt="멩이1"
                                title="멩이1"
                                role="presentation"
                                coords="234,110,41"
                                shape="circle"
                                onClick={handleClickOpen0}
                              />
                              <area
                                target="_self"
                                alt="멩이2"
                                title="멩이2"
                                role="presentation"
                                coords="360,109,40"
                                shape="circle"
                                onClick={handleClickOpen1}
                              />
                              <area
                                target="_self"
                                alt="멩이3"
                                title="멩이3"
                                role="presentation"
                                coords="489,110,39"
                                shape="circle"
                                onClick={handleClickOpen2}
                              />
                              <area
                                target="_self"
                                alt="멩이4"
                                title="멩이4"
                                role="presentation"
                                coords="234,275,38"
                                shape="circle"
                                onClick={handleClickOpen3}
                              />
                              <area
                                target="_self"
                                alt="멩이5"
                                title="멩이5"
                                role="presentation"
                                coords="360,278,39"
                                shape="circle"
                                onClick={handleClickOpen4}
                              />
                              <area
                                target="_self"
                                alt="멩이6"
                                title="멩이6"
                                role="presentation"
                                coords="489,277,39"
                                shape="circle"
                                onClick={handleClickOpen5}
                              />
                              <area
                                target="_self"
                                alt="멩이7"
                                title="멩이7"
                                role="presentation"
                                coords="236,438,39"
                                shape="circle"
                                onClick={handleClickOpen6}
                              />
                              <area
                                target="_self"
                                alt="멩이8"
                                title="멩이8"
                                role="presentation"
                                coords="361,439,39"
                                shape="circle"
                                onClick={handleClickOpen7}
                              />
                              <area
                                target="_self"
                                alt="멩이9"
                                title="멩이9"
                                role="presentation"
                                coords="489,439,41"
                                shape="circle"
                                onClick={handleClickOpen8}
                              />
                              <area target="_self" alt="멩이10" title="멩이10" role="presentation" coords="234,603,39" shape="circle" />
                              <area target="_self" alt="멩이11" title="멩이11" role="presentation" coords="360,602,41" shape="circle" />
                              <area target="_self" alt="멩이12" title="멩이12" role="presentation" coords="489,602,39" shape="circle" />
                            </map>
                            <React.Fragment>
                              <BootstrapDialog onClose={handleClose0} aria-labelledby="customized-dialog-title" open={open0}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose0}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    책 먹는 여우
                                  </Typography>
                                  <Typography gutterBottom>아이도 어른도 좋아하는 책</Typography>
                                  <Typography gutterBottom>{`남녀노소 누구든 재미있게 읽을 만한 책 :)`}</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose0}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose1}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test116</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test64</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    세이노의 가르침
                                  </Typography>
                                  <Typography gutterBottom>돈이 아깝지 않은 책!</Typography>
                                  <Typography gutterBottom>그 어느 비싸고 두꺼운 책보다도 더 값어치 있는 책이라고 생각합니다.</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose1}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose2}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test146</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test102</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    미 비포 유
                                  </Typography>
                                  <Typography gutterBottom>책과 영화를 동시에!</Typography>
                                  <Typography gutterBottom>기대만큼 재밌습니다. 시간이 후딱 가네요.</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose2}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose3} aria-labelledby="customized-dialog-title" open={open3}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose3}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test48</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test128</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    퓨처 셀프
                                  </Typography>
                                  <Typography gutterBottom>더 나은 나를 기대하며</Typography>
                                  <Typography gutterBottom>각성하고자 구매한 책입니다. 유튜브 인기 도서!!</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose3}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose4} aria-labelledby="customized-dialog-title" open={open4}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose4}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test14</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test115</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    역행자
                                  </Typography>
                                  <Typography gutterBottom>경제적 자유를 꿈꾸는 자들의 필독서</Typography>
                                  <Typography gutterBottom>
                                    자기계발서 여러 책을 읽었지만, 이 책은 특히, 실천방식에 대해서도 보다 상세히 설명한다.
                                  </Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose4}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose5} aria-labelledby="customized-dialog-title" open={open5}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose5}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test141</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test143</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    팩트풀니스
                                  </Typography>
                                  <Typography gutterBottom>나의 인생책</Typography>
                                  <Typography gutterBottom>
                                    세상을 똑바로 볼 수 있게 해주는 현명한 책.
                                    <br />
                                    내가 가지고 있는 정보가 낡은 정보라는 걸 깨달을 수 있어서 좋았습니다.
                                  </Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose5}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose6} aria-labelledby="customized-dialog-title" open={open6}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose6}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test35</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test1</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    생각이 너무 많은 어른들을 위한 심리학 :후회 없는 삶을 살고 싶은 당신에게 해 주고 싶은 말들
                                  </Typography>
                                  <Typography gutterBottom>불안한 사람을 위한 처방전</Typography>
                                  <Typography gutterBottom>“못하는 건 두고 할수 있는 것을 하자”</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose6}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose7} aria-labelledby="customized-dialog-title" open={open7}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose7}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test27</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test118</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    데일 카네기 인간관계론
                                  </Typography>
                                  <Typography gutterBottom>인간관계의 바이블</Typography>
                                  <Typography gutterBottom>
                                    전 세계적으로 6천만부가 판매된 최고의 인간관계 바이블, 워런 버핏의 인생을 바꿨다는 책
                                  </Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose7}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose8} aria-labelledby="customized-dialog-title" open={open8}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose8}
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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : test62</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : test37</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    아가미 :구병모 장편소설
                                  </Typography>
                                  <Typography gutterBottom>마음 먹먹해지는 소설</Typography>
                                  <Typography gutterBottom>아름다운 문장들과 물에 둘러싸인듯한 분위기로 가득한 책.</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose8}>
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
                                location = '/free/readme/library';
                              }}
                            >
                              뒤로가기
                            </Button>
                          </>
                        </FormControl>
                      </React.Fragment>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item container direction="column" alignItems="center" xs={12}>
                        <Typography
                          component={Link}
                          to="/readme/main"
                          variant="subtitle1"
                          sx={{ textDecoration: 'none' }}
                          onClick={() => {
                            confirm('로그아웃하시겠습니까?');
                          }}
                        >
                          로그아웃
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </BasicFrame>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}></Grid>
        </Grid>
      </Background>
    </>
  );
};

export default Register;
