document.getElementById("mathFun").addEventListener("click", () => {
  number();
});
async function number() {
  try {
    let getdata = await fetch("http://numbersapi.com/random/trivia");
    let resdata = await getdata.text();
    console.log(resdata);
    document.getElementById("displayDiv").innerText = resdata;
  } catch (error) {
    console.log("Error Fetching Data", error);
    document.getElementById("displayDiv").innerText = "Error Fetching Data";
  }
}
