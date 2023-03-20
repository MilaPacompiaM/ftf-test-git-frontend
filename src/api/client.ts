import axios from 'axios';

const baseUrl = 'http://localhost:3000'

export async function get(url: string) {  
  try {
    const { data: response, status } = await axios.get(
      baseUrl + url,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return { response, status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return { error: error.message };
    } else {
      console.log('unexpected error: ', error);
      return { error: 'An unexpected error occurred' };
    }
  }
}
