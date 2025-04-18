import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="rounded-full bg-black p-4">
        <div className="font-bold text-white text-xl flex items-center">
          <span className="text-[#FF7B00]">Е</span>
          <span className="text-[#FF7B00]">С</span>
          <span className="text-[#FFE600]">П</span>
        </div>
      </div>
      <div>
        <div className="font-extrabold text-[#FF7B00] text-xl">ГУБКИН</div>
        <div className="text-xs uppercase text-gray-600">Единая служба переездов</div>
      </div>
    </div>
  );
};

export default Logo;