import * as React from 'react';
import { Box, Button, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/emptyCase.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function ImgMediaCard() {
  // 페이지 이동에 대한 정보

  // 데이터 로드 시 받아올 변수
  const [viewContent, setViewContent] = useState([]);

  // 데이터 받아올 함수
  const boardLoad = () => {
    axios
      .get('/book/selectHotbook')
      .then((re) => setViewContent(re.data))
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
    console.log(viewContent[10]);
  }, []);

  // 도서 아이콘 클릭 시 해당하는 도서의 상세정보로 이동
  // const getBook = ()=>{
  // }
  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        <>
          <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
          <Box sx={{ position: 'absolute', top: '6%', left: '27%' }}>
            <img src={viewContent[0].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>

          <Box sx={{ position: 'absolute', top: '6%', left: '45%' }}>
            <img src={viewContent[1].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>

          <Box sx={{ position: 'absolute', top: '6%', left: '63%' }}>
            <img src={viewContent[2].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '27%' }}>
            <img src={viewContent[3].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '45%' }}>
            <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '29%', left: '63%' }}>
            <img src={viewContent[5].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '27%' }}>
            <img src={viewContent[6].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '45%' }}>
            <img src={viewContent[7].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '51%', left: '63%' }}>
            <img src={viewContent[8].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '74%', left: '27%' }}>
            <img src={viewContent[9].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '74%', left: '45%' }}>
            <img src={viewContent[10].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Box sx={{ position: 'absolute', top: '74%', left: '63%' }}>
            <img src={viewContent[11].bookImageURL} alt="이미지입니다" height="100px" />
          </Box>
          <Button
            variant="contained"
            sx={{ position: 'absolute', top: '92%', right: '43%' }}
            onClick={() => {
              location.reload();
            }}
          >
            뒤로가기
          </Button>
        </>
      </Card>
    </>
  );
}
