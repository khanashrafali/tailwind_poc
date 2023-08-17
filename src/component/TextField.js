import React from "react";

function TextField({
  placeHolder,
  required,
  type,
  value,
  name,
  multiline = false,
  onChange,
}) {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[8px] bg-transparent font-[Corel] text-[19px] text-[#151515] font-[400] break-words overflow-hidden text-ellipsis">
          {placeHolder}
          {required && <span className="text-red-600">*</span>}
        </div>
        <input
          className="border-none p-0 rounded-none text-[19px] font-[Corbel] text-[#151515] mb-[20px] block w-full h-calc-form font-[400] leading-[1.5] pt-[4px] px-0 pb-[5px] focus:outline-none focus:border-none focus:shadow-[0_0_0_red] hover:outline-none before:outline-none after:outline-none placeholder:opacity-50 xmd:text-[16px]"
          type={type}
          value={value || ""}
          name={name}
          aria-multiline={multiline}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextField;
