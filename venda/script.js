import { baseurl } from "../api.js";
async function selectProduto(){
    const produtos = await fetch(`${baseurl}/produtos`)
    const produtosJson = await produtos.json()
    const selecione = document.querySelector("select")
    produtosJson.forEach(element => {
        selecione.insertAdjacentHTML("beforeend",`
        <option value="${element.id}">${element.nome}</option> `)
    });
}
selectProduto()
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    cadastrarVenda()
})
const myHeaders = {
    "Content-Type": "application/json", 
  };