import React, { ReducerState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>{skill}</Text>
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
