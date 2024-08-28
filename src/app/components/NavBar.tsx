import Image from "next/image";

//Images
import Search from "@/app/../../public/search.png";
import User from "@/app/../../public/user.png";
import Group from "@/app/../../public/Group.png";

export default function NavBar() {
    return (
        <div className="flex px-32 justify-between items-center py-7 bg-amber-700 ">
            <h2 className="mr-[181px] text-black text-5xl font-bold italic ">
                Shoptacle
            </h2>
            <ul className="flex gap-[77px] mr-[120px] text-xl font-semibold ">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="flex gap-11">
                <Image src={Search} alt="Search Button" className="h-7 w-7" />
                <Image src={User} alt="User Button" className="h-7 w-7" />
                <Image src={Group} alt="Group Button" className="h-7 w-7" />
            </div>
        </div>
    );
}
