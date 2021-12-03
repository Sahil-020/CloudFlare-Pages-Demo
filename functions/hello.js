export const onRequestGet = async ({request}) => {
  let {url} = request
//   let request =  JSON.strigyfy(context.request)
  return new Response(`Request Url is : ${url}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json()
//   return new Response(`Hello, ${name}!`)
// }
