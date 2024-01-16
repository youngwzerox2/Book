import { Link } from 'react-router-dom';

// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Divider, Grid, Typography } from '@mui/material';
// project imports
import Background from './aBackground';
import BasicFrame from './bBasicFrame';
import MainPage from './dMainPage';
// import AuthFooter from 'ui-component/cards/AuthFooter';
import StickyFooter from './examples/StickeyFooter';
// import imageTest from '../../../../assets/images/Untitled.png';
import Logo from '../../assets/images/ReadMe2.png';
import '../../App.css';
// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  // testing1 컴포넌트에서 발생하는 이벤트
  // 1. 로고 클릭 시 main 페이지로 이동

  return (
    <>
      <Background>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <BasicFrame>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    {/* 이거 xs 에서 m 으로 늘리니까 칸 늘어남. 즉 여기서 칸 조절 -> 아님 이거 없애도 잘됨*/}
                    {/* <Grid item m={12}>
      <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
        <Grid item>
          <Stack alignItems="center" justifyContent="center" spacing={1}>
            <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
              Enter your credentials to continue
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid> */}
                    <Grid item xs={12} textAlign="center">
                      {/* 여기에 이미지 넣으면 크기 작게 들어감. */}
                      {/* <a href="http://localhost:3000/free/main"> */}
                      <img id="logo-image" src={Logo} alt="logo" />
                      {/* </a> */}
                      <MainPage />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item container direction="column" alignItems="center" xs={12}>
                        <Typography component={Link} to="/pages/login/login3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                          {/* Already have an account? */}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </BasicFrame>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            <StickyFooter />
          </Grid>
        </Grid>
      </Background>
    </>
  );
};

export default Register;
