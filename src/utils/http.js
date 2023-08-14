import axios from 'axios'
import qs from 'qs'

const baseUrl =
  'https://www.fastmock.site/mock/4a6f2e337c580f23d706b6bb76ad1fcf/course'

function axiosGet(options) {
  axios(baseUrl + options.url)
    .then((res) => {
      options.success(res.data)
    })
    .catch((e) => {
      options.error(e)
    })
}
export { axiosGet }
