import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./styles";
import {useSelector} from "react-redux";
import {
  interviewPlanStepsSelector,
  interviewPlanTotalDurationSelector,
  interviewStepsAvgScoreSelector
} from "../../../../store/selectors";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Icon from "@material-ui/core/Icon";
import {AddPlanStepDialog} from "./AddPlanStepDialog";
import IconButton from "@material-ui/core/IconButton";
import {PlanItem} from "./PlanItem";

export function InterviewPlan() {
  const [stepDialog, setStepDialog] = useState(false);
  const steps = useSelector(interviewPlanStepsSelector);
  const totalDuration = useSelector(interviewPlanTotalDurationSelector);
  const avgScore = useSelector(interviewStepsAvgScoreSelector);
  const classes = useStyles();

  const onAddItem = () => {
    setStepDialog(true);
  };

  return (
    <>
      <AddPlanStepDialog dialog={stepDialog} onClose={() => setStepDialog(false)}/>
      <Paper className={classes.root}>
        <List className={classes.list} subheader={
          <ListSubheader component="div" className={classes.header}>
            Total - {totalDuration}, Score - {avgScore}
            <div style={{flex: 1}}></div>
            <IconButton onClick={onAddItem}>
              <Icon>add</Icon>
            </IconButton>
          </ListSubheader>
        }>
          {steps.map((item, index) => (
            <PlanItem
              index={index}
              key={index}
              title={item.title}
              description={item.description}
              duration={item.duration}
              score={item.score}
            />
          ))}
        </List>
      </Paper>
    </>
  );
}
