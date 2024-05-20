"use client";

import React, { useEffect, useState } from "react";
import { Package } from "../../utils/types";

interface ResultPageProps {
  packageInfo: Package;
}

export default function ResultPage({
  packageInfo,
}: ResultPageProps) {
  const steps = [
    {
      label: "Package Received",
      datetime: `${packageInfo.package_received_date}T${packageInfo.package_received_time}`,
    },
    {
      label: "In Transit",
      datetime: `${packageInfo.in_transit_date}T${packageInfo.in_transit_time}`,
    },
    {
      label: "Out for Delivery",
      datetime: `${packageInfo.out_for_delivery_date}T${packageInfo.out_for_delivery_time}`,
    },
    {
      label: "Delivered",
      datetime: `${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`,
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(-1);

  const calculateStep = () => {
    const now = new Date().getTime();
    let step = -1;

    for (let i = 0; i < steps.length; i++) {
      if (now >= new Date(steps[i].datetime).getTime()) {
        step = i;
      } else {
        break;
      }
    }

    setCurrentStep(step);
  };

  useEffect(() => {
    calculateStep(); // Initial update
    const interval = setInterval(calculateStep, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatDate = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(datetime).toLocaleDateString(undefined, options);
  };

  const formatTime = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Date(datetime).toLocaleTimeString(undefined, options);
  };

  const getStatus = (step: number) => {
    switch (step) {
      case 0:
        return "Package Received";
      case 1:
        return "In Transit";
      case 2:
        return "Out for Delivery";
      case 3:
        return "Delivered";
      default:
        return "Unknown";
    }
  };

  return (
    <div>
      <h1>Shipping Progress Bar</h1>
      <div className="vertical-progress-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? "active" : ""}`}
          >
            <div className="circle"></div>
            <div className="content">
              <p className="label text-base font-semibold">{step.label}</p>
              <p className="text-sm flex flex-col mt-1">
                {formatDate(step.datetime)}
                <span className="text-[13px]">{formatTime(step.datetime)}</span>
              </p>
            </div>
          </div>
        ))}
        {/* {packageInfo.tracking_number === "TRK0011234567890" && (
          <div className="pl-16 max-w-[500px]">
            Note: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eaque consectetur exercitationem quisquam officiis repudiandae
            aperiam at nesciunt, nobis molestiae quibusdam in explicabo omnis
            optio nulla molestias perspiciatis laborum, reprehenderit officia.
          </div>
        )} */}
      </div>

      <div className="package-details pt-14">
        <h2>Package Details</h2>
        <p>
          <strong>Package ID:</strong> {packageInfo.package_id}
        </p>
        <p>
          <strong>Sender:</strong> {packageInfo.sender.name},{" "}
          {packageInfo.sender.address}, {packageInfo.sender.contact_number}
        </p>
        <p>
          <strong>Recipient:</strong> {packageInfo.recipient.name},{" "}
          {packageInfo.recipient.address},{" "}
          {packageInfo.recipient.contact_number}
        </p>
        <p>
          <strong>Delivery Status:</strong> {getStatus(currentStep)}
        </p>
        <p>
          <strong>Estimated Delivery Date:</strong>{" "}
          {formatDate(
            `${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`
          )}
        </p>
        <p>
          <strong>Tracking Number:</strong> {packageInfo.tracking_number}
        </p>
        <h3>Package Details</h3>
        <p>
          <strong>Weight (kg):</strong> {packageInfo.package_details.weight_kg}
        </p>
        <p>
          <strong>Dimensions (cm):</strong>{" "}
          {packageInfo.package_details.dimensions_cm.length} x{" "}
          {packageInfo.package_details.dimensions_cm.width} x{" "}
          {packageInfo.package_details.dimensions_cm.height}
        </p>
        <p>
          <strong>Content Description:</strong>{" "}
          {packageInfo.package_details.content_description}
        </p>
        <p>
          <strong>Value (USD):</strong> {packageInfo.package_details.value_usd}
        </p>
      </div>
    </div>
  );
}
