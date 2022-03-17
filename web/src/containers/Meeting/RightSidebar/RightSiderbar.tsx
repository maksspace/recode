import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import {useStyles} from "./styles";
import {Chat} from "./Chat";
import {isHostSelector} from "../../../store/selectors";
import {InterviewPlan} from './InterviewPlan';

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState('chat');
  const isHostUser = useSelector(isHostSelector);
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={1}>
      <Tabs
        value={activeTab}
        onChange={(_, tab) => {
          setActiveTab(tab)
        }}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabsHeader}
        variant="fullWidth"
      >
        <Tab value='chat' className={classes.tabItem} icon={<Icon>chat</Icon>}/>
        {isHostUser && (
          <Tab value='list' className={classes.tabItem} icon={<Icon>timeline</Icon>}/>
        )}
        {/*<Tab value='users' className={classes.tabItem} icon={*/}
        {/*  <Badge*/}
        {/*    className={classes.badge}*/}
        {/*    badgeContent={participantsCount}*/}
        {/*  >*/}
        {/*    <Icon>people</Icon>*/}
        {/*  </Badge>*/}
        {/*}/>*/}
        {/*<Tab value='notes' className={classes.tabItem} icon={<Icon>notes</Icon>}/>*/}
      </Tabs>
      {activeTab === 'chat' && <Chat/>}
      {activeTab === 'plan' && isHostUser && <InterviewPlan/>}

      {/*{activeTab === 'users' && <ParticipantsList/>}*/}
      {/*{activeTab === 'notes' && <Notes/>}*/}
    </Paper>
  );
}
