const reducerFn = (
  state = {
    activeStep: 1,
  },
  action
) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "CHANGE_PLAN":
      return {
        state,
        activeStep: 2,
      };
    default:
      break;
  }
  return state;
};

export default reducerFn;
