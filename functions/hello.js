export const onRequestGet = ({request}) => {
  let {url} = request.json()
  return new Response(`Hello, world!\n ${url}`)
}

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json()
  return new Response(`Hello, ${name}!`)
}
