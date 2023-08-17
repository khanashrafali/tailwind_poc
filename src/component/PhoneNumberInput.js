import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function PhoneNumberInput({ value, onChange }) {
  return (
    <>
      <PhoneInput
        className="border-b-[1px] border-solid border-b-[rgba(0,0,0,0.42)]"
        value={value}
        onChange={onChange}
        defaultCountry="GB"
      />
    </>
  );
}

export default PhoneNumberInput;
