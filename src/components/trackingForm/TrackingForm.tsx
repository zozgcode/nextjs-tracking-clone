// components/TrackingForm.js (or TrackingForm.tsx)
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push(`/track?trackingNumber=${trackingNumber}`);
    }, 2000);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:flex-row items-center mt-[50px]"
      >
        <input
          type="text"
          id="trackingNumber"
          className="w-full rounded p-[12px] pb-[20px] pt-[20px]"
          placeholder="Track your package by entering your tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        {/* <button type="submit" className=''>Track Package</button> */}
        <button
          type="submit"
          className="bg-[#ff6200] relative flex items-center justify-center rounded w-[300px] text-white font-semibold p-[20px]"
          disabled={loading}
        >
          {loading ? (
            "Please wait..."
          ) : (
            "Track Package"
          )}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
