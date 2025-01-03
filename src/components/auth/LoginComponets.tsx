import SignUpComponents from "./SignUpComponents";

export default function LoginComponets() {
  return (
    <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between ml-72 mt-20">
      <div className="w-[576px] h-[800px]">
        <div className="mt-20 ml-8">
          <p className="text-[32px] font-bold p-2">Đăng nhập</p>
          <div className="p-3">
            <p className="text-[16px] font-medium">
              Email/Số điện thoại
              <span className="text-red-500 text-sm">*</span>
            </p>
            <div className="mt-2">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md w-[480px]"
                placeholder="Nhập email hoặc số điện thoại"
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
          <div className="p-3 flex justify-between items-center w-[480px]">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="border border-spacing-10 rounded-md"
              />
              <span className="text-[16px] ml-1">Ghi nhớ tôi</span>
            </div>
            <div className="forgot">
              <a href="#" className="text-[14px] underline text-lime-700">
                Quên mật khẩu?
              </a>
            </div>
          </div>
          <button className="border border-lime-600 bg-lime-500 rounded-2xl w-[480px] ml-3 p-[4px]">
            Tiếp tục
          </button>
          <div className="text-[14px] text-center mt-2 w-[480px]">
            <p>Bạn mới biết đến Xhotel ?</p>
            <p>
              <a href="" className="underline text-lime-600 pr-1">
                Đăng ký
              </a>
              và nhận ưu đãi dành riêng cho Xmember
            </p>
          </div>
        </div>
      </div>
      <SignUpComponents />
    </div>
  );
}
