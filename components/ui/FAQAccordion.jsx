import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { COLORS } from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { EMAIL } from "../../lib/dummyData";

const FAQAccordion = ({ FAQS }) => {
  console.log(FAQS);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  const handleEmailUs = () => {
    Linking.openURL(`mailto:${EMAIL}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Need Help? Check Our FAQs</Text>
      {FAQS?.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity
            style={styles.questionContainer}
            onPress={() => toggleAccordion(index)}
          >
            <View>
              {expandedIndex === index ? (
                <Entypo
                  name="squared-minus"
                  size={24}
                  color={COLORS.primaryGreen}
                />
              ) : (
                <Entypo
                  name="squared-plus"
                  size={24}
                  color={COLORS.primaryGreen}
                />
              )}
            </View>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
      <Text style={styles.contactText} onPress={handleEmailUs}>
        Can't find the answer you're looking for?
        <Text style={styles.emailLink}>Email Us</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.primaryBg,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
  faqContainer: {
    marginTop: 20,
  },
  questionContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
  },
  question: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 6,
    lineHeight: 23,
  },
  answerContainer: {
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGreyBg,
    borderRadius: 8,
  },
  answer: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  contactText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Montserrat-Regular",
    padding: 10,
  },
  emailLink: {
    color: COLORS.primaryGreen,
    textDecorationLine: "underline",
  },
});

export default FAQAccordion;
