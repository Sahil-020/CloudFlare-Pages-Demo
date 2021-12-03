
export const onRequestGet = (context) => {
  let { params } = context
// return new Response(`The id : ${JSON.stringify(param)}`)
  return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
}
