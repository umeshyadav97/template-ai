import { API } from "@local/network/core"
import NetworkManager from "@local/network/core/networkManager"

export const useAccordianSectionModal = () => {
  const categoryFilter = async (values) => {
    const instance = NetworkManager(API.FILTER.CATEGORY_FEATURE)
    return await instance.request(values)
  }
  const estimationCostData = async (values) => {
    const instance = NetworkManager(API.STUDIO.DELIVERY_COST)
    return await instance.request(values)
  }
  const phasesData = async (values) => {
    const instance = NetworkManager(API.STUDIO.PHASES)
    return await instance.request(values, { blueprint_ids: values })
  }

  return {
    categoryFilter,
    estimationCostData,
    phasesData
  }
}
