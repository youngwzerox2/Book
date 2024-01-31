import { Link } from 'react-router-dom';
import theimg from '../../../../assets/images/bookcaseB_meng_Basic.png';
import { Divider, Grid, Typography } from '@mui/material';
import Background from '../Abackground';
import BasicFrame from '../BbasicFrame';
import { useEffect } from 'react';
import Logo from '../../../../assets/images/ReadMe2.png';
import { styled } from '@mui/material/styles';
// 기본 폼
import { FormControl } from '@mui/material';
import { Box, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ImageMap from 'image-map';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
// ========================================================================
// =================== || 부트스트랩 다이얼로그 || ==========================
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

// ========================================================================
// =================== || 리턴할 컴포넌트 함수 || ===========================
const Register = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);

  // =====================================================================
  // ================ || 인기 유저리스트 받기 || ==========================
  const [viewContent, setViewContent] = useState([]);
  const boardLoad = () => {
    axios.get('/library/rankingBookshelf').then((re) => {
      console.log(re.data);
      setViewContent(re.data);
      console.log(viewContent);
    });
  };
  useEffect(() => {
    boardLoad();
    ImageMap('img[useMap]'); // imageMap 삽입코드
  }, []);

  // =====================================================================
  // =============== || 모달창 띄우기 || ==================================
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test21</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    카페 style 샌드위치 =신선한 빵&다양한 속재료의 조화로 입맛을 감동시키는, 건강 한 끼 메뉴! /Cafe style
                                    sandwich
                                  </Typography>
                                  <Typography gutterBottom>빵이 먹고 싶을 때</Typography>
                                  <Typography gutterBottom>집에서 쉽게 따라할 수 있는 빵 레시피</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test25</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    어린왕자=Le petit prince
                                  </Typography>
                                  <Typography gutterBottom>어린 시절을 함께한 책들</Typography>
                                  <Typography gutterBottom>동심을 자극하는 도서 모음</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test74</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    인간의 본성에 관한 10가지 이론
                                  </Typography>
                                  <Typography gutterBottom>인간에 관한 고찰</Typography>
                                  <Typography gutterBottom>인간이란 무엇인가. 인간에 관해 자세히 알게 해주는 인문학 도서</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test66</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    미키7 :에드워드 애슈턴 SF 장편소설
                                  </Typography>
                                  <Typography gutterBottom>SF 과학을 좋아하고 상상력이 풍부한 사람들에게 추천!</Typography>
                                  <Typography gutterBottom>
                                    봉준호 감독의 차기 영화의 원작으로 주목받은 에드워드 애슈턴의 SF 장편소설 『미키7』이 황금가지에서
                                    출간된 책으로 기대가 많이 됐었고 신선한 설정이라 기억에 많이 남았어요!!
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test33</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    나를 위한 가벼운 집밥책 :요즘 딱! 신선 재료, 쉽고 간단한 건강 요리
                                  </Typography>
                                  <Typography gutterBottom>자취하는데 큰 도움이 되는 책</Typography>
                                  <Typography gutterBottom>
                                    올해 자취를 처음 했는데 무슨음식을 어떻게 해먹을까 고민이 많았는데 이 책을 보면서 하니깐 도움이 많이
                                    되었어요!
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test67</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    셜록 홈스, 범인을 찾아라!
                                  </Typography>
                                  <Typography gutterBottom>추리소설에 대해 관심이 많이 가는 요즘</Typography>
                                  <Typography gutterBottom>셜록 홈스를 읽고서 탐정추리 하는 생각에 밤새 잠을 못잤어요,,</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test45</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    완벽하지 않은 것들에 대한 사랑 :온전한 나를 위한 혜민 스님의 따뜻한 응원
                                  </Typography>
                                  <Typography gutterBottom>혜민스님의 철학이 느껴져요,,</Typography>
                                  <Typography gutterBottom>
                                    {`완벽하지 않은 것들에 대한 사랑 :온전한 나를 위한 혜민 스님의 따뜻한 응원이라는 책을 읽고 사랑이란
                                    무엇일까에 대한 철학적인 생각이 확립되었어요. 세상이 요구하는 완벽함을 갖추지 않아도 우리 존재는 이미
                                    가치가 있고 사랑받을 만하다고 생각해요:)`}
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test48</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    퓨처 셀프 :현재와 미래가 달라지는 놀라운 혁명
                                  </Typography>
                                  <Typography gutterBottom>더 나은 나를 기대하며</Typography>
                                  <Typography gutterBottom>각성하고자 구매한 책입니다. 유튜브 인기 도서!!</Typography>

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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test5</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    설민석의 한국사 대모험
                                  </Typography>
                                  <Typography gutterBottom>한국사에 대해 더 깊게 알아보고 싶었다</Typography>
                                  <Typography gutterBottom>
                                    한국사에 대해 더 깊게 알아보고 싶었을 때 어떤 책이 좋을까 생각하다가 설민석 선생님이 생각나서 이 책을
                                    읽으면서 즐겁게 한국사에 대해 공부할 수 있었어요. 민석쌤 사랑해요!
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
                                  {/* {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>} */}
                                  {/* <Typography gutterBottom>유저 : {viewContent[0].memberId}</Typography> */}
                                  <Typography gutterBottom>유저 : test7</Typography>

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom style={{ fontSize: 24 }}>
                                    나의 하루는 4시 30분에 시작된다 :하루를 두 배로 사는 단 하나의 습관
                                  </Typography>
                                  <Typography gutterBottom>경제적인 관념을 이해하는데 좋았어요.</Typography>
                                  <Typography gutterBottom>
                                    나의 하루는 4시 30분에 시작된다 :하루를 두 배로 사는 단 하나의 습관이라는 책은 저에게 경제 관념을
                                    심어줬을뿐만 아니라 인생의 철학을 되돌아보게 하는 책입니다.
                                  </Typography>

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
