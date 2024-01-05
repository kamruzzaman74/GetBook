'use client';
import React from 'react';
import { FaBook } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import backgroundPic from '../photo/kk.jpg';

function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* Background Image */}
      <Image
        src={backgroundPic}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center bg-purple-100 rounded-md p-4 lg:w-2/5 h-1/4 z-10">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800 items-center">
          <FaBook className="mr-2" />
          <p>BookGet</p>
        </div>
        <div>
          <Link href="/store"
            className="bg-purple-700 text-white rounded-sm p-2">Take me to the store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
