import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
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
  { id: 1, name: 'Urban Terror', 
  start: moment('2018-09-11T14:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), 
  end: moment('2018-09-11T16:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), mode: 'capture flag', map: 'bigmap', players: '11' },
  { id: 2, name: 'Urban Terror', 
  start: moment('2018-09-13T17:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), 
  end: moment('2018-09-13T18:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), mode: 'heroes brawl', map: 'smallmap', players: '16' },
  { id: 2, name: 'Poker', 
  start: moment('2018-09-22T19:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), 
  end: moment('2018-09-22T20:00:00Z').format('MMMM Do YYYY, h:mm:ss a'), mode: 'heroes brawl', map: 'smallmap', players: '7' }
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Game name</CustomTableCell>
            <CustomTableCell>Start at</CustomTableCell>
            <CustomTableCell>end at</CustomTableCell>
            <CustomTableCell>Mode</CustomTableCell>
            <CustomTableCell>Map</CustomTableCell>
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
                <CustomTableCell>{row.players}/16</CustomTableCell>
                <CustomTableCell>
                <GameDialog isLogin={props.isLogin} />
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
