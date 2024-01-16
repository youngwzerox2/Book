import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Divider } from '@mui/material';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box sx={{ width: '100%', height: 400, maxWidth: 700, padding: '20px', bgcolor: 'background.paper' }}>
      <Divider></Divider>
      <Button sx={{ padding: '10px' }}>History</Button>
      <Divider></Divider>
      <FixedSizeList height={300} width={'100%'} itemSize={46} itemCount={200} overscanCount={5}>
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
