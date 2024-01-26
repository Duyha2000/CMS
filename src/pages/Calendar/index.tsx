import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CalendarPage: React.FC = () => {
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_2.svg"
                alt="Group10392"
              />
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 w-2/5 md:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
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
                  className="sm:mt-0 mt-[5px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1380px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[77%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row items-center justify-evenly w-[19%] sm:w-full">
                <Button
                  className="flex h-[46px] items-center justify-center rounded-bl-md rounded-tl-md w-[46px]"
                  color="blue_gray_50"
                  size="lg"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[92px] text-base text-center"
                  shape="square"
                  color="blue_gray_50"
                  size="xl"
                >
                  Today
                </Button>
                <Button
                  className="flex h-[46px] items-center justify-center rotate-[180deg] rounded-bl-md rounded-tl-md w-[46px]"
                  color="blue_gray_50"
                  size="lg"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft One"
                  />
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-row gap-6 items-start justify-between rounded-md w-[24%] sm:w-full">
                <Text
                  className="mt-[18px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Day
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[62px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="2xl"
                >
                  Week
                </Button>
                <Text
                  className="mt-3.5 text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Month
                </Text>
                <Text
                  className="mt-[13px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Year
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[9px] items-center justify-between w-full">
                <div className="flex flex-col gap-[59px] items-start justify-start">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    8 AM
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    9 AM
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    10 AM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    11 AM
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    12 AM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[9px] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    1 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    2 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    3 PM
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    5 PM
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-start p-[7px] w-full">
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtGilroyMedium12"
                        >
                          SUN
                        </Text>
                        <Text
                          className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtGilroySemiBold24Black90001"
                        >
                          21
                        </Text>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-center p-2 w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-400 text-xs"
                          size="txtGilroyMedium12"
                        >
                          MON
                        </Text>
                        <Text
                          className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtGilroySemiBold24Black90001"
                        >
                          22
                        </Text>
                      </div>
                    </List>
                    <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-center p-2">
                      <Text
                        className="mt-[3px] text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        THU
                      </Text>
                      <Text
                        className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        23
                      </Text>
                    </div>
                    <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-center p-2">
                      <Text
                        className="mt-[3px] text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        WED
                      </Text>
                      <Text
                        className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        24
                      </Text>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-center p-2 w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-400 text-xs"
                          size="txtGilroyMedium12"
                        >
                          THU
                        </Text>
                        <Text
                          className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtGilroySemiBold24Black90001"
                        >
                          25
                        </Text>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-start p-2 w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-400 text-xs"
                          size="txtGilroyMedium12"
                        >
                          FRI
                        </Text>
                        <Text
                          className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtGilroySemiBold24Black90001"
                        >
                          26
                        </Text>
                      </div>
                    </List>
                    <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex flex-col gap-[11px] items-start justify-center p-2">
                      <Text
                        className="mt-[3px] text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        SAT
                      </Text>
                      <Text
                        className="mb-[11px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        27
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[0] items-center pt-[158px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-green-600_01 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-amber-500 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-start pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-blue-A200 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-amber-500 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-blue-A200 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-green-600_01 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-start pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-blue-A200 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-[15%]"></div>
                      <div className="flex md:flex-1 flex-row items-center justify-center w-[29%] md:w-full">
                        <div className="bg-blue-50 border border-blue_gray-50 border-solid h-[79px] w-1/2"></div>
                        <div className="bg-gray-50_01 border border-blue_gray-50 border-solid h-[79px] w-1/2"></div>
                      </div>
                      <div className="bg-gray-50_01 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-start justify-center pr-[3px] py-[3px] w-[15%] md:w-full">
                        <Line className="bg-amber-500 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[22px] mt-1">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-1 flex-col gap-6 items-start justify-start mb-[15px] md:mt-0 mt-[76px] p-3 rounded-md w-[22%] md:w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start mt-1 w-full">
              <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                <Button
                  className="flex h-[34px] items-center justify-center w-[34px]"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    src="images/img_arrowdown_bluegray_903.svg"
                    alt="arrowdown Two"
                  />
                </Button>
                <Text
                  className="mt-2 text-blue_gray-900 text-xl"
                  size="txtGilroyMedium20"
                >
                  September 2021
                </Text>
                <Button
                  className="flex h-[34px] items-center justify-center rotate-[-180deg] w-[34px]"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    src="images/img_arrowdown_bluegray_903.svg"
                    alt="arrowdown Three"
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    SUN
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    MON
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    TUE
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    WED
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    THU
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    FRI
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-900"
                    size="txtGilroySemiBold10"
                  >
                    SAT
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        31
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        1
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        2
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        3
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        4
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        5
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center md:ml-[0] ml-[37px] mt-1 w-[68%] md:w-full">
                      <Img
                        className="h-1 w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots One"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Two"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Three"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Four"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[11px] w-[96%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        7
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        8
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        9
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        10
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        11
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        12
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        13
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center md:ml-[0] ml-[37px] mt-1 w-[68%] md:w-full">
                      <Img
                        className="h-1 w-4"
                        src="images/img_eventdots_green_601.svg"
                        alt="EventDots Five"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Six"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Seven"
                      />
                      <div className="bg-green-600_01 h-1 ml-7 rounded-[50%] w-1"></div>
                      <Img
                        className="h-1 ml-7 w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Eight"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[11px] w-[98%] md:w-full">
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        14
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        15
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        16
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        17
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        18
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        19
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        20
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-1 w-[82%] md:w-full">
                      <Img
                        className="h-1 w-2.5"
                        src="images/img_eventdots_green_601_4X10.svg"
                        alt="EventDots Nine"
                      />
                      <div className="bg-orange-A700 h-1 ml-[31px] rounded-[50%] w-1"></div>
                      <Img
                        className="h-1 ml-7 w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Ten"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Eleven"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Twelve"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Thirteen"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-between mt-1 w-full">
                      <div className="flex flex-col items-end justify-start mb-1 mt-[7px] w-[83%]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            21
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            22
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            23
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            24
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            25
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroySemiBold12"
                          >
                            26
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-end mt-1 w-[83%] md:w-full">
                          <Img
                            className="h-1 w-4"
                            src="images/img_eventdots.svg"
                            alt="EventDots Fourteen"
                          />
                          <Img
                            className="h-1 ml-[25px] w-2.5"
                            src="images/img_eventdots_4X10.svg"
                            alt="EventDots Fifteen"
                          />
                          <Img
                            className="h-1 ml-[25px] w-4"
                            src="images/img_eventdots.svg"
                            alt="EventDots Sixteen"
                          />
                          <Img
                            className="h-1 ml-[22px] w-4"
                            src="images/img_eventdots.svg"
                            alt="EventDots Seventeen"
                          />
                          <Img
                            className="h-1 ml-[22px] w-4"
                            src="images/img_eventdots.svg"
                            alt="EventDots Eighteen"
                          />
                        </div>
                      </div>
                      <div className="bg-blue-A700 flex flex-col items-center justify-start p-1 rounded-[14px] w-auto">
                        <Text
                          className="text-gray-50_01 text-xs"
                          size="txtGilroySemiBold12Gray5001"
                        >
                          27
                        </Text>
                        <div className="bg-gray-50_01 h-1 rounded-[50%] w-1"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[7px] w-[96%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        28
                      </Text>
                      <Text
                        className="ml-7 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        1
                      </Text>
                      <Text
                        className="ml-8 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        2
                      </Text>
                      <Text
                        className="ml-[31px] text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        3
                      </Text>
                      <Text
                        className="ml-[30px] text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        4
                      </Text>
                      <Text
                        className="ml-[30px] text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        5
                      </Text>
                      <Text
                        className="ml-[30px] text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] mt-1 w-4/5 md:w-full">
                      <div className="bg-blue-A700 h-1 rounded-[50%] w-1"></div>
                      <Img
                        className="h-1 ml-[31px] w-2.5"
                        src="images/img_eventdots_green_601_4X10.svg"
                        alt="EventDots Nineteen"
                      />
                      <div className="bg-orange-A700 h-1 ml-[31px] rounded-[50%] w-1"></div>
                      <Img
                        className="h-1 ml-7 w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots Twenty"
                      />
                      <div className="bg-green-600_01 h-1 ml-7 rounded-[50%] w-1"></div>
                      <Img
                        className="h-1 ml-[31px] w-2.5"
                        src="images/img_eventdots_4X10.svg"
                        alt="EventDots TwentyOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[11px] w-[96%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        7
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        8
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        9
                      </Text>
                      <Text
                        className="h-3 text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        10
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        11
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        12
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroySemiBold12"
                      >
                        13
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[37px] mt-1 w-[67%] md:w-full">
                      <Img
                        className="h-1 w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots TwentyTwo"
                      />
                      <Img
                        className="h-1 ml-[25px] w-2.5"
                        src="images/img_eventdots_4X10.svg"
                        alt="EventDots TwentyThree"
                      />
                      <Img
                        className="h-1 ml-[25px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots TwentyFour"
                      />
                      <Img
                        className="h-1 ml-[22px] w-4"
                        src="images/img_eventdots.svg"
                        alt="EventDots TwentyFive"
                      />
                      <Img
                        className="h-1 ml-[25px] w-2.5"
                        src="images/img_eventdots_orange_A700.svg"
                        alt="EventDots TwentySix"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-6 mb-36 md:ml-[0] ml-[3px] w-[52%]"
              orientation="vertical"
            >
              <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1 w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroySemiBold16Black90001"
                  >
                    TODAY
                  </Text>
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] justify-start pt-1 w-[97%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start mr-[15px] w-[89%] md:w-full">
                    <div className="bg-blue-A700 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Financial Update
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1 w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16"
                  >
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] justify-start pt-1 w-[97%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start mr-[15px] w-[89%] md:w-full">
                    <div className="bg-amber-500_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Financial Update
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1 w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16"
                  >
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] justify-start pt-1 w-[97%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start mr-[15px] w-[89%] md:w-full">
                    <div className="bg-green-600_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Financial Update
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1 w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16"
                  >
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] justify-start pt-1 w-[97%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start mr-[15px] w-[89%] md:w-full">
                    <div className="bg-blue-A700 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Financial Update
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
