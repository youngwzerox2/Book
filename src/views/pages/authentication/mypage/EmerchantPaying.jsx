import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, InputLabel, OutlinedInput, Select, MenuItem } from '@mui/material';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [age, setAge] = React.useState(20);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
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
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카카오페이" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>CVC번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>유효기간</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>비밀번호 앞 두 자리</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카드결제" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">구독권 선택</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>한달구독권</MenuItem>
                <MenuItem value={20}>1년구독권</MenuItem>
                <MenuItem value={30}>정기구독권</MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>카드번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>CVC번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>유효기간</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <FormControl fullWidth>
              <InputLabel>비밀번호 앞 두 자리</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
      <Button color="primary" variant="contained">
        입력
      </Button>
    </List>
  );
}
