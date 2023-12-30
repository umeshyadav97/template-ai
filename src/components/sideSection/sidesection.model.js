import { NetworkManager, API } from "@local/network/core"

export const useSideSectionModel = () => {
  const categoryFilter = async (values, param) => {
    const instance = NetworkManager(API.FILTER.CATEGORYFILTER)
    return await instance.request(values, param)
  }

  return {
    categoryFilter
  }
}
