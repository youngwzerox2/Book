import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Typography } from '@mui/material';
// project imports
import Background from '../Abackground';
import BasicFrame from '../BbasicFrame';
import Logo from '../../../../assets/images/ReadMe2.png';
import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
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
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ marginBottom: '20px' }} />
                      <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        events={[
                          { title: '시돌 매직쇼', date: '2024-02-02' },
                          { title: '굿바이 리드미', date: '2024-02-08' }
                        ]}
                      />
                      <Link to="/readme/main">
                        <Button variant="contained" sx={{ left: '50%', transform: 'translateX(-50%)', marginTop: '10px' }}>
                          뒤로가기
                        </Button>
                      </Link>
                    </Grid>

                    <Grid item xs={12}>
                      <Divider sx={{ marginBottom: '20px' }} />
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
