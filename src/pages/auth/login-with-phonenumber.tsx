import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isPresentUser, setIsPresentUser] = useState(false);
  const [error, setError] = useState('');
  const { setToken } = useAuth(); // Use useAuth hook to set token

  const sendOtp = async () => {
    try {
      const response = await axios.get(`https://server.unboxedkart.com/auth/send-otp?phoneNumber=${phoneNumber}`);
      console.log(response);
      if (response.status === 200) {
        setIsOtpSent(true);
        setError('');
      } else {
        setError('Failed to send OTP');
      }
    } catch (err) {
      setError('Error sending OTP');
    }
  };

  const verifyLoggedInUserOtp = async () => {
    try {
      const response = await axios.post('https://server.unboxedkart.com/auth/login', {
        phoneNumber: parseInt(phoneNumber),
        otp: parseInt(otp),
      });
      console.log(response);
      if (response.status === 201) {
        setToken(response.data.token); // Set token using useAuth
        setError('');
        setIsOtpSent(true);
      } else {
        setError('Failed to send OTP');
      }
    } catch (err) {
      setError('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.get(`https://server.unboxedkart.com/auth/validate-otp?phoneNumber=${phoneNumber}&otp=${otp}`);
      console.log(response);
      if (response.status === 200) {
        if (response.data.message === 'User already exists with this mobile number.') {
          setError(response.data.content);
          setIsPresentUser(true);
          setIsOtpSent(false);
        } else {
          setToken(response.data.token); // Set token using useAuth
          setError('');
          setIsPresentUser(false);
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Error verifying OTP');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isPresentUser ? (
          <h2 className="text-2xl font-bold mb-6">{isOtpSent ? 'Enter OTP' : 'Login'}</h2>
        ) : (
          <h2 className="text-2xl font-bold mb-6">{isOtpSent ? 'Enter OTP' : 'Register'}</h2>
        )}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {!isOtpSent ? (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={!isPresentUser ? verifyOtp : verifyLoggedInUserOtp}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
