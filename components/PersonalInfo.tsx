import React, { useState } from "react";
import { View, Image, Text, TextInput, Button } from "react-native";
import Styles from "./Styles";

const PersonalInfo = () => {
  const [name, setName] = useState("");

  return (
    <View style={Styles.personalInfoContainer}>
      <Image source={require("../assets/chatbot.png")} style={Styles.logo} />

      <View style={Styles.enterYourNameContainer}>
        <Text style={Styles.nameText}>Please, enter your name</Text>
        <TextInput 
          style={Styles.inputText} 
          placeholder={"Your name"} 
          onChangeText={(text) => setName(text)} 
          value={name} 
        />
      </View>

      <Button title="Start chatting!" onPress={() => {}} />
    </View>
  );
}

export default PersonalInfo;