async function gatherResponse(response) {
    const {
        headers
    } = response
    const contentType = headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
        return JSON.stringify(await response.json())
    } else if (contentType.includes("application/text")) {
        return response.text()
    } else if (contentType.includes("text/html")) {
        return response.text()
    } else {
        return response.text()
    }
}
export const onRequestGet = async (context) => {
    let {
        productType
    } = context.params
    let {
        CredentialsBase64,
        JewelrySerialApp,
        DiamondSerialApp,
        GemstoneSerialApp,
        AppUrl
    } = context.env
    const init = {
        headers: {
            "Authorization": `Basic ${ CredentialsBase64 }`
        },
    }
    var myHeaders = new Headers({
        'Content-Type': 'application/json'
    });
    let response
    if (productType[1] === "J") {
        const urlFetch = `https://${AppUrl}/${JewelrySerialApp}/_doc/${productType[0]}/_source`
        response = await fetch(urlFetch, init)
    } else if (productType[1] === "D") {
        const urlFetch = `https://${AppUrl}/${DiamondSerialApp}/_doc/${productType[0]}/_source`
        response = await fetch(urlFetch, init)
    } else if (productType[1] === "G") {
        const urlFetch = `https://${AppUrl}/${GemstoneSerialApp}/_doc/${productType[0]}/_source`
        response = await fetch(urlFetch, init)
    } else {
        return new Response(`Invalid Inputs.`)
    }

    if (response.status === 400 || response.status === 404) {
        return new Response(`${ JSON.stringify(response.status) } - ${ JSON.stringify(response.statusText) }`)
    }
    let results = await gatherResponse(response)
    //     let updatedResults = await results.json()
    const html = `<!DOCTYPE html>
                    <body>
                        <h1>${results.SerialNumber} - ${results.StyleNumber}</h1>
                        <p>${results.Description}</p>
                    </body>`
    return new Response(`The id : ${ JSON.stringify(productType) }\n\nresult : ${results} \n\n ${typeof results}`, {
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    })
    //     return new Response(html, {
    //         headers: {
    //             "content-type": "text/html;charset=UTF-8",
    //         },
    //     })
}
