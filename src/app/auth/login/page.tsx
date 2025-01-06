"use client";
import React, { useState } from "react";
import Modal from "../../../components/general/modal";
import SignUpComponents from "../../../components/auth/SignUpComponents";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ emailOrPhone: "", password: "" });
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let emailOrPhoneError = "";
    let passwordError = "";

    if (!emailOrPhone) {
      emailOrPhoneError = "Vui lòng nhập email hoặc số điện thoại.";
    }

    if (!password) {
      passwordError = "Vui lòng nhập mật khẩu.";
    }

    setErrors({ emailOrPhone: emailOrPhoneError, password: passwordError });

    return !emailOrPhoneError && !passwordError;
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      // Xử lý đăng nhập
      console.log("Email/Số điện thoại:", emailOrPhone);
      console.log("Mật khẩu:", password);
      console.log("Ghi nhớ tôi:", rememberMe);
      setShowModal(true); // Hiển thị modal khi đăng nhập thành công
    }
  };

  const handleEmailOrPhoneChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailOrPhone(e.target.value);
    if (errors.emailOrPhone) {
      setErrors({ ...errors, emailOrPhone: "" });
    }
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: "" });
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
              <p className="text-[32px] font-bold p-2">Đăng nhập</p>
              <div className="p-3">
                <p className="text-[16px] font-medium">
                  Email/Số điện thoại
                  <span className="text-red-500 text-sm">*</span>
                </p>
                <div className="mt-2">
                  <input
                    type="text"
                    className={`border p-2 rounded-md w-[480px] ${
                      errors.emailOrPhone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Nhập email hoặc số điện thoại"
                    value={emailOrPhone}
                    onChange={handleEmailOrPhoneChange}
                  />
                  {errors.emailOrPhone && (
                    <p className="text-red-500 text-sm">
                      {errors.emailOrPhone}
                    </p>
                  )}
                </div>
              </div>
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
              <div className="p-3 flex justify-between items-center w-[480px]">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="border border-spacing-10 rounded-md"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-[16px] ml-1">Ghi nhớ tôi</span>
                </div>
                <div className="forgot">
                  <a href="#" className="text-[14px] underline text-lime-700">
                    Quên mật khẩu?
                  </a>
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
              <p className="text-[16px] font-medium">Đăng nhập thành công!</p>
            </Modal>
          </div>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
}
