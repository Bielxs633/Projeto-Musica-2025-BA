'use strict'

async function postPlano(plano){
    const url = `http://localhost:8080/v1/controle-musicas/plano`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plano)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarPlano(){
    const url = 'http://localhost:8080/v1/controle-musicas/plano'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarPlano(id){
    const url = `http://localhost:8080/v1/controle-musicas/plano/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putPlano(id, plano){
    const url = `http://localhost:8080/v1/controle-musicas/plano/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plano)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deletePlano(id){
    const url = `http://localhost:8080/v1/controle-musicas/plano/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const plano = {
    "nome": "Premiun",
    "preco": "R$ 10,00",
    "beneficios": "oferece vários benefícios, incluindo a audição de música sem anúncios, a possibilidade de ouvir música offline e a reprodução de músicas na ordem que você escolher, além de áudio de alta qualidade.."
}

const update = {
    "nome": "Free",
    "preco": "R$ 00,00",
    "beneficios": "tem nada"
}