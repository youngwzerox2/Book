import * as React from 'react';
import { Box, Card, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/emptyCase.png';
import SingleBook from '../../../../assets/images/book360.png';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import RecordWrite from './ErecordWrite';
import axios from 'axios';
import { useEffect } from 'react';
export default function ImgMediaCard() {
  // 페이지 이동에 대한 정보
  const [recommanded, setRecommanded] = useState('default');

  // 데이터 로드 시 받아올 변수
  const [viewContent, setViewContent] = useState([]);
  // 데이터 받아올 함수
  const boardLoad = () => {
    axios
      .get('http://118.217.203.44:8080/record/select')
      .then((re) => setViewContent(re.data))
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
    console.log(viewContent);
  });

  // 도서 아이콘 클릭 시 해당하는 도서의 상세정보로 이동
  // const getBook = ()=>{
  // }
  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        {record === 'default' && (
          <>
            <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
            <Box sx={{ position: 'absolute', top: '9%', left: '25%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '9%', left: '45%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '9%', left: '65%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '31.5%', left: '25%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '32%', left: '45%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '32%', left: '65%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '54%', left: '25%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '54%', left: '45%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Box sx={{ position: 'absolute', top: '54%', left: '65%' }}>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>
            <Button
              variant="contained"
              sx={{ position: 'absolute', top: '93%', right: '2%' }}
              onClick={() => {
                setRecommanded('write');
              }}
            >
              <CreateIcon fontSize="small" />
            </Button>
          </>
        )}
        {recommanded === 'write' && <RecordWrite />}
        {recommanded === 'detail' && <input />}
      </Card>
    </>
  );
}
