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
 let {CredentialsBase64, JewelrySerialApp, AppUrl} = context.env
 var myHeaders = new Headers({
    'Content-Type': 'application/json'
 });
//  const urlFetch = `https://${AppUrl}/${AppName}/_doc/${params.id}/_source`
//  let response = await fetch(urlFetch, init) 
// return new Response(`The id : ${JSON.stringify(param)}`)
//  let results = await gatherResponse(response)
  return new Response(`The id : ${ JSON.stringify(params) }`)
//  return new Response(`The id : ${JSON.stringify(params)}\n\n${JSON.stringify(response)}\n\n${JSON.stringify(results)}`,{
//       headers: {
//         "content-type": "application/json;charset=UTF-8"
//       }
//     })
}
