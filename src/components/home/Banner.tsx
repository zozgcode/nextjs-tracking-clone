import Image from "next/image";
import TrackingForm from "../trackingForm/TrackingForm";

export default function Banner() {
  return (
    <div className="bg-[url('https://i.imgur.com/SvXwr74.png')] bg-cover bg-no-repeat min-h-[485px] mt-[75px]">
      <div className="custom_container">
        <div className="max-w-[600px] relative mt-[70px] mx-auto">
          <h1 className="text-white text-center text-[32px] md:text-6xl">
            Welcome to FedEx
          </h1>
          <div className="flex mt-[60px] max-w-[450px] mx-auto">
            <div className="w-[158px] h-[120px] flex flex-col items-center justify-center pr-[15px] pl-[15px] pt-[25px] pb-[25px] bg-white">
              <Image src="https://i.imgur.com/8IsoNqs.png" width={500} height={500} className="w-12" alt="bannerdjdksndkf" />
              <p className="text-[#333333] text-sm mt-2 font-semibold text-center">
                RATE & TRANSIT TIMES
              </p>
            </div>
            <div className="w-[158px] h-[140px] flex flex-col items-center justify-center bg-[#4D148C] relative bottom-3 pr-[15px] pl-[15px] pt-[35px] pb-[25px]">
              <Image src="https://i.imgur.com/o8mnS6s.png" width={500} height={500} className="w-12" alt="bannerdjdksndkf" />
              <p className="text-[#ffffff] text-sm mt-2 font-semibold text-center">
                TRACK
              </p>
            </div>
            <div className="w-[158px] h-[120px] flex flex-col items-center justify-center pr-[15px] pl-[15px] pt-[25px] pb-[25px] bg-white">
              <Image src="https://i.imgur.com/10jojwk.png" width={500} height={500} className="w-12" alt="bannerdjdksndkf" />
              <p className="text-[#333333] text-sm mt-2 font-semibold text-center">
                SHIP
              </p>
            </div>
          </div>
          <div className="mt-[50px]">
           <TrackingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
