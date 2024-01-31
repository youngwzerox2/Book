import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  const sess = localStorage;

  const [showPassword, setShowPassword] = useState(false);

  // 회원정보 불러오기
  const [viewContent, setViewContent] = useState([]);
  const boardLoadUser = () => {
    axios.get(`/user/selectByNum?memberId=${sess.getItem('loginId')}`).then((re) => {
      console.log(re.data);
      setViewContent(re.data);
      console.log(setShowPassword);
    });
  };

  useEffect(() => {
    boardLoadUser();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField disabled value={viewContent.memberId} id="memberId" name="memberId" label="아이디" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.memberPassword}
            id="memberPassword"
            name="memberPassword"
            label="비밀번호"
            fullWidth
            variant="standard"
            type={showPassword ? 'text' : 'password'}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField required value={viewContent.memberName} id="memberName" name="memberName" label="이름" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            value={viewContent.memberNickname}
            id="memberNickname"
            name="memberNickname"
            label="닉네임"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField value={viewContent.memberEmail} id="memberEmail" name="memberEmail" label="이메일" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField required value={viewContent.memberTel} id="memberTel" name="memberTel" label="전화번호" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            disabled
            value={viewContent.memberGender}
            id="memberGender"
            name="memberGender"
            label="성별"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            value={viewContent.memberBirthday}
            id="memberBirthday"
            memberBirthday="memberBirthday"
            label="생일"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.memberGrade}
            id="memberGrade"
            name="memberGrade"
            label="등급"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.memberVisitAgree}
            id="memberVisitAgree"
            name="memberVisitAgree"
            label="방문 허용 여부"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.cardNumber}
            id="cardNumber"
            name="cardNumber"
            label="카드 번호"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField required value={viewContent.cardCvc} id="cardCvc" name="cardCvc" label="카드 cvc" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.cardDate}
            id="cardDate"
            name="cardDate"
            label="카드 유효기간"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            value={viewContent.cardPassword}
            id="cardPassword"
            name="cardPassword"
            label="카드 비밀번호"
            fullWidth
            variant="standard"
            type={showPassword ? 'text' : 'password'}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
