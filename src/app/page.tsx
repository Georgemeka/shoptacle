import Image from "next/image";
import NavBar from "./components/NavBar";

import Hero from "@/../public/hero.png";
import ProductCard from "./components/ProductCard";

import Watch from "@/../public/watch.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col  justify-between ">
            <NavBar />

            <div className="relative">
                <Image
                    src={Hero}
                    alt="Hero Image"
                    className="relative w-full"
                />
                <div className="absolute top-40  ml-[910px] ">
                    <h2 className=" text-white text-6xl leading-tight text-center ">
                        Quality never goes <br /> <span>out of style</span>
                    </h2>
                    <button className="flex  text-white text-5xl mt-28 px-5 py-5 mx-auto bg-transparent outline-offset-2 border border-white rounded-md">
                        Shop
                    </button>
                </div>
            </div>

            <div className="mx-32">
                <h2 className="mt-12 text-center text-4xl">Flash Sales</h2>
                <div>
                    <div className="flex justify-between">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="flex justify-between">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>

            <div className="mx-32">
                <h2 className="mt-12 text-center text-4xl">Flash Sales</h2>
                <div>
                    <div className="flex justify-between">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>

            <div className="w-[1512px] h-fit bg-[#F8F1FE]">
                <div className="mt-12 ml-32 flex items-center mb-24">
                    <Image src={Watch} alt="Product Image" />
                    <div className="mx-auto  justify-center text-center ml-32">
                        <h3 className="text-3xl mb-7">Stunning party dress</h3>
                        <h2 className="mb-8 text-5xl">Elegance and Poise</h2>
                        <h3 className="text-3xl">Explore</h3>
                    </div>
                </div>

                <div className="mt-12 ml-32 flex items-center mb-24 mr-32">
                    <div className="mx-auto  justify-center text-center ">
                        <h3 className="text-3xl mb-7">Men Black Suit</h3>
                        <h2 className="mb-8 text-5xl">Black is Prestigious</h2>
                        <h3 className="text-3xl">Explore</h3>
                    </div>
                    <Image src={Watch} alt="Product Image" className="ml-32" />
                </div>

                <div className="mt-12 ml-32 flex items-center mb-24">
                    <Image src={Watch} alt="Product Image" />
                    <div className="mx-auto  justify-center text-center ml-32">
                        <h3 className="text-3xl mb-7">
                            Elegant Diamond Necklace
                        </h3>
                        <h2 className="mb-8 text-5xl">Diamonds are Forever</h2>
                        <h3 className="text-3xl">Explore</h3>
                    </div>
                </div>
            </div>

            <div className="mx-32 ">
                <h2 className="mt-12 mb-12 text-center text-4xl">Categories</h2>
                <div>
                    <div className="flex justify-between">
                        <Image src={Watch} alt="Product Image" />
                        <Image src={Watch} alt="Product Image" />
                        <Image src={Watch} alt="Product Image" />
                    </div>
                </div>
            </div>

            <div className="w-[1512px] h-fit bg-[#D2ADAD] mt-12">
                <h1 className="mt-12 text-7xl text-center">Shoptacle</h1>
                <div className="flex justify-between mx-32">
                    <div className="mt-[70px]">
                        <h2 className="text-4xl mb-12">Overview</h2>
                        <ul className="text-2xl leading-relaxed">
                            <li>Flash Sales</li>
                            <li>Latest Products</li>
                            <li>Categories</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>

                        <h2>Follow Us</h2>
                        <div>
                            <Image />
                        </div>
                    </div>
                    <div className="mt-[70px]">
                        <h2 className="text-4xl mb-12">Online Services</h2>
                        <ul className="text-2xl leading-relaxed">
                            <li>Payment Methods</li>
                            <li>Delivery Options</li>
                            <li>My Account</li>
                            <li>Returns</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="mt-[70px]">
                        <h2 className="text-4xl mb-12">Offices</h2>
                        <ul className="text-2xl leading-relaxed">
                            <li>Abuja Offices</li>
                            <li>Lagos Offices</li>
                            <li>Portharcourt Offices</li>
                            <li>Uyo Offices</li>
                            <li>Delta Offices</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-24 mb-24 text-center font-semibold">
                    Copyright @2022 Shoptacle. All rights reserved.
                </p>
            </div>
        </main>
    );
}
