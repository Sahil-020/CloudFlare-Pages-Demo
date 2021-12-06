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
export const onRequestGet = (context) => {
  let { params } = context
   let {CredentialsBase64, AppName, AppUrl} = context.env
  
//   let request =  JSON.strigyfy(context.request)
   const init = {
    headers: {
      "Authorization":  `Basic ${ CredentialsBase64 }`
//       "Basic c3Nra0hocnYyOjg1NWM2ZTA3LTc5NjctNGM1Yi1iZjliLTBmOWRmZDFhY2FhYg==",
//       
         
             
    },
  }
  const urlFetch = `https://${AppUrl}/${AppName}/_search?q=InventoryDBID : ${params.id}`
   const response = await fetch(urlFetch, init)
  const results = await gatherResponse(response)
  
//    const appbaseRequest = new Request(
//     "https://es-cluster-kwfl-acumatica-catalog-v7-536qcv.searchbase.io/kwfl-acumatica-catalog-v7-prod-jewelrystyle2testing/_search?q=InventoryDBID : 57126",
//     {
//       headers: {
//         Authorization:
//           "Basic c3Nra0hocnYyOjg1NWM2ZTA3LTc5NjctNGM1Yi1iZjliLTBmOWRmZDFhY2FhYg==",
//       },
//     }
//   );

return new Response(`The id : ${JSON.stringify(params)}\n\n${results}`)
//   return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
}
