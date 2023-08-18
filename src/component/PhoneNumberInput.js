import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./style.css";

function PhoneNumberInput({ value, onChange, placeholder }) {
  return (
    <>
      <PhoneInput
        className="border-b-[1px] border-solid text-black border-b-[rgba(0,0,0,0.42)] focus:border-none focus:outline-none focus:border-b-[2px] focus:border-[rgba(0,0,0,0.42)] hover:border-b-[2px] phoneNumber"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        defaultCountry="GB"
      />
    </>
  );
}

export default PhoneNumberInput;
