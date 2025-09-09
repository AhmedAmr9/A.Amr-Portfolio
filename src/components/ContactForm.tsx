"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // 👇 استبدل دول بالقيم الحقيقية من Google Form بتاعك
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5u17BQRRHl86HYPpPh3fV63JP5U-NReQx5WUkIEcJNvf3Yw/formResponse";
  const ENTRY_NAME = "entry.1874449261";
  const ENTRY_EMAIL = "entry.1825960954";
  const ENTRY_MESSAGE = "entry.232289239";

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const form = new FormData();
    form.append(ENTRY_NAME, formData.name);
    form.append(ENTRY_EMAIL, formData.email);
    form.append(ENTRY_MESSAGE, formData.message);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      body: form,
      mode: "no-cors",
    });

    // ✅ نجاح
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    // ⏱ اخفاء الرسالة بعد 5 ثواني
    setTimeout(() => setSubmitStatus("idle"), 5000);
  } catch (error) {
    console.error("Google Form submit failed:", error);
    setSubmitStatus("error");

    // ⏱ اخفاء الرسالة بعد 5 ثواني
    setTimeout(() => setSubmitStatus("idle"), 5000);
  } finally {
    // ✅ بيرجع الزر Send Message
    setIsSubmitting(false);
  }
};


  return (
    <div className="card p-6">
      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        {/* name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className={`input w-full ${
              errors.name ? "border-red-500 focus:border-red-500" : ""
            }`}
            placeholder="Enter your full name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`input w-full ${
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }`}
            placeholder="your.email@example.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`input w-full resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : ""
            }`}
            placeholder="Tell me about your project or just say hello..."
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full flex items-center justify-center gap-2 transition-all duration-200 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <span>Send Message</span>
          <Image
            src="/SMS Icon.png"
            alt="sms icon"
            width={24}   // تحط العرض بالـ px
            height={16}  // تحط الارتفاع بالـ px
            className="relative w-6 h-4 md:w-6 md:h-4"
          />
                      </>
          )}
        </button>
      </form>

      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✅</span>
            <p className="text-green-300 font-medium">
              Message sent successfully!
            </p>
          </div>
          <p className="text-green-200 text-sm mt-1">
            Thank you for reaching out. I'll get back to you soon!
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-lg">❌</span>
            <p className="text-red-300 font-medium">Failed to send message</p>
          </div>
          <p className="text-red-200 text-sm mt-1">
            Please try again later or contact me directly via email.
          </p>
        </div>
      )}
    </div>
  );
}
