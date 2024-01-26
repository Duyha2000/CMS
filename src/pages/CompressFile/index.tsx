import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CompressFilePage: React.FC = () => {
  const [group10337value, setGroup10337value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_11.svg"
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
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1120px] mb-52 mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Files
            </Text>
            <Input
              name="Group10337"
              placeholder="Search Files"
              value={group10337value}
              onChange={(e) => setGroup10337value(e)}
              className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex sm:flex-1 sm:w-full"
              suffix={
                group10337value?.length > 0 ? (
                  <CloseSVG
                    className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                    onClick={() => setGroup10337value("")}
                    fillColor="#bac1ce"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    className="mt-[17px] mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                    src="images/img_search_blue_A201.svg"
                    alt="search"
                  />
                )
              }
              shape="round"
            ></Input>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start w-[48%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex flex-col gap-6 items-center justify-start mb-2.5 w-[81%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Compress Original File Into Your Required Size
                </Text>
                <div className="flex flex-col items-start justify-end pt-1.5 w-[24%] md:w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start pb-[5px] w-full">
                    <Img
                      className="h-[65px] w-[65px]"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Image.png
                      </Text>
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16Bluegray400"
                      >
                        (100kb)
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[41px] md:ml-[0] ml-[27px] mt-3.5 w-[41px]"
                    src="images/img_arrowdown_41X41.svg"
                    alt="arrowdown Two"
                  />
                  <div className="flex flex-col gap-[22px] items-center justify-start mt-5 pb-[5px] w-full">
                    <Img
                      className="h-[65px] w-[65px]"
                      src="images/img_vector.svg"
                      alt="Vector One"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18"
                      >
                        Image.png
                      </Text>
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16Bluegray400"
                      >
                        (20kb)
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[535px] sm:min-w-full text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompressFilePage;
