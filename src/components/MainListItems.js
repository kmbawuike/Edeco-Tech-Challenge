import React, { useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import logo from "../assets/images/main_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { checkIsActive, getCurrentUrl } from "../helpers/routerHelper";
import clsx from "clsx";
import { BLACK, MAIN_COLOR, WHITE } from "../utility/color";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: WHITE,
    opacity: ".6",
    marginTop: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: WHITE,
      opacity: ".6",
    },
  },

  activeListItem: {
    fontWeight: 'bold',
    backgroundColor: WHITE,
    marginTop: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: WHITE,
    },
  },

  listItemColor: {
    color: BLACK,
  },
}));

const MainListItems = () => {
  const location = useLocation();
  const activeMenu = (url) => {
    return checkIsActive(location, url)
    // if (url == location.pathname) {
    //   console.log(true)
    //   return true;
    // }
    // console.log(false)
    // return false;
  };

  const classes = useStyles();
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: '2rem' }}>
        <img
          src={logo}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <NavLink to="/categories">
        <ListItem
          button
          className={clsx(
            activeMenu("/categories") ? classes.activeListItem : classes.listItem,
            classes.listItemColor
          )}
        >
          <ListItemIcon>
            <DashboardIcon className={classes.listItemColor} />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </NavLink>

      <NavLink to="/vendors">
        <ListItem
          button
          className={clsx(
            activeMenu("/vendors") ? classes.activeListItem : classes.listItem,
            classes.listItemColor
          )}
        >
          <ListItemIcon>
            <ShoppingCartIcon  className={classes.listItemColor}/>
          </ListItemIcon>
          <ListItemText primary="Vendor List" />
        </ListItem>
      </NavLink>

      <NavLink to="/templates">
        <ListItem
          button
          className={clsx(
            activeMenu("/templates") ? classes.activeListItem : classes.listItem,
            classes.listItemColor
          )}
        >
          <ListItemIcon>
            <PeopleIcon  className={classes.listItemColor}/>
          </ListItemIcon>
          <ListItemText primary="Create Template" />
        </ListItem>
      </NavLink>

      <NavLink to="/">
        <ListItem
          button
          className={clsx(
            activeMenu("/") ? classes.activeListItem : classes.listItem,
            classes.listItemColor
          )}
        >
          <ListItemIcon>
            <BarChartIcon  className={classes.listItemColor}/>
          </ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
      </NavLink>
    </div>
  );
};

export default MainListItems;
