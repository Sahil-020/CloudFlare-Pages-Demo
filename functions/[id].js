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
return new Response(`The id : ${JSON.stringify(params)}`)
//   return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
}
