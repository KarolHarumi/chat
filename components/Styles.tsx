import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD7E5',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  // personal info
  personalInfoContainer: {
    width: "80%",
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  logo: { 
    width: "auto", 
    resizeMode: "contain" 
  },

  enterYourNameContainer: {
    alignSelf: "center",
    width: "100%",
  },

  nameText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputText: {
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 10,
    fontSize: 18,
    padding: 16,
    backgroundColor: "#fff",
  },

});