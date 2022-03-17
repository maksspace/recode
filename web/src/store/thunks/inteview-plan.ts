import {Dispatch} from "redux";
import {socket, SocketEvent} from "../../socket";
import {ActionTypes} from "../types";

export const addInterviewPlanThunk = (data: any) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.AddInterviewPlanStep, data);
  dispatch({
    type: ActionTypes.AddInterviewPlanStep,
    data
  });
};

export const setInterviewStepScoreThunk = (index: number, score: number) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.SetInterviewStepScore, {index, score});
  dispatch({
    type: ActionTypes.SetInterviewStepScore,
    data: {index, score}
  });
};

export const deleteInterviewStepThunk = (index: number) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.DeleteInterviewStep, {index});
  dispatch({
    type: ActionTypes.DeleteInterviewStep,
    data: {index}
  });
};
