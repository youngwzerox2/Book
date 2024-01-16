import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TicketMonthly from '../../../../assets/images/ticket_oneMonth.png';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import MerchantList from './EmerchantMyList';

export default function ImgMediaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketMonthly} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            유효기간
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2024-01-12 ~ 2024-02-12
          </Typography>
          <Typography variant="body2" color="text.secondary">
            유효기간 만료 시 리드미 플러스 기능이 사라집니다.
          </Typography>
        </CardContent>
        <Typography variant="body2" color="lightblue.500" component={Link} to="/pages/login/login3" sx={{ textDecoration: 'none' }}>
          구독권 구매하기
        </Typography>
      </Card>
      <Container>
        <MerchantList />
      </Container>
    </Container>
  );
}
