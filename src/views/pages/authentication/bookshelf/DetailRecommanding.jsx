import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, ListItemText, TextField, Tooltip, ListItem } from '@mui/material';
//
import Note from '../../../../assets/images/springNote.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
export default function DetailRecord(props) {
  // ========================================================================
  // 독서기록 내용 불러오기
  const [viewContent, setViewContent] = useState([]);
  const boardLoad = () => {
    axios.get(`/recommanding/selectByNum?recommandingId=${props.num}`).then((re) => {
      console.log(re.data);
      setViewContent(re.data);
    });
  };
  useEffect(() => {
    boardLoad();
  }, []);

  // 별점 구현

  return (
    <Box sx={{ flexGrow: 1 }}>
      <img src={Note} alt="노트" width="100%" />
      <Grid
        container
        spacing={1}
        sx={{ position: 'absolute', top: '10%', maxWidth: '450px', left: '25%', display: 'flex' }}
        alignContent="center"
      >
        <Grid item xs={12}>
          <ListItemText> 제목 : {viewContent.recommandingTitle}</ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText>{` < ${viewContent.bookname}  >`}</ListItemText>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '30px' }}>
          <ListItem>
            <ListItemText>#{viewContent.recommandingTag}</ListItemText>
          </ListItem>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={15}
            variant="standard"
            fullWidth
            label={`${viewContent.recommandingBookContent}`}
            // placeholder=
            opacity="1"
            onChange={(e) => {
              setLtext(e.target.value);
            }}
          />
        </Grid>
        <Grid alignItems="center" item xs={8} margin="20px">
          {/* <Button sx={{ position: 'absolute', left: '45%' }}>등록</Button> */}
          <Button
            variant="contained"
            onClick={() => {
              alert('ㅎㅇ');
            }}
          >
            수정
          </Button>
        </Grid>
      </Grid>
      <Tooltip title="나가기">
        <Button
          sx={{ position: 'absolute', top: '3%', right: '3%' }}
          onClick={() => {
            location = '/free/readme/bookshelf/recommanding';
          }}
        >
          <CloseIcon />
        </Button>
      </Tooltip>
    </Box>
  );
}
