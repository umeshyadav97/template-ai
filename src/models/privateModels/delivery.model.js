import { API, NetworkManager } from "@local/network/core"

export const useDeliveryModel = () => {
  const phases = async (id) => {
    const instance = NetworkManager(API.STUDIO.PHASES)
    return await instance.request({}, { blueprint_ids: id })
  }

  const platform = async (id) => {
    const instance = NetworkManager(API.STUDIO.PLATFORM)
    return await instance.request({}, { blueprint_ids: id })
  }

  const quotation = async (values) => {
    const instance = NetworkManager(API.STUDIO.DELIVERY_COST)
    return await instance.request(values)
  }

  const submitPlan = async (values) => {
    const instance = NetworkManager(API.STUDIO.SUBMIT_PLAN)
    return await instance.request(values)
  }

  return { phases, platform, quotation, submitPlan }
}
