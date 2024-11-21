import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to handle errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Basic form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Here, you would call a mock API or handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username} // Value is controlled by state
          onChange={handleInputChange} // Handle input change
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} // Value is controlled by state
          onChange={handleInputChange} // Handle input change
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password} // Value is controlled by state
          onChange={handleInputChange} // Handle input change
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
