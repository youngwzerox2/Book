import { Link } from 'react-router-dom';

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
// assets
import theimg from '../../../../assets/images/library.png';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
import * as React from 'react';
// import { width } from '@mui/system';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.
import ImageMap from 'image-map';
// npm install image-map
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  const theme = useTheme();
  const session = localStorage;
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);

  // 추천유저 **************************************************
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  // 비슷한 연령대의 유저 ****************************************
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  // 인기 유저 ****************************************
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
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
                          <img src={theimg} alt="tlqkf" useMap="#image-map" />
                          <map name="image-map">
                            <area
                              target="_self"
                              alt="추천 책장"
                              title="추천 책장"
                              coords="110,77,618,117"
                              role="presentation"
                              shape="rect"
                              onClick={handleClickOpen1}
                            />
                            <area
                              target="_self"
                              alt="연령대별 책장"
                              title="연령대별 책장"
                              role="presentation"
                              coords="109,144,623,187"
                              shape="rect"
                              onClick={handleClickOpen2}
                            />
                            <area
                              target="_self"
                              alt="랭킹 책장"
                              title="랭킹 책장"
                              role="presentation"
                              coords="113,215,621,256"
                              shape="rect"
                              onClick={handleClickOpen3}
                            />
                            <Link to="community">
                              <area
                                target="_self"
                                alt="카페 방문"
                                title="카페 방문"
                                role="presentation"
                                coords="110,285,621,328"
                                shape="rect"
                              />
                            </Link>
                            <Link to="/readme/main">
                              <area
                                target="_self"
                                alt="방으로 돌아가기"
                                title="방으로 돌아가기"
                                role="presentation"
                                coords="113,357,618,393"
                                shape="rect"
                              />
                            </Link>
                            <area
                              target="_self"
                              alt="싱싱한 화분이 놓여있다"
                              title="싱싱한 화분이 놓여있다"
                              role="presentation"
                              coords="53,719,43,688,56,662,61,652,68,613,47,547,71,505,121,533,145,613,135,653,153,680,145,713"
                              shape="poly"
                            />
                            <area
                              target="_self"
                              alt="사서 돌멩이의 (자칭)애마인 북카드가 쓸쓸히 놓여있다"
                              title="사서 돌멩이의 (자칭)애마인 북카드가 쓸쓸히 놓여있다"
                              role="presentation"
                              coords="556,718,556,577,543,535,573,572,613,539,640,546,648,580,694,574,710,533,704,584,701,715"
                              shape="poly"
                            />
                            <Link to="/readme/book">
                              <area
                                target="_self"
                                alt="도서 검색하기"
                                title="도서 검색하기"
                                role="presentation"
                                coords="569,401,686,400,682,470,637,479,643,492,683,500,556,504,576,473"
                                shape="poly"
                              />
                            </Link>
                            <area
                              target="_self"
                              alt="김이 모락모락 나는 따뜻한 커피"
                              title="김이 모락모락 나는 따뜻한 커피"
                              role="presentation"
                              coords="332,504,331,482,344,472,368,474,381,485,374,498,362,507"
                              shape="poly"
                            />
                            <area
                              target="_self"
                              alt="사서 돌멩이가 좋아하는 쿠키"
                              title="사서 돌멩이가 좋아하는 쿠키"
                              role="presentation"
                              coords="389,506,440,504,433,497,414,490,399,496"
                              shape="poly"
                            />
                            <area
                              target="_self"
                              alt="사서 돌멩이"
                              title="사서 돌멩이"
                              role="presentation"
                              coords="401,460,411,436,430,419,449,410,474,405,505,414,527,433,539,460,535,488,521,504,443,504,418,487,408,486"
                              shape="poly"
                            />
                            <area
                              target="_self"
                              alt="현재 시간은 000 다"
                              title="현재 시간은 000 다"
                              role="presentation"
                              coords="250,340,265,332,281,339,289,350,242,350"
                              shape="poly"
                            />
                          </map>
                          <Dialog
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">{'나의 추천 책장으로 이동하기'}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {session.getItem('loginId')}님과 비슷한 취향의 다른 유저분들을 만나보실 수 있어요. 유저분들의 멩이를
                                클릭해서 다른 유저를 만나보세요.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Link to="recommand">
                                <Button>이동하기</Button>
                                <Button onClick={handleClose1} autoFocus>
                                  닫기
                                </Button>
                              </Link>
                            </DialogActions>
                          </Dialog>
                          <Dialog
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">{'나의 추천 책장으로 이동하기'}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {session.getItem('loginId')}님과 비슷한 연령대의 유저분들을 만나보실 수 있어요. 유저분들의 멩이를 클릭해서
                                다른 유저를 만나보세요.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Link to="age">
                                <Button>이동하기</Button>
                              </Link>
                              <Button onClick={handleClose2} autoFocus>
                                닫기
                              </Button>
                            </DialogActions>
                          </Dialog>
                          <Dialog
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">{'나의 추천 책장으로 이동하기'}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                현재 리드미에서 가장 인기 있는 유저들을 만나 보실 수 있어요. 인기 유저들의 책장을 탐험해보세요.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Link to="hot">
                                <Button>이동하기</Button>
                                <Button onClick={handleClose3} autoFocus>
                                  닫기
                                </Button>
                              </Link>
                            </DialogActions>
                          </Dialog>
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
