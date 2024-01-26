import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, SeekBar, Text } from "components";

const DisplayandthemePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392_7.svg"
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
                      <div className="flex flex-row gap-[34px] items-start justify-between mr-[17px] w-[97%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-400_01"
                          size="txtGilroyMedium16Bluegray40001"
                        >
                          Discovery Settings
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Data Usage
                        </Text>
                        <Text
                          className="text-base text-blue-A700"
                          size="txtGilroyMedium16BlueA700"
                        >
                          Display & Theme
                        </Text>
                      </div>
                      <Line className="bg-blue-A700 h-0.5 md:ml-[0] ml-[277px] w-[37%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end p-6 sm:px-5 rounded-lg w-[42%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[7px] w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Brightness level
                </Text>
                <div className="flex flex-col items-center justify-start mt-2 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-start p-2"
                    style={{
                      backgroundImage: "url('images/img_group10244.svg')",
                    }}
                  >
                    <Text
                      className="mb-[5px] text-[10.47px] text-black-900_02"
                      size="txtGilroySemiBold1047"
                    >
                      48%
                    </Text>
                  </div>
                  <SeekBar
                    inputValue={[50.57]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue-A700 border-[1.5px] border-solid bg-gray-50_03 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-6 mt-1 rounded w-full"
                    trackClassName="h-1.5 flex rounded w-full"
                  />{" "}
                </div>
                <div className="flex flex-col items-start justify-start mt-[29px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Theme
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                    <Text
                      className="mt-[5px] text-base text-blue_gray-900"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Light
                    </Text>
                    <div className="bg-blue-A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                      <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[17px] w-full">
                    <Text
                      className="mt-[3px] text-base text-blue_gray-900"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Dark
                    </Text>
                    <div className="bg-white-A700 border border-blue_gray-200 border-solid h-6 rounded-[50%] w-6"></div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[18px] w-full">
                    <Text
                      className="mt-[3px] text-base text-blue_gray-900"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Device theme
                    </Text>
                    <div className="bg-white-A700 border border-blue_gray-200 border-solid h-6 rounded-[50%] w-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayandthemePage;
