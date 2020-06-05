import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.101:3333'
});

export const ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})