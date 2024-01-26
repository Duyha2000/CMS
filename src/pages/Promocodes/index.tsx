import React from "react";

import { Button, Img, Text } from "components";

const PromocodesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-start justify-start mx-auto p-[35px] sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-[1268px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  className="h-[35px]"
                  src="images/img_group10392_16.svg"
                  alt="Group10392"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-1 text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Request a demo
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[227px] rounded-md w-[18%] md:w-full">
                <a href="javascript:" className="text-base text-gray-900">
                  <Text size="txtGilroyMedium16">Sign in</Text>
                </a>
                <Button
                  className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="xl"
                >
                  Sign up for free
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col gap-[30px] justify-start mb-[369px] md:ml-[0] ml-[51px] md:px-5 w-[84%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Shopping Cart
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[154px] w-[87%] md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-[41%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Button
                  className="flex h-16 items-center justify-center w-16"
                  shape="round"
                  color="white_A700"
                  size="lg"
                >
                  <Img src="images/img_group11083.png" alt="Group11083" />
                </Button>
                <div className="flex flex-col gap-3 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[9px]">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Shimla Apple
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    1 kg
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-col gap-2 items-end justify-start sm:ml-[0] ml-[117px] pb-[5px] w-[23%] sm:w-full">
                  <div className="bg-blue-50_01 border-[0.5px] border-blue-A700 border-solid flex flex-row items-center justify-between p-[5px] rounded-md w-full">
                    <Img
                      className="h-4 ml-[3px] w-4"
                      src="images/img_videocamera_16X16.svg"
                      alt="videocamera"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyBold18"
                    >
                      1
                    </Text>
                    <Img
                      className="h-4 mr-[3px] w-4"
                      src="images/img_plus_16X16.svg"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyBold16"
                    >
                      $4.47
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Button
                  className="flex h-16 items-center justify-center w-16"
                  shape="round"
                  color="white_A700"
                  size="xl"
                >
                  <Img
                    className="h-[38px]"
                    src="images/img_group11087.png"
                    alt="Group11087"
                  />
                </Button>
                <div className="flex flex-col gap-4 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px]">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Basmati Rice
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    2 kg
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-col gap-2 items-end justify-start sm:ml-[0] ml-[119px] pb-[5px] w-[23%] sm:w-full">
                  <div className="bg-blue-50_01 border-[0.5px] border-blue-A700 border-solid flex flex-row items-center justify-between p-[5px] rounded-md w-full">
                    <Img
                      className="h-4 ml-[3px] w-4"
                      src="images/img_videocamera_16X16.svg"
                      alt="videocamera One"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyBold18"
                    >
                      2
                    </Text>
                    <Img
                      className="h-4 mr-[3px] w-4"
                      src="images/img_plus_16X16.svg"
                      alt="plus One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyBold16"
                    >
                      $5.50
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-start w-[48%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end p-6 sm:px-5 w-full">
                <Text
                  className="mt-[7px] text-black-900 text-lg"
                  size="txtGilroyBold18Black900"
                >
                  Promo code and coupans
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-between mt-2 p-3 rounded-md w-full">
                  <Text
                    className="text-base text-blue_gray-200"
                    size="txtGilroyMedium16Bluegray200"
                  >
                    Enter Promo code{" "}
                  </Text>
                  <Text
                    className="mr-1 text-base text-blue-A700"
                    size="txtGilroyBold16BlueA700"
                  >
                    APPLY
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between ml-4 md:ml-[0] mt-5 w-[91%] md:w-full">
                  <Text
                    className="text-base text-indigo-900"
                    size="txtGilroyBold16Indigo900"
                  >
                    Total Saving
                  </Text>
                  <Text
                    className="text-base text-blue-A700"
                    size="txtGilroyBold16BlueA700"
                  >
                    $2
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] mt-4 py-1 w-[91%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtGilroyRegular16Bluegray700"
                    >
                      Total MRP
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyBold16"
                    >
                      $9.97
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtGilroyRegular16Bluegray700"
                    >
                      Texes & charges
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      $0.00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtGilroyRegular16Bluegray700"
                    >
                      Shipping Charges
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Free
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[13px] w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtGilroyRegular16Bluegray700"
                    >
                      Discount
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      -$2.00
                    </Text>
                  </div>
                </div>
                <div className="bg-blue-50_01 flex flex-row items-center justify-between mt-4 p-[9px] rounded-md w-full">
                  <Text
                    className="ml-[7px] text-indigo-900 text-lg"
                    size="txtGilroySemiBold18Indigo900"
                  >
                    Grand Total
                  </Text>
                  <Text
                    className="mr-[9px] text-blue-A700 text-lg"
                    size="txtGilroyBold18BlueA700"
                  >
                    $7.97
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[424px] sm:min-w-full text-base text-center"
                shape="round"
                color="blue_A700"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromocodesPage;
