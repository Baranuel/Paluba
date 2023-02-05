import React from "react";
interface SpinnerProps {
  loading: boolean;
}

function Spinner({ loading }: SpinnerProps) {
  return loading ? (
    <div className="fixed flex top-10 z-10 w-full ">
      <div className="bg-white mx-auto p-3 rounded-md ">
        <div className="border-t-transparent border-solid animate-spin mx-auto rounded-full border-primaryRed border-2 h-6 w-6"></div>
      </div>
    </div>
  ) : null;
}

export default Spinner;
