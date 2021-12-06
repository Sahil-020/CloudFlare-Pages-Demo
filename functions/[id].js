async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return response.text()
  }
  else if (contentType.includes("text/html")) {
    return response.text()
  }
  else {
    return response.text()
  }
}
export const onRequestGet = async (context) => {
  let { params } = context
//   let params = JSON.stringify(context.params, null, 2)
   let {CredentialsBase64, JewelrySerialApp, AppUrl} = context.env
  
//   let request =  JSON.strigyfy(context.request)
   const init = {
    headers: {
      "Authorization":  `Basic ${ CredentialsBase64 }`
//       "Basic c3Nra0hocnYyOjg1NWM2ZTA3LTc5NjctNGM1Yi1iZjliLTBmOWRmZDFhY2FhYg==",
//       
         
             
    },
  }
//   const urlFetch = `https://${AppUrl}/${AppName}/_search?q=InventoryDBID : ${params.id}`
   const urlFetch = `https://${AppUrl}/${JewelrySerialApp}/_doc/${params.id}/_source`
   let response = await fetch(urlFetch, init)
//    response = JSON.stringify(response, null, 2)
//   console.log("response :",response)
  // let updatedResponse =  await response.json()
  let results = await gatherResponse(response)
//   results = JSON.stringify(results, null, 2)
//    console.log("results :",results)
  //let updatedResults = await results.json()
  
//    const appbaseRequest = new Request(
//     "https://es-cluster-kwfl-acumatica-catalog-v7-536qcv.searchbase.io/kwfl-acumatica-catalog-v7-prod-jewelrystyle2testing/_search?q=InventoryDBID : 57126",
//     {
//       headers: {
//         Authorization:
//           "Basic c3Nra0hocnYyOjg1NWM2ZTA3LTc5NjctNGM1Yi1iZjliLTBmOWRmZDFhY2FhYg==",
//       },
//     }
//   );

return new Response(`The id : ${JSON.stringify(params)}\n\n${JSON.stringify(response)}\n\n${JSON.stringify(results)}`,{
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
//   return new Response(`The id : ${params}\n\n${response}\n\n${results}`,{
//       headers: {
//         "content-type": "application/json;charset=UTF-8"
//       }
//     })
//   return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
}
