import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Changed to identifier
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log('Identifier (Email/Username):', identifier);
    // Simulate sending OTP
    setIsOtpSent(true);
    // Here you would typically call an API to send the OTP
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('OTP:', otp);
    // Here you would typically validate the OTP
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-pink-700 text-center">Login</h2>
        <form onSubmit={isOtpSent ? handleLogin : handleSendOtp}>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-pink-700 font-semibold mb-2">Email or Username:</label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {isOtpSent && (
            <>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-pink-700 font-semibold mb-2">Enter OTP:</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Login
              </button>
            </>
          )}
          {!isOtpSent && (
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Send OTP
            </button>
          )}
          <button className="mt-4 w-full text-center bg-pink-500 px-6 py-2 rounded-xl text-white" onClick={() => navigate('./signup')}>
            Don't have an account? Create one
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
