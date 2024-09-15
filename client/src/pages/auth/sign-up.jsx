import React, { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography, Select, Option } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '@/assets/autumnal-composition-fresh-vegetables.jpg';
import axios from 'axios';

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    user_type: 'farmer',
    location: '',
    farming_practices: '',
    contact_info: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/agriculture/register`, formData);
      if (response.status === 201) {
        navigate('/dashboard'); 
      }
    } catch (error) {
      console.log("error",error)
      setError(error?.response?.data?.error || 'An error occurred during registration.');
    }
  };

  return (
    <section className="p-8 h-screen bg-[#387F39] flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img src={signup} className="h-full w-full object-cover rounded-3xl" alt="Sign Up" />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your details to register.
          </Typography>
        </div>
        {error && <Typography variant="small" color="red" className="mb-4">{error}</Typography>}
        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-4">
            <Input
              size="lg"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@mail.com"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              size="lg"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              size="lg"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              required
            />
          </div>
          <div className="mb-4">
            <Select
              label="User Type"
              name="user_type"
              value={formData.user_type}
              onChange={(value) => handleInputChange({ target: { name: 'user_type', value } })}
              required
            >
              <Option value="farmer">Farmer</Option>
              <Option value="retailer">Retailer</Option>
              <Option value="end_user">Customer</Option>
            </Select>
          </div>
          {formData.user_type === 'farmer' && (
            <div className="mb-4">
              <Input
                size="lg"
                name="farming_practices"
                value={formData.farming_practices}
                onChange={handleInputChange}
                placeholder="Farming Practices"
              />
            </div>
          )}
          <div className="mb-4">
            <Input
              size="lg"
              name="contact_info"
              value={formData.contact_info}
              onChange={handleInputChange}
              placeholder="Contact Info"
              required
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            required
          />
          <Button onClick={handleSubmit} type="submit" className="mt-6" fullWidth>
            Register Now
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?{' '}
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
