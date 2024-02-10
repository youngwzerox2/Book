import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  // Checkbox,
  Divider,
  FormControl,
  // FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Kakao from 'assets/images/kakao_login_medium_wide.png';
// import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const style = {
    py: 0,
    width: '100%',
    marginTop: '15px',
    maxWidth: 600,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper'
  };
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const customization = useSelector((state) => state.customization);
  // const [checked, setChecked] = useState(false);
  const googleHandler = async () => {
    location =
      'https://kauth.kakao.com/oauth/authorize?client_id=ee0b0d86ac0c50bc7ef7fed3d4991165&redirect_uri=http://118.217.203.37:3000/free/readme/main&response_type=code';
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [mid, setMid] = useState('');
  const [mpassword, setMpassword] = useState('');
  // const [savedLoginId, setSavedLoginId] = useState('');
  // const [savedLoginPassword, setSavedLoginPassword] = useState('');
  let session = window.localStorage;
  const logFunc = () => {
    session.setItem('loginId', mid);
    session.setItem('loginPassword', mpassword);
    console.log(session.getItem('loginId'));

    axios.post(`/user/login?memberId=${mid}&memberPassword=${mpassword}`).then((re) => {
      if (re.data == 1) {
        // 로그인 성공
        if (mid === '0woo' || mid === 'test1') {
          const answer = confirm('관리자 페이지로 이동하시겠습니까?');
          if (answer == true) {
            location = 'http://118.217.203.46:8080/adminmain';
          }
        } else {
          window.location.replace('/free/readme/main');
        }
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        location.reload();
      }
    });
  };

  // --------------------------------------------------------------
  // 아이디/비밀번호 찾기
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [mtel, setMtel] = useState('');
  const [mname, setMname] = useState('');
  const [memId, setMemId] = useState('');

  const searchId = () => {
    axios.post(`/user/findId?memberName=${mname}&memberTel=${mtel}`).then((re) => {
      if (re.data == 1) {
        alert('이메일이 발송되었습니다.');
      } else {
        alert('해당 정보에 일치하는 아이디가 없습니다');
      }
    });
  };

  const searchPw = () => {
    axios.post(`/user/findPw?memberName=${mname}&memberTel=${mtel}&memberId=${memId}`).then((re) => {
      if (re.data == 1) {
        alert('이메일이 발송되었습니다');
      } else {
        alert('해당 정보에 해당하는 계정이 없습니다. 다시 확인해주세요');
      }
    });
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="medium"
              variant="filled"
              sx={{
                color: 'grey.50',
                // backgroundColor: theme.palette.grey[50],
                backgroundColor: 'inherit',
                padding: 0,
                borderColor: theme.palette.grey[100]
              }}
            >
              <img src={Kakao} alt="google" style={{ size: '100%' }} />
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              아이디로 로그인하기
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center"></Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          // email: Yup.string().max(255).required('아이디를 입력해주세요'),
          // password: Yup.string().max(255).required('비밀번호를 입력해주세요')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">아이디</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                value={values.mid}
                name="mid"
                label="mid"
                onBlur={handleBlur}
                onChange={(e) => {
                  setMid(e.target.value);
                }}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">비밀번호</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.mpassword}
                name="password"
                onBlur={handleBlur}
                onChange={(e) => {
                  setMpassword(e.target.value);
                  handleChange;
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              {/* <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="로그인정보 기억하기"
              /> */}
              <React.Fragment>
                <Typography
                  onClick={handleClickOpen}
                  variant="subtitle1"
                  color="secondary"
                  sx={{ textDecoration: 'none', cursor: 'pointer', marginLeft: '5px' }}
                >
                  아이디/비밀번호 찾기
                </Typography>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                      event.preventDefault();
                      const formData = new FormData(event.currentTarget);
                      const formJson = Object.fromEntries(formData.entries());
                      const email = formJson.email;
                      console.log(email);
                      handleClose();
                    }
                  }}
                >
                  <DialogTitle>아이디/비밀번호 찾기</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      이름과 전화번호를 입력해주시면 일치하는 회원정보를 찾아 가입하셨던 이메일 주소로 계정 정보를 보내드립니다.
                    </DialogContentText>
                    <List sx={style}>
                      <ListItem>
                        <ListItemText>아이디 찾기</ListItemText>
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <TextField
                          autoFocus
                          required
                          margin="dense"
                          id="name"
                          name="memberName"
                          label="이름"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={(e) => {
                            setMname(e.target.value);
                          }}
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <TextField
                          autoFocus
                          required
                          margin="dense"
                          id="memberTel"
                          name="email"
                          label="전화번호 ( ' - ' 없이 입력 )"
                          type="tel"
                          fullWidth
                          variant="standard"
                          onChange={(e) => {
                            setMtel(e.target.value);
                          }}
                        />
                      </ListItem>

                      <Button sx={{ left: '50%', transform: 'translateX(-50%)' }} onClick={searchId}>
                        이메일 받기
                      </Button>
                    </List>
                    <List sx={style}>
                      <ListItem>
                        <ListItemText>비밀번호 찾기</ListItemText>
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <TextField
                          autoFocus
                          required
                          margin="dense"
                          id="name"
                          name="memberName"
                          label="이름"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={(e) => {
                            setMname(e.target.value);
                          }}
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <TextField
                          autoFocus
                          required
                          margin="dense"
                          id="memberTel"
                          name="email"
                          label="전화번호 ( ' - ' 없이 입력 )"
                          type="tel"
                          fullWidth
                          variant="standard"
                          onChange={(e) => {
                            setMtel(e.target.value);
                          }}
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <TextField
                          autoFocus
                          required
                          margin="dense"
                          id="memberId"
                          name="email"
                          label="아이디"
                          type="memberId"
                          fullWidth
                          variant="standard"
                          onChange={(e) => {
                            setMemId(e.target.value);
                          }}
                        />
                      </ListItem>
                      <Button sx={{ left: '50%', transform: 'translateX(-50%)' }} onClick={searchPw}>
                        이메일 받기
                      </Button>
                    </List>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>닫기</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={logFunc}
                >
                  로그인
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
