import * as fromActions from '../actions/actions';

const initialState = {
      comments: [],
      authors: []
}

export function reducers(state = initialState, action) {
  switch (action.type) {

    case fromActions.SET_STATE: {
      return state = {
        ...state,
        comments: action.payload.comments,
        authors: action.payload.authors
      }
    }

    case fromActions.GET_STATE: {
      return state;
    }

    case fromActions.ADD_COMMENT: {
      console.log('Adding: ', action.payload)
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    }

    case fromActions.DELETE_COMMENT: {
      console.log('Deleting: ', action.payload)
      return state = {
        ...state,
        comments: state.comments.filter(comment => {
          return comment.id !== action.payload
        })
    }
    }

    default: return state;
  }
}