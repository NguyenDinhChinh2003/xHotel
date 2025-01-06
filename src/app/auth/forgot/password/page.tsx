'use client';

import React, { useState } from "react";
import Modal from "@/components/general/modal";
import SignUpComponents from "@/components/auth/SignUpComponents";

const ForgotPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let newPasswordError = "";
    let confirmPasswordError = "";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!newPassword) {
      newPasswordError = "Vui lòng nhập mật khẩu mới.";
    } else if (!passwordRegex.test(newPassword)) {
      newPasswordError = "Mật khẩu không đúng định dạng.";
    }

    if (!confirmPassword) {
      confirmPasswordError = "Vui lòng xác nhận mật khẩu.";
    } else if (confirmPassword !== newPassword) {
      confirmPasswordError = "Mật khẩu xác nhận không khớp.";
    }

    setErrors({ newPassword: newPasswordError, confirmPassword: confirmPasswordError });

    return !newPasswordError && !confirmPasswordError;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      // Handle password reset
      console.log("Mật khẩu mới:", newPassword);
      setShowModal(true); // Show modal on successful submission
    }
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    if (errors.newPassword) {
      setErrors({ ...errors, newPassword: "" });
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "" });
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
              <p className="text-[32px] font-bold p-2">Đặt lại mật khẩu mới</p>
              <div className="p-3">
                <p className="text-[16px] font-medium">
                  Mật khẩu mới
                  <span className="text-red-500 text-sm">*</span>
                </p>
                <div className="mt-2">
                  <input
                    type="password"
                    className={`border p-2 rounded-md w-[480px] ${
                      errors.newPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Nhập mật khẩu mới"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.newPassword}
                    </p>
                  )}
                </div>
              </div>
              <p className="pl-3 w-[480px] text-gray-400 text-[12px]">
                Mật khẩu phải có ít nhất 8 ký tự không dấu, gồm chữ cái in hoa, chữ cái thường, số và ký tự đặc biệt.
              </p>
              <div className="p-3">
                <p className="text-[16px] font-medium">
                  Xác nhận mật khẩu <span className="text-red-500 text-sm">*</span>
                </p>
                <div className="mt-2">
                  <input
                    type="password"
                    className={`border p-2 rounded-md w-[480px] ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Xác nhận mật khẩu"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]"
              >
                Tiếp tục
              </button>
              <div className="text-[14px] text-center mt-2 w-[480px]">
                <p>Bạn mới biết đến Xhotel?</p>
                <p>
                  <a
                    href="/auth/register"
                    className="underline text-lime-600 pr-1"
                  >
                    Đăng ký
                  </a>
                  và nhận ưu đãi dành riêng cho Xmember
                </p>
              </div>
            </form>
            <Modal showModal={showModal} handleClose={handleCloseModal}>
              <p className="text-[16px] font-medium">Mật khẩu đã được thay đổi thành công!</p>
            </Modal>
          </div>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
};

export default ForgotPassword;
