import {
    MAIN_COLOR,
    WHITE,
    DARK_GREEN,
  } from "../../utility/color";
  import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(0),
      },
    },
    button: {
      marginLeft: "1em",
      textTransform: "capitalize",
      backgroundColor: MAIN_COLOR,
      color: WHITE,
      padding: theme.spacing(0.06),
      fontSize: ".9rem",
      borderRadius: ".7rem",
      "&:hover": {
        backgroundColor: WHITE,
        border: `0.5 solid ${MAIN_COLOR} `,
        color: MAIN_COLOR,
      },
    },
    sortContainer: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
      },
    },
    capitalizeText: {
      textTransform: "capitalize",
      fontWeight: "700",
    },
    cardHeader: {
      "& .MuiCardHeader-title": {
        fontSize: "0.9rem",
        fontWeight: "700",
        padding: theme.spacing(0.3),
        color: ({ colorHeader }) => colorHeader,
      },
    },
    cardHeaderColor: {
      color: MAIN_COLOR,
      opacity: 0.5,
    },
    card: {
      marginTop: theme.spacing(5),
    },
    statCard: {
      minHeight: "65vh",
    },
    statItem: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
      },
    },
    netSales: {
      color: MAIN_COLOR,
      marginRight: "0.5em",
    },
    totalOrders: {
      color: DARK_GREEN,
    },
  }));

  export default useStyles