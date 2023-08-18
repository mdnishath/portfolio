"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/app/api/contact/contact";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await sendContactForm(data);
    console.log(res);
    if (res.success) {
      toast.success("Email Sent");
      reset();
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <input
            {...register("name", { required: true })}
            type="text"
            className={`w-full px-5 py-2 bg-transparent border-[1px] rounded-md border-slate-600 ${
              errors.name ? "focus:border-red-500" : "focus:border-primary"
            } focus:outline-none text-slate-300`}
            placeholder="Full Name"
          />
          {errors.name && (
            <span className="text-red-500">Name is required *</span>
          )}
        </div>
        <div>
          <input
            {...register("email", { required: true })}
            type="email"
            className={`w-full px-5 py-2 bg-transparent border-[1px] rounded-md border-slate-600 ${
              errors.email ? "focus:border-red-500" : "focus:border-primary"
            } focus:outline-none text-slate-300`}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">Enail is required *</span>
          )}
        </div>
        <div>
          <input
            {...register("phone", { required: true })}
            type="text"
            className={`w-full px-5 py-2 bg-transparent border-[1px] rounded-md border-slate-600 ${
              errors.phone ? "focus:border-red-500" : "focus:border-primary"
            } focus:outline-none text-slate-300`}
            placeholder="Phone"
          />
          {errors.phone && (
            <span className="text-red-500">Phone is required *</span>
          )}
        </div>
        <div>
          <input
            {...register("subject", { required: true })}
            type="text"
            className={`w-full px-5 py-2 bg-transparent border-[1px] rounded-md border-slate-600 ${
              errors.subject ? "focus:border-red-500" : "focus:border-primary"
            } focus:outline-none text-slate-300`}
            placeholder="Subject"
          />
          {errors.subject && (
            <span className="text-red-500">Subject is required *</span>
          )}
        </div>
      </div>
      <div className="">
        <textarea
          {...register("message", { required: true })}
          rows="6"
          className={`w-full px-5 py-2 bg-transparent border-[1px] rounded-md border-slate-600 ${
            errors.message ? "focus:border-red-500" : "focus:border-primary"
          } focus:outline-none text-slate-300 mt-4`}
        ></textarea>
        {errors.message && (
          <span className="text-red-500">Message is required *</span>
        )}
        <div>
          {loading ? (
            <button
              className="px-8 py-2 mt-4 text-lg font-semibold rounded-lg bg-primary"
              disabled
            >
              <BeatLoader color="#fff" />
            </button>
          ) : (
            <button className="px-8 py-2 mt-4 text-lg font-semibold rounded-lg bg-primary">
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
