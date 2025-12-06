import DashboardIcon from "../assets/Overview.png";
import InventoryIcon from "../assets/Overview (1).png";
import SalesIcon from "../assets/Overview (2).png";
import UsersIcon from "../assets/Overview (3).png";

export default function Sidebar() {
    return (
        <div className="h-screen w-50 bg-[#103A3C]">
        <div className="ml-5 pt-5">
            <ul className="space-y-5">
                <li>
                    <a href="" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition">
                   <img src={DashboardIcon} alt="Dashboard Icon" className="h-6 w-6"/>
                   <span className="text-white text-xl"> Dashboard</span>
                   </a>
                </li>

                 <li>
                    <a href="" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition">
                   <img src={InventoryIcon} alt="Dashboard Icon" className="h-6 w-6"/>
                   <span className="text-white text-xl"> Inventory</span>
                   </a>
                </li>

                 <li>
                    <a href="" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition">
                   <img src={SalesIcon} alt="Dashboard Icon" className="h-6 w-6"/>
                   <span className="text-white text-xl"> Sales</span>
                   </a>
                </li>

                 <li>
                    <a href="" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition">
                   <img src={UsersIcon} alt="Dashboard Icon" className="h-6 w-6"/>
                   <span className="text-white text-xl"> Users</span>
                   </a>
                </li>
                
            </ul>
        </div>
        </div>
    );
}
