import Sidebar from "../components/Sidebar.jsx";
import Table from "../components/Table.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Dasboard() {
    return (
        <div className="bg-[#0F282A]">
             <div>
                <Navbar />
            </div>
            <div className="flex">
            <Sidebar />
            <div className="flex-1 ">
             <div className="grid grid-cols-3 gap-x-2 gap-y-8 p-5 ">
                <div className="h-40 w-70 bg-[#0F583E] flex items-center justify-center text-white rounded-lg">
                    New Orders
                </div>
                 <div className="h-40 w-70 bg-[#0F583E] flex items-center justify-center text-white rounded-lg">
                    New Orders
                </div>
                 <div className="h-40 w-70 bg-[#0F583E] flex items-center justify-center text-white rounded-lg">
                    New Orders
                </div>

                 <div className="h-40 w-70 bg-[#0F583E] flex items-center justify-center text-white rounded-lg">
                    New Orders
                </div>

                 <div className="h-40 w-70 bg-[#0F583E] flex items-center justify-center text-white rounded-lg">
                    New Orders
                </div>
            </div>
            </div>

            </div>

          

           
        </div>
    )
}