import React from "react";

const sizeClasses = {
  txtGilroySemiBold16Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtLatoRegular212: "font-lato font-normal",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtUrbanistRegular2135: "font-normal font-urbanist",
  txtGilroyMedium18Gray700: "font-gilroy font-medium",
  txtLatoBold446: "font-bold font-lato",
  txtLatoExtraBold689: "font-extrabold font-lato",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtLatoSemiBold239: "font-lato font-semibold",
  txtGilroyRegular16Bluegray900: "font-gilroy font-normal",
  txtGilroyBold18Black900: "font-bold font-gilroy",
  txtGilroySemiBold1047: "font-gilroy font-semibold",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtGilroyMedium18Bluegray700: "font-gilroy font-medium",
  txtGilroySemiBold18Indigo900: "font-gilroy font-semibold",
  txtLatoBold223: "font-bold font-lato",
  txtGilroySemiBold24Gray80001: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray400: "font-gilroy font-semibold",
  txtGilroyBold18BlueA700: "font-bold font-gilroy",
  txtLatoSemiBold198: "font-lato font-semibold",
  txtGilroySemiBold24BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold24WhiteA700: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
  txtLatoBold347: "font-bold font-lato",
  txtGilroyMedium14Black90001: "font-gilroy font-medium",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold10: "font-gilroy font-semibold",
  txtLatoMedium239: "font-lato font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtLatoSemiBold212: "font-lato font-semibold",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtGilroyBold16Indigo900: "font-bold font-gilroy",
  txtGilroySemiBold14Bluegray400: "font-gilroy font-semibold",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtLatoRegular244: "font-lato font-normal",
  txtGilroyBold40: "font-bold font-gilroy",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtLatoMedium31WhiteA700: "font-lato font-medium",
  txtLatoSemiBold186: "font-lato font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyRegular18Black900: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold16BlueA700: "font-opensans font-semibold",
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtLatoRegular413: "font-lato font-normal",
  txtGilroyRegular16Black900: "font-gilroy font-normal",
  txtGilroySemiBold24Bluegray80001: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyRegular18Bluegray400: "font-gilroy font-normal",
  txtGilroySemiBold12Gray5001: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray700: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtLatoMedium173: "font-lato font-medium",
  txtLatoSemiBold173: "font-lato font-semibold",
  txtLatoMedium212: "font-lato font-medium",
  txtLatoMedium239Gray600: "font-lato font-medium",
  txtGilroyMedium16Bluegray300: "font-gilroy font-medium",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray50: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtLatoSemiBold212WhiteA700: "font-lato font-semibold",
  txtLatoBold477: "font-bold font-lato",
  txtGilroySemiBold18Bluegray400: "font-gilroy font-semibold",
  txtGilroyRegular16Bluegray700: "font-gilroy font-normal",
  txtGilroyMedium14BlueA20001: "font-gilroy font-medium",
  txtLatoMedium186: "font-lato font-medium",
  txtGilroyMedium14Bluegray600: "font-gilroy font-medium",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtLatoMedium31: "font-lato font-medium",
  txtLatoBold265: "font-bold font-lato",
  txtGilroyBold16: "font-bold font-gilroy",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyRegular18Bluegray700: "font-gilroy font-normal",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroyBold16BlueA700: "font-bold font-gilroy",
  txtGilroyMedium16Bluegray200: "font-gilroy font-medium",
  txtGilroySemiBold14Black90001: "font-gilroy font-semibold",
  txtGilroyMedium14Black900: "font-gilroy font-medium",
  txtLatoMedium239Black90003: "font-lato font-medium",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtLatoMedium186Black9004c: "font-lato font-medium",
  txtGilroyMedium18Bluegray600: "font-gilroy font-medium",
  txtGilroySemiBold20Black900: "font-gilroy font-semibold",
  txtLatoExtraBold239: "font-extrabold font-lato",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
