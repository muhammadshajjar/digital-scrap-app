import { StyleSheet, Text, View } from "react-native";
import React from "react";

import FAQAccordion from "../../../components/ui/FAQAccordion";
import { FAQSRIDERS } from "../../../lib/dummyData";

const HelpCenter = () => {
  return <FAQAccordion FAQS={FAQSRIDERS} />;
};

export default HelpCenter;

const styles = StyleSheet.create({});
