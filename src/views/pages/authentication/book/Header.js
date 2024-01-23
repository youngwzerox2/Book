import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Header(props) {
  // const { sections, title } = props;
  const { title } = props;
  const [stext, setStext] = useState('');

  const searchBtn = () => {
    alert(stext);
    axios.get('/book/selectByTitle', { params: { bookname: stext } }).then((re) => {
      console.log(re.data);
    });
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
          {title}
        </Typography>
        <Tooltip title="나가기">
          <Link to="/readme/library">
            <IconButton>
              <DisabledByDefaultIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Toolbar>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <OutlinedInput
          fullWidth
          onChange={(e) => {
            setStext(e.target.value);
          }}
        />
        <Tooltip title="검색">
          <IconButton sx={{ position: 'absolute', right: '3%' }} onClick={searchBtn}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {sections.map((section) => (
          <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{ p: 1, flexShrink: 0 }}>
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  // sections: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     url: PropTypes.string.isRequired
  //   })
  // ).isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
