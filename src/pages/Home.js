import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  const handleAddNewSkill = () => {
    setMySkill((oldSkills) => [...oldSkills, newSkill]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Skills</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills:</Text>

      {mySkill.map((skill) => (
        <TouchableOpacity style={styles.buttonSkill} key={skill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
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

export default Home;
