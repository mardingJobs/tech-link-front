import React, { useState } from 'react';
import { Phone, User2, ChevronDown, ArrowRight } from 'lucide-react';
import type { LoginFormData } from '../types/auth';

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    phoneNumber: '',
    verificationCode: '',
    userType: 'customer',
    agreesToTerms: false
  });

  const handleSendCode = () => {
    console.log('Sending verification code to:', formData.phoneNumber);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login / Register</h2>
        <p className="text-gray-600">Welcome to our freelance platform</p>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          className={`flex-1 py-3 px-4 rounded-lg border transition-all ${
            formData.userType === 'customer'
              ? 'border-teal-500 bg-teal-50 text-teal-600'
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, userType: 'customer' }))}
          type="button"
        >
          <div className="flex items-center justify-center gap-2">
            <User2 size={20} />
            <span>I am a customer</span>
          </div>
        </button>
        <button
          className={`flex-1 py-3 px-4 rounded-lg border transition-all ${
            formData.userType === 'engineer'
              ? 'border-teal-500 bg-teal-50 text-teal-600'
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, userType: 'engineer' }))}
          type="button"
        >
          <div className="flex items-center justify-center gap-2">
            <User2 size={20} />
            <span>I am an engineer</span>
          </div>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center border rounded-lg p-3 focus-within:border-teal-500 transition-colors">
            <div className="flex items-center gap-2 pr-3 border-r">
              <Phone size={20} className="text-gray-400" />
              <span className="text-gray-600">+86</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <input
              type="tel"
              className="flex-1 ml-3 outline-none"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full p-3 border rounded-lg outline-none focus:border-teal-500 transition-colors"
                placeholder="Verification code"
                value={formData.verificationCode}
                onChange={(e) => setFormData(prev => ({ ...prev, verificationCode: e.target.value }))}
              />
            </div>
            <button
              type="button"
              onClick={handleSendCode}
              className="whitespace-nowrap px-4 py-3 text-teal-500 hover:text-teal-600 transition-colors"
            >
              Get code
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!formData.agreesToTerms}
          className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Login / Register</span>
          <ArrowRight size={20} />
        </button>

        <div className="mt-4 flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1"
            checked={formData.agreesToTerms}
            onChange={(e) => setFormData(prev => ({ ...prev, agreesToTerms: e.target.checked }))}
          />
          <label htmlFor="terms" className="text-sm text-gray-500">
            Login means you agree to the <a href="#" className="text-teal-600 hover:underline">User Agreement</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Agreement</a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;