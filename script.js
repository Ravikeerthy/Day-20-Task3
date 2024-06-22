document.getElementById("mathFun").addEventListener("click", () => {
    number();
    
  });
  async function number() {
    let getdata = await fetch("http://numbersapi.com/random/trivia");
    let resdata = await getdata.text();
    console.log(resdata);
    document.getElementById("displayDiv").innerText = resdata;
  
    
  }
  