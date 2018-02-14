import { get } from '../'

export const getUsers = () =>
  get('https://randomuser.me/api/?inc=name,picture,id,location&results=10')
