import { Link } from 'react-router-dom';

// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Divider, Grid, Typography } from '@mui/material';
// project imports
import Background from '../Abackground';
import BasicFrame from '../BbasicFrame';
import MemberInfo from './DMemberInfo';
// import AuthFooter from 'ui-component/cards/AuthFooter';
// import imageTest from '../../../../assets/images/Untitled.png';
import Logo from '../../../../assets/images/ReadMe2.png';
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
                    <Grid item xs={12} textAlign="center">
                      <img id="logo-image" src={Logo} alt="logo" width={'250px'} />
                      {/* </a> */}
                      <MemberInfo />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item container direction="column" alignItems="center" xs={12}>
                        <Typography component={Link} to="/readme/mypage" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                          뒤로가기
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
