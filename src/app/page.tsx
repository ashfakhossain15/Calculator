import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl mb">Calculator</h1>
      <section className="container w-[400px] h-[500px] border border-white shadow-lg shadow-orange-300">
        <div className="calculator">
          <form>
            <div>
              <input type="text" name="display" id="" />
            </div>
            <div className="grid grid-cols-4 p-2 gap-5 justify-around ">
              <input
                className=" w-full bg-slate-900 rounded-lg "
                type="button"
                value="AC"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="DE"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="."
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="/"
              />
            </div>
            <div className="grid grid-cols-4 p-2 gap-5 justify-around">
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="7"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="8"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="9"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="*"
              />
            </div>
            <div className="grid grid-cols-4 p-2 gap-5 justify-around">
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="4"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="5"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="6"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="-"
              />
            </div>
            <div className="grid grid-cols-4 p-2 gap-5 justify-around">
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="1"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="2"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="3"
              />
              <input
                className="p-6 bg-slate-900 rounded-lg"
                type="button"
                value="+"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
