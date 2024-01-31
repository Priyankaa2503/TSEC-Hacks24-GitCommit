import React from "react";
import avatar from "../../assets/avatar11.png";
import banner from "../../assets/banner.png";
import Card from "../components/card";
import Header from "../components/Header";

const Progress = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-6 p-6">
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Flooring</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Adela Parkson</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Adela Parkson</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Adela Parkson</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Adela Parkson</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-64 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {/* <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div> */}
          </div>

          {/* Name and position */}
          <div className="mt-4 flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-700 ">Adela Parkson</h4>
            <p className="text-base font-normal text-gray-600">
              Product Manager
            </p>
          </div>

          {/* Post followers */}
          <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">17</p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">9.7K</p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-700 ">434</p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Progress;
