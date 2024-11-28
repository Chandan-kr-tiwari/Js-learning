const url= "https://vedicscriptures.github.io/chapter/3"


const fact =document.querySelector("#factpara")
const btn =document.querySelector("button")
async function getverse(){
    const response = await fetch(url)
    console.log(response) // json format
    const data = await response.json()
    // console.log(data.summary.en)
     fact.innerText=data.summary.en
}

btn.addEventListener("click",getverse)