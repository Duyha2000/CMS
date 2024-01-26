import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const KeywordSearchPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                className="h-[35px]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start md:ml-[0] ml-[270px] w-auto">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-16"
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
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-[69px]"
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
              </List>
              <Text
                className="text-base text-gray-900 w-[121px]"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <Img
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
              src="images/img_profileimglarg.png"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-10 items-center justify-start mb-[562px] md:px-5 w-[38%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Search
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Input
              name="InputField"
              placeholder="Search"
              value={inputfieldvalue}
              onChange={(e) => setInputfieldvalue(e)}
              className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex rounded-md w-auto"
              suffix={
                inputfieldvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                    onClick={() => setInputfieldvalue("")}
                    fillColor="#bac1ce"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                    src="images/img_search_blue_A201.svg"
                    alt="search"
                  />
                )
              }
              shape="round"
            ></Input>
            <List
              className="flex flex-col gap-6 items-center rounded-lg w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col items-center justify-start pt-[5px] rounded-lg w-[92%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Recent Search
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[77px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Designer
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[87px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Developer
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[118px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Quality Analyst
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[75px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Business
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[75px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Business
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-end pt-[5px] rounded-lg w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Most Search
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[87px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Developer
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[77px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Designer
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[75px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Business
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[118px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Quality Analyst
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[118px] rounded-lg text-center text-sm"
                      shape="round"
                      color="blue_50"
                      size="md"
                    >
                      Quality Analyst
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeywordSearchPage;
