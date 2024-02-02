import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography, IconButton, TextField, Tooltip, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
// import testImage from '../../../../assets/images/book360.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
                <Link to="/readme/bookshelf/detailbook">
                  <Tooltip title="상세정보 보러가기">
                    <IconButton aria-label="previous">
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook1);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="도서관 찾기">
                  <IconButton onClick={handleClickOpen}>
                    <LocalLibraryIcon />
                  </IconButton>
                </Tooltip>
                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{'도서관 지역 선택하기'}</DialogTitle>
                    <DialogContent>
                      <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">지역</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>서울특별시</MenuItem>
                            <MenuItem value={20}>경기도</MenuItem>
                            <MenuItem value={30}>인천광역시</MenuItem>
                            <MenuItem value={40}>충청남도</MenuItem>
                            <MenuItem value={50}>충청북도</MenuItem>
                            <MenuItem value={60}>전라남도</MenuItem>
                            <MenuItem value={70}>전라북도</MenuItem>
                            <MenuItem value={80}>광주광역시</MenuItem>
                            <MenuItem value={90}>경상남도</MenuItem>
                            <MenuItem value={100}>경상북도</MenuItem>
                            <MenuItem value={110}>강원도</MenuItem>
                            <MenuItem value={120}>부산광역시</MenuItem>
                            <MenuItem value={130}>대구광역시</MenuItem>
                            <MenuItem value={140}>울산광역시</MenuItem>
                            <MenuItem value={150}>제주특별자치도</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>취소</Button>
                      <Button
                        onClick={() => {
                          mapping(viewContent.recommandedBook1);
                        }}
                        autoFocus
                      >
                        검색
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
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
                <Link to="/readme/bookshelf/detailbook">
                  <Tooltip title="상세정보 보러가기">
                    <IconButton aria-label="previous">
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook2);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="도서관 찾기">
                  <IconButton onClick={handleClickOpen}>
                    <LocalLibraryIcon />
                  </IconButton>
                </Tooltip>
                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{'도서관 지역 선택하기'}</DialogTitle>
                    <DialogContent>
                      <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">지역</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>서울특별시</MenuItem>
                            <MenuItem value={20}>경기도</MenuItem>
                            <MenuItem value={30}>인천광역시</MenuItem>
                            <MenuItem value={40}>충청남도</MenuItem>
                            <MenuItem value={50}>충청북도</MenuItem>
                            <MenuItem value={60}>전라남도</MenuItem>
                            <MenuItem value={70}>전라북도</MenuItem>
                            <MenuItem value={80}>광주광역시</MenuItem>
                            <MenuItem value={90}>경상남도</MenuItem>
                            <MenuItem value={100}>경상북도</MenuItem>
                            <MenuItem value={110}>강원도</MenuItem>
                            <MenuItem value={120}>부산광역시</MenuItem>
                            <MenuItem value={130}>대구광역시</MenuItem>
                            <MenuItem value={140}>울산광역시</MenuItem>
                            <MenuItem value={150}>제주특별자치도</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>취소</Button>
                      <Button
                        onClick={() => {
                          mapping(viewContent.recommandedBook2);
                        }}
                        autoFocus
                      >
                        검색
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
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
                <Link to="/readme/bookshelf/detailbook">
                  <Tooltip title="상세정보 보러가기">
                    <IconButton aria-label="previous">
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Tooltip title="선택도서로 지정">
                  <IconButton
                    onClick={() => {
                      pickBook(viewContent.recommandedBook3);
                    }}
                  >
                    <TaskAltIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="도서관 찾기">
                  <IconButton onClick={handleClickOpen}>
                    <LocalLibraryIcon />
                  </IconButton>
                </Tooltip>
                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{'도서관 지역 선택하기'}</DialogTitle>
                    <DialogContent>
                      <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">지역</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>서울특별시</MenuItem>
                            <MenuItem value={20}>경기도</MenuItem>
                            <MenuItem value={30}>인천광역시</MenuItem>
                            <MenuItem value={40}>충청남도</MenuItem>
                            <MenuItem value={50}>충청북도</MenuItem>
                            <MenuItem value={60}>전라남도</MenuItem>
                            <MenuItem value={70}>전라북도</MenuItem>
                            <MenuItem value={80}>광주광역시</MenuItem>
                            <MenuItem value={90}>경상남도</MenuItem>
                            <MenuItem value={100}>경상북도</MenuItem>
                            <MenuItem value={110}>강원도</MenuItem>
                            <MenuItem value={120}>부산광역시</MenuItem>
                            <MenuItem value={130}>대구광역시</MenuItem>
                            <MenuItem value={140}>울산광역시</MenuItem>
                            <MenuItem value={150}>제주특별자치도</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>취소</Button>
                      <Button
                        onClick={() => {
                          mapping(viewContent.recommandedBook3);
                        }}
                        autoFocus
                      >
                        검색
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
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
