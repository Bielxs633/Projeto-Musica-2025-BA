'use strict'

async function postVigencia(vigencia){
    const url = `http://localhost:8080/v1/controle-musicas/vigencia`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vigencia)
    }
    const response = await fetch(url, options)
    return response.ok

}

export async function getListarVigencia(){
    const url = 'http://localhost:8080/v1/controle-musicas/vigencia'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export async function getBuscarVigencia(id){
    const url = `http://localhost:8080/v1/controle-musicas/vigencia/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function putVigencia(id, vigencia){
    const url = `http://localhost:8080/v1/controle-musicas/vigencia/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vigencia)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteVigencia(id){
    const url = `http://localhost:8080/v1/controle-musicas/vigencia/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const vigencia = {
    "data_inicio": "2008-02-15",
    "data_termino": "2011-02-15"
}

const update = {
    "data_inicio": "2008-02-15",
    "data_termino": "2013-06-13"
}