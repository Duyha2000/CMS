import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const FacebookSigninPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[186px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[132px] w-1/2 md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_2.svg"
            alt="Group"
          />
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Email"
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-full"
                type="email"
                shape="round"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Password
              </Text>
              <Input
                name="Group10198 One"
                placeholder="Enter Password"
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-full"
                type="password"
                shape="round"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[381px] mt-[15px] text-blue-A700 text-lg"
            >
              <Text size="txtGilroyMedium18BlueA700">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
              shape="round"
              color="blue_A700"
            >
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a href="javascript:" className="text-base text-blue_gray-200">
                <Text size="txtGilroyRegular16Bluegray200">
                  Or continue with
                </Text>
              </a>
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-[29px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[256px]"
                leftIcon={
                  <Img
                    className="h-6 ml-[35px] mr-2 my-[13px]"
                    src="images/img_instagram_1.png"
                    alt="instagram 1"
                  />
                }
                shape="round"
                color="blue_A700"
                size="2xl"
                variant="outline"
              >
                <div className="font-medium text-base text-left">Instagram</div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[256px]"
                leftIcon={
                  <div className="h-6 ml-[35px] mr-2 pt-1 pl-[9px] pr-[3px] w-6 bg-blue-700 rounded-[3px] my-[13px] flex justify-center items-center">
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </div>
                }
                shape="round"
                color="blue_A700"
                size="2xl"
                variant="outline"
              >
                <div className="font-medium text-base text-left">Facebook</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookSigninPage;
