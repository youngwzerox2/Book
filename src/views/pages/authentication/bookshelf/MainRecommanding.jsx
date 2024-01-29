import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Divider, Grid, Typography, Box, Card, Button, FormControl, CardMedia } from '@mui/material';
// project imports
import Background from '../Abackground';
import BasicFrame from '../BbasicFrame';
// import imageTest from '../../../../assets/images/Untitled.png';
import Logo from '../../../../assets/images/ReadMe2.png';
// assets
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import RecommandedDetail from './DetailRecommanded';

// ===============================|| AUTH3 - REGISTER ||=============================== //

const MainRecommanded = () => {
  const sess = localStorage;
  const [status, setStatus] = useState('main');
  const customization = useSelector((state) => state.customization);
  const [viewContent, setViewContent] = useState([]);
  const session = localStorage;
  const theme = useTheme();
  const boardLoad = () => {
    axios
      .get(`/recommanding/selectByUser?memberId=${sess.getItem('loginId')}`)
      .then((re) => setViewContent(re.data))
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
  }, [viewContent]);
  const [chatNum, setChatNum] = useState(0);
  const getValue = (re) => {
    setStatus('detail');
    setChatNum(re);
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
                      <img id="logo-image" src={Logo} alt="logo" width="250px" />
                      <React.Fragment>
                        <Grid container direction="column" justifyContent="center" spacing={2}>
                          <Grid item xs={12} sm={12} md={12}></Grid>

                          <Grid item xs={12} textAlign="center">
                            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                              <Button
                                id="exit-test"
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
                                {session.getItem('loginId')}의 책장
                              </Button>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>
                          </Grid>
                        </Grid>
                        <FormControl fullWidth>
                          {status === 'main' && (
                            <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
                              <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
                              <React.Fragment>
                                <Box
                                  sx={{ position: 'absolute', top: '6%', left: '27%' }}
                                  onClick={() => {
                                    getValue(viewContent[0].chatNumber);
                                  }}
                                >
                                  {viewContent[0] != undefined && (
                                    <img src={viewContent[0].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>

                                <Box
                                  onClick={() => {
                                    getValue(viewContent[1].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '6%', left: '45%' }}
                                >
                                  {viewContent[1] != undefined && (
                                    <img src={viewContent[1].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>

                                <Box
                                  sx={{ position: 'absolute', top: '6%', left: '63%' }}
                                  onClick={() => {
                                    getValue(viewContent[2].chatNumber);
                                  }}
                                >
                                  {viewContent[2] != undefined && (
                                    <img src={viewContent[2].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  sx={{ position: 'absolute', top: '29%', left: '27%' }}
                                  onClick={() => {
                                    getValue(viewContent[3].chatNumber);
                                  }}
                                >
                                  {viewContent[3] != undefined && (
                                    <img src={viewContent[3].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[4].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '29%', left: '45%' }}
                                >
                                  {viewContent[4] != undefined && (
                                    <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[5].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '29%', left: '63%' }}
                                >
                                  {viewContent[5] != undefined && (
                                    <img src={viewContent[5].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[6].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '51%', left: '27%' }}
                                >
                                  {viewContent[6] != undefined && (
                                    <img src={viewContent[6].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[7].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '51%', left: '45%' }}
                                >
                                  {viewContent[7] != undefined && (
                                    <img src={viewContent[7].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[8].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '51%', left: '63%' }}
                                >
                                  {viewContent[8] != undefined && (
                                    <img src={viewContent[8].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  onClick={() => {
                                    getValue(viewContent[9].chatNumber);
                                  }}
                                  sx={{ position: 'absolute', top: '74%', left: '27%' }}
                                >
                                  {viewContent[9] != undefined && (
                                    <img src={viewContent[9].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  sx={{ position: 'absolute', top: '74%', left: '45%' }}
                                  onClick={() => {
                                    getValue(viewContent[10].chatNumber);
                                  }}
                                >
                                  {viewContent[10] != undefined && (
                                    <img src={viewContent[10].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>
                                <Box
                                  sx={{ position: 'absolute', top: '74%', left: '63%' }}
                                  onClick={() => {
                                    getValue(viewContent[11].chatNumber);
                                  }}
                                >
                                  {viewContent[11] != undefined && (
                                    <img src={viewContent[11].bookImageURL} alt="이미지입니다" height="100px" />
                                  )}
                                </Box>

                                <Button
                                  variant="contained"
                                  sx={{ position: 'absolute', top: '92%', right: '43%' }}
                                  onClick={() => {
                                    location = '/free/readme/bookshelf';
                                  }}
                                >
                                  뒤로가기
                                </Button>
                              </React.Fragment>
                            </Card>
                          )}
                          {status === 'detail' && <RecommandedDetail chatNumber={chatNum} />}
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

export default MainRecommanded;
