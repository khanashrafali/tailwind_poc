import React from "react";

function TextField({
  placeholder,
  required,
  type,
  value,
  name,
  multiline = false,
  onChange,
  rows,
}) {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[8px] bg-transparent font-[Corbel] opacity-50 text-[19px] text-[#151515] font-[400] break-words overflow-hidden text-ellipsis">
          {placeholder}
          {required && <span className="text-red-600">*</span>}
        </div>
        <input
          className=" border-b-[1px] p-0 rounded-none text-[19px] font-[Corbel] text-[#151515] mb-[20px] block w-[90%] h-calc-form font-[400] leading-[1.5] pt-[4px] px-0 pb-[5px] focus:outline-none hover:border-b-[#151515] focus:border-b-[2px] focus:border-b-[#1976d2] hover:border-b-[2px] focus:shadow-[0_0_0_red] hover:outline-none before:outline-none after:outline-none placeholder:opacity-50 xmd:text-[16px]"
          type={type}
          value={value || ""}
          multiple={multiline}
          aria-rowcount={rows}
          name={name}
          aria-multiline={multiline}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextField;
