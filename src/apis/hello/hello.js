import getAxios from 'apis/axios'
import Hello from 'domain/Hello'

const axios = getAxios()

const hello = {
  hello: async () => {
    const { data } = await axios.get('/hello')
    return new Hello(data)
  }
}
export default hello
