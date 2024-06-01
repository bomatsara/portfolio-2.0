import axios from 'axios';

export async function request(data) {
  const {name, email} = data

  return await axios.post('https://portfolio-js.b.goit.study/api/requests/', {
    name: name,
    email: email
  })
}