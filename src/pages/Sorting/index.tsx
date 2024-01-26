import React from "react";

import { Button, Img, List, Text } from "components";

const SortingPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1268px] mb-[519px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  className="h-[35px]"
                  src="images/img_group10392_21.svg"
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
              <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
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
          <div className="sm:h-[1368px] h-[371px] md:h-[696px] relative w-full">
            <div className="absolute flex flex-col gap-[25px] h-max inset-[0] items-start justify-center m-auto rounded-[5px] w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtGilroySemiBold20"
              >
                Image Library
              </Text>
              <List
                className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[3px] rounded-[5px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle10.png"
                    alt="RectangleTen"
                  />
                  <Text
                    className="mt-3.5 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle10_257X296.png"
                    alt="RectangleTen One"
                  />
                  <Text
                    className="mt-3.5 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle10_1.png"
                    alt="RectangleTen Two"
                  />
                  <Text
                    className="mt-3.5 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                  <Img
                    className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle10_2.png"
                    alt="RectangleTen Three"
                  />
                  <Text
                    className="mt-3.5 text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-col gap-3 items-center justify-start right-[0] top-[0] w-[11%]">
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row gap-[26px] items-center justify-between p-[5px] rounded-md w-full">
                <Text
                  className="ml-[11px] mt-[5px] text-base text-blue_gray-400"
                  size="txtGilroySemiBold16Bluegray400"
                >
                  Sort by
                </Text>
                <Img
                  className="h-5 mr-[11px] my-[3px] w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="bg-white-A700 h-[42px] justify-center pl-4 sm:pr-5 pr-[35px] py-[13px] rounded-tl-lg rounded-tr-lg text-blue_gray-400 text-sm w-[131px]"
                  size="txtGilroySemiBold14Bluegray400"
                >
                  Date
                </Text>
                <Text
                  className="bg-gray-50_02 h-[42px] justify-center pl-4 sm:pr-5 pr-[35px] py-[13px] text-blue_gray-400 text-sm w-[131px]"
                  size="txtGilroySemiBold14Bluegray400"
                >
                  Size
                </Text>
                <Text
                  className="bg-white-A700 h-[42px] justify-center pl-4 sm:pr-5 pr-[35px] py-[13px] rounded-bl-lg rounded-br-lg text-blue_gray-400 text-sm w-[131px]"
                  size="txtGilroySemiBold14Bluegray400"
                >
                  Name
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingPage;
