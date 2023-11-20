// Define the initial state for the step reducer.
const initialState = {
  currentStep: 1, // The initial step is set to 1.
};

// Define the step reducer function that handles state updates based on dispatched actions.
export default function stepReducer(state = initialState, action) {
  // Use a switch statement to handle different action types.
  switch (action.type) {
    // Case for setting the current step to a specific step.
    case 'SET_CURRENT_STEP':
      // Update the state by creating a new object with the current state and the new current step.
      return { ...state, currentStep: action.step };

    // Case for setting the current step to the previous step.
    case 'SET_PREVIOUS_STEP':
      // Set the current step to the previous step (assuming steps are numbered consecutively).
      return { ...state, currentStep: state.currentStep - 1 };

    // Default case, return the current state if the action type doesn't match.
    default:
      return state;
  }
}





// const initialState = {
//   currentStep: 1,
// };

// export default function stepReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_CURRENT_STEP':
//       return { ...state, currentStep: action.step };
//     case 'SET_PREVIOUS_STEP':
//       // Set the current step to the previous step (assuming steps are numbered consecutively)
//       return { ...state, currentStep: state.currentStep - 1 };
//     default:
//       return state;
//   }
// }
