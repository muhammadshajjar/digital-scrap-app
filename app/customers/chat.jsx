import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../../constants/Colors";

// Import Dialogflow_V2 only if the platform is Android
let Dialogflow_V2;
if (Platform.OS === "android") {
  Dialogflow_V2 = require("react-native-dialogflow").Dialogflow_V2;
}

import { dialogflowConfig } from "./env";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Bot = {
  _id: 4,
  name: "Digital Scrap Bot",
  avatar: require("../../assets/images/chatbot-profile.png"),
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Hello! Welcome to Digital Scrap. I'm here to assist you. How can I help you today?`,
      createdAt: new Date(),
      user: Bot,
    },
  ]);

  useEffect(() => {
    // Initialize Dialogflow only if the platform is Android
    if (Platform.OS === "android") {
      Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
      );
    }
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, messages);
    });

    const sendBotResponse = (text) => {
      let msg = {
        _id: Math.random().toString(),
        text,
        createdAt: new Date(),
        user: Bot,
      };
      setMessages((previousMessages) => {
        return GiftedChat.append(previousMessages, [msg]);
      });
    };

    const handleGoogleResponse = (result) => {
      let text = result.queryResult.fulfillmentMessages[0].text.text[0];
      sendBotResponse(text);
    };

    // Only execute Dialogflow requestQuery if the platform is Android
    if (Platform.OS === "android") {
      let msg = messages[0].text;
      Dialogflow_V2.requestQuery(
        msg,
        (result) => {
          handleGoogleResponse(result);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      sendBotResponse(
        "🌟 Thank you for reaching out to us! ✨ Unfortunately, at this moment, our AI-powered ChatBot 🤖 is only available on Android devices. We're actively working to bring this amazing feature to iOS as well! 📱 Stay tuned for exciting updates! In the meantime, feel free to explore other awesome features on our app! 💬🎉"
      );
    }
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: COLORS.primaryGreen,
          },
        }}
        textStyle={{
          left: {
            color: "#fff",
            fontFamily: "Montserrat-Regular",
          },
          right: {
            fontFamily: "Montserrat-Regular",
          },
        }}
      />
    );
  };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View style={styles.customHeader}>
        <Text style={styles.headerTxt}>AI-Powered ChatBot 🤖</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.goBackBtn}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingTop: 15 }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primaryBg },
  customHeader: {
    backgroundColor: COLORS.primaryGreen,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  headerTxt: {
    fontFamily: "Montserrat-SemiBold",
    color: "white",
    fontSize: 17,
  },
  goBackBtn: {
    fontFamily: "Montserrat-Medium",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
  },
});
