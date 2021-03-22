import React from "react";
import { makeStyles } from "@material-ui/core";
import { WHITE } from "../utility/color";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: ({ background }) => background,
    marginTop: ({marginTop})=> theme.spacing(marginTop),
    padding: ({padding})=> theme.spacing(padding),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function GreyWrapper({
  children,
  background = { WHITE },
  elevation = 1,
  marginTop=8,
  padding=1
}) {
  const classes = useStyles({ background, marginTop, padding });
  return (
    <Paper elevation={elevation} className={classes.paper}>
      {children}
    </Paper>
  );
}
