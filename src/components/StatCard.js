import {
  Chip,
  makeStyles,
  Paper,
  StepContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MAIN_COLOR, WHITE } from "../utility/color";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down("sm")] :{
            marginBottom: theme.spacing(1)
        }
    },
  paper: {
    backgroundColor: MAIN_COLOR,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2.5),
    color: WHITE,
  },
  chip: {
    borderColor: WHITE,
    color: WHITE,
    marginTop: theme.spacing(1),
    cursor: "pointer",
  },
  empty: {
    visibility: "hidden",  
  }
}));

function StatCard({ header, content, action }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="body2" gutterBottom>
          {header}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {content}
        </Typography>
        {action ? (
          <Chip
            label={action}
            variant={"outlined"}
            size="small"
            className={classes.chip}
          />
        ) : <Chip className={classes.empty}/>}
      </Paper>
    </div>
  );
}

StatCard.prototype = {
  header: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.string,
};

export default StatCard;
