import SignUpComponents from "./SignUpComponents";

export default function RegisterComponents() {
  return (
    <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between ml-72 mt-20">
      <div className="w-[576px] h-[800px]">
        <div className="mt-20 ml-8">
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
            <div className="mt-2">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-[480px]"
                placeholder="Nhập họ và tên"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px] font-medium">
              Email
              <span className="text-red-500 text-sm ml-1">*</span>
            </p>
            <div className="mt-2">
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md w-[480px]"
                placeholder="Nhập email"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px] font-medium">
              Số điện thoại
              <span className="text-red-500 text-sm ml-1">*</span>
            </p>
            <div className="mt-2">
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md w-[480px]"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-[16px] font-medium">
              Mật khẩu <span className="text-red-500 text-sm">*</span>
            </p>
            <div className="mt-2">
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md w-[480px]"
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>
          <div className="p-3 flex justify-between items-center w-[480px] text-[12px] text-gray-400">
            Mật khẩu phải có ít nhất 8 ký tự không dấu gồm chữ cái in hoa, chữ
            cái thường, số và ký tự đặc biệt
          </div>
          <button className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]">
            Tiếp tục
          </button>
          <div className="text-[14px] text-center mt-2 w-[480px]">
            <p>Bằng việc đăng ký, bạn đã đồng ý với XHotel về</p>
            <p><a href="#" className="text-lime-800 underline">Điều khoản </a> & <a href="#" className="text-lime-800 underline">Chính sách</a> bảo mật</p>
          </div>
          <div className="text-[16px] text-center mt-6 w-[480px]">
          Bạn đã có tài khoản? <a href="" className="text-lime-800">Đăng nhập</a>
          </div>
        </div>
      </div>
      <SignUpComponents />
    </div>
  );
}
