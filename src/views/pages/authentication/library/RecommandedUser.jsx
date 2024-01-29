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
                                  {thisUser === 'test151' && <Typography gutterBottom>유저 : 여기 151</Typography>}
                                  {thisUser === 'test152' && <Typography gutterBottom>유저 : 여기 닉네임 찍어줄거야 졔야</Typography>}

                                  <Typography gutterBottom sx={{ marginTop: '10px' }}>{`< 추천도서 >`}</Typography>
                                  <Typography gutterBottom>여기에 그 사람의 대표 책 제목</Typography>
                                  <Typography gutterBottom>추천하는 글 내용</Typography>

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
