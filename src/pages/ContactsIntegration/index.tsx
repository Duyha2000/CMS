import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ContactsIntegrationPage: React.FC = () => {
  const [group10337value, setGroup10337value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_3.svg"
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
                className="sm:mt-0 mt-[5px] text-base text-gray-900"
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
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1120px] mb-[236px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Contacts
            </Text>
            <Input
              name="Group10337"
              placeholder="Search Contacts"
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
          <Button
            className="flex h-9 items-center justify-center rounded-lg w-9"
            shape="round"
            color="white_A700"
            size="md"
          >
            <Img src="images/img_send.svg" alt="send" />
          </Button>
          <div className="md:gap-5 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[55%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Rose J. Henry
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[48%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_50X50.png"
                  alt="ProfileImgLarg One"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Kai Caudle
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_1.png"
                  alt="ProfileImgLarg Two"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Carmelo Rousseau
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[45%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_2.png"
                  alt="ProfileImgLarg Three"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Ali Comer
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-3/5 md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_3.png"
                  alt="ProfileImgLarg Four"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jacklyn Kovach
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[57%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_4.png"
                  alt="ProfileImgLarg Five"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Landon Mosby
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_5.png"
                  alt="ProfileImgLarg Six"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Man Marin
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[53%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_6.png"
                  alt="ProfileImgLarg Seven"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Benito Nickel
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-end p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-3/5 md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_7.png"
                  alt="ProfileImgLarg Eight"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Angelyn Weiner
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[55%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg Nine"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Rose J. Henry
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[48%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_50X50.png"
                  alt="ProfileImgLarg Ten"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Kai Caudle
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_1.png"
                  alt="ProfileImgLarg Eleven"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Carmelo Rousseau
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[45%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_2.png"
                  alt="ProfileImgLarg Twelve"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Ali Comer
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-3/5 md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_3.png"
                  alt="ProfileImgLarg Thirteen"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jacklyn Kovach
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[57%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_4.png"
                  alt="ProfileImgLarg Fourteen"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Landon Mosby
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_5.png"
                  alt="ProfileImgLarg Fifteen"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Man Marin
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[53%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_6.png"
                  alt="ProfileImgLarg Sixteen"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Benito Nickel
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-end p-2.5 rounded-md w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-3/5 md:w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_profileimglarg_7.png"
                  alt="ProfileImgLarg Seventeen"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Angelyn Weiner
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsIntegrationPage;
