// import { Button } from '@mui/material';
// import Background from '../Abackground';
// import BasicFrame from '../BstartPage';
// export default Mapping = () => {

//   return (
//     <Background>
//       <BasicFrame>
//         {' '}
//         <div>
//           <Button onClick={clicked}>버튼</Button>
//         </div>
//       </BasicFrame>
//     </Background>
//   );
// };
import * as React from 'react';
import { Box, Card, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import RecordWrite from '../bookshelf/ErecordWrite';
import axios from 'axios';
import { useEffect } from 'react';
export default function ImgMediaCard() {
  // 페이지 이동에 대한 정보
  const [record, setRecord] = useState('default');

  // 데이터 로드 시 받아올 변수
  const [viewContent, setViewContent] = useState([]);
  // 데이터 받아올 함수
  // const sess = localStorage;
  const boardLoad = () => {
    axios
      .get(`/book/selectHotbook`)
      .then((re) => setViewContent(re.data))
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    boardLoad();
    console.log(viewContent[0]);
  }, []);

  const mapping = () => {
    window.open('https://114.207.167.88:8080/library/memberlibrary?isbn13=9788900005738');
  };

  // 도서 아이콘 클릭 시 해당하는 도서의 상세정보로 이동
  // const getBook = ()=>{
  // }
  return (
    <>
      <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
        {record === 'default' && (
          <>
            <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
            <Box
              sx={{ position: 'absolute', top: '6%', left: '27%' }}
              onClick={() => {
                // setOpen1(false);
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
              {viewContent[5] != undefined && <img src={viewContent[5].bookImageURL} alt="이미지입니다" height="100px" />}
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
              {viewContent[10] != undefined && <img src={viewContent[10].bookImageURL} alt="이미지입니다" height="100px" />}
            </Box>
            <Box
              sx={{ position: 'absolute', top: '74%', left: '63%' }}
              onClick={() => {
                alert('setOpen12였음');
              }}
            >
              {viewContent[11] != undefined && <img src={viewContent[11].bookImageURL} alt="이미지입니다" height="100px" />}
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
            <Button variant="contained" sx={{ position: 'absolute', top: '93%', right: '2%' }} onClick={mapping}>
              <CreateIcon fontSize="small" />
            </Button>
          </>
        )}
        {record === 'write' && <RecordWrite />}
        {record === 'detail' && <input />}
      </Card>
    </>
  );
}
