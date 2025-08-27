import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: Yup.string()
    .required("Subject is required")
    .max(100, "Subject must be under 100 characters"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Handle submission (still works with Formspree)
  const onSubmit = async (data) => {
    try {
      await fetch("https://formspree.io/f/mvgbowkk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="container">
      <section className="flex-1 " id="contact">
        <div className="flex flex-col md:flex-row md:items-start gap-15 justify-between text-[#FFFFFF]">
          <div className="flex flex-col justify-between ">
            <div>
              <h2
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                className="text-[36px] md:text-[50px] font-[400] uppercase tracking-[-2%] md:tracking-[0%] mb-6"
              >
                Let’s Connect
              </h2>

              <p
                style={{ fontFamily: "'Manrope', sans-serif" }}
                className="mb-2 text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]"
              >
                Say hello at{" "}
                <a
                  href="mailto:akanoisaac83@gmail.com"
                  className="text-[#FFFFFF] border-b border-[#D3E97A]"
                >
                  akanoisaac83@gmail.com
                </a>
              </p>
              <p className="mb-8 text-[#C7C7C7] text-[16px] md:text-[18px] font-[400]">
                For more info, here’s my{" "}
                <a
                  href="/resume.pdf"
                  className="text-[#FFFFFF] border-b border-[#D3E97A]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </p>

              {/* Socials */}
              <div className="flex items-center gap-5 text-[#D3E97A] text-2xl">
                <a
                  href="https://linkedin.com/in/akano-isaac-422475371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Isaac025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/bradycrypt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/iam_izaac/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="mt-[420px] text-[#C7C7C7] text-[16px] font-medium hidden md:block">
              © 2025 Akano Isaac
            </div>
          </div>

          <div className="md:w-[600px] w-[343px]">
            <form
              style={{ fontFamily: "'Manrope', sans-serif" }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="block text-[#C7C7C7] text-[16px] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] outline-none bg-[#1A1A1A] rounded-[4px] px-[16px] py-[12px]"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[#C7C7C7] text-[16px] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full text-[#FFFFFF]  outline-none bg-[#1A1A1A] rounded-[4px] px-[16px] py-[12px]"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[#C7C7C7] text-[16px] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  className="w-full text-[#FFFFFF]  outline-none bg-[#1A1A1A] rounded-[4px] px-[16px] py-[12px]"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[#C7C7C7] text-[16px] font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className="w-full h-[148px] md:h-[156px] text-[#FFFFFF] resize-none  outline-none bg-[#1A1A1A] rounded-[4px] px-[16px] py-[12px]"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D3E97A] text-[#0A0A0A] w-[140px] h-[54px] text-[16px] uppercase rounded-[100px] font-[700] hover:bg-lime-300 transition disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-400 text-sm mt-3">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className=" mt-[70px]  text-[#C7C7C7] text-[16px] font-medium md:hidden">
          © 2025 Akano Isaac
        </div>
      </section>
    </div>
  );
};

export default Contact;
