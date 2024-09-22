import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6">
      <Image
        src="/images/barcode.png"
        alt="바코드 이미지"
        width={294}
        height={76}
        priority
        className="mx-auto"
      />
    </footer>
  );
};

export default Footer;
