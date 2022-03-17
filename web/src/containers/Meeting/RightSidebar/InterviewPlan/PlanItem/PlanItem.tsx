import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import {useDispatch} from "react-redux";
import {Rating} from "@material-ui/lab";
import {
  deleteInterviewStepThunk,
  setCodeShareTabContentThunk,
  setInterviewStepScoreThunk
} from "../../../../../store/thunks";
import {useStyles} from "./styles";

type PlanItemProps = {
  index: number;
  title: string;
  description?: string;
  duration?: string;
  score: number;
};

const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon/>,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon/>,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon/>,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon/>,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon/>,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: any) {
  const {value, ...other} = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export function PlanItem(props: PlanItemProps) {
  const dispatch = useDispatch();
  const classes = useStyles({score: props.score});

  const onDeleteClick = () => {
    dispatch(deleteInterviewStepThunk(props.index));
  }

  const onChangeRating = (_: any, value: number | null) => {
    dispatch(
      setInterviewStepScoreThunk(props.index, value as number)
    );
  };

  const onDropCodeClick = () => {
    dispatch(
      setCodeShareTabContentThunk({
        tabIndex: 0,
        code: props.description || ''
      })
    )
  };

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.itemText}>
          <span className={classes.durationTitle}>
            <Icon className={classes.durationIcon}>schedule</Icon> {props.duration}
          </span>
          <span>
            {props.title}
          </span>
        </div>
        <div className={classes.actions}>
          <Rating
            name={props.index + ''}
            value={props.score}
            getLabelText={(value: number) => customIcons[value].label}
            IconContainerComponent={IconContainer}
            onChange={onChangeRating}
          />

          {props.description && (
            <IconButton size="small" onClick={onDropCodeClick}>
              <Icon>code</Icon>
            </IconButton>
          )}
          <IconButton size="small" onClick={onDeleteClick}>
            <Icon>close</Icon>
          </IconButton>
        </div>
      </div>
      {props.description && (
        <pre className={classes.descriptionBox}>
          {props.description}
        </pre>
      )}
    </div>
  );
}
