import { makeStyles } from "@material-ui/core";
import { DANGER, MAIN_COLOR } from "../../utility/color";

const useStyles = makeStyles((theme) => ({
  capitalize: {
    textTransform: "capitalize",
  },
  vendorInfo: {
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
  },
  lightText: {
    opacity: 0.3,
  },
  dangerText: {
    color: DANGER,
  },
  solid: {
    fontWeight: "500",
  },
  textMarginRight: {
    marginRight: theme.spacing(1),
  },
  successText: {
    color: MAIN_COLOR,
  },
  products: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        alignItems: 'center'
      },
  },
  product: {
    width: '28.3%',
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      width: '100%'
    },
  },
  productItem: {
    backgroundColor: "#dedede",
    height: "120px",
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productItemContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  smallProductText: {
    fontSize: "0.7rem",
  },
  mediumProductText: {
    fontSize: "0.9rem",
  },
  largeProductText: {
    fontSize: "1.1rem",
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    color: MAIN_COLOR
  },
  root: {
    opacity: 0.3,
    fontSize: '0.7rem'
  }
}));

export default useStyles;
