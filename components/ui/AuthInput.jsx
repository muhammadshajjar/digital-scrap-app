import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/Colors";

const AuthInput = ({
  placeholder,
  icon,
  inputType,
  onBlur,
  onChange,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey,
        paddingVertical: 12,
        marginTop: 13,
      }}
    >
      {icon}
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={inputType === "password" ? !showPassword : false}
        keyboardType="default"
        style={{ flex: 1, marginLeft: 6, fontSize: 15 }}
        autoCapitalize="none"
      />
      {inputType === "password" && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "ios-eye" : "ios-eye-off"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInput;
