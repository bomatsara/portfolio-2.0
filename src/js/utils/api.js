import axios from 'axios';
import { GLOBAL } from './const';

const { BASE_URL, ENDPOINT_REVIEWS } = GLOBAL;

export default async function getReviews() {
  const res = await axios(BASE_URL + ENDPOINT_REVIEWS);
  return res.data;
}
