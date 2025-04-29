'use strict'

async function postMusica(musica){
    const url = `http://localhost:8080/v1/controle-musicas/musica`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarMusica(){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarMusica(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putMusica(id, musica){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteMusica(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const musica = {
        "nome": "Planos",
        "duracao": "03:26",
        "data_lancamento": "2015-02-15",
        "link": "http://link.mp3",
        "foto_capa": "http://foto.jpg",
        "letra": "teste"
}

const update = {
        "nome": "Teste do Update",
        "duracao": "03:26",
        "data_lancamento": "2015-02-15",
        "link": "http://link.mp3",
        "foto_capa": "http://foto.jpg",
        "letra": "teste"
}