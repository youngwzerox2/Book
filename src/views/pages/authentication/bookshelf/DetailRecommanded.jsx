import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography, IconButton, TextField, Tooltip, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
// import testImage from '../../../../assets/images/book360.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import Testing from '../../../../assets/images/book360.png';
export default function ImgMediaCard(props) {
  // 데이터 로드
  const [viewContent, setViewContent] = useState([]);
  const boardLoad = () => {
    axios
      .get(`/chatData/selectByNum?chatNumber=${props.chatNumber}`)
      .then((re) => {
        setViewContent(re.data);

        console.log('ㅎ', re.data);
      })
      .catch((err) => console.log('[에러!!', err));
  };
  const mapping = (e) => {
    axios.get(`/library/memberlibrary?isbn13=${e}`);
    window.open(`http://118.217.203.44:8080/library/memberlibrary?isbn13=${e}`);
  };
  useEffect(() => {
    boardLoad();
  }, [viewContent]);

  // pickedBook으로 지정하는 함수
  const pickBook = (e) => {
    axios.post(`/chatData/pickBook?chatNumber=${props.chatNumber}&bookIsbn13=${e}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 720, position: 'relative' }}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField value={`${viewContent.chatDataDate} 일 기록 - ${viewContent.emotion}`} variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{
              display: 'flex',
              margin: '15px',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper'
            }}
          >
            <CardMedia component="img" sx={{ width: 151 }} image={viewContent.bookImageURL} alt="Live from space album cover" />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" sx={{ margin: '10px' }}>
                  선택된 도서
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {viewContent.bookname}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  저자 : {viewContent.authors}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{
              display: 'flex',
              margin: '15px',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper'
            }}
          >
            <CardMedia component="img" sx={{ width: 151 }} image={viewContent.bookImageURL1} alt="Live from space album cover" />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  추천도서 1
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {viewContent.bookname1}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  저자 : {viewContent.authors1}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Tooltip title="상세정보 보러가기">
                  <IconButton aria-label="previous">
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook1);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="도서관 테스트">
                  <IconButton
                    onClick={() => {
                      mapping(viewContent.recommandedBook1);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              display: 'flex',
              margin: '15px',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper'
            }}
          >
            <CardMedia component="img" sx={{ width: 151 }} image={viewContent.bookImageURL2} alt="Live from space album cover" />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  추천도서 2
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {viewContent.bookname2}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  저자 : {viewContent.authors2}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <IconButton aria-label="previous">
                  <SearchIcon />
                </IconButton>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook2);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              display: 'flex',
              margin: '15px',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper'
            }}
          >
            <CardMedia component="img" sx={{ width: 151 }} image={viewContent.bookImageURL3} alt="Live from space album cover" />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  추천도서 3
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {viewContent.bookname3}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  저자 : {viewContent.authors3}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <IconButton aria-label="previous">
                  <SearchIcon />
                </IconButton>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook3);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Box>
          </Card>
          <Button
            onClick={() => {
              location = 'http://localhost:3000/free/readme/bookshelf/recommanded';
            }}
          >
            뒤로가기
          </Button>
        </Grid>

        {/* <Button onClick={handleClose}>닫기</Button>
        <Button onClick={handleClose} autoFocus>
          삭제
        </Button> */}
      </Card>
    </>
  );
}
