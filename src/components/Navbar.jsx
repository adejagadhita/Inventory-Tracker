import Logo from "../assets/Screenshot_2025-12-02_143819-removebg-preview.png";


export default function Navbar() {
    return (
        <div className="h-15 w-screen bg-[#103A3C]">
            <ul>
                <li>
                    <img className="h-15 ml-3 " src={Logo} alt="Logo" />
                </li>
            </ul>
        </div>
    )
}