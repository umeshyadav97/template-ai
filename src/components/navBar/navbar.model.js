import { API, NetworkManager } from "@local/network/core"

export const useNavbarModel = () => {
  const currency = async () => {
    const instance = NetworkManager(API.STUDIO.CURRENCY)
    const response = await instance.request()
    return response
  }

  return { currency }
}
