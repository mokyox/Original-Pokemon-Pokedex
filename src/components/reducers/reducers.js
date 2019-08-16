import { CHANGE_SEARCHFIELD } from "../constants";

const initialState = {
  searchField: ""
};

export const searchPokemon = (state = initialState, action = {}) => {
  //action.type comes from our action.js, setSearchField function
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    //or a cleaner way: return {...state, searchField: action.payload}
    default:
      return state;
  }
};
