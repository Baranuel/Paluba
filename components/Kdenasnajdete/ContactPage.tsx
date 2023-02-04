import React from "react";
import Heading from "../Heading";
import ContactBanner from "./ContactBanner";

function ContactPage() {
  return (
    <div className="min-h-content h-screen bg-whiteBg  flex flex-col pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2">
      <Heading title="Kde nas Najdete" />
      <ContactBanner />
    </div>
  );
}

export default ContactPage;
