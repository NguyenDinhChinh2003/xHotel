'use client';

import React, { useState, useEffect } from "react";
import SignUpComponents from "./SignUpComponents";

const OtpComponents: React.FC = () => {
  const [otp, setOtp] = useState(Array(6).fill('')); // Array to store each digit of OTP
  const [timeLeft, setTimeLeft] = useState(120); // Thời gian bắt đầu: 120 giây
  const [error, setError] = useState('');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60); // Tính số phút
    const remainingSeconds = seconds % 60; // Tính số giây còn lại
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      // Handle form submission, e.g., send OTP to server for validation
      console.log('OTP submitted:', otpString);
    } else {
      setError('Mã OTP không hợp lệ.');
    }
  };

  return (
    <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
      <div className="w-[576px] h-[800px]">
        <form onSubmit={handleSubmit} className="mt-20 ml-8">
          <div className="mb-4 ml-3">
            <a href="/auth/register">
              <img src="/assets/Vector2.svg" alt="Back" />
            </a>
          </div>
          <p className="text-[32px] font-bold p-3">Nhập OTP</p>
          <p className="w-[480px] pl-3 text-[16px] text-gray-500">
            Vui lòng nhập mã OTP đã được gửi đến email
          </p>
          <p className="w-[480px] pl-3 text-[16px]">baongoc123@gmail.com</p>
          <div className="p-3 flex justify-between items-center w-[480px]">
            {otp.map((digit, index) => (
              <div key={index} className="w-[56px] h-[56px]">
                <input
                  type="text"
                  className="border border-gray-300 p-0 rounded-md w-[56px] h-[56px] text-center"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={1}
                />
              </div>
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-2 pl-3">{error}</p>}
          <div className="p-3 flex items-center w-[480px]">
            <p className="w-[380px] pl-3 text-[16px] text-gray-500">
              Gửi lại mã{" "}
              <span className="text-[16px] font-medium text-lime-700 p-2 w-[80px] text-center">
                ({formatTime(timeLeft)})
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]"
          >
            <a href="/auth/register/newPass">Tiếp tục</a>
          </button>
        </form>
      </div>
      <SignUpComponents />
    </div>
  );
};

export default OtpComponents;
