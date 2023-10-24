import React from 'react';
import QR from '../../public/assets/qrcode.png';
import Image from 'next/image';
const RightSideBar = () => {
  return (
    <section className="custom-scollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested for you</h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-subtle-medium text-light-1">Download mobile app</h3>
        <div className="mt-5">
          <Image src={QR} width={92} height={92} alt="qr" />
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
