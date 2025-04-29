'use strict'

async function postPlaylist(playlist){
    const url = `http://localhost:8080/v1/controle-musicas/playlist`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playlist)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarPlaylist(){
    const url = 'http://localhost:8080/v1/controle-musicas/playlist'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarPlaylist(id){
    const url = `http://localhost:8080/v1/controle-musicas/playlist/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putPlaylist(id, playlist){
    const url = `http://localhost:8080/v1/controle-musicas/playlist/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playlist)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deletePlaylist(id){
    const url = `http://localhost:8080/v1/controle-musicas/playlist/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const playlist = {
    "nome": "MIM MESMO",
    "data_criacao": "2008-02-15",
    "duracao": "1:00",
    "foto_capa": "http://foto.jpg"
}

const update = {
    "nome": "MIM MESMO MSM",
    "data_criacao": "2008-02-15",
    "duracao": "1:00",
    "foto_capa": "http://foto.jpg"
}
