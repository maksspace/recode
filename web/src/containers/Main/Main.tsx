import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import { Card } from "@material-ui/core";
import { useStyles } from "./styles";
import { Logo } from "../../components/Logo";
import screenShot1 from "../../assets/screens/s1.png";
import { useHistory } from "react-router";
import { Copyright } from "./Copyright";
import { Donation } from "./Donation";

export function Main() {
  const classes = useStyles();
  const history = useHistory();

  const onStartMeeting = () => {
    history.push(`/create-meeting`);
  };

  const onAccountOpen = () => {
    history.push("/account/meetings");
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="div"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Logo />
          </Typography>
          <nav>
            <Link
              style={{ color: "white" }}
              target="_blank"
              href="https://github.com/maksspace/recode"
            >
              <GitHubIcon />
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main" className={classes.main}>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item md={8} lg={8}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Developer Interviews. Reinvented. Free.
            </Typography>
            <Typography component="div" align="center" color="textSecondary">
              <Button
                onClick={onStartMeeting}
                size="large"
                color="primary"
                variant="contained"
              >
                <Icon>video_call</Icon>&nbsp; Start Interview now
              </Button>
            </Typography>
            <br />
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              Share code online, create interview templates, record interviews,
              and much more!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" component="main" className={classes.features}>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} md={8} lg={8}>
            <Card className={classes.carousel}>
              <img src={screenShot1} />
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Typography variant="body1" color="textSecondary" align="center">
            For help and support ping me in{" "}
            <Link href="mailto:maksspaceworld@gmail.com" target="_blank">
              email
            </Link>{" "}
            or{" "}
            <Link href="https://twitter.com/makssmagin" target="_blank">
              twitter
            </Link>
            .
          </Typography>
        </Box>
        <Box mt={5}>
          <Donation />
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
