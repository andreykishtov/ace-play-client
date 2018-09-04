import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import GameDialog from './GameDialog';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

// return { id, name, calories, fat, carbs, protein };
const rows = [
  { id: 1, name: 'me', start: '10:10', end: '11:11', mode: 'flag', map: 'bigmap', players: '11' },
  { id: 2, name: 'you', start: '13:13', end: '13:13', mode: 'none', map: 'smallmap', players: '16' }
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Game Name</CustomTableCell>
            <CustomTableCell>start at</CustomTableCell>
            <CustomTableCell>game end</CustomTableCell>
            <CustomTableCell>mode</CustomTableCell>
            <CustomTableCell>map</CustomTableCell>
            <CustomTableCell>Players</CustomTableCell>
            <CustomTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell>{row.start}</CustomTableCell>
                <CustomTableCell>{row.end}</CustomTableCell>
                <CustomTableCell>{row.mode}</CustomTableCell>
                <CustomTableCell>{row.map}</CustomTableCell>
                <CustomTableCell>{row.players}</CustomTableCell>
                <CustomTableCell>
                <GameDialog />
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
