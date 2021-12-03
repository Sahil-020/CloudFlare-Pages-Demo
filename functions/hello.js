export const onRequestGet = async (request) => {
  let { url } = await request.json()
  return new Response(`Request Url is : ${url}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json()
//   return new Response(`Hello, ${name}!`)
// }
