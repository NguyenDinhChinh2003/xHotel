"use client";

import SignUpComponents from "@/components/auth/SignUpComponents";
import React, { useState } from "react";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ password: "" });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors({ password: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái in hoa, chữ cái thường, số và ký tự đặc biệt." });
      return false;
    }
    setErrors({ password: "" });
    return true;
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validatePassword()) {
      // Handle form submission, e.g., send data to server
      console.log("Form submitted with password:", password);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
        <div className="w-[576px] h-[800px]">
          <form onSubmit={handleSubmit} className="mt-20 ml-8">
            <div className="mb-4 ml-3">
              <a href="/auth/register/otp">
                <img src="/assets/Vector2.svg" alt="Back" />
              </a>
            </div>
            <p className="text-[32px] font-bold p-3">Tạo mật khẩu của bạn</p>
            <div className="p-3">
              <p className="text-[16px] font-medium">
                Mật khẩu <span className="text-red-500 text-sm">*</span>
              </p>
              <div className="mt-2">
                <input
                  type="password"
                  className={`border p-2 rounded-md w-[480px] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            <p className="p-3 w-[480px] text-gray-400 text-[12px]">
            Mật khẩu phải có ít nhất 8 ký tự không dấu gồm chữ cái in hoa, chữ cái thường, số và ký tự đặc biệt
            </p>

            <button
              type="submit"
              className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]"
            >
              <a href="/auth/register/gender">Tiếp tục</a>
            </button>
          </form>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
};

export default NewPassword;
