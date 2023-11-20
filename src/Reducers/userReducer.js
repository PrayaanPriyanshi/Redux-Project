// Define the initial state for the user reducer.
const initialState = {
  firstName: '', // User's first name
  lastName: '', // User's last name
  email: '', // User's email
  streetAddress: '', // User's street address
  city: '', // User's city
  state: '', // User's state
  zipCode: '', // User's zip code
  countryCode: '', // User's country code
  states: [], // Array to store fetched states
  cities: [], // Array to store fetched cities
  users: [], // Array to store saved users
};

// Define the user reducer function that handles state updates based on dispatched actions.
export default function userReducer(state = initialState, action) {
  // Use a switch statement to handle different action types.
  switch (action.type) {
    // Case for updating a specific user field.
    case 'UPDATE_USER_FIELD':
      // Update the state by creating a new object with the current state and the new field value.
      return { ...state, [action.field]: action.value };

    // Case for successful state fetch, updating the states array in the state.
    case 'FETCH_STATES_SUCCESS':
      return { ...state, states: action.states };

    // Case for successful city fetch, updating the cities array in the state.
    case 'FETCH_CITIES_SUCCESS':
      return { ...state, cities: action.cities };

    // Case for successful user save, adding the saved user to the users array in the state.
    case 'SAVE_USER_SUCCESS':
      return { ...state, users: [...state.users, action.savedUser] };

    // Case for handling errors during user save, logging the error to the console.
    case 'SAVE_USER_ERROR':
      console.error('Error saving user:', action.error);
      // Return the current state without modifications in case of an error.
      return state;

    // Default case, return the current state if the action type doesn't match any defined cases.
    default:
      return state;
  }
}


