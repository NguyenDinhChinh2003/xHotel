"use client";

import RegisterComponents from "@/components/auth/RegisterComponents";
import SignUpComponents from "../../../components/auth/SignUpComponents";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };

    if (formData.name.trim() === "") {
      errors.name = "Họ và tên không được để trống.";
      valid = false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Email không hợp lệ.";
      valid = false;
    }

    if (formData.phone.trim() === "") {
      errors.phone = "Số điện thoại không được để trống.";
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password = "Mật khẩu phải đúng định dạng.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission, e.g., send data to server
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
        <div className="w-[576px] h-[800px]">
          <form onSubmit={handleSubmit} className="mt-5 ml-8">
            <p className="text-[32px] font-bold p-2">Đăng ký tài khoản</p>
            <p className="w-[480px] pl-2 text-[16px] text-gray-500">
              Trở thành Xmember để nhận những ưu đãi đặc biệt chỉ dành riêng cho
              thành viên của Xhotel
            </p>
            <div className="p-3">
              <p className="text-[16px] font-medium">
                Họ và tên
                <span className="text-red-500 text-sm ml-1">*</span>
              </p>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 p-2 rounded-md w-[480px]"
                  placeholder="Nhập họ và tên"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="h-1 mt-1">
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
              </div>
            </div>
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
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="h-1 mt-1">
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="text-[16px] font-medium">
                Số điện thoại
                <span className="text-red-500 text-sm ml-1">*</span>
              </p>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  className="border border-gray-300 p-2 rounded-md w-[480px]"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="h-1 mt-1">
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="text-[16px] font-medium">
                Mật khẩu <span className="text-red-500 text-sm">*</span>
              </p>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  className="border border-gray-300 p-2 rounded-md w-[480px]"
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="h-1 mt-1">
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3 flex justify-between items-center w-[480px] text-[12px] text-gray-400">
              Mật khẩu phải có ít nhất 8 ký tự không dấu gồm chữ cái in hoa, chữ
              cái thường, số và ký tự đặc biệt
            </div>
            <button
              type="submit"
              className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-3"
            >
              <a href="/auth/register/otp">Tiếp tục</a>
            </button>
            <div className="text-[14px] text-center mt-2 w-[480px]">
              <p>Bằng việc đăng ký, bạn đã đồng ý với XHotel về</p>
              <p>
                <a href="#" className="text-lime-800 underline">
                  Điều khoản
                </a>
                &
                <a href="#" className="text-lime-800 underline">
                  Chính sách
                </a>{" "}
                bảo mật
              </p>
            </div>
            <div className="text-[16px] text-center mt-6 w-[480px]">
              Bạn đã có tài khoản?{" "}
              <a href="/auth/login" className="text-lime-800">
                Đăng nhập
              </a>
            </div>
          </form>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
};

export default Register;
