import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from './UserInfo';
import AddressInfo from './AddressInfo';
import ConfirmStep from './ConfirmStep';

// UserForm component manages the rendering of different steps in the multi-step form.
const UserForm = () => {
  // Retrieve the current step from the Redux store.
  const currentStep = useSelector((state) => state.step.currentStep);

  // Render different steps based on the current step.
  return (
    <div>
      {/* Display UserInfo component for step 1 */}
      {currentStep === 1 && <UserInfo />}

      {/* Display AddressInfo component for step 2 */}
      {currentStep === 2 && <AddressInfo />}

      {/* Display ConfirmStep component for step 3 */}
      {currentStep === 3 && <ConfirmStep />}
    </div>
  );
};

// Export the UserForm component.
export default UserForm;





