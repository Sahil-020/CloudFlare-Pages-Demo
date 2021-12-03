export const onRequestGet = async (context) => {
  let data = await context.json()
//   let request =  JSON.strigyfy(context.request)
  return new Response(`Request Url is : ${data}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json()
//   return new Response(`Hello, ${name}!`)
// }
