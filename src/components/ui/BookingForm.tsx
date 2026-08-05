"use client";

import React, { useState } from "react";
import Image from "next/image";
import calendarSvg from "../../../public/assets/svg/ic_calendar.svg";
import downDirectorSvg from "../../../public/assets/svg/ic_down_director.svg";

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-black/5 max-w-[620px] w-full">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-serif font-medium text-[32px] sm:text-[40px] leading-[1.12] text-[#1C1C1C] mb-2">
          Begin your{" "}
          <em className="font-serif italic font-light text-[#3C4233]">
            Transformation
          </em>
        </h3>
        <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.5] text-[#4A4630]/85">
          Select your preferred treatment, date, and time. Our concierge team
          will prepare the rest.
        </p>
      </div>

      <hr className="border-t border-[#E8DFD1]/80 mb-7" />

      {submitted ? (
        <div className="py-10 text-center flex flex-col items-center justify-center gap-3">
          <div className="w-[56px] h-[56px] rounded-full bg-[#3C4233] text-white flex items-center justify-center text-[26px]">
            ✓
          </div>
          <h4 className="font-serif font-semibold text-[24px] text-[#1C1C1C]">
            Session Reserved
          </h4>
          <p className="font-sans text-[15px] text-[#4A4630]/80 max-w-[340px]">
            Thank you! Our concierge team will reach out shortly to confirm your
            appointment details.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 text-[14px] font-sans underline text-[#3C4233] cursor-pointer"
          >
            Book another session
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-full-name" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Full Name
              </label>
              <input
                id="booking-full-name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full h-[52px] px-5 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] placeholder:text-[#9A9286] focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-email" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Email Address
              </label>
              <input
                id="booking-email"
                type="email"
                required
                autoComplete="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-[52px] px-5 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] placeholder:text-[#9A9286] focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-phone" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Phone Number
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="e.g. +1 (310) 555-0192"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full h-[52px] px-5 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] placeholder:text-[#9A9286] focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40"
              />
            </div>

            {/* Treatment Type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-treatment" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Treatment Type
              </label>
              <div className="relative">
                <select
                  id="booking-treatment"
                  required
                  value={formData.treatment}
                  onChange={(e) =>
                    setFormData({ ...formData, treatment: e.target.value })
                  }
                  className="w-full h-[52px] px-5 pr-12 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40 cursor-pointer"
                >
                  <option value="" disabled>
                    Select Treatment
                  </option>
                  <option value="injectables">Injectables & Sculpting</option>
                  <option value="facials">Facials & Skin Rehab</option>
                  <option value="laser">Laser & Light Therapy</option>
                  <option value="body">Body & Wellness</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" aria-hidden="true">
                  <Image
                    src={downDirectorSvg}
                    alt=""
                    width={14}
                    height={7}
                    className="w-[14px] h-[7px]"
                  />
                </div>
              </div>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-date" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Date
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full h-[52px] px-5 pr-12 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" aria-hidden="true">
                  <Image
                    src={calendarSvg}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Time Selector */}
            <div className="flex flex-col gap-2">
              <label htmlFor="booking-time" className="font-sans text-[14px] font-medium text-[#1C1C1C]">
                Time
              </label>
              <div className="relative">
                <select
                  id="booking-time"
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full h-[52px] px-5 pr-12 rounded-full border border-[#D5CDC1] bg-white text-[15px] font-sans text-[#1C1C1C] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3C4233]/40 cursor-pointer"
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" aria-hidden="true">
                  <Image
                    src={downDirectorSvg}
                    alt=""
                    width={14}
                    height={7}
                    className="w-[14px] h-[7px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button & Conversion Trust Micro-copy */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="bg-[#3C4233] hover:bg-[#2D3227] text-white rounded-[66px] px-9 h-[52px] font-sans font-medium text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C4233] cursor-pointer shadow-md w-full sm:w-auto"
            >
              Reserve My Session
            </button>
            <p className="font-sans text-[12px] text-[#526071] flex items-center gap-1.5 pt-0.5">
              <span>🔒</span>
              <span>Zero-commitment consultation • 100% Doctor-supervised • No pressure selling</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
