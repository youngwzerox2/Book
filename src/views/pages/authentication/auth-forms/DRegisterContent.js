import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  //   TextField,
  Typography,
  useMediaQuery,
  FormLabel,
  RadioGroup,
  Radio
} from '@mui/material';

// import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  // 아이디 중복체크 검사
  const [mid, setMid] = useState('');
  const [mpassword, setMpassword] = useState('');
  const [mname, setMname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('미정');
  // const [birthday, setBirthday] = useState(dayjs('2022-04-17'));
  const [tel, setTel] = useState('');
  const visitAgree = 0;
  const grade = 'basic';
  const cardNum = '없음';
  const cardD = '2000-00-00';
  const cardpw = 0;
  // const [pwcheck, setPwcheck] = useState('');

  // 회원가입 버튼 클릭 시
  const idCheck = () => {
    alert(`${mid} / ${mpassword} / ${mname} / ${email} / ${gender} / ${birthday} / ${tel} / 
     ${visitAgree} / ${grade} / ${cardNum}  / ${cardD} / ${cardpw}`);
    let testing = {
      memberId: mid,
      memberPassword: mpassword,
      memberName: mname,
      memberEmail: email,
      memberNickname: mid,
      memberGender: gender,
      memberBirthday: birthday,
      memberTel: tel,
      memberVisitAgree: visitAgree,
      memberGrade: grade,
      cardNumber: cardNum,
      cardDate: cardD,
      cardPassword: cardpw,
      cardCvc: 0
    };
    axios.post('/member/regist', null, { params: testing });
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              이후 카카오 로그인으로 바꿀 것
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
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
              OR
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
          password: Yup.string().max(255).required('Password is required')
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
            <Grid container spacing={matchDownSM ? 0 : 2}>
              {/* <Grid item xs={12} sm={6}>*/}
              {/* <Grid>
                <TextField
                  fullWidth
                  label="First Name"
                  margin="normal"
                  name="fname"
                  type="text"
                  defaultValue=""
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                name="lname"
                type="text"
                defaultValue=""
                sx={{ ...theme.typography.customInput }}
              />
              </Grid> */}
            </Grid>
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
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
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Button onClick={idCheck}>아이디 중복체크</Button>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">이름</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name-register"
                type="text"
                value={values.mname}
                name="mname"
                onBlur={handleBlur}
                onChange={(e) => {
                  setMname(e.target.value);
                }}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">이메일 주소</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">비밀번호</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.mpassword}
                name="mpassword"
                label="mPassword"
                onBlur={handleBlur}
                onChange={(e) => {
                  setMpassword(e.target.value);
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
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">비밀번호 확인</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
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
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">전화번호</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                value={values.tel}
                name="tel"
                label="tel"
                onBlur={handleBlur}
                onChange={(e) => {
                  setTel(e.target.value);
                }}
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel value="여성" control={<Radio />} label="여성" />
                <FormControlLabel value="남성" control={<Radio />} label="남성" />
                <FormControlLabel value="기타" control={<Radio />} label="기타" />
              </RadioGroup>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl components={['DatePicker']}>
                <DatePicker
                  label="생년월일을 입력해주세요"
                  onChange={(e) => {
                    setBirthday(e.target.value);
                  }}
                />
              </FormControl>
            </LocalizationProvider>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1" component={Link} to="#">
                      서비스 이용약관
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1" component={Link} to="#">
                      서비스 이용약관
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1" component={Link} to="#">
                      서비스 이용약관
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
