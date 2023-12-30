import { API, NetworkManager } from "@local/network/core"

export const useFooterModel = () => {
  const addSubscribed = async (body) => {
    const instance = NetworkManager(API.CONTACT.SUBSCRIBED)
    return await instance.request(body)
  }

  return { addSubscribed }
}
