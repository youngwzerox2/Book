import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, IconButton, TextField, Tooltip, Divider, Typography, FormControl } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import Background from '../Abackground';
import BasicFrame from '../BstartPage';
import Note from '../../../../assets/images/springNote.png';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/ReadMe2.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
// import { InputLabel, OutlinedInput } from '@mui/material';

export default function BasicGrid() {
  const [value, setValue] = React.useState(2);
  const session = localStorage;
  const [hover, setHover] = React.useState(-1);
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  // 각 태그들 받아올 값
  const [isbn13, setIsbn13] = useState('');

  const [tags, setTags] = useState('');
  const [ltext, setLtext] = useState('');
  const reloading = () => {
    window.location.replace('/free/readme/bookshelf/recommanding');
  };
  // 등록 버튼 클릭 시 독서기록 작성
  const RecordSend = () => {
    alert(`${isbn13} / ${tags} / ${ltext} / ${value}`);
    let myRecord = {
      recordBookContent: ltext,
      recordBookScore: value,
      recordBookTag1: tags,
      bookIsbn13: isbn13,
      memberId: 'test3'
    };
    axios.post('/record/write'.null, { params: myRecord });
  };

  const labels = {
    1: '최악이에요',
    2: '별로에요',
    3: '보통이에요',
    4: '좋아요',
    5: '최고에요'
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  return (
    <Background>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <BasicFrame>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} textAlign="center">
                    <img id="logo-image" src={Logo} alt="logo" width="250px" />
                    <React.Fragment>
                      <Grid container direction="column" justifyContent="center" spacing={2}>
                        <Grid item xs={12} sm={12} md={12}></Grid>

                        <Grid item xs={12} textAlign="center">
                          <Box sx={{ alignItems: 'center', display: 'flex' }}>
                            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            <Button
                              id="exit-test"
                              // style={`background : url(${theimg}); width : 100px`}
                              variant="outlined"
                              sx={{
                                // cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                              }}
                              disableRipple
                              // disabled
                            >
                              {session.getItem('loginId')}의 책장
                            </Button>
                            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                          </Box>
                        </Grid>
                      </Grid>
                      <FormControl fullWidth>
                        <Box sx={{ flexGrow: 1 }}>
                          <img src={Note} alt="노트" width="100%" />
                          <Grid
                            container
                            spacing={1}
                            sx={{ position: 'absolute', top: '10%', maxWidth: '450px', left: '25%', display: 'flex' }}
                            alignContent="center"
                          >
                            <Grid item xs={12}>
                              <Autocomplete
                                disablePortal
                                display="flex"
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="제목" />}
                                onChange={() => {
                                  setIsbn13('8809105873012');
                                }}
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <Box
                                padding="20px"
                                sx={{
                                  maxWidth: '300px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Rating
                                  name="hover-feedback"
                                  value={value}
                                  precision={1}
                                  getLabelText={getLabelText}
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                  onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                  }}
                                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                id="standard-basic"
                                label="#태그입력"
                                variant="standard"
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                  setTags(e.target.value);
                                }}
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={15}
                                variant="standard"
                                fullWidth
                                placeholder="내용을 입력해주세요"
                                opacity="1"
                                onChange={(e) => {
                                  setLtext(e.target.value);
                                }}
                              />
                            </Grid>
                            <Grid alignItems="center" item xs={8} margin="20px">
                              {/* <Button sx={{ position: 'absolute', left: '45%' }}>등록</Button> */}
                              <Button variant="contained" onClick={RecordSend}>
                                등록
                              </Button>
                            </Grid>
                          </Grid>
                          <Tooltip title="나가기">
                            <IconButton
                              variant="contained"
                              size="small"
                              sx={{ position: 'absolute', right: '3%', top: '3%' }}
                              onClick={reloading}
                            >
                              <ClearIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </FormControl>
                    </React.Fragment>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography
                        component={Link}
                        to="/readme/main"
                        variant="subtitle1"
                        sx={{ textDecoration: 'none' }}
                        onClick={() => {
                          confirm('로그아웃하시겠습니까?');
                        }}
                      >
                        로그아웃
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </BasicFrame>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}></Grid>
      </Grid>
    </Background>
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 }
];
