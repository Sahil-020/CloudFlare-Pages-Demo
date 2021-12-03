export const onRequestGet = async ({request}) => {
  let data = await request.json()
  return new Response(`Request Url is : ${data}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json()
//   return new Response(`Hello, ${name}!`)
// }
