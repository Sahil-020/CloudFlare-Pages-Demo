export const onRequestGet = ({request}) => {
  return new Response(`Hello, world!\n ${request}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json()
  return new Response(`Hello, ${name}!`)
}
