import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BLACK, LIGHT_GREEN, WHITE } from "../utility/color";
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
  container: {
    height: 300
  }
});

function createData(
  date,
  product_name,
  product_sale,
  upsell_product,
  returned,
  total_amount
) {
  return {
    date,
    product_name,
    product_sale,
    upsell_product,
    returned,
    total_amount,
  };
}

const rows = [
  createData("1- 08 2020", "Marketing Tip Vol1", 1, 0, 0, '200€'),
  createData("2- 08 2020", "Digital Marketing Tip Vol1", 1, 0, 0, '200€'),
  createData("3- 08 2020", "Analytical Marketing", 1, 0, 0, '200€'),
  createData("4- 08 2020", "Marketing Guide", 1, 0, 0, '200€'),
  createData("5- 08 2020", "Marketing Guide", 1, 0, 0, '200€'),
  createData("6- 08 2020", "High Speed Selling Course", 1, 0, 0, '200€'),
  createData("7- 08 2020", "Marketing Tip Vol1", 1, 0, 0, '200€'),
];

const checkEven = (num) => {
  return num % 2 === 0;
};
export default function CustomTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              className={clsx(
                classes.tableBorder,
                classes.tableRightBorder,
                classes.tableBottomBorder
              )}
            >
              Date
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Product Name
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Products Sale
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Upsell Products
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Returned
            </TableCell>
            <TableCell
              className={clsx(classes.tableBorder, classes.tableBottomBorder)}
            >
              Total Amount
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
                {row.date}
              </TableCell>
                
              <TableCell
                className={clsx(classes.tableBorder)}
              >
                {row.product_name}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.product_sale}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.upsell_product}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.returned}
              </TableCell>
              <TableCell className={clsx(classes.tableBorder)}>
                {row.total_amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
