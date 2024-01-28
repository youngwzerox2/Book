import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Checkbox } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const sess = localStorage;

export default function Album() {
  const [bookContent, setBookContent] = useState([]);
  const bLoading = () => {
    axios.get(`/liked/selectByUserBook?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log('아니 안찍힘?', re.data);
      setBookContent(re.data);
    });
  };

  useEffect(() => {
    bLoading();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Box>
        {/* Hero unit */}

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {bookContent.map((item, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '100%'
                    }}
                    image={item.bookImageURL}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>{item.bookname}</Typography>
                  </CardContent>
                  <Checkbox icon={<Favorite color="primary" />} checkedIcon={<FavoriteBorder />} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
