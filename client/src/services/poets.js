import api from './apiConfig';

export const getAllPoets = async () => {
  const resp = await api.get('/poets')
  return resp.data;
}

export const getOnePoet = async (id) => {
  const resp = await api.get(`/poets/${id}`)
  return resp.data;
}

export const postOnePoet = async (poetData) => {
  const resp = await api.post('/poets', { poet: poetData })
  return resp.data;
}

export const putOnePoet = async (id, poetData) => {
  const resp = await api.put(`/poets/${id}`, {poet: poetData})
  return resp.data
}

export const deleteOnePoet = async (id) => {
  const resp = await api.delete(`/poets/${id}`)
  return resp
}