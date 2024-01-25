import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Main from './Main';
// import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' }
// ];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…'
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text'
//   }
// ];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="도서검색" sections={sections}> */}
        <Header title="도서검색" sections={null}>
          {/* <img src={Logo} alt="로고 이미지" /> */}
        </Header>
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', marginRight: '3%', marginLeft: '3%', marginTop: '5%', marginBottom: '0%', padding: '5px' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: '30%', display: { xs: 'none', sm: 'block' } }}
                    image="http://image.aladin.co.kr/product/106/32/cover/0152002170_2.jpg"
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5" sx={{ margin: '2%' }}>
                      이시돌은 손가락이 다섯개입니다
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: '2%' }}>
                      발행년도 : 이시돌 생일
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: '2%' }}>
                      저자 : 이시돌
                    </Typography>
                    <Typography variant="subtitle1" paragraph sx={{ margin: '2%' }}>
                      책 내용 설명인데
                    </Typography>
                    <Button sx={{ position: 'absolute', top: '85%', right: '5%' }} variant="outlined">
                      <LocalLibraryIcon />
                      도서관 찾기
                    </Button>
                  </CardContent>
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardActionArea>
                <Card sx={{ display: 'flex', marginLeft: '3%', marginTop: '0%', padding: '5px' }}>
                  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountBoxIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="수육밥국" secondary="시간 날 때 읽어보기 좋은 정도. 독서를 처음하는 사람들도 ..." />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountBoxIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="aleeece" secondary="평소 좋아하던 작가의 책이라 바로 읽어보았다. 하지만 내 기 ..." />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountBoxIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="지밍잉" secondary="무난함." />
                    </ListItem>
                    <Button sx={{ position: 'absolute', bottom: '5%', right: '3%' }}>더보기</Button>
                  </List>
                </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardActionArea>
                <Card sx={{ display: 'flex', marginRight: '3%', marginLeft: '3%', marginTop: '0%', padding: '5px' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h6" sx={{ margin: '2%' }}>
                      <ShoppingCartIcon /> 온라인 서점에서 구매하기
                    </Typography>
                    <Link href="https://www.yes24.com/Product/Search?domain=ALL&query=감자">
                      <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: '2%' }}>
                        <LocalLibraryIcon fontSize="small" /> 예스24로 이동하기
                      </Typography>
                    </Link>
                    <Link href="https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=햄릿">
                      <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: '2%' }}>
                        <LocalLibraryIcon fontSize="small" /> 알라딘으로 이동하기
                      </Typography>
                    </Link>
                    <Link href="https://search.kyobobook.co.kr/search?keyword=아기토끼&gbCode=TOT&target=total">
                      <Typography variant="subtitle1" color="text.secondary" sx={{ marginLeft: '2%' }}>
                        <LocalLibraryIcon fontSize="small" /> 교보문고로 이동하기
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer title="" description="검색결과가 도움이 되었나요?" />
    </ThemeProvider>
  );
}
