"use client";

import { useEffect, useRef } from "react";

const Home = () => {
  const displayRef = useRef(null);
  useEffect(() => {
    const display: any = document.querySelector("#display");
    const buttons = document.querySelectorAll('input[type="button"]');
    const specialChars = ["%", "*", "/", "=", "-", "+"];
    let output = "";

    const calculate = (btnValue: any) => {
      if(btnValue === "="&& output !== "") {
        output = eval(output.replace("%", "/100"))
      }else if (btnValue === "AC"){
        output = "";
      }
      else if(btnValue === "DE"){
        output = output.toString().slice(0,-1)
      }else{
        if(output=== "" && specialChars.includes(btnValue)) return;
        output += btnValue;
      }
      display.value = output;

    };
    buttons?.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        calculate(event?.target?.value);
      });
    });
  }, []);
  return (
    <div className="flex full-calculator bg-white flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl mb">Calculator</h1>
      <section className="container relative w-[370px] overflow-hidden backdrop-blur-xl bg-white/80 rounded-2xl border z-50 ">
        <div className="calculator">
          <form>
            <div className="p-2 ">
              <input
                ref={displayRef}
                className="w-full text-right rounded-xl text-black h-[6.4rem] bg-transparent display focus:outline-0 duration-300 p-3 text-4xl"
                type="text"
                name="display"
                id="display"
              />
            </div>
            <main className="">
              <div className="grid grid-cols-4 p-2 gap-3 justify-around ">
                <input
                  className="px-5 py-3  bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-red-400 rounded-lg "
                  type="button"
                  value="AC"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg "
                  type="button"
                  value="DE"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg"
                  type="button"
                  value="%"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg"
                  type="button"
                  value="/"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="7"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="8"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="9"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg"
                  type="button"
                  value="*"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="4"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="5"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="6"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg"
                  type="button"
                  value="-"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="1"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="2"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="3"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg"
                  type="button"
                  value="+"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="0"
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-black rounded-lg"
                  type="button"
                  value="."
                />
                <input
                  className="px-5 py-3 bg-[#eee] text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-90 text-cyan-500 rounded-lg col-span-2"
                  type="button"
                  value="="
                />
              </div>
            </main>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Home;
