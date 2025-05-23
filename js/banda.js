'use strict'

async function postBanda(banda){
    const url = `http://localhost:8080/v1/controle-musicas/banda`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(banda)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarBanda(){
    const url = 'http://localhost:8080/v1/controle-musicas/banda'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarBanda(id){
    const url = `http://localhost:8080/v1/controle-musicas/banda/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putBanda(id, banda){
    const url = `http://localhost:8080/v1/controle-musicas/banda/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(banda)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteBanda(id){
    const url = `http://localhost:8080/v1/controle-musicas/banda/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const banda = {
    "nome": "Banda do Leonid",
    "membros": "teste",
    "data_criacao": "2008-02-15"
}

const update = {
    "nome": "Banda do Gabriel",
    "membros": "teste",
    "data_criacao": "2008-02-15"
}