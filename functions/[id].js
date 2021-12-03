export const onRequestGet = (context) => {
  let {param} = context

  return new Response(`The id : ${param}`)
}
