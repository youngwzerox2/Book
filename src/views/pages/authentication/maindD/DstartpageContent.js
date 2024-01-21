// import { useState } from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid
  //   TextField,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { Link } from 'react-router-dom';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const customization = useSelector((state) => state.customization);

  // 아이디 중복체크 검사
  // const [mid, setMid] = useState('');

  // 회원가입 버튼 클릭 시
  // const idCheck = () => {
  //   alert(`${mid}`);
  // };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Link to="/readme/login">
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
              >
                로그인하기
              </Button>
            </Link>
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
                <AnimateButton>
                  <Link to="/readme/register">
                    <Button
                      // onClick={idCheck}
                      disableElevation
                      disabled={isSubmitting}
                      size="medium"
                      type="submit"
                      variant="outlined"
                      color="primary"
                    >
                      아직 계정이 없으신가요?
                    </Button>
                  </Link>
                </AnimateButton>
              </Grid>
            </FormControl>

            <Grid item container direction="column" alignItems="center" xs={12}>
              <Box sx={{ mt: 2 }}>
                <Link to="/readme/main">아이디/비밀번호 찾기</Link>
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
