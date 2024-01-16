import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <List
      sx={{ minWidth: 330, width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          결제 방법
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카카오페이" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Checkbox {...label} />
        </ListItemIcon>
        <ListItemText primary="카드결제" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <FormControl fullWidth>
              <InputLabel>카드번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <FormControl fullWidth>
              <InputLabel>CVC번호</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <FormControl fullWidth>
              <InputLabel>유효기간</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <FormControl fullWidth>
              <InputLabel>비밀번호 앞 두 자리</InputLabel>
              <OutlinedInput />
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
      <Button color="primary" variant="contained">
        수정
      </Button>
    </List>
  );
}
