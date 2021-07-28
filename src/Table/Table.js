import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import dummyData from "../../db";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, id, firstName, lastName, email) {
  return { name, id, firstName, lastName, email };
}

export default function BasicTable() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const tempRows = [];

    for (let i = 0; i < dummyData.length; i++) {
      tempRows.push(
        createData(
          dummyData[i].id,
          dummyData[i].title,
          dummyData[i].lastName,
          dummyData[i].firstName,
          dummyData[i].email
        )
      );
    }

    setRows(tempRows);
  }, []);

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
