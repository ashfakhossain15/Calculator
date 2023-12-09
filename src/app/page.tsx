const Home = () => {
  return (
    <div className="flex full-calculator flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl mb">Calculator</h1>
      <section className="container relative w-[370px] overflow-hidden backdrop-blur-xl bg-white/10 rounded-2xl border border-white shadow-lg shadow-orange-300">
        <div className="calculator">
          <form>
            <div className="p-2 ">
              <input
                className="w-full text-right rounded-xl text-teal-50 h-24 bg-transparent focus:outline-0 duration-300 p-3 text-4xl"
                type="text"
                name="display"
                id=""
              />
            </div>
            <main className="">
              <div className="grid grid-cols-4 p-2 gap-3 justify-around ">
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg "
                  type="button"
                  value="AC"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg "
                  type="button"
                  value="DE"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="."
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="/"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="7"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="8"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="9"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="*"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="4"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="5"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="6"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="-"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="1"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="2"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="3"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="+"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="00"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg"
                  type="button"
                  value="0"
                />
                <input
                  className="p-5 text-2xl shadow-[3px_3px_10px_1px_#edf2f7] bg-opacity-60 bg-black rounded-lg col-span-2"
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
