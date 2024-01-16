import { useState } from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput
  //   TextField,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const customization = useSelector((state) => state.customization);

  // 아이디 중복체크 검사
  const [mid, setMid] = useState('');

  // 회원가입 버튼 클릭 시
  const idCheck = () => {
    alert(`${mid}`);
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}></Grid>
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
              <SportsKabaddiIcon fontSize="medium" />
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
        {({ errors, handleBlur, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput, position: 'relative' }}
            >
              <InputLabel htmlFor="outlined-adornment-password-register">사용하실 아이디를 입력해주세요</InputLabel>
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
              <AnimateButton>
                <Button
                  onClick={idCheck}
                  disableElevation
                  disabled={isSubmitting}
                  size="medium"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: '5px',
                    width: '100px',
                    height: '50px',
                    bottom: '0',
                    right: '10px'
                  }}
                >
                  시작하기
                </Button>
              </AnimateButton>
            </FormControl>

            <Grid item container direction="column" alignItems="center" xs={12}>
              <Box sx={{ mt: 2 }}>
                <a href="https://www.naver.com">아이디/비밀번호 찾기</a>
              </Box>
            </Grid>
            <Grid item container direction="column" alignItems="center" xs={12}></Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
