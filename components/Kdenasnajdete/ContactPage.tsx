import React from "react";
import Heading from "../Heading";
import ContactBanner from "./ContactBanner";

interface ContactPageProps {
  isMobile: boolean;
}

function ContactPage({ isMobile }: ContactPageProps) {
  return (
    <div className="min-h-fit bg-whiteBg  flex flex-col pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2">
      <Heading title="Kde nas Najdete" />
      <ContactBanner isMobile={isMobile} />
    </div>
  );
}

export default ContactPage;
