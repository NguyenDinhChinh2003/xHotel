export default function SignUpComponents() {
  return (
    <div
      className="bg-cover bg-center w-[680px] h-[800px] rounded-r-3xl relative"
      style={{
        backgroundImage: "url('/assets/Rectangle_5.png')",
      }}
    >
      <div
        className="bg-cover w-[238.5px] h-[68px] absolute right-16 top-28"
        style={{ backgroundImage: "url('/assets/Logo.svg')" }}
      ></div>
      <div
        className="h-[32px] w-[32px] bg-gray-300 rounded-full absolute right-8 top-8 flex justify-center items-center"
        style={{ cursor: "pointer" }}
      >
        <img src="/assets/Vector.svg" className="mr-0.1" alt="" />
      </div>
    </div>
  );
}
