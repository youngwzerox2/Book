import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
// 헬맷?????
import { Helmet } from 'react-helmet';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [ticket, setTicket] = React.useState('한달구독권');

  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  // **********************************************************
  const session = localStorage;
  const memberId = session.getItem('loginId');
  const { payUrl, setPayUrl } = useState('');

  console.log('payUrl 출력', payUrl);

  const payingBtnKakao = async () => {
    // alert(`${memberId}`);
    try {
      const response = await axios
        .post('/pay/kakaopay', null, {
          params: {
            partner_user_id: memberId, // 가맹점 회원 ID
            item_name: '감자'
          }
        })
        .then((re) => {
          console.log('잘 받아지고 있긴 한건지 ,,,?', re.data.next_redirect_pc_url);
          // window.open(re.data.next_redirect_pc_url, '카카오페이', 'popup=yes');
          location = re.data.next_redirect_pc_url;
        });
      setPayUrl(response.data.next_redirect_pc_url);
    } catch (error) {
      console.error('에러입니다1.');
      console.error(error);
    }
  };

  function requestPay() {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.init('imp05157581');
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'DolmengPlus-' + new Date().getTime(),
        name: '리드미 플러스',
        amount: 3900,
        // buyer_email: 'abc@gmail.com',
        buyer_name: memberId
        // buyer_tel: '01000000000',
        // buyer_addr: '서울특별시 강남구 신사동',
        // buyer_postcode: '01181'
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          // 결제성공시 로직
          alert('리드미 플러스가 결제되었습니다.');
          // axios.post('/merchant/write')
          location.href = 'http://127.0.0.1:3000/free/readme/mypage/pay';
        } else {
          // 결제 실패시
          alert(rsp.error_msg);
          console.log(rsp);
        }
      }
    );
  } //requestPay

  return (
    <>
      <Helmet>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" type="text/javascript" />
        <script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" type="text/javascript" />
      </Helmet>
      <List
        sx={{ minWidth: 330, width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            결제 방법을 선택해주세요
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="카카오페이" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">구독권 선택</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={ticket} label="Age" onChange={handleChange}>
                  <MenuItem value={'한달구독권'}>한달구독권</MenuItem>
                  <MenuItem value={'1년구독권'}>1년구독권</MenuItem>
                  <MenuItem value={'정기구독권'}>정기구독권</MenuItem>
                </Select>
              </FormControl>
              <Button color="primary" variant="contained" sx={{ margin: '10px' }} onClick={payingBtnKakao}>
                결제
              </Button>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="카드결제" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">구독권 선택</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={ticket} label="Age" onChange={handleChange}>
                  <MenuItem value={'한달구독권'}>한달구독권</MenuItem>
                  <MenuItem value={'1년구독권'}>1년구독권</MenuItem>
                  <MenuItem value={'정기구독권'}>정기구독권</MenuItem>
                </Select>
              </FormControl>
              <Button color="primary" variant="contained" sx={{ margin: '10px' }} onClick={requestPay}>
                결제
              </Button>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}
