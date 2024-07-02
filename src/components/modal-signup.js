import { useEffect, useRef } from "react";

export default function SignupModal({ onClose, openLogin }) {
    const ref = useRef(null);

    function some() {
        openLogin();
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
        <div>
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div ref={ref} className="bg-white shadow-2xl rounded-3xl w-[596px] h-[684px] flex flex-col items-center gap-[32px] p-[48px] mq750:scale-50">
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/radar-1.svg"
                        />

                        <div
                            className="relative tracking-[0.01em] leading-[26px] font-semibold inline-block min-w-[64px] text-black"
                        >
                            Trav.id
                        </div>
                    </div>
                    <div className="w-[500px] h-[90px] font-xtra-large-semibold font-bold text-[32px] text-center text-black">
                        Don’t have an account yet? let’s
                        <div className=" text-[#58C17D] pt-2">
                            Sign up !
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-black">
                        <div className="font-medium text-[14px]">Email</div>
                        <input
                            className="w-[502px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                            placeholder="enter your email">
                        </input>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-black">
                        <div className="font-medium text-[14px]">Password</div>
                        <input
                            className="w-[502px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                            placeholder="enter your password">
                        </input>
                    </div>
                    <button className="w-[502px] h-[56px] bg-[#3B71FE] rounded-3xl text-[#FCFCFD] text-[14px] font-medium hover:bg-blue-700">
                        Sign Up
                    </button>
                    <div className=" font-medium text-16px text-[#7D7C84] flex gap-2">
                        if you already have an account
                        <div onClick={some} className="font-medium text-16px text-[#34C759] hover:cursor-pointer" >
                            Sign in
                        </div>
                    </div>
                    <div className="font-medium text-16px text-[#7D7C84]" >
                        Forgot Password?
                    </div>
                </div>
            </div>
        </div>
    );
}