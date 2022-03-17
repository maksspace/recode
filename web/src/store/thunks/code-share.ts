import {Dispatch} from "redux";
import {socket, SocketEvent} from "../../socket";
import {ActionTypes} from "../types";

export const setCodeShareThemeThunk = (theme: string) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SetCodeShareTheme,
    theme
  });
};

export const setCodeShareFontSizeThunk = (size: string) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SetCodeShareFontSize,
    size
  });
};

export const setCodeShareAutocompleteThunk = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SetCodeShareAutocomplete,
    value
  });
};

export const setCodeShareLanguageThunk = (language: string) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.SetCodeShareLanguage, {language});
  dispatch({
    type: ActionTypes.SetCodeShareLanguage,
    language
  });
};

export const setCodeShareTabContentThunk = (data: {
  code: string;
  tabIndex: number;
}) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.SetCodeShareTabContent, data);
  dispatch({
    type: ActionTypes.SetCodeShareTabContent,
    data
  });
};

export const setCodeShareCursorThunk = (data: any) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.SetCodeShareCursor, data);
  dispatch({
    type: ActionTypes.SetCodeShareCursor,
    data
  });
};

export const setCodeShareSelectionThunk = (data: any) => (dispatch: Dispatch) => {
  socket.emit(SocketEvent.SetCodeShareSelection, data);
  dispatch({
    type: ActionTypes.SetCodeShareSelection,
    data
  });
};
