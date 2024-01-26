import * as React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
            한달구독권
          </Typography>
          <Typography variant="body2" color="text.secondary">
            결제한 날짜 기준으로 한 달 동안 사용 가능한 상품입니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            한 달 경과 시 유료서비스가 중지되며,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            재구매 하실 경우 구매 날짜부터 다시 유료서비스가 시작됩니다.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketYearly} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1년구독권
          </Typography>
          <Typography variant="body2" color="text.secondary">
            결제한 날짜 기준으로 1년 동안 사용 가능한 상품입니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1년 경과 시 유료서비스가 자동으로 중지됩니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1년 구독권 기간이 만료된 경우 1년 구독권을 재구매하시거나
          </Typography>
          <Typography variant="body2" color="text.secondary">
            더욱 저렴한 정기구독권 구매가 가능합니다.
          </Typography>
        </CardContent>
      </Card>
      {/* <Divider></Divider> */}
      <Card sx={{ maxWidth: 720 }}>
        <CardMedia component="img" alt="한 달 구독권 이미지" height="100%" image={TicketPerm} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            정기구독권
          </Typography>
          <Typography variant="body2" color="text.secondary">
            정기구독권 첫 결제일 기준으로 한 달마다 지정하신 결제 방식으로 자동 결제됩니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            지정한 결제 방식으로 결제 실패할 경우 결제일 기준 일주일 후 재결제됩니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            재결제도 실패할 시 사용자가 직접 결제를 시도하여야 하며,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            그 전까지는 구독권 기능이 중지됩니다.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            구독권 중단 후 1달 경과 시 정기구독 의사가 없는 것으로 간주하여
          </Typography>
          <Typography variant="body2" color="text.secondary">
            이후 결제는 한달구독권 또는 1년구독권만 가능합니다.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
