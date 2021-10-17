import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SkillCard = ({ children, key }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={key}>
      <Text style={styles.textSkill}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default SkillCard;
