import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserField, fetchStates, fetchCities, saveUserInformation } from '../Actions/userAction';
import { setPreviousStep, setCurrentStep } from '../Actions/stepAction';
import axios from 'axios';
import { FaUserAlt } from 'react-icons/fa';

// AddressInformationStep component for the address information step in the multi-step form.
const AddressInformationStep = () => {
  // State variables to manage data, countries, states, cities, and validation messages.
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [validationMessages, setValidationMessages] = useState({
    country: '',
    state: '',
    city: '',
    streetAddress: '',
    zipCode: '',
  });

  // Redux hooks to dispatch actions and retrieve user data from the store.
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Handler for the "Next" button click, includes validation logic for each field.
  const handleNext = async () => {
    // Validation logic for each field
    if (!selectedCountry) {
      setValidationMessages({ ...validationMessages, country: 'Please select a country.' });
      return;
    }

    if (!selectedState) {
      setValidationMessages({ ...validationMessages, state: 'Please select a state.' });
      return;
    }

    if (!user.city) {
      setValidationMessages({ ...validationMessages, city: 'Please select a city.' });
      return;
    }

    if (!user.streetAddress) {
      setValidationMessages({ ...validationMessages, streetAddress: 'Please enter a street address.' });
      return;
    }

    if (!user.zipCode) {
      setValidationMessages({ ...validationMessages, zipCode: 'Please enter a zip code.' });
      return;
    }

    // If no validation errors, proceed to the next step
    await dispatch(saveUserInformation(user)); // Assuming you want to save user information here

    dispatch(updateUserField('state', selectedState));

    dispatch(setCurrentStep(3));
  };

  // Handler for the "Previous" button click.
  const handlePrevious = () => {
    // Implement logic to go back to the previous step
    dispatch(setPreviousStep());
  };

  // Fetch countries on component mount.
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json');
        const data = response.data;
        const uniqueCountries = [...new Set(data.map(item => item.country))];
        uniqueCountries.sort();
        setCountries(uniqueCountries);
        setData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Update states based on the selected country.
  useEffect(() => {
    if (selectedCountry) {
      const filteredStates = [...new Set(data.filter(item => item.country === selectedCountry).map(item => item.subcountry))];
      setStates(filteredStates);
      setSelectedState('');
    } else {
      setStates([]);
    }
  }, [selectedCountry, data]);

  // Fetch cities based on the selected state.
  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedCountry, selectedState));
    }
  }, [selectedState, selectedCountry, dispatch]);

  // Ensure cities are properly loaded based on the selected country and state.
  useEffect(() => {
    if (selectedCountry && selectedState) {
      const filteredCities = data.filter(item => item.country === selectedCountry && item.subcountry === selectedState);
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedState, data]);

  // Handler for the country selection change.
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setValidationMessages({ ...validationMessages, country: '' });
  };

  // Handler for the state selection change.
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setValidationMessages({ ...validationMessages, state: '' });
  };

  // Handler for the city selection change.
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    dispatch(updateUserField('city', selectedCity));
    setValidationMessages({ ...validationMessages, city: '' });
  };

  // Handler for the street address input change.
  const handleStreetAddressChange = (e) => {
    const streetAddress = e.target.value;
    dispatch(updateUserField('streetAddress', streetAddress));
    setValidationMessages({ ...validationMessages, streetAddress: '' });
  };

  // Handler for the zip code input change.
  const handleZipCodeChange = (e) => {
    const zipCode = e.target.value;
    dispatch(updateUserField('zipCode', zipCode));
    setValidationMessages({ ...validationMessages, zipCode: '' });
  };

  // Render the component structure.
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/ae/48/66/ae4866824012b855e82a358960c1d0d6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold mb-4 text-center">Multi-Step Form Wizard</h1>
      <div className="my-8 mx-auto max-w-md p-8 bg-white rounded-lg shadow-md border border-solid border-blue-500">
        <h2 className="flex items-center text-2xl font-bold mb-4 text-blue-500">
          <FaUserAlt className="text-3xl mr-2" />
          Address Information
        </h2>


        {/* User Information Form */}
        <form>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600">Country:</label>
            <select
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">Select Country</option>
              {countries.map(item => <option key={item}>{item}</option>)}
            </select>
            {validationMessages.country && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.country}</div>
            )}
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600">State:</label>
            <select
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleStateChange}
              value={selectedState}
            >
              <option value="">Select State</option>
              {states.map(item => <option key={item}>{item}</option>)}
            </select>
            {validationMessages.state && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.state}</div>
            )}
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600">City:</label>
            <select
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleCityChange}
              value={user.city}
            >
              <option value="">Select City</option>
              {cities.map(item => <option key={item.name}>{item.name}</option>)}
            </select>
            {validationMessages.city && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.city}</div>
            )}
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600">Street Address:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleStreetAddressChange}
              value={user.streetAddress}
            />
            {validationMessages.streetAddress && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.streetAddress}</div>
            )}
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600">Zip Code:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleZipCodeChange}
              value={user.zipCode}
            />
            {validationMessages.zipCode && (
              <div className="text-red-500 text-sm mt-1">{validationMessages.zipCode}</div>
            )}
          </div>
        </form>

        {/* Navigation buttons */}
        <div className="flex">
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the AddressInformationStep component.
export default AddressInformationStep;


















