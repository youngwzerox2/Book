import * as React from 'react';
import { Box, Card, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
// import testImage from '../../../../assets/images/book360.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import RecommandedDetail from './DetailRecommanded';

export default function ImgMediaCard() {
  const [status, setStatus] = useState('main');

  // 데이터 로드
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
  const [chatNum, setChatNum] = useState(0);
  const getValue = (re) => {
    setStatus('detail');
    setChatNum(re);
  };
  return (
    <>
      {status === 'main' && (
        <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
          <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
          <React.Fragment>
            <Box
              sx={{ position: 'absolute', top: '6%', left: '27%' }}
              onClick={() => {
                getValue(viewContent[0].chatNumber);
              }}
            >
              {viewContent[0] != undefined && <img src={viewContent[0].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>

            <Box
              onClick={() => {
                getValue(viewContent[1].chatNumber);
              }}
              sx={{ position: 'absolute', top: '6%', left: '45%' }}
            >
              {viewContent[1] != undefined && <img src={viewContent[1].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>

            <Box
              sx={{ position: 'absolute', top: '6%', left: '63%' }}
              onClick={() => {
                getValue(viewContent[2].chatNumber);
              }}
            >
              {viewContent[2] != undefined && <img src={viewContent[2].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '29%', left: '27%' }}
              onClick={() => {
                getValue(viewContent[3].chatNumber);
              }}
            >
              {viewContent[3] != undefined && <img src={viewContent[3].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[4].chatNumber);
              }}
              sx={{ position: 'absolute', top: '29%', left: '45%' }}
            >
              {viewContent[4] != undefined && <img src={viewContent[4].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[5].chatNumber);
              }}
              sx={{ position: 'absolute', top: '29%', left: '63%' }}
            >
              {viewContent[5] != undefined && <img src={viewContent[5].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[6].chatNumber);
              }}
              sx={{ position: 'absolute', top: '51%', left: '27%' }}
            >
              {viewContent[6] != undefined && <img src={viewContent[6].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[7].chatNumber);
              }}
              sx={{ position: 'absolute', top: '51%', left: '45%' }}
            >
              {viewContent[7] != undefined && <img src={viewContent[7].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[8].chatNumber);
              }}
              sx={{ position: 'absolute', top: '51%', left: '63%' }}
            >
              {viewContent[8] != undefined && <img src={viewContent[8].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              onClick={() => {
                getValue(viewContent[9].chatNumber);
              }}
              sx={{ position: 'absolute', top: '74%', left: '27%' }}
            >
              {viewContent[9] != undefined && <img src={viewContent[9].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '74%', left: '45%' }}
              onClick={() => {
                getValue(viewContent[10].chatNumber);
              }}
            >
              {viewContent[10] != undefined && <img src={viewContent[10].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '74%', left: '63%' }}
              onClick={() => {
                getValue(viewContent[11].chatNumber);
              }}
            >
              {viewContent[11] != undefined && <img src={viewContent[11].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>

            <Button
              variant="contained"
              sx={{ position: 'absolute', top: '92%', right: '43%' }}
              onClick={() => {
                location.reload();
                setStatus('하');
              }}
            >
              뒤로가기
            </Button>
          </React.Fragment>
        </Card>
      )}
      {status === 'detail' && <RecommandedDetail chatNumber={chatNum} />}
    </>
  );
}
