export const onRequestGet = async (context) => {
//   let {request} =  context
  let request =  JSON.parse(context.request)
  return new Response(`Request Url is : ${request}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json()
//   return new Response(`Hello, ${name}!`)
// }
