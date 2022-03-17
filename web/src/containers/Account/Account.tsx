import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Logo} from '../../components/Logo';
import {useStyles} from './styles';
import {useHistory} from "react-router";
import {SmileIcon} from "../../components/Icons/SmileIcon";

export function Account() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="div" color="inherit" noWrap className={classes.toolbarTitle}>
            <Logo/>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main" className={classes.main}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item md={6} lg={6}>
            <Typography align='center'>
              List of created before meetings - coming soon :)
            </Typography>
            <Typography align='center'>
              <SmileIcon/>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import {Logo} from '../../components/Logo';
// import {useStyles} from './styles';
// import List from "@material-ui/core/List";
// import {ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
// import {Route, Switch} from "react-router-dom";
// import {useHistory} from "react-router";
// import {MeetingsList} from "./MeetingsList";
// import {InterviewTemplates} from "./InteviewTemplates";
//
// export function Account() {
//   const history = useHistory();
//   const classes = useStyles();
//
//   return (
//     <React.Fragment>
//       <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
//         <Toolbar className={classes.toolbar}>
//           <Typography component="div" color="inherit" noWrap className={classes.toolbarTitle}>
//             <Logo/>
//           </Typography>
//         </Toolbar>
//       </AppBar>
//
//       <Container maxWidth="md" component="main" className={classes.mainContainer}>
//         <Grid container spacing={2} alignItems="flex-start" justify="center">
//           <Grid item>
//             <Paper>
//               <List component="nav">
//                 <ListItem button
//                           onClick={() => history.push("/account/meetings")}>
//                   <ListItemIcon>
//                     <Icon>event</Icon>
//                   </ListItemIcon>
//                   <ListItemText primary="Meetings"/>
//                 </ListItem>
//                 <ListItem button
//                           onClick={() => history.push("/account/templates")}>
//                   <ListItemIcon>
//                     <Icon>build</Icon>
//                   </ListItemIcon>
//                   <ListItemText primary="Templates"/>
//                 </ListItem>
//               </List>
//             </Paper>
//           </Grid>
//           <Grid item md={8} lg={8}>
//             <Paper className={classes.content}>
//               <Switch>
//                 <Route path="/account/meetings">
//                   <MeetingsList/>
//                 </Route>
//                 <Route path="/account/templates">
//                   <InterviewTemplates/>
//                 </Route>
//               </Switch>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }

