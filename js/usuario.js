'use strict'

async function postUsuario(usuario){
    const url = `http://localhost:8080/v1/controle-musicas/usuario`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarUsuario(){
    const url = 'http://localhost:8080/v1/controle-musicas/usuario'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarUsuario(id){
    const url = `http://localhost:8080/v1/controle-musicas/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putUsuario(id, usuario){
    const url = `http://localhost:8080/v1/controle-musicas/usuario/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteUsuario(id){
    const url = `http://localhost:8080/v1/controle-musicas/usuario/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const usuario = {
    "nome": "Gabriel",
    "user_name": "Bielxs",
    "email": "gabriel@senai.com",
    "senha": "12345678"
}

const update = {
    "nome": "Gabriel",
    "user_name": "Bielxs",
    "email": "gabriel@senai.com",
    "senha": "87654321"
}
