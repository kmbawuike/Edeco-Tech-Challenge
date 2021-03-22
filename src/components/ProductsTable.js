import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BLACK, LIGHT_GREEN, MAIN_COLOR, WHITE } from "../utility/color";
import clsx from "clsx";

const useStyles = makeStyles({
  table: {},

  tableBorder: {
    border: "none",
  },
  tableBottomBorder: {
    borderBottom: `2px solid ${BLACK}`,
  },
  tableRightBorder: {
    borderRight: `2px solid ${BLACK}`,
  },
  stripBackground: {
    backgroundColor: LIGHT_GREEN,
  },
  normalBackground: {
    backgroundColor: WHITE,
  },
});

function createData(product, item_sold, total_sales) {
  return { product, item_sold, total_sales };
}

const rows = [
  createData("Marketing Strategy", 100, "1200€"),
  createData("Elements of Marketing", 7, "700€"),
  createData("Digital Exposure Vol 1", 5, "500€"),
  createData("Mystery of Marketing", 3, "300€"),
  createData("Marketing Tips", 3, "200€"),
];

const checkEven = (num) => {
  return num % 2 == 0;
};
export default function CustomTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              className={clsx(
                classes.tableBorder,
                classes.tableRightBorder,
                classes.tableBottomBorder
              )}
            >
              Product
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Item Sold
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Total Sales
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              className={
                checkEven(index)
                  ? classes.stripBackground
                  : classes.normalBackground
              }
            >
              <TableCell
                className={clsx(classes.tableBorder, classes.tableRightBorder)}
              >
                {row.product}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.item_sold}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.total_sales}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
