import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758296',
  },
  active: {
    backgroundColor: "#d5deeb",
  },
  linksBar: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  linkButton: {
    fontWeight: "700",
    fontSize: 30,
    borderColor: "black",
    borderWidth: 0,
    margin: 18,
  },
  headline: {
    fontSize: 50,
    textWeight: "700",
  },
  component: {
    width: "60%",
    margin: 50,
  },
  note: {
    color: "#b3d0ff",
    fontSize: 70,
  },
  question: {
    textAlign:"center",
    fontSize: 60,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 40,
  },
  guess: {
    width: 100,
    fontSize: 50,
    backgroundColor: "black",
    color: "white",
    fontWeight: "600",
    marginRight: "auto",
    marginLeft: "auto",
    margin: 5,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
  },
  checkbox: {
    backgroundColor: '#758296',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    fontSize: 25,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  wrong: {
    backgroundColor: "red",
  },
  guessGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
});
