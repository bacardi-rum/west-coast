import { NuxtAppOptions } from '@nuxt/types'

export default ({
  $axios,
  $cookies
}: NuxtAppOptions) => {
  $axios.interceptors.request.use((config) => {
    let token = $cookies.get('westcoast-token') ?? ''
    if (!token.startsWith('Bearer ')) {
      token = `Bearer ${token}`
    }
    config.headers.Authorization = token
    return config
  })
}
