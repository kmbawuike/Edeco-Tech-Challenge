import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainListItems from "../../components/MainListItems";
import { Route, Switch } from "react-router-dom";
import VendorsPage from "../VendorsPage/";
import StatisticsPage from "../StatisticsPage";
import CategoriesPage from "../CategoriesPage";
import TemplatesPage from "../TemplatesPage/";
import { MAIN_COLOR, WHITE } from "../../utility/color";
import useStyles from "./style";

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(
          classes.appBar,
          open && classes.appBarShift,
          classes.appBarBackgroundColor
        )}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            size={"small"}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
            classes.drawerBackground
          ),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.iconColor}
            size={"small"}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <MainListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="/" exact component={StatisticsPage} />
            <Route path="/vendors" component={VendorsPage} />
            <Route path="/categories" component={CategoriesPage} />
            <Route path="/templates" component={TemplatesPage} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}
