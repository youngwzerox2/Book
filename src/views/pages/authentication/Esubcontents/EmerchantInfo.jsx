import { Link } from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TicketMonthly from '../../../../assets/images/ticket_oneMonth.png';
import TicketYearly from '../../../../assets/images/ticket_oneYear.png';
import TicketPerm from '../../../../assets/images/ticket_periodically.png';
import { Container } from '@mui/system';

export default function ImgMediaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketMonthly} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketYearly} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketPerm} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            정기구독권
          </Typography>
          <Typography variant="body2" color="text.secondary" component={Link} to="/pages/login/login3" sx={{ textDecoration: 'none' }}>
            이것은 완전 멋지고 갱장한 정기구독권. 당신이 이것을 구매해야하는 이유는 짱 많다. 왜냐하면 그거슨 클릭 시 정기구독권 결제...
            어쩌구저쩌구 페이지로 이동합니다
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
