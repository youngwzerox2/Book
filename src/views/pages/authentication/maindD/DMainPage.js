// (O) 1. 책상, 책장, 달력, 문 클릭 시 해당하는 곳으로 이동
// (X) 2. 전송 버튼 클릭 시 채팅내역 mongoDB로 전송
// (X) 3. 전송 버튼 클릭 시 Python서버로 전송
// (X) 4. 돌멩이 눌렀을 때 감정분석 요청

import theimg from '../../../../assets/images/mainroom.png';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, Divider, Grid, TextField } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import Alert from '@mui/material/Alert';
// -------------------------------------------------------------------------------
const MainPage = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  // ---------------------------------------------------

  // 1. 000의 방 클릭 ----------------------------
  // confirm 에서 확인 / 취소에 따른 값 처리 작업 필요
  const myroomClicked = () => {
    confirm('로그아웃하시겠습니까?');
  };

  // 2. 방에 배치된 사물 클릭 ---------------------
  // => 각 위치로 이동하도록 area에 이벤트 부여필요

  // 3. 텍스트 입력 후 전송 버튼 누르면 채팅 전송
  const [msg1, setMsg1] = useState('');
  const insertTry = () => {
    alert('버튼 클릭');
    let board = {
      msg: msg1,
      member_id: 'test2'
    };
    console.log(board);
    axios.post('/chat/?', null, { memberId: 'test1' });
  };

  // 4. 도서 추천 버튼 클릭
  const bookRequest = () => {
    alert('돌멩이 클릭당함 ㅠㅠ');
  };
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
              멩이의 방
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        {/* <Alert severity="info" sx={{ position: 'absolute', top: '46%', left: '10%' }}>
          안녕 난 돌멩이.
        </Alert> */}
        <img src={theimg} alt="tlqkf" useMap="#image-map" />

        <map name="image-map">
          <Link to="/readme/mypage">
            <area
              target="_self"
              alt="마이페이지 / 고객센터 이용하기"
              title="마이페이지 / 고객센터 이용하기"
              role="presentation"
              coords="109,431,103,465,109,483,117,522,133,531,135,500,151,504,158,535,174,534,172,498,195,486,199,500,207,515,220,508,220,485,218,456,188,431,187,397"
              shape="poly"
            />
          </Link>
          <Link to="/readme/bookshelf">
            <area
              target="_self"
              alt="멩이의 책장"
              title="멩이의 책장"
              role="presentation"
              coords="256,460,261,318,351,267,368,275,369,400,352,419,266,470"
              shape="poly"
            />
          </Link>
          <Link to="/readme/calendar">
            <area
              target="_self"
              alt="멩이의 달력"
              title="멩이의 달력"
              role="presentation"
              coords="412,324,415,214,483,241,478,347"
              shape="poly"
            />
          </Link>
          <area
            target="_self"
            alt="도서 추천받기"
            title="도서 추천받기"
            role="presentation"
            onClick={bookRequest}
            coords="428,430,411,436,393,447,382,458,376,479,383,503,402,516,431,520,457,511,471,493,479,468,465,445,447,433"
            shape="poly"
          />
          <Link to="/readme/library">
            <area
              target="_self"
              alt="멩이와 함께 외출"
              title="멩이와 함께 외출"
              role="presentation"
              coords="488,270,579,322,579,472,567,484,570,507,489,471"
              shape="poly"
            />
          </Link>
          <area
            target="_self"
            alt="싱싱한 화초"
            title="싱싱한 화초"
            role="presentation"
            coords="333,649,321,604,331,592,323,546,348,568,354,548,368,562,379,570,377,589,382,605,381,649,358,655"
            shape="poly"
          />
          <area
            target="_self"
            alt="멩이의 소파"
            title="멩이의 소파"
            role="presentation"
            coords="353,419,397,395,400,372,415,356,433,351,475,369,480,381,479,417,418,425,381,449,371,462"
            shape="poly"
          />
          <area
            target="_self"
            alt="기분 좋은 바람이 불어오고 있다"
            title="기분 좋은 바람이 불어오고 있다"
            role="presentation"
            coords="111,301,198,256,200,369,111,403"
            shape="poly"
          />
          <area
            target="_self"
            alt="멩이의 친구 1호인 토끼 인형"
            title="멩이의 친구 1호인 토끼 인형"
            role="presentation"
            coords="226,471,227,447,222,433,237,440,238,430,247,444,252,469,246,480,232,485"
            shape="poly"
          />
          <area
            target="_self"
            alt="최근 멩이가 열심히 키우고 있는 꽃"
            title="최근 멩이가 열심히 키우고 있는 꽃"
            role="presentation"
            coords="408,639,490,591,491,572,468,555,454,556,444,535,396,563,389,597,391,626"
            shape="poly"
          />
          <area
            target="_self"
            alt="어지럽혀진 책상. 멩이는 정리정돈에 소질이 없는 듯 하다"
            title="어지럽혀진 책상. 멩이는 정리정돈에 소질이 없는 듯 하다"
            role="presentation"
            coords="288,536,272,527,268,508,278,493,291,486,307,484,321,493,341,499,362,507,372,512,381,520,379,538,376,547,351,537,334,541,313,536"
            shape="poly"
          />
        </map>

        <Grid sx={{ position: 'relative' }}>
          {/* <TextareaAutosize
            maxRows={3}
            placeholder="3줄까지만 늘어나는 textarea"
            id="text"
            name="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></TextareaAutosize> */}
          <TextField
            id="text"
            name="text"
            fullWidth
            onChange={(e) => {
              setMsg1(e.target.value);
            }}
          ></TextField>
          <Button
            id="chat-btn"
            onClick={insertTry}
            size="small"
            color="inherit"
            type="submit"
            variant="contained"
            sx={{
              position: 'absolute',
              width: '90px',
              height: '40px',
              top: '0',
              bottom: '0',
              right: '5px',
              margin: 'auto 0'
            }}
          >
            전송
          </Button>
        </Grid>
      </FormControl>
    </>
  );
};

export default MainPage;
