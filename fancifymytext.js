function makeBigger() {
    alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "4em";
  }
  
  function fancifyText() {
    const textArea = document.getElementById("text-area");
    const fancyRadio = document.getElementById("fancy");
  
    if (fancyRadio.checked) {
      alert("FancyShmancy selected!");
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      textArea.style.backgroundColor = "#f0f8ff"; 
    } else {
      alert("BoringBetty selected!");
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
      textArea.style.backgroundColor = "white";
    }
  }
  
  function mooify() {
    let textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
  
    for (let i = 0; i < sentences.length; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0 && words[words.length - 1] !== "") {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
  
    textArea.value = sentences.join(". ");
  }
  