import Service from '@/services/Service'

const Post = () => {

  const model = 'posts/'

  const all = () => {
    return new Promise((resolve) => {
      Service.get(model).then((response) => {
        resolve(response)
      })
    })
  }

  const store = ($data) => {
    return new Promise((resolve) => {
      Service.post(model, $data).then((response) => {
        resolve(response)
      })
    })
  }

  const update = ($data) => {
    return new Promise((resolve) => {
      Service.put(model + $data.id, $data).then((response) => {
        resolve(response)
      })
    })
  }

  const show = (id) => {
    return new Promise((resolve) => {
      Service.get(model + id).then((response) => {
        resolve(response)
      })
    })
  }

  const destroy = (id) => {
    return new Promise((resolve) => {
      Service.destroy(model + id).then((response) => {
        resolve(response)
      })
    })
  }

  return {all, store, update, show, destroy}
}

export default Post()
