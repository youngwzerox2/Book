// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import theimg from '../../../../assets/images/library.png';
// 기본 폼
import { FormControl } from '@mui/material';
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
              ㅇㅇㅇ 님
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <img src={theimg} alt="tlqkf" useMap="#image-map" />

        <map name="image-map">
          <area
            target="_self"
            alt="화분이당"
            title="화분이당"
            role="presentation"
            coords="49,716,41,657,54,644,50,618,50,544,73,498,120,535,152,608,151,662,150,718"
            shape="poly"
          />
          <area
            target="_self"
            alt="접수/반납 창구인 듯 하다"
            role="presentation"
            title="접수/반납 창구인 듯 하다"
            coords="307,552,461,621"
            shape="rect"
          />
          <area target="_self" alt="지금 시간은" title="지금 시간은" role="presentation" coords="266,354,24" shape="circle" />
          <area
            target="_self"
            alt="안녕? 난 사돌이야"
            title="안녕? 난 사돌이야"
            role="presentation"
            coords="449,505,520,507,532,497,538,482,541,468,537,455,532,441,523,434,515,423,494,413,474,409,449,413,425,424,410,438,401,455,404,474,408,482"
            shape="poly"
          />
          <area
            target="_self"
            alt="사돌이가 가장 좋아하는 초코쿠키가 놓여 있다."
            title="사돌이가 가장 좋아하는 초코쿠키가 놓여 있다."
            role="presentation"
            coords="440,505,391,507,394,498,416,490"
            shape="poly"
          />
          <area
            target="_self"
            alt="김이 모락모락 나는 따듯한 커피"
            title="김이 모락모락 나는 따듯한 커피"
            role="presentation"
            coords="372,510,334,471"
            shape="rect"
          />
          <area
            target="_self"
            alt="사돌이의 애마인 북카트가 쓸쓸히 놓여 있다. "
            title="사돌이의 애마인 북카트가 쓸쓸히 놓여 있다. "
            role="presentation"
            coords="552,714,547,580,529,545,554,557,576,563,610,542,642,540,648,571,685,575,711,538,706,573,698,713"
            shape="poly"
          />
          <area
            target="_self"
            alt="사돌이의 (자칭) 슈퍼컴퓨터"
            title="사돌이의 (자칭) 슈퍼컴퓨터"
            role="presentation"
            coords="564,396,687,508"
            shape="rect"
          />
        </map>
      </FormControl>
    </>
  );
};

export default MainPage;
