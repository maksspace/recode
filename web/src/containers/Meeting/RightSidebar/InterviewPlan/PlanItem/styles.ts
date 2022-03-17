import {makeStyles} from "@material-ui/core/styles";

function getColorByScore(score: number) {
  if (score >= 3) {
    return 'rgba(11, 156, 49, 0.1)';
  } else if (score > 0 && score < 3) {
    return 'rgba(255, 0, 0, 0.05)';
  } else {
    return 'rgba(255, 255, 255, 0.05)';
  }
}

export const useStyles = makeStyles((theme) => ({
  root: ({score}: any) => ({
    display: 'flex',
    background: getColorByScore(score),
    marginBottom: 2,
    flexDirection: 'column'
  }),
  head: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13
  },
  durationTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    marginBottom: 2
  },
  durationIcon: {
    fontSize: 20,
    marginRight: 4
  },
  mdPreview: {
    margin: '8px 12px 8px 0',
    color: 'black'
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  descriptionBox: {
    margin: 0,
    padding: '4px 4px 4px 8px',
    background: 'rgba(0, 0, 0, 0.35)',
    fontSize: 12
  }
}));
