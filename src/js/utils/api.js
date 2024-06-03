import axios from 'axios';
import { GLOBAL } from './const';

const { BASE_URL, ENDPOINT_REVIEWS } = GLOBAL;

export async function getReviews() {
  const res = await axios(BASE_URL + ENDPOINT_REVIEWS);
  return res.data;
}

export async function request(data) {
  const { name, email } = data;

  return await axios.post('https://portfolio-js.b.goit.study/api/requests/', {
    name: name,
    email: email,
  });
}
