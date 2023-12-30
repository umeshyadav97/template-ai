import { API, NetworkManager } from "@local/network/core"

export const useContactModel = () => {
  const addContactRecord = async (body) => {
    const instance = NetworkManager(API.CONTACT.CONTACT_FORM)
    return await instance.request(body)
  }

  return { addContactRecord }
}
