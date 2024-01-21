import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, Checkbox } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

var checkedType = true;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Clicked = () => {
  checkedType = false;
};

export default function Album() {
  if (checkedType) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Box>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6
            }}
          >
            <Container maxWidth="sm">
              <Divider></Divider>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" size="large">
                  도서
                </Button>
                <Button variant="outlined" size="large" onClick={Clicked}>
                  책장
                </Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '100%'
                      }}
                      image="https://image.aladin.co.kr/product/47/77/cover/3332430269_1.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>책 제목 어쩌구저쩌궁</Typography>
                    </CardContent>
                    <Checkbox {...label} icon={<Favorite color="primary" />} checkedIcon={<FavoriteBorder />} />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    );
  } else {
    return <div>ㅎㅇㅎㅇ</div>;
  }
}
