'use strict'

async function postClassificacao(classificacao){
    const url = `http://localhost:8080/v1/controle-musicas/classificacao`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacao)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarClassificacao(){
    const url = 'http://localhost:8080/v1/controle-musicas/classificacao'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarClassificacao(id){
    const url = `http://localhost:8080/v1/controle-musicas/classificacao/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putClassificacao(id, classificacao){
    const url = `http://localhost:8080/v1/controle-musicas/classificacao/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacao)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteClassificacao(id){
    const url = `http://localhost:8080/v1/controle-musicas/classificacao/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const classificacao = {
    "nome": "Gabriel"
}

const update = {
    "nome": "Personalizada",
}