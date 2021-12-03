
export const onRequestGet = (context) => {
  let { params } = context
 var myHeaders = new Headers({
    'Content-Type': 'application/json'
});
// return new Response(`The id : ${JSON.stringify(param)}`)
  return new Response(`The id : ${ params }`,{ headers:myHeaders })
}
