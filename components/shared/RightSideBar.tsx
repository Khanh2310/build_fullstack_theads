import React from 'react';
import QR from '../../public/assets/qr-code.png';
import Image from 'next/image';
const RightSideBar = () => {
  return (
    <section className="custom-scollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested for you</h3>
      </div>
      <div className="flex flex-1 flex-col ">
        <h3 className="text-subtle-medium text-light-1 mb-5">
          Download mobile app
        </h3>
      </div>
    </section>
  );
};

export default RightSideBar;
