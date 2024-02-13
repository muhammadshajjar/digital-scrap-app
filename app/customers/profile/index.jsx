import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../../../components/ui/ProfileHeader";
import { CUSTOMERSSETTINGSOPTIONS } from "../../../lib/dummyData";
import SettingCard from "../../../components/ui/SettingCard";
import { COLORS } from "../../../constants/Colors";

const SettingsOption = ({ item }) => (
  <View>
    <Text style={styles.title}>{item?.title}</Text>
    <FlatList
      data={item?.options}
      renderItem={({ item }) => <SettingCard settingData={item} />}
      keyExtractor={(item) => Math.random().toString()}
    />
  </View>
);

const ProfileHome = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader mode="rider" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CUSTOMERSSETTINGSOPTIONS}
        renderItem={({ item }) => <SettingsOption item={item} />}
        keyExtractor={(item) => Math.random().toString()}
      />
    </View>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    marginTop: 24,
    marginBottom: 12,
    marginLeft: 14,
  },
});
