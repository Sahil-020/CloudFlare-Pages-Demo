export const onRequestGet = (context) => {
  let { params } = context
return new Response(`The id : ${context}`)
//   return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
}
