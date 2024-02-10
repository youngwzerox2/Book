import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Divider,
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  Collapse,
  IconButton,
  CardContent,
  CardActions,
  Tooltip,
  OutlinedInput
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Background from '../Abackground';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicFrame from '../BbasicFrame';
import { useEffect } from 'react';
import Logo from '../../../../assets/images/ReadMe2.png';
// 기본 폼
import { FormControl } from '@mui/material';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import * as React from 'react';
import ImageMap from 'image-map';
import { useState } from 'react';
import axios from 'axios';
import { red } from '@mui/material/colors';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import meng0 from '../../../../assets/images/costume/costume0.png';
import meng6 from '../../../../assets/images/costume/costume6.png';
import meng10 from '../../../../assets/images/costume/costume10.png';

// ===============================|| AUTH3 - REGISTER ||=============================== //
const ExpandMore = styled((props) => {
  // const { expand, ...other } = props;
  // console.log(expand);
  const { ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const Register = () => {
  const theme = useTheme();
  const [viewContent, setViewContent] = useState([]);
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  const boardLoad = () => {
    axios
      .get('/communityBoard/selectAll')
      .then((re) => {
        setViewContent(re.data);
        console.log(viewContent[0]);
      })
      .catch((err) => {
        console.log('에러', err);
      });
  };
  useEffect(() => {
    boardLoad();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Background>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <BasicFrame>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} textAlign="center">
                      <img id="logo-image" src={Logo} alt="logo" width={'250px'} />
                      {/* </a> */}

                      {/* <Library /> */}

                      <React.Fragment>
                        <Grid container direction="column" justifyContent="center" spacing={2}>
                          <Grid item xs={12} sm={12} md={12}></Grid>

                          <Grid item xs={12} textAlign="center">
                            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                              <Button
                                id="exit-test"
                                // onClick={myroomClicked}
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
                                도서관
                              </Button>
                              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Box>
                          </Grid>
                          <Tooltip title="나가기">
                            <IconButton
                              sx={{ width: '40px', left: '95%' }}
                              onClick={() => {
                                location = '/free/readme/library';
                              }}
                            >
                              <ClearOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                        <FormControl fullWidth>
                          {viewContent.map((item) => {
                            return (
                              <Card variant="outlined" sx={{ width: '100%', marginBottom: '15px' }} key={item.community_board_id}>
                                <CardHeader
                                  avatar={<Avatar sx={{ bgcolor: red[50] }} src={meng0} aria-label="recipe"></Avatar>}
                                  // action={
                                  //   <IconButton aria-label="settings">
                                  //     <MoreVertIcon />
                                  //   </IconButton>
                                  // }
                                  // title="Shrimp and Chorizo Paella"
                                  subheader={item.member_id}
                                  sx={{ marginRight: '5%' }}
                                />
                                {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="" /> */}
                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                    {item.community_board_content}
                                  </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                  <Tooltip title="좋아요">
                                    <IconButton aria-label="add to favorites">
                                      <FavoriteIcon />
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title="신고하기">
                                    <IconButton aria-label="report">
                                      <ReportIcon />
                                    </IconButton>
                                  </Tooltip>
                                  <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                  </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                  <CardHeader
                                    variant="outlined"
                                    avatar={<Avatar sx={{ bgcolor: red[50] }} src={meng10} aria-label="recipe"></Avatar>}
                                    action={
                                      <Tooltip title="신고하기">
                                        <IconButton aria-label="settings">
                                          <ReportIcon />
                                        </IconButton>
                                      </Tooltip>
                                    }
                                    sx={{
                                      position: 'relative',
                                      left: '50%',
                                      transform: 'translateX(-50%)',
                                      border: '0.5px solid lightgrey',
                                      padding: '5px',
                                      marginBottom: '2px',
                                      width: '95%'
                                    }}
                                    // title="Shrimp and Chorizo Paella"
                                    subheader="이 글을 보고 언젠가는 꼭 사야지 했는데 드디어 샀네요"
                                  />
                                  <CardHeader
                                    variant="outlined"
                                    avatar={<Avatar sx={{ bgcolor: red[50] }} aria-label="recipe" src={meng6}></Avatar>}
                                    action={
                                      <Tooltip title="신고하기">
                                        <IconButton aria-label="settings">
                                          <ReportIcon />
                                        </IconButton>
                                      </Tooltip>
                                    }
                                    sx={{
                                      position: 'relative',
                                      left: '50%',
                                      transform: 'translateX(-50%)',
                                      border: '0.5px solid lightgrey',
                                      padding: '5px',
                                      marginBottom: '2px',
                                      width: '95%'
                                    }}
                                    // title="Shrimp and Chorizo Paella"
                                    subheader="저거 만화 아님? 왤케 진지함?"
                                  />
                                  <OutlinedInput sx={{ width: '95%', marginBottom: '1px' }} />{' '}
                                  <Button variant="outlined" sx={{ marginTop: '5px', marginBottom: '7px' }}>
                                    등록
                                  </Button>
                                </Collapse>
                              </Card>
                            );
                          })}
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
    </>
  );
};

export default Register;
