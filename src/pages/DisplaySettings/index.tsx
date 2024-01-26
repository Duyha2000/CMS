import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Switch, Text } from "components";

const DisplaySettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392_8.svg"
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
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
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
          <div className="flex flex-1 flex-col gap-[59px] items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Text
                  className="mb-0.5 md:mt-0 mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Settings
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[819px] p-2 rounded-[50%] w-14">
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
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
              <div className="md:h-[140px] sm:h-[35px] h-[39px] pt-1 relative w-full">
                <Line className="absolute bg-gray-300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[4%] w-3/4">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    Profile Settings
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[34px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    Notifications
                  </Text>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[34px] text-base text-blue_gray-400"
                  >
                    <Text size="txtGilroyMedium16Bluegray400">Privacy</Text>
                  </a>
                  <div className="flex flex-col items-center justify-start ml-11 md:ml-[0] w-[55%] md:w-full">
                    <div className="flex flex-col gap-3 justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[18px] w-[96%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-400_01"
                          size="txtGilroyMedium16Bluegray40001"
                        >
                          Discovery Settings
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[34px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Data Usage
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[37px] text-base text-blue-A700"
                          size="txtGilroyMedium16BlueA700"
                        >
                          Display Settings
                        </Text>
                      </div>
                      <Line className="bg-blue-A700 h-0.5 md:ml-[0] ml-[277px] w-[37%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg w-[42%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start pt-[7px] w-[22%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18"
                    >
                      Night light
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Off
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mt-7 pt-[7px] w-[70%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18"
                    >
                      Adaptive brightness
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Optimise brightness level for available light
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[31px]">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtGilroySemiBold18"
                  >
                    Wallpaper
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start mt-6 pt-[7px] w-[47%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18"
                    >
                      Sleep
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    After 30 minutes of inactivity
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[23px] w-[396px] sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-full"
                    size="txtGilroySemiBold18"
                  >
                    Auto rotate screen{" "}
                  </Text>
                  <Switch
                    onColor="#0061ff"
                    offColor="#0061ff"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySettingsPage;
