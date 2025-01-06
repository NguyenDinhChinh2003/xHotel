import RegisterComponents from "@/components/auth/RegisterComponents";
import SignUpComponents from "../../../components/auth/SignUpComponents";


export default function register() {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded-3xl w-[1256px] h-[800px] flex justify-between">
        <div className="w-[576px] h-[800px]">
          <div className="mt-20 ml-8">
            <RegisterComponents />
          </div>
        </div>
        <SignUpComponents />
      </div>
    </div>
  );
}
