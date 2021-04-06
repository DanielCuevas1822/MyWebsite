import { ACTION_LIKE } from "../actions/proyectsActions";

const proyects_reducer = (state, action) => {
  switch (action.type) {
    case ACTION_LIKE: {
      return {
        ...state,
        proyects: state.proyects.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              like: !item.like,
              likes: !item.like ? item.likes + 1 : item.likes - 1,
            };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export default proyects_reducer;
