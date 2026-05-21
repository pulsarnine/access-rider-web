var sharing = String(localStorage.getItem("sharing"));
sharing = sharing.substring(1, sharing.length-1);

let userChoice = String()

// If the letter is "c"
if (sharing === "y" || sharing ==="Y") {
  userChoice = "I am happy for this document to be shared with other relevant parties. Please contact me over email/phone to discuss any questions and I would be happy to clarify.";

// If the letter is "b" or "d"
} else if (sharing === "n" || sharing === "N") {
  userChoice = "Please do not share this document without my prior knowledge and given consent. ";

// If the letter is anything else
} else {
  userChoice = '';
} 

export default userChoice