import React from "react";
import { Menu, Button, MenuItem, Fade, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { BLACK, GREY, WHITE } from "../utility/color";
const useStyle = makeStyles((theme) => ({
  // root: { backgroundColor: "red", borderColor: "white" },
  inputFocusedNone: {
    backgroundColor: ({selectColor})=>  selectColor,
    borderRadius: '.7rem',
    padding: theme.spacing(0.06),
    fontSize: '.9rem',
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ({border})=> border ? `1px solid ${BLACK}` : 'none',
        outline: "none",
      },
      "&.Mui-focused fieldset": {
        border: ({border})=> border ? `1px solid ${BLACK}` : 'none',
        outline: "none",
      },
    },
  },
  none: {
    outline: "none",
    border: "none",
  },
}));

export default function Select({selectColor, border, data}) {
  const classes = useStyle({selectColor, border});
  return (
    <Autocomplete
      options={data}
      size="small"
      defaultValue={data[0]}
      getOptionLabel={(option) => option.title}
      style={{ width: '65%', outline: "none" }}
      classes={{
        root: classes.root,
        inputRoot: classes.inputFocusedNone,
        input: classes.none,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          classes={{ root: classes.inputFocusedNone }}
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top


