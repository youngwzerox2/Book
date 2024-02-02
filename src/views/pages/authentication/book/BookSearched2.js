import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';

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
// import { OutlinedInput } from '@mui/material';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MainFeaturedPost from './MainFeaturedPost';
import BookLayout from './BookLayout';
// -------------------------------------------------------------------------------------
const defaultTheme = createTheme();

export default function Blog() {
  const [viewContent, setViewContent] = useState([]);
  const [stext, setStext] = useState('절대 없을 제목');
  const [isbn13, setIsbn13] = useState('');

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
            {/* <OutlinedInput
              fullWidth
              onChange={(e) => {
                setStext(e.target.value);
              }}
            /> */}
            <Autocomplete
              disablePortal
              fullWidth
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="제목" />}
              onClick={(e) => {
                setStext(e.target.value);
              }}
            />
            <Tooltip title="검색">
              <IconButton sx={{ position: 'absolute', right: '5%' }} onClick={boardLoad}>
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
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
  // }
}
const top100Films = [
  { label: '책 먹는 여우' },
  { label: '참을 수 없는 존재의 가벼움' },
  { label: '법륜 스님의 반야심경 강의' },
  { label: '나를 나답게 만드는 것들' },
  { label: '비밀의 보석 가게 마석관' },
  { label: '빵이 되고 싶은 토끼' },
  { label: '매스커레이드 호텔 =히가시노 게이고 장편소설' },
  { label: '기린의 날개' },
  { label: "마인드셋 :원하는 것을 이루는 '태도의 힘'" },
  { label: '나는 경매로 1년 만에 인생을 역전했다' },
  { label: '어린이병원' },
  { label: '(초등학생이 꼭 배워야 할)어린이 경제:저학년용' },
  { label: '(초등학생이 꼭 배워야 할)어린이 경제:고학년용' },
  { label: '너에게 희망을 주고 싶어 :백혈병 어린이들의 용기와 희망을 위해 나선 한솔이의 국토종단 이야기' },
  { label: '셰익스피어의 어린이를 위한 이야기' },
  { label: '명탐정 어린이 과학수사대' },
  { label: '소년 봉신방 :어린이 대하역사소설' },
  { label: '(어린이)십팔사략' },
  { label: '나쁜 어린이 표' },
  { label: '아기소나무와 권정생 동화나라 - 빛나는 어린이 문학 4' },
  { label: '그리스 신화 속으로 떠나는 과학여행 - 똑똑한 어린이의 신화 읽기 1' },
  { label: '(즐거운 역사 체험) 어린이박물관' },
  { label: '(어린이박물관) 고려' },
  { label: '(어린이박물관) 백제' },
  { label: '나쁜 어린이표 - 웅진 푸른교실 1' },
  { label: '(어린이박물관) 고구려' },
  { label: '(어린이를 위한) 시골의사 박경철의 아름다운 동행' },
  { label: '어린이가 꼭 필요로 하는 일곱 가지' },
  { label: '(어린이)성경이 만든 사람:백화점 왕 워너메이커' },
  { label: `(어린이를 위한) 평생감사=One's whole life in appreciation` },
  { label: '어린왕자=Le petit prince' },
  { label: `어린이 그림 영어 사전 =Children's picture English dictionary` },
  { label: '팽이꽃 :제17회 계몽 어린이 문학상 수상작' },
  { label: '세계유산 여행 :지구를 사랑하는 어린이의 새로운 보물찾기' },
  { label: '단풍나라로 가는 배 - 글로바다 어린이문고 5' },
  { label: '청거북 두 마리 - 글로바다 어린이문고 9' },
  { label: '(어린이 천재 과학자를 위한)신나는 별자리 탐험' },
  { label: '어린이 첫 백과사전' },
  { label: '어린이 동물 백과' },
  { label: '어린이를 위한 세계명화 이야기' },
  { label: '(뉴스로 배우는)어린이 시사상식' },
  { label: '어린이 논술 신문' },
  { label: '(어린이를 위한)백범일지' },
  { label: '어린왕자' },
  { label: '아름다운 꼴찌 :가족을 위한 어린이 연탄길' },
  { label: '(세상 보는 눈을 키워 주는) 어린이 시사마당' },
  { label: '(어린이를 위한) 클래식 음악 동화' },
  { label: '세상을 바꾸는 아이들 :잭 캔필드의 어린이를 위한 영혼의 닭고기 스프' },
  { label: '심리학이 어린시절을 말하다 :유년의 상처를 끌어안는 치유의 심리학' },
  { label: '옆집새댁 살림일기 :살림고수보다 센스 있는 어린 새댁의 살림 이야기' },
  { label: '(쿠키런 어린이 맞춤형) 중국어 :마법골동품점' },
  { label: '나보다 어린 우리 아빠' },
  { label: '(전국)어린이 우수일기' },
  { label: '(대한민국 어린이라면 꼭 알아야 할)우리 역사 100대 사건' },
  { label: '(어린이)인체백과' },
  { label: '어린이 식물도감' },
  { label: '(어린이)공룡백과' },
  { label: '내가 만난 어린왕자' },
  { label: '(어린이 첫) 공룡그림책' },
  { label: '정보화시대의 어린이. 어린이 문화' },
  { label: '(초등학교 교육용)어린이 컴퓨터 참 쉽네요!' },
  { label: '어린이 컴퓨터 - 할수있다!' },
  { label: '아빠도 개구쟁이였대요 :우리 아빠의 어린 시절 이야기' },
  { label: '(만화로 보는)어린 왕자' },
  { label: '옛날이야기:어린이꿈나라극장 - 국민학교 1 -3학년용' },
  { label: '(재미로 보고 지식으로 남는)어린이 상식 백과' },
  { label: '어린이가 꼭 읽어야 할 과학 이야기 30가지' },
  { label: '화석으로 살펴보는 공룡의 세계 - 어린이꿈나라극장 34' },
  { label: '(어린이를 위한)세계의 명화' },
  { label: '(어린이를 위한)한국의 명화' },
  { label: '(어린이를 위한)공룡대백과' },
  { label: '(어린이를 위한)한국 현대 명화 감상' },
  { label: '(어린이가 가장 알고 싶어하는)과학 질문' },
  { label: '(어린이를 위한 경제 이야기)경제를 배우면 미래가 보인다' },
  { label: '어린이 철학 만화' },
  { label: '튼튼한 어린이' },
  { label: '유치원 교과서:바른 어린이' },
  { label: '유치원 교과서:슬기로운 어린이' },
  { label: '어린이가 지구를 살리는 50가지 방법' },
  { label: '(실험과 함께 읽는)어린이 생태학' },
  { label: '수박머리 우탁이 :1,2학년 어린이를 위한 창작동화' },
  { label: '어린숲:손종일 장편소설' },
  { label: '어린이 성공시대' },
  { label: '바둑전쟁 신들의 게임 :어린이 바둑 학습만화' },
  { label: '(어린이를 위한)누가 내 치즈를 옮겼을까?:변화와 승리의 길로 안내하는 멋진 모험의 길' },
  { label: '(어린이)습관으로 성공하라' },
  { label: '어린이를 참부자로 만드는 돈 이야기' },
  { label: '(어린이) 삼국유사' },
  { label: '(어린이) 삼국사기' },
  { label: '(어린이) 조선왕조실록' },
  { label: '(어린이를 위한) 책의 역사' },
  { label: '법에게 물어 봐! :어린이가 꼭 알아야 할 법 지식 24가지' },
  { label: '(대한민국 어린이들이 가장 궁금해 하는) 역사 질문 77 :호기심 한국사' },
  { label: '어린이를 위한 성공하는 사람들의 7가지 습관' },
  { label: '(어린이가 닮고 싶은) 조선의 고집쟁이들 :열정과 도전으로 성공한 조선 최고의 전문가들' },
  { label: '(어린이를 위한) 정의란 무엇인가' },
  { label: '(Discovery education) 맛있는 과학 :최고의 어린이 과학 콘텐츠' },
  { label: '어린이책 이야기' },
  { label: '어린이 로마인 이야기' },
  { label: '어린 방랑자:진리를 찾아 떠난 한 소년의 이야기' },
  { label: '오늘부터 나는 말 잘하는 어린이' },
  { label: '살까? 말까? :똑똑한 소비를 위한 어린이 경제' },
  { label: '세계의 어린 영웅들' },
  { label: '(대한민국) 독도 교과서 :어린이가 처음 만나는 독도 이야기' },
  { label: '(어린이를 위한)우리 나라 지도책' },
  { label: '똑똑한 어린이를 위한 지식 백과 :세상 모든 게 궁금한 꼬마 지식인을 위한 길잡이' },
  { label: '어린 왕자' },
  { label: '(만화로 배우고 퍼즐로 익히는) 어린이 한자사전' },
  { label: '밤티마을 큰돌이네 집 - 눈높이 어린이문고 3' },
  { label: '아주 특별한 우리 형 - 눈높이 어린이 문고 33' },
  { label: '윤일구씨네 아이들 (눈높이어린이문고41)' },
  { label: '(어린이)카네기리더십=Carnegie leadership' },
  { label: '어린이 글짓기 소프트 200' },
  { label: '(어린이가 배우는)훈민정음' },
  { label: '인간을 위한 미술교육 :어린이와 청소년을 중심으로' },
  { label: '자신 있는 어린이가 되는 40가지 방법' },
  { label: '어린이 국악교육의 실제' },
  { label: '절약하는 어린이의 50가지 생활 습관' },
  { label: '예절바른 어린이의 50가지 생활 습관' },
  { label: '건강한 어린이의 50가지 생활 습관' },
  { label: '자신감있는 어린이가 성공한다' },
  { label: '친구가 많은 어린이가 성공한다' },
  { label: '유머가 뛰어난 어린이가 성공한다' },
  { label: '리더십 강한 어린이가 성공한다' },
  { label: '공포의 어린이 축구단' },
  { label: '김연아처럼 :세계를 가슴에 품은 어린이들의 꿈' },
  { label: '(생방송)어린이 수다박스' },
  { label: '(우리아이처음만나는)어린왕자' },
  { label: '만화로 보는 어린이 성경 1 - 구약' },
  { label: '만화로 보는 어린이 성경 2 - 구약' },
  { label: '만화로 보는 어린이 성경 3 - 구약' },
  { label: '만화로 보는 어린이 성경 5 - 구약' },
  { label: '(만화로 보는) 어린이 성경 :신약' },
  { label: '천냥짜리 거짓말 :지혜와 용기로 어려움을 극복한 어린이들' },
  { label: '다자구야 들자구야 - 어린이고전마당 2' },
  { label: '구름 아래 묻어둔 보물 - 어린이고전마당 5' },
  { label: '(어린이를 위한)TV동화 행복한 세상' },
  { label: '(클릭)어린이@과학상식' },
  { label: '저학년 어린 왕자' },
  { label: '(저학년 어린이를 위한)라퐁텐 우화' },
  { label: '꼬맹이 나라의 어린이날' },
  { label: '(꿈을 찾아 떠나는) 마시멜로 이야기 =어린이를 위한 마시멜로 이야기' },
  { label: '(어린이를 위한) 바보 빅터 =17년 동안 바보로 살았던 멘사 회장의 이야기' },
  { label: '(어린이를 위한) 하버드 상위 1퍼센트의 비밀 :부정신호를 차단하고 한 가지에 몰입하는 힘' },
  { label: '순한 맛, 매운 맛 매생이 클럽 아이들 :어린이를 위한 글쓰기 교육 동화' },
  { label: '혼공하는 아이들 :어린이를 위한 공부 습관 만들기' },
  { label: '법 만드는 아이들 :어린이를 위한 민주 시민 교육 동화' },
  { label: '수상한 수학 감옥 아이들 :어린이를 위한 수학적 사고력 동화' },
  { label: '문해력이 자라는 아이들 :어린이의 어휘력을 키워 주는 동화' },
  { label: '과학 추리반 아이들 :어린이를 위한 과학 사고력 동화' },
  { label: '이상한 영어나라에 빠진 아이들 :어린이의 영어 자신감이 자라는 동화' },
  { label: '당당하고 다정하게 말 잘하는 아이들 :어린이를 위한 똑똑한 말하기 동화' },
  { label: '역사로 노는 아이들 :어린이를 위한 말랑말랑 한국사 교육 동화' },
  { label: '날아가는 화살을 잡은 원숭이:어린 장자의 지혜로운 이야기' },
  { label: '(어린이를 위한) 그림의 역사' },
  { label: '얘들아, 안녕:세계 어린이들이 들려주는 가족 이야기' },
  { label: '라루스 어린이 백과' },
  { label: '(호야의) 티키타카 경제왕 :어린이 금융 습관 기르기 프로젝트' },
  { label: '(고전을 발칵 뒤집은) 어린이 로스쿨' },
  { label: '(그림과 만화로 배우는)어린이 경제백과' },
  { label: '(어린이를 변화시키는)49가지 칭찬동화' },
  { label: '(어린이를 변화시키는)49가지 좋은 습관' },
  { label: '(어린이를 위한) 시크릿 :꿈을 이루는 일곱가지 비밀' },
  { label: '(어린이를 위한) 시크릿 카네기 캠프 =꿈을 이루는 인간관계의 일곱 가지 비밀 : 실천편' },
  { label: '(어린이를 위한) 시크릿 프랭클린 스쿨 =꿈을 이루는 자기 관리의 열세 가지 비밀 : 완성편' },
  { label: '(명화를 읽어 주는) 어린이 미술관' },
  { label: '(아나운서가 들려주는) 어린이를 위한 파워 스피치' },
  { label: '나도 이제 학교 가요 :1학년 어린이를 위한 학교생활 그림책' },
  { label: '아낌없이 주는 나무 (어린이용)' },
  { label: '(만화)어린이 경제학 ABC' },
  { label: '(어린이를 위한) 긍정의 힘' },
  { label: '일등이 된 빨간모자 꼴지가 된 어린왕자 :나에게 딱 맞는 공부 방법 찾기' },
  { label: '물은 어디에서 왔을까? - 어린이 지식책방 02' },
  { label: '(대한민국 대표과학자 20인이 어린이에게 권하는) 내 인생을 바꾼 책' },
  { label: '(어린이 경제동화)경제 귀신 돈 몬스터' },
  { label: '100나라 어린이가 가장 궁금해하는 100가지' },
  { label: '(어린이의 미래를 바꾸는)좋은 습관 좋은 버릇:좋은 습관이 성공의 열매를 맺는다' },
  { label: '세계리더를 꿈꾸는 어린이들의 생각 수첩' },
  { label: '(어린이를 위한) 관심' },
  { label: '(그림으로 보는) 그리스 로마 신화 :어린이 처음 인문학' },
  { label: '어린이' },
  { label: '어린이 아틀라스:지도로 배우는 세계의 문화와 자연' },
  { label: '말해도 괜찮아:성폭력 피해를 입은 어린이가 들려주는 이야기' },
  { label: '내 몸은 나의 것 :어린이 성폭력 예방의 첫걸음' },
  { label: '(어린이)그리스 신화' },
  { label: '어린이 자동차 교실:자동차는 어떻게 움직이나요?' },
  { label: '파차마마:지구 구출 작전에 나선 어린이들' },
  { label: '어린이를 위한 진화 이야기' },
  { label: '(쉽고 재미있는)어린이 첫 그림 한자 사전' },
  { label: '아들러 선생님 고민 있어요! :어린이를 위한 미움받을 용기' },
  { label: '(알아서 척척) 어린이 생활백과' },
  { label: '(어린이)조선왕조실록' },
  { label: '돈을 잘 쓰는 아이가 돈도 잘 번다 :어린이를 위한 똑소리 경제' },
  { label: '(어린이 리더십)너만의 꿈을 키워라' },
  { label: '(어린이를 위한) 가난하다고 꿈조차 가난할 수는 없다' },
  { label: '(의사를 꿈꾸는 어린이를 위한) 놀라운 의학사' },
  { label: '(우리 집은) 거북이 동물원 :어린 시절의 체험을 진솔하게 그린 자연 생태 동화' },
  { label: '살아 있는 모든 것은 :어린이에게 들려주는 생명의 시작과 끝에 대한 이야기' },
  { label: '우리에게 사랑을 주세요 :어린이에게 들려주는 유엔 아동권리협약' },
  { label: '(어린이를 위한) 마시멜로 이야기 :꿈을 찾아주는 레인보우 메시지' },
  { label: '(어린이를 위한 그림 동화)캣츠' },
  { label: '(어린이에게 띄우는)고도원의 아침 편지' },
  { label: '의사 어벤저스 :어린이 의학 동화' },
  { label: '어린이 과학 형사대 CSI' },
  { label: '어린이 사회 형사대 CSI' },
  { label: '어린이 사회 형사대 CSI 6 - CSI, 경찰서 실습을 가다!' },
  { label: '어린이 사회 형사대 CSI 8 - CSI, 정치 사건을 해결하다!' },
  { label: '어린이 사회 형사대 CSI 9 - CSI, 멋진 친구들!' },
  { label: '어린이 사회 형사대 CSI 10 - CSI, 새로운 시작!' },
  { label: '어린이 과학 형사대 CSI 특별수사단' },
  { label: '어린이 동장 만세' },
  { label: '(어린이를 위한)선물' },
  { label: '어린이 동물지도책' },
  { label: '어린이 세계풍물지리백과' },
  { label: '어린이 공룡지도책' },
  { label: '(전 세계 어린이들이 가장 많이 읽는) 영어동화 100편' },
  { label: '지구별 어른, 어린왕자를 만나다 :아직 어른이 되기 두려운 그대에게 건네는 위로, 그리고 가슴 따뜻한 격려' },
  { label: '어린왕자 :두 번째 이야기' },
  { label: '돈 잘 쓰는 법 :경제적인 어린이가 되고 싶다!' },
  { label: '흙 속의 작은 우주:어린이를 위한 토양동물 이야기' },
  { label: '어린이 미술관' },
  { label: '(어린이) 살아있는 한국사 교과서' },
  { label: '(어린이)살아있는 한자 교과서' },
  { label: '(어린이) 살아있는 과학 교과서' },
  { label: '(어린이) 살아있는 세계사 교과서' },
  { label: '니체의 인생 강의 :낙타, 사자, 어린아이로 사는 변신의 삶' },
  { label: '(상상력과 창의력 쑥쑥) 어린이 요리책 :친구들과 조물조물 냠냠 맛있는 간식 만들기' },
  { label: '(어린이 과학동아)호기심 과학백과' },
  { label: '(<아침편지> 고도원 선생님이 들려주는) 어린이를 위한 꿈 너머 꿈' },
  { label: '소통 잘하는 아이가 행복한 리더가 된다 :소통 전문가 김창옥 선생님이 들려주는 어린이를 위한 소통의 법칙' },
  { label: '세계를 배우는 어린이지도' },
  { label: '(나의 첫 사업 도전기) 레모네이드를 팔아라:시장경제의 원리를 체험하는 어린이 경제학' },
  { label: '(어린이를 위한) 화해' },
  { label: '(어린이를 위한) 끈기:나 자신을 이기는 힘' },
  { label: '(어린이를 위한) 자율 :스스로 행동하는 힘' },
  { label: '(어린이를 위한) 약속 :서로를 이어 주는 끈' },
  { label: '(어린이를 위한) 나눔 :사랑을 실천하는 힘' },
  { label: '(어린이를 위한) 용기 :자신감을 키워주는 힘' },
  { label: '(어린이를 위한) 청소부 밥 :밥 할아버지가 들려주는 여섯 가지 지혜' },
  { label: '(어린이를 위한) 경청 :좋은 친구를 사귀는 힘' },
  { label: '(어린이를 위한) 절제 :스스로 이겨 내는 힘' },
  { label: '(어린이를 위한) 리더십 :세상을 이끄는 힘' },
  { label: '(어린이를 위한) 자신감 :당당하게 서는 힘' },
  { label: '(어린이를 위한) 좋은 습관 :나를 변화시키는 7가지 비결' },
  { label: '(어린이를 위한) 성취' },
  { label: '어린이를 위한 정직 - 바르게 살아가는 힘' },
  { label: '(어린이를 위한) 비전 :목표를 이루는 힘' },
  { label: '(어린이를 위한) 집중 :성공과 실패를 좌우하는 힘' },
  { label: '(어린이를 위한) 창의력 :새로운 것을 생각하는 힘' },
  { label: '(어린이를 위한) 계획성 :시간을 관리하는 힘' },
  { label: '(어린이를 위한) 정리정돈 :부지런한 습관을 기르는 힘' },
  { label: '(어린이를 위한) 사회성 :더불어 사는 힘' },
  { label: '(어린이를 위한) 글로벌 마인드 :세계 무대에 우뚝 서는 힘' },
  { label: '(어린이를 위한) 몰입 수업 :자기 운명의 주인이 되는 법을 가르쳐 주는 자기 계발서' },
  { label: '(어린이를 위한) 불편한 진실 :지구 온난화의 위기를 알려 주는 환경 교과서' },
  { label: '(어린이를 위한) 리더십 대화법 :인기 있는 아이는 대화 기술이 다르다' },
  { label: '지치지 않는 희망으로 나를 채워라 :버락 오바마가 어린이에게 전하는 도전과 용기의 메시지' },
  { label: '아홉 살 인생 멘토 :자신 있는 어린이를 위한 인물 이야기' },
  { label: '(정브르가 알려주는) 파충류 체험 백과 :도마뱀, 카멜레온, 뱀, 거북이를 잘 키우고 싶은 어린이를 위한 생태도감' },
  { label: '(정브르가 알려주는) 곤충 체험 백과 :장수풍뎅이, 사슴벌레, 타란툴라, 전갈, 지네를 잘 키우고 싶은 어린이를 위한 생태도감' },
  { label: '(정브르가 알려주는) 양서류 체험 백과 :개구리, 팩맨, 두꺼비, 도롱뇽을 잘 키우고 싶은 어린이를 위한 생태도감' },
  { label: '바이킹 어린이 수수께끼 속담 퀴즈 백과 베스트 2종 세트' },
  { label: '(키가 쑥쑥 몸이 쭉쭉) 꼬마 발레리나 :어린이의 성장을 돕는 체조 그림책' },
  { label: '궁금해요 코로나19 :어린이가 묻고 전문가가 답해요' },
  { label: '어린 여우를 위한 무서운 이야기' },
  { label: '(어린이를 위한) 자존감 수업' },
  { label: '(어린이를 위한) 진짜 공부머리 독서법' },
  { label: '생각하는 야구 교과서 :어린이를 위한 야구의 모든 것' },
  { label: '법을 아는 어린이가 리더가 된다 :교과서와 함께 읽는 법 이야기' },
  { label: '(어린이와 엄마를 위한)맞춤법 길잡이' },
  { label: '(어린이와 엄마를 위한)원고지 바로 쓰기' },
  { label: '어린이 컴퓨터 교실' },
  { label: '한국 위인들의 엉뚱한 어린시절' },
  { label: '세계 위인들의 엉뚱한 어린시절' },
  { label: '발명왕들의 엉뚱한 어린시절' },
  { label: '돌아온 어린왕자' },
  { label: '북한 어린이들은 어떤 놀이를 할까:남북한 어린이가 손잡고 신나게 놀아요' },
  { label: '어린 임금의 눈물' },
  { label: '(358가지 어린이를 위한)이솝우화전집' },
  { label: '어린이를 위한 백범일지 - 어린이를 위한' },
  { label: '(어린이를 위한)벙어리 삼룡이:나도향 장편소설' },
  { label: '(방과후) 어린이 북아트' },
  { label: '부모가 알아야 할 어린이 심리세계' },
  { label: '세계의 어린이 우리는 친구 :무얼하고 있는지 알겠어요?' },
  { label: '순이와 어린 동생' },
  { label: '어린이 회의' },
  { label: '(어린이가 처음 만나는)수학그림책' },
  { label: '몬테소리 어린이집 꼬맹이 동화방' },
  { label: '(노벨상 수상자들의)어린 시절' },
  { label: '(피어린 27년)대한민국 임시정부' },
  { label: '(만화로 보는 어린이)팔만대장경' },
  { label: '(마음을 다스리는)어린이 법구경' },
  { label: '한국판 어린 왕자' },
  { label: '(어린이를 위한) 지도 밖으로 행군하라' },
  { label: '(어린이를 위한) 바람의 딸 우리 땅에 서다' },
  { label: '(어린이 장기 교실)장기는 내 친구' },
  { label: '(어린이)신토불이' },
  { label: '어린이에게 가장 지혜로운 이야기' },
  { label: '어린이 상식 백과:5학년' },
  { label: '(어린이) 주식회사' },
  { label: '멀뚱이의 착한 어린이 되기' },
  { label: '(만화)천재들의 어린 시절' },
  { label: '어린이 이야기 인물 한국사' },
  { label: '(어린이) 이야기 인물세계사 :역사를 빛낸 세계의 위인들' },
  { label: '(어린이가 꼭 읽어야 할) 옛날이야기:노승나무와 동자승나무' },
  { label: '(어린이가 꼭 읽어야 할) 옛날 이야기:호랑이가 중매한 이야기' },
  { label: '(어린이가 꼭 읽어야 할)옛날 이이기' },
  { label: '어린이 시사신문' },
  { label: '(만화가를 꿈꾸는 어린이에게)이렇게 저렇게 요렇게 그려보자' },
  { label: '(이희수 교수님과 함께 하는)어린이 이슬람 바로 알기' },
  { label: '(탈무드에서 배우는 어린이를 위한)선택의 기술' },
  { label: '나를 이기는 아이 & 남을 이기는 아이 :공병호 선생님의 어린이 자기계발' },
  { label: '어린이 북한 바로알기' },
  { label: '천국에서 쫓겨난 어린왕자들  - 세계으뜸문고 9' },
  { label: '(어린이가 보는)포레스트 검프' },
  { label: '읽기와 쓰기를 즐기는 어린이로 기르는 방법:유아의 읽기와 쓰기 기초단계 이해' },
  { label: '(어린이를 위한)오싱' },
  { label: '(어린이를 위한)우동 한 그릇' },
  { label: '(어린이를 위한) 우동 한 그릇 :세상에서 가장 아름다운 이야기' },
  { label: '한나의 선물:한 어린 삶이 보낸 마지막 한해' },
  { label: '(미래를 준비하는) 어린이 생각 계획표' },
  { label: '(생각하고, 다짐하고, 실천하는) 어린이 인생 교과서' },
  { label: '어린 나그네' },
  { label: '(어린이)동의보감' },
  { label: '어린이 영어 엄마가 가르쳐라' },
  { label: '(어린이)상식백과' },
  { label: '어린이 잡학사전' },
  { label: '어린이 실험백과' },
  { label: '어린 왕자, 또 하나의 이야기꿈꾸는 아이들, 꿈꾸지 않는 어른들이 함께 읽는 책' },
  { label: '어린이 성인병' },
  { label: '아기 돼지는 슬프다!:상처받은 어린 영혼을 위한 이야기' },
  { label: '어린 왕자와 장미:생떽쥐뻬리의 글과 그림 속의 상징,이미지,무의식' },
  { label: '(이야기로 배우는)어린이 경제교실' },
  { label: '(어린이가 알아야 할) 세계 전래동화 걸작선:전래동화 각 편마다 논리적인 사고 능력을 길러 주는 문제가 수록된 어린이의 필독서' },
  { label: '즐거운 어린이천리안 PC통신' },
  { label: '숟가락 먼저 들면 왜 안돼요? :소학으로 배우는 어린이 예의범절' },
  { label: '꼭 알아야 할 21세기 어린이 과학' },
  { label: '주식회사 6학년 2반 :CEO를 꿈꾸는 어린이 경제동화' },
  { label: '화가 났어요 :틱낫한 스님이 추천한 어린이 화' },
  { label: '어린이 속담상식' },
  { label: '(어린이)영어 상식백과' },
  { label: '(어린이)팔만대장경' },
  { label: '왕의 자리를 빼앗긴 어린단종:문종 5대 - 중종 11대' },
  { label: '(어린이)탈무드' },
  { label: '(그림으로 배우는)어린이 영어 스쿨=한국전래동화' },
  { label: '(꼭 필요한)어린이 생활예절' },
  { label: '(어린이 종이접기 지도의 길잡이)종이접기나라' },
  { label: '(선생님과 함께하는)어린이 PC 통신 길라잡이' },
  { label: '어린이 예절 교실' },
  { label: '동시나라 가는 길 :어린이 시 낭송을 위한 한국대표동시 150편' },
  { label: '(스스로 어린이)그림영어사전' },
  { label: '친구 없이는 못살아 - 북한의 어린이 1' },
  { label: '어린이 경제원론' },
  { label: '(어린이) 의사 되기 프로젝트 :대한민국 어린이여, 꿈과 희망의 씨앗을 키워라!' },
  { label: '놀라운 99%를 만들어 낸 1% 가치 :어린이들의 가치관을 아름답게 키워 주는 이야기' },
  { label: '어린이 공룡 박사의 비밀노트 :과학자를 꿈꾸는 어린이를 위한 공룡탐험이야기' },
  { label: '어린 자고새의 놀람' },
  { label: '어린이 명심보감' },
  { label: '(어린이의 정서와 감성을 키워주는)14가지 이야기' },
  { label: '(어린이의 논리와 사고력을 키워주는)17가지 이야기' },
  { label: '(어린이의 창조와 창의력을 키워주는)14가지 이야기' },
  { label: '(어린이의 도덕성을 키워주는)14가지 이야기' },
  { label: '어린이의 마음을 키워주는 33가지 이야기' },
  { label: '어린이의 리더십을 키워주는 33가지 이야기' },
  { label: '(우등생 영어 길잡이)어린이 영어 회화' },
  { label: '어린이 영어표현 - 우리말처럼 말해요!' },
  { label: '신체조성과 체중조절:어린이로부터 선수까지' },
  { label: '북한 어린이 이야기:언땅에 부는 바람' },
  { label: '(어린이)퀴즈백과' },
  { label: '(아름다운 만화로 탄생한)어린 왕자' },
  { label: '어린 나그네 :어린 왕자 그 후의 이야기' },
  { label: '어린이 축구' },
  { label: '아하 이렇게 연예인이 되는구나 - 어린이직업대탐험 3' },
  { label: '(어린이)고사성어' },
  { label: '(세계 어린이가 함께 읽는) 우리 옛 동시' },
  { label: '(어린이와 왕초보를 위한)만화 바둑 교실' },
  { label: '어린이 조선왕조실록' },
  { label: '어린이 노래 모음집' },
  { label: '모래알 고금 :우리 어린이 문학을 빛낸 동화' },
  { label: '너는 네 생각보다 훨씬 더 잘할 수 있어!:어린이의 생각을 열어주는 귀한 이야기' },
  { label: '어린이 영어교육=이론적 토대와 다양한 수업 방법' },
  { label: '(어린양)포의모험' },
  { label: '(만화로 읽는 생텍쥐페리의)어린왕자' },
  { label: '와우! 어린이 인터넷:재미있는 인터넷' },
  { label: '(대화와 사색을 위한)어린 왕자' },
  { label: '(한 달 안에 변화하는) 어린이 성공습관 31가지' },
  { label: '어린이 만화 영어회화' },
  { label: '어린별' },
  { label: '(재미가 솔솔)어린이 한국사' },
  { label: '(어린이를 위한)명화 이야기' },
  { label: '(어린이가)IMF를 이기는 58가지 방법' },
  { label: '(어린이)공자와 논어' },
  { label: '(어린이)상도' },
  { label: '(어린이를 위한)성공의 법칙' },
  { label: '(어린이에게 가장) 아름다운 이야기' },
  { label: '어린이 시사 퀴즈 100' },
  { label: '거꾸로 생각하는 엉뚱한 과학이야기:384가지의 궁금증을 풀어주는 어린이 과학' },
  { label: '곰이 알을 낳았어요 - 두배로 좋은 어린이 창작동화 5' },
  { label: '괜찮아 튼튼한 이빨이 있잖아 (두배로 좋은 어린이 창작동화 6)' },
  { label: '구멍이 났어요 어떡하면 좋죠 (두배로 좋은 어린이 창작동화 7)' },
  { label: '(세계의 어린이와 함께 읽는)동물 농장 이야기' },
  { label: '(어린이가 꼭 알아야 할)환경이야기' },
  { label: '(세계 어린이가 함께 보는)태양이야기' },
  { label: '부자 어린이로 사는 지혜' },
  { label: '설록의 사건일지 :표창원 박사의 어린이 프로파일러' },
  { label: '작은 나무:병마와 싸우고 있는 어린이를 위한 이야기' },
  { label: '(공부 비법 전도사 조승연이 들려주는) 어린이 인문학' }
];
