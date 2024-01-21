import * as React from 'react';
import { Box, Card, Button, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
import SingleBook from '../../../../assets/images/book360.png';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import RecordWrite from './ErecordWrite';
import RecordDetail from './ErecordDetail';
import axios from 'axios';
import { useEffect } from 'react';

export default function ImgMediaCard() {
  // 페이지 이동에 대한 정보
  const [record, setRecord] = useState('default');

  // 데이터 로드 시 받아올 변수
  const [viewContent, setViewContent] = useState([]);
  // 데이터 받아올 함수
  // const id = 'test1';

  const boardLoad = () => {
    axios
      .get('/record/selectByUser', { params: { memberId: 'test1' } })
      .then((re) => {
        setViewContent(re.data);

        console.log('ㅎㅇㅎㅇ', re.data);
        console.log(re.data.length);
        // console.log(viewContent[5].bookname);
      })
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    console.log(viewContent[0]);
    boardLoad();
    // console.log('잉?', namelist[0]);
  }, []);

  // 도서 아이콘 클릭 시 해당하는 도서의 상세정보로 이동
  // const getBook = ()=>{
  // }

  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        {record === 'default' && (
          <>
            <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
            {/* {viewContent.map((item, idx) => {
              if (idx == 0) {
                return (
                  <Box key={idx} sx={{ position: 'absolute', top: '9%', left: '25%' }}>
                    <Typography top="10%" position="absolute">
                      {item.book_isbn13}
                    </Typography>
                    <img src={SingleBook} alt="이미지입니다" height="80px" />
                  </Box>
                );
              } else if (idx == 1) {
                <Box key={idx} sx={{ position: 'absolute', top: '9%', left: '45%' }}>
                  <Typography top="10%" position="absolute">
                    {item.book_isbn13}
                  </Typography>
                  <img src={SingleBook} alt="이미지입니다" height="80px" />
                </Box>;
              }
            })} */}

            <Box
              sx={{ position: 'absolute', top: '9%', left: '25%' }}
              onClick={() => {
                setRecord('detail');
              }}
            >
              <Typography top="10%" position="absolute">
                ㅎㅇㅎㅇ
              </Typography>
              <img src={SingleBook} alt="이미지입니다" height="80px" />
            </Box>

            <Box sx={{ position: 'absolute', top: '9%', left: '45%' }}>
              <Typography top="10%" position="absolute">
                ㅎㅇㅎㅇ
              </Typography>
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
              sx={{ position: 'absolute', top: '92%', right: '43%' }}
              onClick={() => {
                location.reload();
              }}
            >
              뒤로가기
            </Button>
            <Button
              variant="contained"
              sx={{ position: 'absolute', top: '93%', right: '2%' }}
              onClick={() => {
                setRecord('write');
              }}
            >
              <CreateIcon fontSize="small" />
            </Button>
          </>
        )}
        {record === 'write' && <RecordWrite />}
        {record === 'detail' && <RecordDetail />}
      </Card>
    </>
  );
}
