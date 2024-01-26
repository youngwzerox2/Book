import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Button, OutlinedInput } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import Tooltip from '@mui/material/Tooltip';

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

export default function RecipeReviewCard() {
  const [viewContent, setViewContent] = useState([]);
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
      {viewContent.map((item) => {
        return (
          <Card variant="outlined" sx={{ width: '100%', margin: '15px' }} key={item.community_board_id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              // title="Shrimp and Chorizo Paella"
              subheader={item.member_id}
            />
            {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="" /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.community_board_content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardHeader
                variant="outlined"
                avatar={
                  <Avatar sx={{ bgcolor: red[50] }} aria-label="recipe">
                    R
                  </Avatar>
                }
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
                subheader="댓글을 달아볼게요"
              />
              <CardHeader
                variant="outlined"
                avatar={
                  <Avatar sx={{ bgcolor: red[50] }} aria-label="recipe">
                    R
                  </Avatar>
                }
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
                subheader="댓글을 달아볼게요"
              />
              <OutlinedInput sx={{ width: '95%', marginBottom: '1px' }} />{' '}
              <Button variant="outlined" sx={{ marginBottom: '5px' }}>
                등록
              </Button>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
}
