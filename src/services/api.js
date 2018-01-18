/**
 * Dependencies
 */
import axios from 'axios';

/**
 * Config / Environment
 */
const API_URL = 'https://sheetsu.com/apis/v1.0bu/26926ec8328e';

/**
 * Create instance of axios
 * with appropriate base url (pointing to the API)
 */
const request = axios.create({
  baseURL: API_URL,
});

/**
 * Get all items
 */
export function getItems() {
  return request.get('/')
  .then(({ data }) => data);
}
