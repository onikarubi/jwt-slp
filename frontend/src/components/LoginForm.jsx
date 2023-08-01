import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('test')

  const handleSubmit = (event) => {
    event.preventDefault();
    // ここで認証処理を行います
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Login</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Enter your credentials to access your account.</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" onSubmit={handleSubmit}>
                <div className="relative">
                  <input autoComplete="off" id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm light:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input autoComplete="off" id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm light:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" name="remember" className="rounded border-gray-300 text-rose-600" />
                  <label htmlFor="remember" className="text-sm text-gray-900">Remember me</label>
                </div>
                <button type="submit" className="mt-3 w-full bg-blue-500 text-white p-2 rounded-lg">Login</button>
              </form>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600">Sign up!</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
