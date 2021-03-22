import React from "react";
import useStyles from "./styles";
import ContainerWrapper from "../../components/ContainerWrapper";
import { GREY } from "../../utility/color";
import clsx from "clsx";
import { Container, Typography, Grid, Icon, Popover } from "@material-ui/core";
import Book1 from "../../assets/images/book-1.PNG";
import Book2 from "../../assets//images/book-2-removebg-preview.png";
export default function VendorsPage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <ContainerWrapper background={GREY} marginTop={3}>
        <Typography
          variant="button"
          display="block"
          className={classes.capitalize}
        >
          Vendors
        </Typography>
      </ContainerWrapper>

      <ContainerWrapper marginTop={3}>
        <div style={{ margin: "0 auto" }}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12} sm={6} md={3} className={classes.vendorInfo}>
                <Typography
                  display="block"
                  variant="button"
                  className={clsx(classes.capitalize, classes.lightText)}
                >
                  Name
                </Typography>
                <Typography
                  variant="button"
                  className={clsx(classes.capitalize)}
                >
                  Chizom Graphics
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.vendorInfo}>
                <Typography
                  display="block"
                  variant="button"
                  className={clsx(classes.capitalize, classes.lightText)}
                >
                  Email
                </Typography>
                <Typography
                  variant="button"
                  className={clsx(classes.capitalize, classes.dangerText)}
                >
                  Klaus@mail.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.vendorInfo}>
                <Typography
                  display="block"
                  variant="button"
                  className={clsx(classes.capitalize, classes.lightText)}
                >
                  Phone Number
                </Typography>
                <Typography
                  variant="button"
                  className={clsx(classes.capitalize)}
                >
                  +49782300302
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.vendorInfo}>
                <Typography
                  display="block"
                  variant="button"
                  className={clsx(classes.capitalize, classes.lightText)}
                >
                  Country
                </Typography>
                <Typography
                  variant="button"
                  className={clsx(classes.capitalize)}
                >
                  Germany
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ContainerWrapper>

      <ContainerWrapper marginTop={3} padding={0}>
        <ContainerWrapper marginTop={0} background={GREY} elevation={0}>
          <Typography variant="body2" className={classes.solid}>
            Products By this Vendor
          </Typography>
        </ContainerWrapper>
        <ContainerWrapper elevation={0} marginTop={0}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              className={clsx(classes.solid, classes.textMarginRight)}
            >
              Total Products
            </Typography>
            <Typography
              variant="h4"
              className={clsx(classes.solid, classes.successText)}
            >
              3
            </Typography>
          </div>
        </ContainerWrapper>
        <ContainerWrapper elevation={0} marginTop={1}>
          <div className={classes.products}>
            {dummy.map((item, index) => (
              <div className={classes.product} key={index}>
                <div>
                  <ContainerWrapper marginTop={0} background={GREY}>
                    <div
                      className={classes.productItem}
                      aria-owns={open ? `mouse-over-popover-${index}` : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    >
                      <img src={index === 2 ? Book2 : Book1} alt="" />
                    </div>
                    <div className={classes.productItemContent}>
                      <Typography
                        style={{ fontSize: "13px", marginTop: "0.5em" }}
                      >
                        <Icon
                          className={clsx(
                            index !== 1
                              ? "fas fa-chalkboard"
                              : "fas fa-shopping-basket",
                            index === 1
                              ? classes.dangerText
                              : classes.successText,
                            classes.mediumProductText,
                            classes.textMarginRight
                          )}
                        />
                        <span
                          className={clsx(
                            classes.successText,
                            classes.mediumProductText,
                            classes.solid
                          )}
                        >
                          {item.title}
                        </span>
                      </Typography>
                      <Typography
                        variant="button"
                        className={clsx(
                          classes.capitalize,
                          classes.smallProductText
                        )}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="button"
                        className={clsx(
                          classes.capitalize,
                          classes.largeProductText
                        )}
                      >
                        250€
                      </Typography>
                      <Typography
                        variant="button"
                        className={clsx(
                          classes.capitalize,
                          classes.smallProductText,
                          classes.successText
                        )}
                      >
                        View Upsell Product
                      </Typography>
                    </div>
                  </ContainerWrapper>
                </div>
                <Popover
                elevation={1}
                  id={`mouse-over-popover-${index}`}
                  className={classes.popover}
                  classes={{
                    root: classes.root,
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography className={classes.mediumProductText}>View Product Details</Typography>
                </Popover>
              </div>
            ))}
          </div>
        </ContainerWrapper>
      </ContainerWrapper>
    </div>
  );
}

const dummy = [
  {
    title: "Digital Product",
    description: "Branding Strategy Vol1",
    price: "250€",
    action: "View Upsell Product",
  },
  {
    title: "Physical Product",
    description: "Marketing Tips Vol1",
    price: "250€",
    action: "View Upsell Product",
  },
  {
    title: "Digital Product",
    description: "Marketing Tips Vol2",
    price: "250€",
    action: "View Upsell Product",
  },
];
