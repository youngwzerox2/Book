import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography
} from '@mui/material';
// import { IconSettings } from '@tabler/icons';
import Meng from '../../assets/images/meng_stand.png';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from 'store/actions';
import { gridSpacing } from 'store/constant';

// 리스트 형식 테스트
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen2(!open2);
  };

  // 위에까지가 리스트 이벤트처리

  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  let initialFont;
  switch (customization.fontFamily) {
    case `'Inter', sans-serif`:
      initialFont = 'Inter';
      break;
    case `'Poppins', sans-serif`:
      initialFont = 'Poppins';
      break;
    case `'Roboto', sans-serif`:
    default:
      initialFont = 'Roboto';
      break;
  }

  // state - font family
  const [fontFamily, setFontFamily] = useState(initialFont);
  useEffect(() => {
    let newFont;
    switch (fontFamily) {
      case 'Inter':
        newFont = `'Inter', sans-serif`;
        break;
      case 'Poppins':
        newFont = `'Poppins', sans-serif`;
        break;
      case 'Roboto':
      default:
        newFont = `'Roboto', sans-serif`;
        break;
    }
    dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
  }, [dispatch, fontFamily]);

  return (
    <>
      {/* toggle button */}
      <Tooltip title="멩이 찬스">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: '10%',
            zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <img src={Meng} alt="meng" width="100px" />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  {/* 무엇을 도와드릴까요? */}
                  <img src={Meng} alt="멩이의 모습" width="150px" style={{ padding: '10px', margin: '40px' }} />
                  <Typography sx={{ position: 'absolute', top: '18%', left: '25%' }}> 무엇을 도와드릴까요? </Typography>
                </ListSubheader>
              }
            >
              {/* <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton> */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <ElectricCarIcon />
                </ListItemIcon>
                <ListItemText primary="빠른 이동하기" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/readme/main" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="내 방" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/readme/bookshelf" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="내 책장" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/readme/calendar" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="달력" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/readme/library" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="도서관" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/readme/mypage/info" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="마이페이지" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/readme/cs" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PlayArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="고객센터" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>

            <Grid item xs={12}>
              {/* font family */}
              <SubCard title="글꼴 바꾸기">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Roboto"
                      control={<Radio />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Poppins"
                      control={<Radio />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Inter"
                      control={<Radio />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              {/* border radius */}
              <SubCard title="테두리 조절하기">
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      뾰족하게
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      둥글게
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
