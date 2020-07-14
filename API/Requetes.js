// SERVEURS/Requetes.js

const server_path = 'https://olympyxt.herokuapp.com';
// const server_path = 'http://localhost:3000'

export function getImageFromActuId(ActuId) {
  return '../Images/News.jpg';
}

export function getAllActusFromApi() {
  const url = server_path + '/api/actus';
  return fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getAllActusWithTextFromApi(searchedText) {
  const url = server_path + '/api/actus/text';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: searchedText }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getActuWithIdFromApi(idActu) {
  const url = server_path + '/api/actus/id';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idActu: idActu }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getAllEpreuvesFromApi() {
  // console.log('Recherche des épreuves disponibles sur la database')

  const url = server_path + '/api/epreuves';
  return fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getEpreuveWithIdFromApi(idEpreuve) {
  // console.log('Recherche de l epreuve sur la database')
  // console.log(idEpreuve)

  const url = server_path + '/api/epreuves/id';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idEpreuve: idEpreuve }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getAllEquipesFromApi() {
  // console.log('Recherche des équipes disponibles sur la database')

  const url = server_path + '/api/equipes';
  return fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getEquipeWithIdFromApi(idEquipe) {
  // console.log('Recherche de l equipe sur la database')
  // console.log(idEquipe)

  const url = server_path + '/api/equipes/id';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idEquipe: idEquipe }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getAllResultatsFromApi() {
  // console.log('Recherche des scores disponibles sur la database')

  const url = server_path + '/api/resultats';
  return fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getResultatsEpreuveWithIdFromApi(idEpreuve) {
  const url = server_path + '/api/resultats/id';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idEpreuve: idEpreuve }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
