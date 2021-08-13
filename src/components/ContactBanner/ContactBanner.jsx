import React from "react";
import ContactModal from "../../components/ContactModal/ContactModal";
import { LanguageContext } from "../../App";

function ContactBanner() {
  const { t } = React.useContext(LanguageContext);
  return (
    <div className="bg-mainbg py-12 -mb-5">
      <div className="bg-white border-box w-full py-4 mb-4">
        <p className="text-red font-sans text-3xl font-extralight text-center">
          {t("Upcycle your information about us")}
        </p>
        <div className="flex justify-center">
          <ContactModal />
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
