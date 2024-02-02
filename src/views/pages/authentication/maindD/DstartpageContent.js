// import { useState } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Card
  //   TextField,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
// import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { Link } from 'react-router-dom';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
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
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              disabled
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
            >
              시작하기
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
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('아이디를 입력해주세요')
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
        {({ errors, handleSubmit, isSubmitting, touched }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput, position: 'relative' }}
            >
              <Grid item container direction="column" alignItems="center" xs={12}>
                <Card>
                  <Link to="/readme/login">
                    <Button
                      // onClick={idCheck}
                      disableElevation
                      disabled={isSubmitting}
                      size="large"
                      sx={{ margin: '10px' }}
                      type="submit"
                      variant="outlined"
                      color="primary"
                    >
                      로그인
                    </Button>
                  </Link>
                  <Link to="/readme/register">
                    <Button
                      // onClick={idCheck}
                      disableElevation
                      disabled={isSubmitting}
                      size="large"
                      type="submit"
                      sx={{ margin: '10px' }}
                      variant="outlined"
                      color="primary"
                    >
                      회원가입
                    </Button>
                  </Link>
                </Card>
              </Grid>
            </FormControl>

            <Grid item container direction="column" alignItems="center" xs={12}>
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
                          label="전화번호"
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
                          label="전화번호"
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
            </Grid>
            <Grid item container direction="column" alignItems="center" xs={12}></Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
