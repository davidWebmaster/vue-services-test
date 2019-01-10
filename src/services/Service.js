import Http from './Http'

const Service = () => {

  const get = (url) => {
    return Http.get(url)
  }

  const post = (url, data) => {
    return Http.post(url, data)
  }

  const put = (url, data) => {
    return Http.put(url, data)
  }

  const destroy = (url) => {
    return Http.delete(url)
  }

  return { get, post, put, destroy}
}

export default Service()
