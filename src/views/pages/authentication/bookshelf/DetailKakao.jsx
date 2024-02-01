import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MainFeaturedPost from '../book/MainFeaturedPost';
import BookLayout from '../book/BookLayout';
// -------------------------------------------------------------------------------------
const defaultTheme = createTheme();

export default function Blog() {
  const [viewContent, setViewContent] = useState([]);
  const [stext, setStext] = useState('isbn 기반 상세 페이지');
  const [isbn13, setIsbn13] = useState('9788950985554');

  // ================================================================================
  // 검색어에 맞는 책 검색
  const boardLoad = () => {
    axios
      .get('/book/selectByTitle', { params: { bookname: stext } })
      .then((re) => {
        setViewContent(re.data);

        console.log('ㅎㅇㅎㅇ', re.data);
        // console.log(viewContent[5].bookname);
      })
      .catch((err) => console.log('[에러!!', err));
  };
  useEffect(() => {
    // console.log('viewContent 0번째 => ', viewContent[0]);
    boardLoad();
  }, []);
  // ===================================================================================

  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…'
  };

  // -----------------------------------------------------------------------------------

  // if (nowpage === 'start') {
  //   return (
  //     <ThemeProvider theme={defaultTheme}>
  //       <CssBaseline />
  //       <Container maxWidth="lg">
  //         {/* <Header title="도서검색" sections={null}> */}
  //         <React.Fragment>
  //           <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //             <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
  //               도서검색?
  //             </Typography>
  //             <Tooltip title="나가기">
  //               <Link to="/readme/library">
  //                 <IconButton>
  //                   <DisabledByDefaultIcon />
  //                 </IconButton>
  //               </Link>
  //             </Tooltip>
  //           </Toolbar>
  //           <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //             <OutlinedInput
  //               fullWidth
  //               onChange={(e) => {
  //                 setStext(e.target.value);
  //               }}
  //             />
  //             <Tooltip title="검색">
  //               <IconButton sx={{ position: 'absolute', right: '3%' }} onClick={boardLoad}>
  //                 <SearchIcon />
  //               </IconButton>
  //             </Tooltip>
  //           </Toolbar>
  //           {/* <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
  //         {sections.map((section) => (
  //           <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{ p: 1, flexShrink: 0 }}>
  //             {section.title}
  //           </Link>
  //         ))}
  //       </Toolbar> */}
  //         </React.Fragment>

  //       </Container>
  //       <Footer title="Footer" description="Something here to give the footer a purpose!" />
  //     </ThemeProvider>
  //   );
  // } else {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="도서검색" sections={sections}> */}
        {/* <Header title="도서검색" sections={null}> */}
        <React.Fragment>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
              도서검색
            </Typography>
            <Tooltip title="나가기">
              <Link to="/readme/library">
                <IconButton>
                  <DisabledByDefaultIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Toolbar>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <OutlinedInput
              fullWidth
              onChange={(e) => {
                setStext(e.target.value);
              }}
            />
            <Tooltip title="검색">
              <IconButton sx={{ position: 'absolute', right: '3%' }} onClick={boardLoad}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
          {/* <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
          {sections.map((section) => (
            <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{ p: 1, flexShrink: 0 }}>
              {section.title}
            </Link>
          ))}
        </Toolbar> */}
        </React.Fragment>
        {/* ========================================================================= */}
        {/* 처음 시작 페이지 ========================================================= */}
        {stext === '절대 없을 제목' && (
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
          </main>
        )}
        {/* ========================================================================= */}
        {/* 도서 상세 페이지 ========================================================= */}
        {stext === 'isbn 기반 상세 페이지' && <BookLayout isbn={isbn13} />}

        {/* ========================================================================= */}
        {/* 검색 결과 페이지 ========================================================= */}
        {stext != ('절대 없을 제목' && 'isbn 기반 상세 페이지') && (
          <main>
            <Grid item xs={12} md={12}>
              <Card sx={{ display: 'flex', marginRight: '3%', marginLeft: '3%', marginTop: '1%' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography> [ 검색결과 ] 검색어 : {stext} </Typography>
                </CardContent>
              </Card>
            </Grid>
            {viewContent.map((item, idx) => {
              const booknum = item.book_isbn13;

              return (
                <Grid container spacing={4} key={idx}>
                  <Grid item xs={12} md={12}>
                    <CardActionArea
                      onClick={() => {
                        setIsbn13(booknum);
                        setStext('isbn 기반 상세 페이지');
                      }}
                    >
                      <Card sx={{ display: 'flex', marginRight: '3%', marginLeft: '3%', marginTop: '1%' }}>
                        <CardMedia component="img" sx={{ width: 160, display: { xs: 'none', sm: 'block' } }} image={item.bookImageURL} />
                        <CardContent sx={{ flex: 1 }}>
                          <Typography component="h2" variant="h5">
                            {item.bookname}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {item.publisher}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {item.authors}
                          </Typography>
                          {/* <Typography variant="subtitle1" paragraph>
                            {item.description}
                          </Typography> */}
                          <Typography variant="subtitle1" paragraph>
                            {item.publication_year}
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                </Grid>
              );
            })}
          </main>
        )}
      </Container>
    </ThemeProvider>
  );
  // }
}
