import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: "#424242",
  },
  linksBar: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  linkButton: {
    backgroundColor: "aqua",
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
  question: {
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'aqua',
  },
  submit: {
    fontSize: 25,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  wrong: {
    fontSize: 25,
    marginRight: "auto",
    marginLeft: "auto",
    color: "red",
    marginBottom: 10,
  },
  guessGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },

})

export default Styles