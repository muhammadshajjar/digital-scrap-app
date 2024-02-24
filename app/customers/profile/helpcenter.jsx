import React from "react";
import FAQAccordion from "../../../components/ui/FAQAccordion";
import { FAQSCUSTOMERS } from "../../../lib/dummyData";

const HelpCenter = () => {
  return <FAQAccordion FAQS={FAQSCUSTOMERS} />;
};

export default HelpCenter;
