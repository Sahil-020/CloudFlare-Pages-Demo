export const onRequestGet = (context) => {
  let {param} = context

  return new Response(`The id : ${param}`,{headers:{"content-type":"application/json"}})
}
