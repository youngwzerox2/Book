// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
// 기본 폼
import AnimateButton from 'ui-component/extended/AnimateButton';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, Divider, Grid } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
// import { width } from '@mui/system';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';

// ======================ICON ================================//
import BlockIcon from '@mui/icons-material/Block';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Telephone from '../../../../assets/images/desk.png';
import { Link } from 'react-router-dom';
// -------------------------------------------------------------------------------
const MainPage = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  // ---------------------------------------------------
  // testing2 컴포넌트에서 발생하는 이벤트
  // ---------------------------------------------------
  // 1. 000의 방 클릭 ----------------------------
  // confirm 에서 확인 / 취소에 따른 값 처리 작업 필요
  const myroomClicked = () => {
    confirm('로그아웃하시겠습니까?');
  };

  // 2. 방에 배치된 사물 클릭 ---------------------
  // => 각 위치로 이동하도록 area에 이벤트 부여필요

  // 3. 텍스트 입력 후 전송 버튼 누르면 채팅 전송

  // 4. 도서 추천 버튼 클릭

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12}></Grid>

        <Grid item xs={12} textAlign="center">
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              id="exit-test"
              onClick={myroomClicked}
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
              마이페이지
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item maxWidth="700px">
          <img src={Telephone} alt="전화기" width="100%" />
        </Grid>
        <Grid item maxWidth="700px" sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', opacity: '0.9' }}>
          <Link to="info">
            <AnimateButton>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <ModeEditIcon />
                </Box>
                회원 정보 수정하기
              </Button>
            </AnimateButton>
          </Link>
          <Box sx={{ mr: { xs: 1, sm: 2, height: 10 } }}></Box>
          <Link to="pay">
            <AnimateButton>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <PaidIcon />
                </Box>
                &nbsp; &nbsp; &nbsp; &nbsp; 구독권 관리 &nbsp; &nbsp; &nbsp;
              </Button>
            </AnimateButton>
          </Link>
          <Box sx={{ mr: { xs: 1, sm: 2, height: 10 } }}></Box>
          <Link to="liked">
            <AnimateButton>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <FavoriteIcon />
                </Box>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 즐겨찾기 &nbsp; &nbsp; &nbsp; &nbsp;
              </Button>
            </AnimateButton>
          </Link>
          <Box sx={{ mr: { xs: 1, sm: 2, height: 10 } }}></Box>
          <Link to="blocked">
            <AnimateButton>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <BlockIcon />
                </Box>
                &nbsp; &nbsp; &nbsp; &nbsp; 차단 내역 &nbsp; &nbsp; &nbsp; &nbsp;
              </Button>
            </AnimateButton>
          </Link>
          <Box sx={{ mr: { xs: 1, sm: 2, height: 10 } }}></Box>
          <Link to="/readme/cs">
            <AnimateButton>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                  <SupportAgentIcon />
                </Box>
                &nbsp; &nbsp; &nbsp; &nbsp; 고객센터 &nbsp; &nbsp; &nbsp; &nbsp;
              </Button>
            </AnimateButton>
          </Link>
        </Grid>
        <Link to="/readme/main">
          <Button variant="contained" sx={{ position: 'absolute', top: '85%', left: '48%', backgroundColor: '#99627A' }}>
            뒤로가기
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default MainPage;
