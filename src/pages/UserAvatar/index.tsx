import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const UserAvatarPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto sm:pr-5 pr-8 w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] mx-auto w-[65%]"
              src="images/img_group10392_25.svg"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[41px] justify-start mt-12 w-3/5 md:w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[95%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_save.svg"
                    alt="save"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_dollaraltsoli.svg"
                    alt="dollaraltSoli"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Payments
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_walletoutline.svg"
                    alt="walletOutline"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Wallet & Cards
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                  <Img className="h-6 w-6" src="images/img_car.svg" alt="car" />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Transactions
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Analytics
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Messages
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-[67%] md:w-full">
                <Line className="bg-blue-A700 h-6 w-0.5" />
                <Img
                  className="h-6 ml-1.5 w-6"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="ml-2 mt-[5px] text-base text-blue-A700"
                  size="txtGilroySemiBold16BlueA700"
                >
                  Settings
                </Text>
              </div>
            </div>
            <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_question.svg"
                alt="question"
              />
              <Text
                className="mt-[5px] text-base text-blue_gray-700"
                size="txtOpenSansRomanSemiBold16"
              >
                Help
              </Text>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between w-full">
            <Text
              className="mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Settings
            </Text>
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start p-2 rounded-[50%] w-14">
              <div className="md:h-9 h-[35px] mb-1 relative w-9">
                <Img
                  className="absolute bottom-[0] h-8 left-[0] w-8"
                  src="images/img_notification.svg"
                  alt="notification"
                />
                <Text
                  className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                  size="txtOpenSansRomanSemiBold12"
                >
                  2
                </Text>
              </div>
            </div>
          </div>
          <div className="sm:h-[329px] h-[41px] md:h-[69px] mt-8 pt-1 relative w-full">
            <Line className="absolute bg-gray-300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
            <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[34px] items-start justify-between left-[3%] w-[69%]">
              <div className="flex flex-col gap-3.5 items-center justify-start">
                <Text
                  className="text-base text-blue-A700"
                  size="txtGilroyMedium16BlueA700"
                >
                  My Profile
                </Text>
                <Line className="bg-blue-A700 h-0.5 w-full" />
              </div>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                Notifications
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                Language
              </Text>
              <Text
                className="sm:mt-0 mt-0.5 text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                General settings
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                Theme
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                Help and feedback
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[59px] w-[43%] md:w-full">
            <Img
              className="h-[202px] md:h-auto object-cover rounded-[101.08px] w-[44%] sm:w-full"
              src="images/img_ellipse5.png"
              alt="EllipseFive"
            />
            <div className="flex flex-col gap-6 h-[378px] sm:h-auto items-center justify-start mt-14 w-[378px] sm:w-full">
              <div className="flex flex-row gap-6 items-center justify-between w-full">
                <div className="h-[110px] relative w-[110px]">
                  <Img
                    className="h-[110px] m-auto rounded-[50%] w-[110px]"
                    src="images/img_ellipse14.png"
                    alt="EllipseFourteen"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[0] rounded-[50%] top-[0] w-6"
                    shape="circle"
                    color="blue_A700"
                    size="sm"
                  >
                    <Img
                      src="images/img_checkmark_20X20.svg"
                      alt="checkmark One"
                    />
                  </Button>
                </div>
                <Img
                  className="h-[110px] md:h-auto rounded-[50%] w-[110px]"
                  src="images/img_ellipse15.png"
                  alt="EllipseFifteen"
                />
                <Img
                  className="h-[110px] md:h-auto rounded-[50%] w-[110px]"
                  src="images/img_ellipse16.png"
                  alt="EllipseSixteen"
                />
              </div>
              <div className="gap-6 grid grid-cols-3 justify-center min-h-[auto] w-full">
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse17.png"
                  alt="Ellipse"
                />
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse18.png"
                  alt="Ellipse One"
                />
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse19.png"
                  alt="Ellipse Two"
                />
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse20.png"
                  alt="Ellipse Three"
                />
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse21.png"
                  alt="Ellipse Four"
                />
                <Img
                  className="flex-1 h-[110px] md:h-auto rounded-[50%] w-full"
                  src="images/img_ellipse22.png"
                  alt="Ellipse Five"
                />
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[458px] sm:min-w-full mt-8 text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAvatarPage;
