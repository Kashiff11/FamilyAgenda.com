import api from './apiConfig';

export const getAllPoems = async () => {
  const resp = await api.get('/poems')
  return resp.data;
}

export const getOnePoem = async (id) => {
  const resp = await api.get(`/poems/${id}`)
  return resp.data;
}

export const postOnePoem = async (poemData) => {
  const resp = await api.post('/poems', { poem: poemData })
  return resp.data;
}

export const putOnePoem = async (id, poemData) => {
  const resp = await api.put(`/poems/${id}`, {poem: poemData})
  return resp.data
}

export const deleteOnePoem = async (id) => {
  const resp = await api.delete(`/poems/${id}`)
  return resp
}