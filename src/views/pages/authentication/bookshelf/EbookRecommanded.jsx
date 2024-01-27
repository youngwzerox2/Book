import * as React from 'react';
import { Box, Card, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import RecordWrite from './ErecordWrite';
import RecordDetail from './ErecordDetail';
import axios from 'axios';
import { useEffect } from 'react';

export default function ImgMediaCard() {
  // 페이지 이동에 대한 정보
  const [status, setStatus] = useState('default');

  // 데이터 로드 시 받아올 변수
  const [viewContent, setViewContent] = useState([]);

  const session = localStorage;

  const boardLoad = () => {
    axios
      .get('/chatData/selectByUser', { params: { memberId: session.getItem('loginId') } })
      .then((re) => {
        setViewContent(re.data);

        console.log('ㅎㅇㅎㅇ', re.data);
        // console.log(viewContent[5].bookname);
      })
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        {status === 'default' && (
          <>
            <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>

            <Box
              sx={{ position: 'absolute', top: '6%', left: '27%' }}
              onClick={() => {
                // setOpen1(false);
                alert(`${viewContent[0].recordBookNum}`);
              }}
            >
              {viewContent[0] != undefined && <img src={viewContent[0].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>

            <Box sx={{ position: 'absolute', top: '6%', left: '45%' }}>
              {viewContent[1] != undefined && <img src={viewContent[1].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>

            <Box sx={{ position: 'absolute', top: '6%', left: '63%' }}>
              {viewContent[2] != undefined && <img src={viewContent[2].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '29%', left: '27%' }}>
              {viewContent[3] != undefined && <img src={viewContent[3].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '29%', left: '45%' }}>
              {viewContent[4] != undefined && <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '29%', left: '63%' }}>
              {viewContent[5] != undefined && <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '51%', left: '27%' }}>
              {viewContent[6] != undefined && <img src={viewContent[6].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '51%', left: '45%' }}>
              {viewContent[7] != undefined && <img src={viewContent[7].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '51%', left: '63%' }}>
              {viewContent[8] != undefined && <img src={viewContent[8].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box sx={{ position: 'absolute', top: '74%', left: '27%' }}>
              {viewContent[9] != undefined && <img src={viewContent[9].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '74%', left: '45%' }}
              onClick={() => {
                alert('11');
              }}
            >
              {viewContent[10] != undefined && (
                <img src="https://image.aladin.co.kr/product/26942/84/cover/k582730818_1.jpg" alt="이미지입니다" height="100px" />
              )}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '74%', left: '63%' }}
              onClick={() => {
                alert('setOpen12였음');
              }}
            >
              {viewContent[11] != undefined && (
                <img src="https://image.aladin.co.kr/product/26942/84/cover/k582730818_1.jpg" alt="이미지입니다" height="100px" />
              )}
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
                setStatus('write');
              }}
            >
              <CreateIcon fontSize="small" />
            </Button>
          </>
        )}
        {status === 'write' && <RecordWrite />}
        {status === 'detail' && <RecordDetail />}
      </Card>
    </>
  );
}
