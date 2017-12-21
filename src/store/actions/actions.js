export const SET_STATE = 'SET_STATE';
export const GET_STATE = 'GET_STATE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function setState(data) {
  return {
    type: SET_STATE,
    payload: data
  }
}

export function getState() {
  return {
    type: GET_STATE
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    payload: id
  }
}