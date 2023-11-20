
// Action creator function to set the current step in the multi-step form.
// Takes a 'step' parameter representing the new current step.
export const setCurrentStep = (step) => {
  return { type: 'SET_CURRENT_STEP', step };
};

// Action creator function to set the previous step in the multi-step form.
// Does not require any parameters, as it simply indicates moving to the previous step.
export const setPreviousStep = () => {
  return { type: 'SET_PREVIOUS_STEP' };
};
