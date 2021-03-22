import {
    Container,
    Grid,
    Paper,
    Button,
    Typography,
    Card,
    CardHeader,
    CardContent,
  } from "@material-ui/core";
  import React from "react";
  import Select from "../../components/Select";
  import StatCard from "../../components/StatCard";
  import {
    GREY,
  } from "../../utility/color";
  import ContainerWrapper from "../../components/ContainerWrapper";
  import ProductsTable from "../../components/ProductsTable";
  import SalesTable from "../../components/SalesTable";
  import clsx from "clsx";
  import StatChart from "../../components/StatChart";
  import Icon from "@material-ui/core/Icon";
  import useStyles from './styles'
  
  export default function StatisticsPage({ colorHeader }) {
    const classes = useStyles({ colorHeader });
    const dummyStat = [
      { header: "Total Sales", content: "2500", action: "View Stats" },
      { header: "Total Customers", content: "30", action: "View Stats" },
      { header: "Total Orders", content: "5000", action: "View All" },
      { header: "Total Income", content: "5000€", action: undefined },
    ];
    return (
      <div>
        <Grid container>
          {dummyStat.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatCard
                header={data.header}
                content={data.content}
                action={data.action}
              />
            </Grid>
          ))}
        </Grid>
        <ContainerWrapper marginTop={4}>
          <Container maxWidth={"md"}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}></Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography
                  variant="button"
                  display="block"
                  className={classes.capitalizeText}
                  gutterBottom
                >
                  Select Date Range
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} className={classes.sortContainer}>
                <Select selectColor={GREY} border={false} data={categories} />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  Sort
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={6} >
                <Select selectColor={GREY} border={true} data={dates} />
              </Grid>
            </Grid>
          </Container>
        </ContainerWrapper>
  
        <ContainerWrapper background={GREY} elevation={0} marginTop={4}>
          <Typography
            variant="button"
            display="block"
            className={classes.capitalizeText}
          >
            Sales Performance
          </Typography>
        </ContainerWrapper>
  
        <ContainerWrapper elevation={0} marginTop={3}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.statItem}>
              <Paper
                elevation={3}
                className={clsx(classes.statCard, classes.paper)}
              >
                <StatChart />
                <div style={{ marginLeft: "1rem" }}>
                  <Button
                    startIcon={<Icon className="fas fa-square" />}
                    className={clsx(classes.capitalizeText, classes.netSales)}
                    variant="outlined"
                    size="small"
                  >
                    Net Sales
                  </Button>
                  <Button
                    startIcon={<Icon className="fas fa-square" />}
                    className={clsx(classes.capitalizeText, classes.totalOrders)}
                    variant="outlined"
                    size="small"
                  >
                    Total Order
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.statItem}>
              <Card elevation={3} className={classes.statCard}>
                <CardHeader
                  className={classes.cardHeader}
                  title="Total Products Sold"
                />
                <CardContent>
                  <ProductsTable />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </ContainerWrapper>
        <Card className={classes.card} elevation={4}>
          <CardHeader
            className={clsx(classes.cardHeader, classes.cardHeaderColor)}
            title="Total Sales"
          />
          <CardContent >
            <SalesTable />
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const categories = [{ title: "Product" }, { title: "Sales" }];
  
  const dates = [
    { title: "August 1 2020 - August 31 2020" },
    { title: "December 1 2020 - August 31 2020" },
  ];
  