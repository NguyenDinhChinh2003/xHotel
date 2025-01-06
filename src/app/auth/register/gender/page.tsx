"use client";

import SignUpComponents from "@/components/auth/SignUpComponents";
import React, { useState } from "react";

const Gender: React.FC = () => {
  const [formData, setFormData] = useState({ gender: "", name: "" });
  const [errors, setErrors] = useState({ name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
    setErrors({ name: "" });
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name.trim() === "") {
      setErrors({ name: "Họ và tên không được để trống." });
    } else if (formData.gender === "") {
      alert("Vui lòng chọn giới tính.");
    } else {
      console.log("Form data submitted:", formData);
      // Proceed with form submission logic
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
        <div className="w-[576px] h-[800px]">
          <form onSubmit={handleSubmit} className="mt-20 ml-8">
            <div className="mb-4 ml-3">
              <a href="/auth/register">
                <img src="/assets/Vector2.svg" alt="Back" />
              </a>
            </div>
            <p className="p-3 font-bold text-[32px]">
              Chúng tôi có thể gọi bạn là gì?
            </p>
            <div className="w-[480px] h-[44px] flex justify-between">
              {["Mr.", "Mrs.", "Ms.", "Other"].map((gender) => (
                <p
                  key={gender}
                  className={`w-[103px] h-[48px] text-center pt-3 border rounded-full border-black hover:border-green-700 hover:bg-green-100 hover:text-green-700 hover:cursor-pointer ${
                    formData.gender === gender
                      ? "border-green-700 bg-green-100 text-green-700"
                      : "border-black"
                  }`}
                  onClick={() => handleGenderSelect(gender)}
                >
                  {gender}
                </p>
              ))}
            </div>
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
                <div className="h-1 mt-1 mb-3">
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]"
            >
              <a href="/auth/login/phone">Đi đến tài khoản</a>
            </button>
          </form>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
};

export default Gender;
