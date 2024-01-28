import * as React from 'react';
import { Box, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import EmptyCase from '../../../../assets/images/bookcaseB_empty.png';
import SingleBook from '../../../../assets/images/book360.png';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 720, maxHeight: 720, position: 'relative' }}>
      <CardMedia component="img" alt="green iguana" height="100%" image={EmptyCase}></CardMedia>
      <Box sx={{ position: 'absolute', top: '9%', left: '25%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '9%', left: '45%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '9%', left: '65%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '31.5%', left: '25%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '32%', left: '45%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '32%', left: '65%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '54%', left: '25%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '54%', left: '45%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '54%', left: '65%' }}>
        <img src={SingleBook} alt="이미지입니다" height="80px" />
      </Box>
    </Card>
  );
}
