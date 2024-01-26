import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, SeekBar, Text } from "components";

const DiscoverySettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392_6.svg"
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
          <div className="flex flex-1 flex-col md:gap-10 gap-[61px] items-center justify-start md:mt-0 mt-8 w-full">
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
              <div className="md:h-[212px] sm:h-[35px] h-[39px] pt-1 relative w-full">
                <Line className="absolute bg-gray-300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[4%] w-[73%]">
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
                  <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[34px] w-1/5 md:w-full">
                    <Text
                      className="text-base text-blue-A700"
                      size="txtGilroyMedium16BlueA700"
                    >
                      Discovery Settings
                    </Text>
                    <Line className="bg-blue-A700 h-0.5 w-full" />
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    Data Usage
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[34px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16Bluegray400"
                  >
                    Display & Theme
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg w-[42%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start pt-[7px] w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtGilroySemiBold18"
                  >
                    Select your search criteria
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-center justify-end pt-[5px] w-full">
                  <div className="flex flex-col items-start justify-start pb-1 w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Show me
                    </Text>
                    <div className="flex flex-row items-start justify-between mt-[15px] w-full">
                      <Text
                        className="mt-0.5 text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Men
                      </Text>
                      <div className="bg-white-A700 border-[0.83px] border-blue_gray-50 border-solid h-5 rounded-[2.5px] w-5"></div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                      <Text
                        className="mt-0.5 text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Women
                      </Text>
                      <Button
                        className="flex h-5 items-center justify-center rounded-[2.5px] w-5"
                        color="blue_A700"
                        size="xs"
                      >
                        <Img
                          className="h-4"
                          src="images/img_checkmark_20X20.svg"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between py-[5px] w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-lg w-auto"
                          size="txtGilroySemiBold18"
                        >
                          Maximum distance
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        120 Km
                      </Text>
                    </div>
                    <SeekBar
                      inputValue={[50.57]}
                      trackColors={["#0061ff", "#e0ebff"]}
                      thumbClassName="h-6 border-blue-A700 border-[1.5px] border-solid bg-gray-50_03 w-6 flex rounded-[50%] justify-center items-center"
                      className="flex h-6 rounded w-full"
                      trackClassName="h-1.5 flex rounded w-full"
                    />{" "}
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between pt-[7px] w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-lg w-auto"
                          size="txtGilroySemiBold18"
                        >
                          Age range
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        18-35
                      </Text>
                    </div>
                    <SeekBar
                      inputValue={[0, 0]}
                      trackColors={["#e0ebff", "#0061ff", "#e0ebff"]}
                      thumbClassName="h-6 border-blue-A700 border-[1.5px] border-solid bg-gray-50_03 w-6 flex rounded-[50%] justify-center items-center"
                      className="flex h-6 rounded w-full"
                      trackClassName="h-1.5 flex rounded w-full"
                    />{" "}
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

export default DiscoverySettingsPage;
