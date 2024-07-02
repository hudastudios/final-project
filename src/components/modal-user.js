import { useEffect, useRef } from "react";

export default function UserModal({ onClose, onOpenLoginModal, onOpenSignupModal }) {
  const ref = useRef(null);

  function someSignup() {
    onOpenSignupModal();
    onClose();
  }

  function someLogin() {
    onOpenLoginModal();
    onClose();
  }

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className=' fixed inset-0 flex justify-end items-start pt-20 z-50 pr-28 mq1050:pr-10 mq750:hidden'>

      <div ref={ref}
        className="w-[332px] overflow-hidden shrink-0 rounded-xl bg-[#ffff] shadow-2xl flex flex-col items-start justify-start py-8 px-6 gap-[32px]"
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[16px]"
        >
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Booking
              </div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell-1.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Wishlist
              </div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell-2.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Message
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-px relative bg-whitesmoke-200"
        ></div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[16px]"
        >
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell-3.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Host your home
              </div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell-4.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Host an experience
              </div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[4px]"
          >
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/notification--bell-5.svg"
            />

            <div
              className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0"
            >
              <div
                className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium"
              >
                Help
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-[24px]"
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
          >
            <div onClick={someLogin}
              className="rounded-3xl bg-primary-1 flex flex-row items-center justify-center py-3 px-11 whitespace-nowrap"
            >
              <div
                className="relative text-sm tracking-[0.01em] leading-[20px] font-medium font-large-regular text-base-colors-background text-left inline-block min-w-[40px]"
              >
                Sign In
              </div>
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start"
          >
            <div onClick={someSignup}
              className="rounded-3xl flex flex-row items-center justify-center py-2.5 px-[38px] whitespace-nowrap border-[1px] border-solid border-primary-1"
            >
              <div
                className="relative text-sm tracking-[0.01em] leading-[20px] font-medium font-large-regular text-primary-1 text-left inline-block min-w-[52px]"
              >
                Sign Up
              </div>
            </div>
          </button>
        </div>
      </div >
    </div >);
}