import { View, TextInput } from "react-native";
import React from "react";

import { COLORS } from "../../constants/Colors";

const AuthInput = ({
  placeholder,
  keyboardType,
  icon,
  inputType,
  onBlur,
  onChange,
  value,
}) => {
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
        secureTextEntry={inputType === "password"}
        keyboardType="default"
        style={{ flex: 1, marginLeft: 6, fontSize: 15 }}
        autoCapitalize="none"
      />
    </View>
  );
};

export default AuthInput;
