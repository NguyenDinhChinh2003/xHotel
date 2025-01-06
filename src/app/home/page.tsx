"use client";

import React, { useState } from "react";
import Login from "../auth/login/page";
import Register from "../auth/register/page";
import CarouselComponent from "@/components/general/carosel";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegiterModal, setShowRegisterModal] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowRegisterModal(false);
  };
  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegiterModal);
    setShowLoginModal(false);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className={`w-full h-full ${
          showLoginModal || showRegiterModal ? "blur-sm" : ""
        }`}
      >
        <div className="header w-full h-[56px] flex justify-end items-center p-4 border-b gap-8">
          {/* Language Selection */}
          <div className="language-selection">
            <select className="border p-2 rounded-md">
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          {/* App Title */}
          <div className="app-title">
            <h1 className="text-xl font-bold">My Application</h1>
          </div>

          {/* Menu */}
          <div className="menu relative">
            <button
              onClick={toggleMenu}
              className="underline"
              style={{ color: "#405F2D" }}
            >
              Tài khoản
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-[352px] h-[256px] bg-white border rounded-md shadow-lg">
                <p className="text-[16px] text-gray-500 ml-6 mt-5 mb-6">
                  Tài khoản
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={toggleLoginModal}
                    className="text-[16px] border rounded-full border-green-900 text-green-900 w-[144px] h-[44px]"
                  >
                    Đăng nhập
                  </button>
                  <button
                    onClick={toggleRegisterModal}
                    className="text-[16px] border rounded-full border-green-900 text-white w-[144px] h-[44px] bg-green-900"
                  >
                    Đăng ký
                  </button>
                </div>
                <div className="border border-gray-200 w-[86%] mt-6 ml-6"></div>
                <p className="text-gray-500 text-[16px] ml-6 mt-3 mb-4">
                  Chương trình XMember
                </p>
                <a href="" className="ml-6 mt-6 underline text-green-900">
                  Tham khảo quyền lợi
                </a>
                <span></span>
              </div>
            )}
          </div>
        </div>
        <div className="header-2 flex justify-center items-center w-full h-full">
          <div className="flex justify-between items-center w-[90%]">
            <div className="logo">
              <img src="/assets/Logo-2.svg" alt="" />
            </div>
            <ul className="flex justify-between items-center gap-8">
              <li className="border border-white w-[104px] h-[72px] flex justify-center items-center">
                <a href="#" className="">
                  XMember
                </a>
              </li>
              <li className="border border-white w-[154px] h-[72px] flex justify-center items-center">
                <a href="#">Phòng dài hạn</a>
              </li>
              <li className="border border-white w-[104px] h-[72px] flex justify-center items-center">
                <a href="#">Về X Hotel</a>
              </li>
              <li>
                <button
                  className="rounded-full border px-9 py-1.5 text-white"
                  style={{ backgroundColor: "#405F2D" }}
                >
                  Tìm phòng
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Main content */}
        <div className="w-full flex justify-center">
          <div className="w-[1240px] h-[110px] border border-gray-400 rounded-md flex justify-between">
            {/* location */}
            <div className="flex justify-start items-center gap-3 ml-4">
              <span>
                <img src="assets/Location.svg" alt="Location icon" />
              </span>
              <p>Chọn vị trí</p>
            </div>
            <div className="border-r border-gray-200 h-[50%] mt-7"></div>
            {/* time date */}
            <div className="flex justify-start items-center gap-3 relative">
              <p className="absolute text-[12px] text-gray-400 top-6">
                Nhận phòng
              </p>
              <div className="custom-date-input">
                <input type="date" />
              </div>
              <p className="absolute text-[12px] text-gray-400 top-6 right-20">
                Trả phòng
              </p>
              <div className="custom-date-input">
                <input type="date" />
              </div>
            </div>
            <div className="border-r border-gray-200 h-[50%] mt-7"></div>
            {/* person room */}
            <div className="flex justify-start items-center gap-3 ml-4">
              <span>
                <img src="assets/bed.svg" alt="Person icon" />
              </span>
              <p>Số khách & Phòng: 2 Người lớn • 0 Trẻ em</p>
            </div>
            <div className="border-r border-gray-200 h-[50%] mt-7"></div>
            {/* button search room */}
            <div className="flex justify-start items-center gap-3 mr-2">
              <button
                className="text-white py-2 px-6 rounded-full"
                style={{ backgroundColor: "#405F2D" }}
              >
                Tìm phòng
              </button>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && <Login />}
      {showRegiterModal && <Register />}
    </div>
  );
}
