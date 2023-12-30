// import { API, NetworkManager } from "@local/network/core"

// export const useHomeModel = () => {
//   const blueprint = async (filter, category, amount) => {
//     let formattedIds = category?.length ? category.join(",") : ""
//     console.log(formattedIds)
//     const instance = NetworkManager(API.STUDIO.BLUEPRINT)
//     return await instance.request(
//       {},
//       {
//         page: filter?.page,
//         page_size: filter?.page_size,
//         ...(formattedIds && { category_id: formattedIds }),
//         ...(amount?.min_amount > 0 && { min_amount: amount?.min_amount }),
//         ...(amount?.max_amount > 0 && { max_amount: amount?.max_amount })
//       }
//     )
//   }

//   return { blueprint }
// }

import { API, NetworkManager } from "@local/network/core"

export const useHomeModel = () => {
  const blueprint = async (filter, category, amount) => {
    let formattedIds = category?.length ? category.join(",") : ""
    const instance = NetworkManager(API.STUDIO.BLUEPRINT)

    // Create the request object
    const requestObject = {
      page: filter?.page,
      page_size: filter?.page_size,
      ...(amount?.min_amount > 0 && { min_amount: amount?.min_amount }),
      ...(amount?.max_amount > 0 && { max_amount: amount?.max_amount })
    }

    // Add category_id to requestObject if formattedIds is not empty
    if (formattedIds) {
      requestObject.category_id = formattedIds
    }

    // Make the API request
    return await instance.request({}, requestObject)
  }

  return { blueprint }
}
