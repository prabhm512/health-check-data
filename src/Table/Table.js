import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, id, firstName, lastName, email) {
  return { name, id, firstName, lastName, email };
}

const rows = [
  createData(
    "60d0fe4f5311236168a109ca",
    "ms",
    "Sara",
    "Andersen",
    "sara.andersen@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109cb",
    "miss",
    "Edita",
    "Vestering",
    "edita.vestering@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109cc",
    "ms",
    "Adina",
    "Barbosa",
    "adina.barbosa@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109d2",
    "mr",
    "Evan",
    "Carlson",
    "evan.carlson@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109e5",
    "mr",
    "Adrian",
    "Rodriguez",
    "adrian.rodriguez@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109e9",
    "mrs",
    "Cecilie",
    "Mortensen",
    "cecilie.mortensen@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109f6",
    "miss",
    "Madison",
    "Ambrose",
    "madison.ambrose@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109fa",
    "ms",
    "Ann",
    "Mason",
    "ann.mason@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109fb",
    "mrs",
    "Sohan",
    "Pierre",
    "sohan.pierre@example.com"
  ),
  createData(
    "60d0fe4f5311236168a109fc",
    "mr",
    "Gonzaga",
    "Ribeiro",
    "gonzaga.ribeiro@example.com"
  )
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
