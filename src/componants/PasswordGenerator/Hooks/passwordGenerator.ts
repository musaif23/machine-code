import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let generatePassword = (checkBoxData, length) => {
    let charSet = "";
    let createdPassword = "";

    const checkedData = checkBoxData.filter((element) => element.state);

    if (checkedData.length == 0) {
      setErrorMsg("plz select atleat one option");
    } else if (length == 0) {
      setErrorMsg("plz select length atleat 4");
    } else {
      setErrorMsg("");
      checkedData.forEach((element) => {
        switch (element.title) {
          case "Include Uppercase Letters":
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "Include Lowercase Letters":
            charSet += "abcdefghijklmnopqrstuvwxyz";
            break;

          case "Include Numbers":
            charSet += "0123456789";
            break;
          case "Include Symbols":
            charSet += "!@#$&?~";
            break;
          default:
            break;
        }
      });

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        createdPassword += charSet[randomIndex];
        // console.log(randomIndex, createdPassword);
      }
      setPassword(createdPassword);
    }
  };

  return { password, errorMsg, generatePassword };
};

export default usePasswordGenerator;
