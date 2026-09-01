"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { brand, headerCtas } from "@/data/navigation";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4";

const inputClass =
  "h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-white/20";

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BookingsPage() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main
      className="flex min-h-screen w-full bg-black selection:bg-white/30 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4"
    >
      <section className="relative hidden w-[52%] flex-col items-center justify-end overflow-hidden rounded-3xl px-12 pb-32 shadow-2xl h-full lg:flex">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-xs space-y-8"
        >
          <motion.div variants={heroItem} className="flex items-center gap-2">
            <Circle className="h-5 w-5 fill-white text-white" />
            <Link href="/" className="text-xl font-semibold tracking-tight text-white">
              {brand.name}
            </Link>
          </motion.div>

          <motion.div variants={heroItem} className="space-y-3 text-center">
            <h1 className="whitespace-nowrap text-4xl font-medium tracking-tight text-white">
              Book a call
            </h1>
            <p className="px-4 text-sm leading-relaxed text-white/60">
              Follow these 3 quick phases to lock in your appointment.
            </p>
          </motion.div>

          <motion.div variants={heroItem} className="space-y-3">
            <StepItem number={1} text="Tell us about the project" active />
            <StepItem number={2} text="Pick a date and time" />
            <StepItem number={3} text="Confirm the appointment" />
          </motion.div>
        </motion.div>
      </section>

      <section className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-12 sm:px-12 lg:overflow-y-auto lg:px-16 lg:py-6 xl:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-6"
        >
          <div className="space-y-2">
            <p className="lg:hidden">
              <Link href="/" className="text-sm text-white/50 hover:text-white">
                ← Back to {brand.name}
              </Link>
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Book an appointment
            </h2>
            <p className="text-sm text-white/40">
              Share a few details and we will confirm your slot.
            </p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputGroup label="First Name" placeholder="Ada" type="text" />
              <InputGroup label="Last Name" placeholder="Lovelace" type="text" />
            </div>
            <InputGroup label="Email" placeholder="you@studio.com" type="email" />
            <InputGroup label="Phone" placeholder="+44 7700 900000" type="tel" />
            <div className="space-y-2">
              <label className="text-sm font-medium text-white" htmlFor="service">
                Service
              </label>
              <select id="service" name="service" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  What do you need?
                </option>
                <option value="website">Website</option>
                <option value="app">Web app</option>
                <option value="shop">Online shop</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputGroup label="Preferred date" placeholder="" type="date" />
              <InputGroup label="Preferred time" placeholder="" type="time" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white" htmlFor="notes">
                Project notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="What should we cover on the call?"
                className="w-full rounded-xl border-none bg-brand-gray px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
              className="mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black hover:bg-white/90 active:scale-[0.98]"
            >
              Book appointment
            </button>
          </form>

          <p className="text-center text-sm text-white/40">
            Prefer WhatsApp?{" "}
            <a
              href={headerCtas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Message us
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function StepItem({
  number,
  text,
  active = false,
}: {
  number: number;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 ${
        active ? "border border-white bg-white text-black" : "border-none bg-brand-gray text-white"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          active ? "bg-black text-white" : "bg-white/10 text-white/40"
        }`}
      >
        {number}
      </span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function InputGroup({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder || undefined}
        className={inputClass}
      />
    </div>
  );
}
