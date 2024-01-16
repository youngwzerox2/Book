// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import Bookcase from '../../../../assets/images/bookcaseB_full.png';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, Divider, Grid } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
// import { width } from '@mui/system';

import Myrecord from '../Esubcontents/EbookRecord';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
import { useState } from 'react';
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

  // 클릭에 따른 페이지 이동
  const [choosed, setChoosed] = useState('fullcase');
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
              ㅇㅇㅇ 의 방
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        {choosed === 'fullcase' && <img src={Bookcase} useMap="#image-map" alt="책장" />}

        <map name="image-map">
          <area
            target="_self"
            alt="나의 추천 책장"
            title="나의 추천 책장"
            role="presentation"
            coords="138,35,577,159"
            shape="rect"
            onClick={() => {
              setChoosed('recommanding');
            }}
          />
          <area
            target="_self"
            alt="나의 독서 기록"
            title="나의 독서 기록"
            role="presentation"
            coords="140,202,577,319"
            shape="rect"
            onClick={() => {
              setChoosed('myrecord');
            }}
          />
          <area
            target="_self"
            alt="추천받은 책장"
            title="추천받은 책장"
            role="presentation"
            coords="141,362,580,488"
            shape="rect"
            onClick={() => {
              setChoosed('recommanded');
            }}
          />
          <area
            target="_self"
            alt="인기도서"
            title="인기도서"
            role="presentation"
            coords="141,525,579,647"
            shape="rect"
            onClick={() => {
              setChoosed('hotbook');
            }}
          />
        </map>
        {choosed === 'myrecord' && <Myrecord />}
        {choosed === 'recommanding' && <div>나의 추천기록</div>}

        {choosed === 'recommanded' && <div>추천받은 기록</div>}

        {choosed === 'hotbook' && <div>인기도서</div>}
      </FormControl>
    </>
  );
};

export default MainPage;
