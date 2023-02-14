import React from "react";

interface ToggleChipProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

function ToggleChip({ text, active, onClick }: ToggleChipProps) {
  return (
    <div
      onClick={() => onClick()}
      className={`py-2 sm:text-sm text-md hover:cursor-pointer px-4 border rounded-2xl border-primaryRed
    ${active && "bg-primaryRed text-white"}`}
    >
      {text}
    </div>
  );
}

export default ToggleChip;
