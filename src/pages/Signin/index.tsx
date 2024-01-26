import React from "react";

import { Button, Img, Input, Text } from "components";

const SigninPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[200px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[228px] w-[51%] md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_7.svg"
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
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
