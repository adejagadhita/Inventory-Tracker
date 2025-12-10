import { User } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full flex justify-end items-center p-4 bg-brand-dark">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
        <User className="text-black w-6 h-6" />
      </div>
    </div>
  );
};

export default TopBar;
