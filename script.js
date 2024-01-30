const textArea = document.getElementById("textArea");
// if there is any text inside on the local storage shopw in browswr page
    const savedText = localStorage.getItem("user");
    if (savedText) {
      textArea.value = savedText;
    }
    textArea.addEventListener("input", function() {
      const inputText = textArea.value;
      localStorage.setItem("user", inputText);
    });