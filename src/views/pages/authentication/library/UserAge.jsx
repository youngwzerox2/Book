import { Link } from 'react-router-dom';
import theimg from '../../../../assets/images/bookcaseB_meng_Random.png';
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
  // const thisUser = sess.getItem('loginId');

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

  const [open9, setOpen9] = React.useState(false);
  const handleClickOpen9 = () => {
    setOpen9(true);
  };
  const handleClose9 = () => {
    setOpen9(false);
  };

  const [open10, setOpen10] = React.useState(false);
  const handleClickOpen10 = () => {
    setOpen10(true);
  };
  const handleClose10 = () => {
    setOpen10(false);
  };

  const [open11, setOpen11] = React.useState(false);
  const handleClickOpen11 = () => {
    setOpen11(true);
  };
  const handleClose11 = () => {
    setOpen11(false);
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
                                도서관
                              </Button>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>
                          </Grid>
                        </Grid>
                        <FormControl fullWidth>
                          <>
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
                              <area
                                target="_self"
                                alt="멩이10"
                                title="멩이10"
                                role="presentation"
                                coords="234,603,39"
                                shape="circle"
                                onClick={handleClickOpen9}
                              />
                              <area
                                target="_self"
                                alt="멩이11"
                                title="멩이11"
                                role="presentation"
                                coords="360,602,41"
                                shape="circle"
                                onClick={handleClickOpen10}
                              />
                              <area
                                target="_self"
                                alt="멩이12"
                                title="멩이12"
                                role="presentation"
                                coords="489,602,39"
                                shape="circle"
                                onClick={handleClickOpen11}
                              />
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test127</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    신경 끄기의 기술 :인생에서 가장 중요한것만 남기는 힘
                                  </Typography>
                                  <Typography gutterBottom>“무한 긍정만을 강요하던 기존의 자기계발서는 잊어라!”</Typography>
                                  <Typography gutterBottom>
                                    아마존·뉴욕타임스 베스트셀러 1위 150만 부 돌파! 아마존 53주 연속 베스트셀러 2017 아마존에서 가장 많이
                                    읽은 책 전 세계 28개국 번역 출간 미국 네티즌 추천 2017 최고의 책 「CNN」, 「타임」, 「포브스」,
                                    「월스트리트저널」… 수많은 언론의 극찬 세례
                                  </Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test137</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    자존감 수업 :하루에 하나, 나를 사랑하게 되는 자존감 회복 훈련
                                  </Typography>
                                  <Typography gutterBottom>자존감을 높이고 싶다면 이 책을 추천합니다!</Typography>
                                  <Typography gutterBottom>
                                    자존감은 감정이 아니고 감정과 연결되어 있지만 이성의 영역이다. 환경이 좋지 않을 때는 건강한 마음으로
                                    무장한 자신이 가장 강력한 무기다. 자신을 사랑하면 인생이 심플해진다.
                                  </Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test61</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    신과 함께 :저승편
                                  </Typography>
                                  <Typography gutterBottom>인생의 철학에 대해 되돌아보는 책입니다.</Typography>
                                  <Typography gutterBottom>
                                    사후의 세계가 있을까 궁금증을 유발하는 책이다. 49일의 저승에서 수많은 일들을 겪으면서 감동을 선사하고 나
                                    자신을 되돌아보게 되는 계기가 되는 책이다.
                                  </Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test114</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    (EBS 다큐프라임) 자본주의
                                  </Typography>
                                  <Typography gutterBottom>자본주의 세상에서</Typography>
                                  <Typography gutterBottom>쉬지 않고 일하는데 나는 왜 이렇게 살기 힘든가</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test21</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    카페 style 샌드위치 =신선한 빵&다양한 속재료의 조화로 입맛을 감동시키는, 건강 한 끼 메뉴! /Cafe style
                                    sandwich
                                  </Typography>
                                  <Typography gutterBottom>마음이 따뜻해지는 책입니다.</Typography>
                                  <Typography gutterBottom>
                                    빵이 먹고 싶을 때 <br />
                                    집에서 쉽게 따라할 수 있는 빵 레시피
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test2</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    신비한 고양이 마을
                                  </Typography>
                                  <Typography gutterBottom>고양이와 사람이 모두 행복해지는 방법</Typography>
                                  <Typography gutterBottom>고양이가 나오는 책을 사람이 읽으면 됩니다. 완 전 강 추</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test57</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    나는꼼수다 뒷담화 :당신도 꼼수PD가 될 수 있다
                                  </Typography>
                                  <Typography gutterBottom>{`<나꼼수>`}</Typography>
                                  <Typography gutterBottom>
                                    내 나라, 우리나라의 현실에 빨리 눈을 떠야 되는 것을 깨달았다. 내가 속고 있는 것들… 그리고 누구의 탓으로
                                    돌리지 않으면 아무런 이유도 없이 평생을 이렇게 살아야 할 것 같았기에.
                                  </Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test85</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    {`(이상한 과자 가게) 전천당`}
                                  </Typography>
                                  <Typography gutterBottom>긴장하라, 베니코</Typography>
                                  <Typography gutterBottom>
                                    베니코에게 복수하려다 연구소가 폭파되고 사라졌던 로쿠조 교수가 나타났다. 증오심으로 가득 찬 천재 박사가
                                    『전천당』을 망가뜨릴 계획을 하고 있는 사이에도 『전천당』은 행운의 손님을 맞이한다. 어리광을 피워
                                    엄마에게 사랑받고 싶은 다쿠미의 『응석 젓가락 과자』, 친구들이 자기에게 고민을 마구 털어놓길 바라는
                                    유키호의 『상담해 떡꼬치』, 평소에 사과를 안 해 친구들에게 미움받는 우루미의 『미안해 라면』 등 행운과
                                    불행, 그 사이에서 아슬아슬 줄타기를 하는 사람들의 특별한 이야기가 펼쳐진다. 그리고 상상도 못 할 로쿠조의
                                    마지막 계획이 시작되면서 『전천당』은 새로운 국면에 휩싸인다.
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test92</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    방구석 미술관 :가볍고 편하게 시작하는 유쾌한 교양 미술
                                  </Typography>
                                  <Typography gutterBottom>미술교양 입문서</Typography>
                                  <Typography gutterBottom>
                                    출간 이후 예술 분야 베스트셀러를 굳건히 지키고 있는 『방구석 미술관』은 반 고흐, 폴 세잔, 마네, 클림트
                                    등 유명한 화가의 유명한 작품들을 중심으로 초보자도 쉽고 재미있게 미술을 감상할 수 있도록 소개한다.
                                    무엇보다 인기 팟캐스트를 만들어낸 저자의 입담이 그대로 담겨 지루할 틈 없이 그림 속 이야기에 푹 빠지게
                                    한다.
                                  </Typography>

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
                              <BootstrapDialog onClose={handleClose9} aria-labelledby="customized-dialog-title" open={open9}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose9}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test23</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    내일은 발명왕 :본격 대결 과학발명 만화
                                  </Typography>
                                  <Typography gutterBottom>내일은 발명왕</Typography>
                                  <Typography gutterBottom>
                                    재밌어요
                                    <br />
                                    조금 더 단단한 정신을 갖추는 데 많은 도움이 되는 책입니다.
                                  </Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose9}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose10} aria-labelledby="customized-dialog-title" open={open10}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose10}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test48</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    뼈뼈 사우르스
                                  </Typography>
                                  <Typography gutterBottom>거꾸로랜드 이야기</Typography>
                                  <Typography gutterBottom>
                                    지하 세계 거꾸로랜드에 어둠의 드래곤이 나타났다! 위기에 처한 거꾸로랜드를 구하기 위해 뼈뼈 삼총사 등장!
                                    그런데 삼총사의 특별 기술인 뼈뼈 삼단 공격도 통하지 않는다?
                                  </Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose10}>
                                    책장 방문하기
                                  </Button>
                                </DialogActions>
                              </BootstrapDialog>
                              <BootstrapDialog onClose={handleClose11} aria-labelledby="customized-dialog-title" open={open11}>
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                  사용자 정보
                                </DialogTitle>
                                <IconButton
                                  aria-label="close"
                                  onClick={handleClose11}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : test97</Typography>} */}
                                  {/* {thisUser === 'test152' && <Typography gutterBottom>유저 : test84</Typography>} */}
                                  <Typography gutterBottom>유저 : test151</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    어린왕자=Le petit prince
                                  </Typography>
                                  <Typography gutterBottom>죽기 전에 꼭 읽어야 할 책</Typography>
                                  <Typography gutterBottom>명작들만 고르고 골라 만든 책장입니다.</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '20px' }}>
                                    해당 유저의 책장에 방문하여 더 많은 추천기록을 확인해보세요
                                  </Typography>
                                </DialogContent>
                                <DialogActions>
                                  <Button autoFocus onClick={handleClose11}>
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
