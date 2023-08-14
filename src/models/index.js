import { axiosGet } from '../utils/http'

function getCourseFields() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: '/fields',
      success(data) {
        resolve(data.result)
      },
      error: (err) => reject(err),
    })
  })
}

function getCourseList() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: '/list',
      success: (data) => resolve(data.result),
      error: (err) => reject(err),
    })
  })
}

export { getCourseFields, getCourseList }
