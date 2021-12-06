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
 let { productType } = context.params
 let {CredentialsBase64, JewelrySerialApp,DiamondSerialApp,GemstoneSerialApp, AppUrl} = context.env
 const init = {
    headers: {
      "Authorization":  `Basic ${ CredentialsBase64 }`
    },
  }
 var myHeaders = new Headers({
    'Content-Type': 'application/json'
 });
 let response
 if(producType[1] === J){
   const urlFetch = `https://${AppUrl}/${JewelrySerialApp}/_doc/${productType[0]}/_source`
   response = await fetch(urlFetch, init) 
 } else if(producType[1] === D){
   const urlFetch = `https://${AppUrl}/${DiamondSerialApp}/_doc/${productType[0]}/_source`
   response = await fetch(urlFetch, init) 
 }else if(producType[1] === G){
   const urlFetch = `https://${AppUrl}/${GemstoneSerialApp}/_doc/${productType[0]}/_source`
   response = await fetch(urlFetch, init) 
 }
//  const urlFetch = `https://${AppUrl}/${AppName}/_doc/${params.id}/_source`
//  let response = await fetch(urlFetch, init) 
// return new Response(`The id : ${JSON.stringify(param)}`)
 if (response.status === 400 || response.status === 404){
   return new Response(`${ response.status } - ${ response.statusText }`)
 }
 let results = await gatherResponse(response)
 return new Response(`result : ${JSON.stringify(results)}`)
//   return new Response(`The id : ${ JSON.stringify(params) }`)
//  return new Response(`The id : ${JSON.stringify(params)}\n\n${JSON.stringify(response)}\n\n${JSON.stringify(results)}`,{
//       headers: {
//         "content-type": "application/json;charset=UTF-8"
//       }
//     })
}
