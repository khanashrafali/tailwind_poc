import tw from "tailwind-styled-components";

export const StyledButton = tw.button`
  ${(props) => `
    rounded-[30px] font-[Nobel-Bold] text-[12px] leading-[1.75] uppercase text-[#1976d2] font-bold tracking-[3.6px] text-[${props?.bgcolor}] py-[5px] px-[20px] h-[36px] bg-white
    `}
`;
