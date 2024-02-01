// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TextField, Grid, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData(
    '비호감 게시글입니다. 삭제해주세요.',
    '2024-02-02',
    '안녕하세요. Read Me입니다. Read Me 멤버십 개편으로 점검 시간 동안 서비스 이용이 부분적으로 제한될 예정입니다. 너그러운 양해 부탁드립니다. 감사합니다.'
  ),
  createData('부적절한 글입니다.', '2024-02-01'),

  createData('광고글', '2024-01-28', '공지사항 없당'),
  createData('욕설', '2024-01-22', '공지사항 없당'),
  createData('커뮤니티가 대리운전 광고글로 도배되었습니다!!! 빨리 처리해주세요!!!', '2024-01-19', '공지사항 없당'),
  createData('뭐야 이건', '2023-11-11', '공지사항 없당'),
  createData('뭐임?', '2023-11-11', '공지사항 없당'),
  createData('매직쇼 기대함', '2023-11-11', '공지사항 없당')
];
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
export default function CustomPaginationActionsTable() {
  const boardLoad = () => {
    axios.get('/cs/selectNotice').then((re) => {
      console.log(re.data);
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    boardLoad();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const theme = useTheme();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">제목</TableCell>
            <TableCell align="right">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              개인정보처리방침
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                안녕하세요. Read Me입니다. Read Me 멤버십 개편으로 점검 시간 동안 서비스 이용이 부분적으로 제한될 예정입니다. 너그러운 양해
                부탁드립니다. 감사합니다.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                닫기
              </Button>
            </DialogActions>
          </BootstrapDialog>
          {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
            <TableRow key={row.name} onClick={handleClickOpen}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page'
                },
                native: true
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Grid>
        <TextField
          label="검색"
          margin="normal"
          name="lname"
          type="text"
          height="100px"
          sx={{ ...theme.typography.customInput }}
        ></TextField>
        <Button size="large">
          {' '}
          <SearchIcon fontSize="large" sx={{ position: 'absolute', top: '20px' }} />
        </Button>
      </Grid>
    </TableContainer>
  );
}
