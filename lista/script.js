
const myHeaders = {
    "Content-Type" : "application/json"
}
async function lista() { 
    const res = await fetch("http://localhost:3001/produtos")
    const prod = await res.json()
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    prod.forEach((produtos) => {
        ul.insertAdjacentHTML("beforeend",
        `<li id="lista-li">
            <p>Nome: ${produtos.nome}</p>
            <p>Custo: R$ ${parseFloat(produtos.custo).toFixed(2)}</p>
            <p>Venda: R$ ${parseFloat(produtos.valor).toFixed(2)}</p>
            <br>
        </li>`)        
    });
    
}
lista()