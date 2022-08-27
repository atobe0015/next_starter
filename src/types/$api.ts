import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './sample/id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/sample/id@number'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    sample: {
      id_number: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['put']['resBody']>(prefix, PATH0, PUT, option).json(),
        $put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['put']['resBody']>(prefix, PATH0, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
