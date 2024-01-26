import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const LiveChatPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 font-gilroy h-[1080px] mx-auto relative w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] h-full items-center justify-start max-w-[1266px] mt-[35px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  className="h-[35px]"
                  src="images/img_group10392_14.svg"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[89%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[46%] md:w-full">
              <Text
                className="leading-[52.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
                size="txtGilroySemiBold32"
              >
                Got any quieries? Chat with our team.
              </Text>
              <div className="flex flex-col gap-[11px] items-start justify-start mt-[31px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Address
                </Text>
                <Text
                  className="leading-[29.00px] text-blue_gray-700 text-lg w-full"
                  size="txtGilroyMedium18Bluegray700"
                >
                  4517 Washington Ave. Manchester, Kentucky Thornridge Cir.
                  Syracuse, 39495{" "}
                </Text>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start mt-6 pr-0.5 pt-0.5 w-2/5 md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[99%] md:w-full">
                  <Img
                    className="h-6 mb-0.5 w-6"
                    src="images/img_envelopeoutlin.svg"
                    alt="envelopeOutlin"
                  />
                  <Text
                    className="mt-1 text-blue_gray-700 text-lg"
                    size="txtGilroyMedium18Bluegray700"
                  >
                    contact@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[85%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-blue_gray-700 text-lg"
                    size="txtGilroyMedium18Bluegray700"
                  >
                    +91 01234567890
                  </Text>
                </div>
                <Img
                  className="h-6 w-[73%]"
                  src="images/img_group11028.svg"
                  alt="Group11028"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end pt-[5px] w-[46%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Name
                </Text>
                <Input
                  name="Group10198"
                  placeholder="Jane Cooper"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Email
                </Text>
                <Input
                  name="email One"
                  placeholder="jane@gmail.com"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  type="email"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Company name
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-end p-3 rounded-lg w-full">
                  <Text
                    className="mt-[7px] text-base text-blue_gray-300"
                    size="txtGilroyMedium16Bluegray300"
                  >
                    Enter your company name
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18"
                >
                  Message
                </Text>
                <TextArea
                  className="bg-white-A700 border border-blue_gray-100 border-solid flex pb-[35px] pl-3 pt-[19px] rounded-lg w-full"
                  name="Group10198 One"
                  placeholder="Enter message"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-6 text-base text-center"
                shape="round"
                color="blue_A700"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-900_4c flex flex-col h-full inset-[0] items-end justify-center m-auto p-[86px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-end justify-start mt-[234px] w-[36%] md:w-full">
            <div className="bg-white-A700 flex flex-col gap-[25px] items-center justify-start pb-[29px] rounded-[12px] shadow-bs7 w-full">
              <Input
                name="Group11039"
                placeholder="Chat bot"
                className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex rounded-tl-[12px] rounded-tr-[12px] w-full"
                suffix={
                  <Img
                    className="h-6 ml-[35px] mr-4 my-[15px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                }
                color="black_900_02"
              ></Input>
              <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-[59%] md:w-full">
                  <Img
                    className="h-10 md:h-auto mb-[3px] mt-[57px] rounded-[50%] w-10"
                    src="images/img_profileimglarg_40X40.png"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-4/5">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[46px] items-end justify-end p-[15px]"
                      style={{
                        backgroundImage: "url('images/img_group11041.svg')",
                      }}
                    >
                      <Text
                        className="mr-2 text-black-900 text-sm"
                        size="txtGilroyMedium14Black900"
                      >
                        Hi Im DhiWise bot.
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[46px] items-end justify-end p-3 w-full"
                      style={{
                        backgroundImage: "url('images/img_group11041.svg')",
                      }}
                    >
                      <Text
                        className="mr-3 mt-[5px] text-black-900 text-sm"
                        size="txtGilroyMedium14Black900"
                      >
                        How can i help you?
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-center justify-end ml-5 md:ml-[0] mt-[282px] rounded-[23px] w-[95%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[149px] rounded-[23px] text-center text-sm"
                    color="blue_A700"
                    size="xl"
                    variant="outline"
                  >
                    Lorem ipsum 1 ?
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[94px] rounded-[23px] text-center text-sm"
                    color="blue_A700"
                    variant="outline"
                  >
                    Que 2?
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[117px] rounded-[23px] text-center text-sm"
                    color="blue_A700"
                    variant="outline"
                  >
                    Question 3
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-4 w-full">
                  <Input
                    name="Group9684"
                    placeholder="type yor question here"
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 rounded-md w-[87%] sm:w-full"
                    prefix={
                      <Img
                        className="h-5 my-3.5 mx-4"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    size="md"
                  ></Input>
                  <Button
                    className="border border-blue_gray-100 border-solid flex h-12 items-center justify-center w-12"
                    shape="round"
                    color="white_A700"
                    size="xl"
                  >
                    <Img
                      className="h-5"
                      src="images/img_send_48X48.svg"
                      alt="send"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[110px] rounded-[25px] text-base text-center"
              color="black_900_04"
              size="xl"
            >
              Help
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChatPage;
