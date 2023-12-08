const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl mb">Calculator</h1>
      <section className="container relative w-[400px] overflow-hidden rounded-2xl border border-white shadow-lg shadow-orange-300">
        <div className="calculator">
          <form>
            <div className="p-2 ">
              <input
                className="w-full rounded-xl text-teal-50 h-24 bg-blue-950 p-3 text-4xl"
                type="text"
                name="display"
                id=""
              />
            </div>
            <main className="">
              <div className="grid grid-cols-4 p-2 gap-3 justify-around ">
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg "
                  type="button"
                  value="AC"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="DE"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="."
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="/"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="7"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="8"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="9"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="*"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="4"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="5"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="6"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="-"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="1"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="2"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="3"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="+"
                />
              </div>
              <div className="grid grid-cols-4 p-2 gap-3 justify-around">
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="00"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg"
                  type="button"
                  value="0"
                />
                <input
                  className="p-6 shadow-[5px_1px_5px_5px_#4a5568] bg-slate-900 rounded-lg col-span-2"
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
