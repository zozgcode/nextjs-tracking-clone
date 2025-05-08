'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Package } from '../../utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { FaArrowDownShortWide } from 'react-icons/fa6';

interface ResultPageProps {
  packageInfo: Package;
}

export default function ResultPage({ packageInfo }: ResultPageProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [hasOnHold, setHasOnHold] = useState<boolean>(false);
  const [onHoldTimeReached, setOnHoldTimeReached] = useState<boolean>(false);

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Check if on hold time has been reached
  useEffect(() => {
    if (packageInfo.on_hold_date && packageInfo.on_hold_time) {
      const onHoldDateTime = new Date(`${packageInfo.on_hold_date}T${packageInfo.on_hold_time}`);
      setOnHoldTimeReached(currentTime >= onHoldDateTime);
    }
  }, [currentTime, packageInfo.on_hold_date, packageInfo.on_hold_time]);

  const steps = useMemo(() => {
    const formatDatetime = (date: string | undefined, time: string | undefined) => {
      return date && time ? `${date}T${time}` : '';
    };
  
    const stepList = [
      {
        label: 'Package Received By FEDEX',
        datetime: formatDatetime(packageInfo.package_received_date, packageInfo.package_received_time)
      },
      {
        label: 'In Transit',
        datetime: formatDatetime(packageInfo.in_transit_date, packageInfo.in_transit_time)
      }
    ];
  
    // Check if we have on_hold data
    const hasOnHoldData = !!packageInfo.on_hold_date && !!packageInfo.on_hold_time;
  
    // Only add the "On Hold" step if both date and time are available AND the time has been reached
    if (hasOnHoldData && onHoldTimeReached) {
      stepList.push({
        label: 'On Hold',
        datetime: formatDatetime(packageInfo.on_hold_date, packageInfo.on_hold_time)
      });
  
      // If On Hold is reached, hide "Out for Delivery"
      return stepList;
    }
  
    // Only add the "Out for Delivery" step if On Hold was not reached
    stepList.push({
      label: 'Out for Delivery',
      datetime: formatDatetime(packageInfo.out_for_delivery_date, packageInfo.out_for_delivery_time)
    });
  
    // Add "Delivered" step if there's no on_hold data
    if (!hasOnHoldData) {
      stepList.push({
        label: 'Delivered',
        datetime: formatDatetime(packageInfo.estimated_delivery_date, packageInfo.estimated_delivery_time)
      });
    }
  
    return stepList;
  }, [packageInfo, onHoldTimeReached]);
  

  const calculateStep = useCallback(() => {
    const now = currentTime.getTime();
    let step = -1;

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].datetime && now >= new Date(steps[i].datetime).getTime()) {
        step = i;
      } else {
        break;
      }
    }

    setCurrentStep(step);

    // Check if there's an On Hold status in the package info
    setHasOnHold(!!packageInfo.on_hold_date && !!packageInfo.on_hold_time);
  }, [steps, packageInfo.on_hold_date, packageInfo.on_hold_time, currentTime]);

  useEffect(() => {
    calculateStep(); // Initial update
  }, [calculateStep, currentTime]);

  const formatDate = (datetime: string) => {
    if (!datetime) return '';
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(datetime).toLocaleDateString(undefined, options);
  };

  const formatTime = (datetime: string) => {
    if (!datetime) return '';
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return new Date(datetime).toLocaleTimeString(undefined, options);
  };

  const getStatus = (step: number) => {
    if (step < 0) return 'Processing';
    return steps[step].label;
  };

  return (
    <div className="w-full p-[16px] pb-[80px] text-[#333333]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-right flex items-center justify-between font-semibold p-4">
          <Link href="/" className="text-3xl font-bold flex items-baseline">
            <span className="text-[#4d148c]">Fed</span>
            <span className="text-[#ff6600]">Ex</span>
            <span className="text-sm align-super relative top-[2px] text-red-700">®</span>
          </Link>
          <Link href="/">Go Home</Link>
        </div>
        <div className="p-4 sm:px-2 rounded bg-[#858585] text-white mb-[30px] mt-[30px] text-center font-semibold">Tracking Number: [{packageInfo.tracking_number}] found.</div>
        <div className="border p-4 md:p-8 rounded-lg">
          <div className="vertical-progress-container">
            {steps.map((step, index) => (
              <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
                <div className="circle"></div>
                <div className="content">
                  <p className="label text-base font-semibold uppercase">{step.label}</p>
                  {step.datetime && (
                    <p className="text-sm flex flex-col mt-1">
                      {formatDate(step.datetime)}
                      <span className="text-[13px]">{formatTime(step.datetime)}</span>
                    </p>
                  )}
                  {step.label === 'On Hold' && packageInfo.on_hold_desc && <div className="max-w-[300px] mt-2 p-3 text-red-500 text-sm bg-yellow-100 rounded">{packageInfo.on_hold_desc}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* SENDER'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center  gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Sender&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-white uppercase border-b bg-[#858585]">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Sender Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.name}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.contact_number}</td>
                      <td className="px-4 py-2 w-[300px]">{packageInfo.sender.address}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.sender.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* RECIPIENT'S INFO */}
          <div className="mt-2">
            <div className="p-4 pl-0 flex items-center gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Receiver&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-white uppercase border-b bg-[#858585]">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Receiver Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.name}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.contact_number}</td>
                      <td className="px-4 py-2 w-[300px]">{packageInfo.recipient.address}</td>
                      <td className="px-4 py-2 w-[200px]">{packageInfo.recipient.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* SHIPMENT'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center gap-3 mt-[30px] font-semibold">
              <span>
                <FaArrowDownShortWide />
              </span>
              <span>Shipment Information</span>
            </div>
            <div>
              <div className="bg-[#858585] hidden text-white items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Weight (kg)</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.weight_kg}kg</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Courier</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.courier}</div>
              </div>
              <div className="bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Packages</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.packages}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Quantity</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.quantity}</div>
              </div>
              <div className="bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Payment Mode</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.paymentMode}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Origin</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.origin}</div>
              </div>
              <div className="bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Destination</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.destination}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Status</div>
                <div className="w-full p-3 py-2">{getStatus(currentStep)}</div>
              </div>
              <div className="bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Estimated Delivery Date</div>
                <div className="w-full p-3 py-2">{formatDate(packageInfo.estimated_delivery_date)}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Estimated Delivery Time</div>
                <div className="w-full p-3 py-2">{formatTime(`${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`)}</div>
              </div>
              {/* <div className="bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Date</div>
                <div className="w-full p-3 py-2">{formatDate(packageInfo.pickup_date ?? '')}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Time</div>
                <div className="w-full p-3 py-2">{formatTime(`${packageInfo.pickup_date}T${packageInfo.pickup_time}`)}</div>
              </div> */}
              <div className=" bg-gray-100 flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Mode</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.mode}</div>
              </div>
              {/* <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Status</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.status}</div>
              </div> */}
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Comment</div>
                <div className="w-full p-3 py-2">{packageInfo.package_details.comment}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
