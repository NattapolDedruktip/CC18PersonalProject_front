import React, { useState } from "react";

function MapSearchSidebar() {
  const [formData, setFormData] = useState({
    distant: "",
    period: "",
    budgetMin: "",
    budgetMax: "",
    parking: "",
    foodAndBev: "",
    specialService: "",
  });

  const hdlOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-MyBg w-full h-[90vh] flex justify-center items-end">
      <form className="flex flex-col text-white justify-around h-full w-[90%]">
        <p className="mt-4 flex justify-center text-5xl font-bebas font-bold">
          SEARCH FILTER
        </p>

        <div>
          {/* distant and Period  */}
          <div className="flex gap-2 justify-around">
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-2">
                <label className="font-body font-bold text-3xl">
                  DISTANT AROUND YOU (KM.):
                </label>
                <input
                  className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
                  name="distant"
                  value={formData.distant}
                  onChange={hdlOnchange}
                  placeholder="1.5 KM."
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="font-body font-bold text-3xl">
                  PERIOD YOU WANT TO STAY(H):
                </label>
                <input
                  name="period"
                  value={formData.period}
                  placeholder="2H+"
                  onChange={hdlOnchange}
                  className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body font-bold text-3xl">YOUR BUDGET(NET.):</p>
          <div className="flex flex-col justify-around">
            <div>
              <input
                name="budgetMin"
                value={formData.budgetMin}
                placeholder="800 ฿ "
                onChange={hdlOnchange}
                className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="font-body font-bold text-3xl"> TO</p>
            </div>
            <div>
              <input
                name="budgetMax"
                value={formData.budgetMax}
                placeholder="2500 ฿"
                onChange={hdlOnchange}
                className="w-full px-6 py-4 text-center bg-InputBg text-InputText rounded-full text-xl font-bold tracking-widest font-bebas focus:outline-none"
              />
            </div>
          </div>
        </div>
        <button className="flex gap-1 mx-auto border-4 my-3 border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-10 py-3 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition">
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default MapSearchSidebar;
