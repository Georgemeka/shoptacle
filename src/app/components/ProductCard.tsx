import Image from "next/image";

//images
import Watch from "@/../public/watch.png";

export default function ProductCard() {
    return (
        <div className="relative w-[360px] mb-[102px] mt-[72px]">
            <Image src={Watch} alt="Watch" className="relative" />
            <div className="bg-[#FEE2E2] absolute -top-6 right-0 h-14 w-[92px] px-4 py-3">
                <p className="text-3xl">-16%</p>
            </div>
            <h3 className="text-center">2 in 1 Luxury Wristwatch</h3>
            <p className="text-center">Black</p>
            <h4 className="text-center">N13,500</h4>
            <button className=" flex mx-auto bg-[#FEE2E2] px-4 py-3 rounded-md mt-6 shadow-xl">
                Add to Cart
            </button>
        </div>
    );
}
