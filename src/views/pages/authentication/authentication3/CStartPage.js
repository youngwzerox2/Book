// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../Abackground';
import AuthCardWrapper from '../BstartPage';
import Logo from '../../../../assets/images/ReadMe2.png';
import DRegister from '../auth-forms/DstartpageContent';
import DstartIntroduce from '../auth-forms/DstartIntroduce';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <img id="logo-image" src={Logo} alt="로고" width={'240px'} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.grey[600]} fontSize="26px" gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            영화, 시리즈 등을 무제한으로
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <DRegister />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <DstartIntroduce />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Register;
