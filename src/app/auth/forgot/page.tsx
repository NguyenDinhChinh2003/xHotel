"use client";

import React, { useState } from "react";
import Modal from "@/components/general/modal";
import SignUpComponents from "@/components/auth/SignUpComponents";

const ForgotEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let emailError = "";

    if (!email) {
      emailError = "Vui lòng nhập email.";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      emailError = "Email không hợp lệ.";
    }
    if (email !== "chinh@gmail.com") {
      emailError = "Không tìm thấy email đăng ký.";
    }

    setErrors({ email: emailError });

    return !emailError;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Email:", email);
      setShowModal(true); // Show modal on successful submission
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
        <div className="w-[576px] h-[800px]">
          <div className="mt-20 ml-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 ml-3">
                <a href="/auth/login">
                  <img src="/assets/Vector2.svg" alt="Back" />
                </a>
              </div>
              <p className="text-[32px] font-bold p-2">Quên mật khẩu</p>
              <div className="p-3">
                <p className="text-[16px] font-medium">
                  Email
                  <span className="text-red-500 text-sm ml-1">*</span>
                </p>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    className="border border-gray-300 p-2 rounded-md w-[480px]"
                    placeholder="Nhập email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <p className="p-1 w-[480px] text-gray-400 text-[12px]">
                    Vui lòng sử dụng email đã đăng ký với Xhotel để nhận OTP
                  </p>
                  <div className="h-1 mt-1 mb-2">
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]"
              >
                <a href="/auth/forgot/password">Tiếp tục</a>
              </button>
            </form>
          </div>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
};

export default ForgotEmail;
