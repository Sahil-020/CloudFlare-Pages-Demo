async function gatherResponse(response) {
  const { headers } = response;
  const contentType = headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json());
  } else if (contentType.includes("application/text")) {
    return response.text();
  } else if (contentType.includes("text/html")) {
    return response.text();
  } else {
    return response.text();
  }
}

export const onRequestGet = async (context) => {
  const init = {
    headers: {
      Authorization: `Basic ${CredentialsBase64}`,
    },
  };
  let { params } = context;
  let {
    CredentialsBase64,
    JewelrySerialApp,
    DiamondSerialApp,
    GemstoneSerialApp,
    AppUrl,
  } = context.env;
  let appNameData = [JewelrySerialApp, DiamondSerialApp, GemstoneSerialApp];
  let response;
  for (let i = 0; i < appNameData.length; i++) {
    // appName = appNameData[i];
    let urlFetch = `https://${AppUrl}/${appNameData[i]}/_doc/${params.id}/_source`;

    if (params.id.toString().length > 15) {
      urlFetch = `https://${AppUrl}/${appNameData[i]}/_search?q=RFIDValue : ${params.id}`;
    }
    response = await fetch(urlFetch, init);
    if (response.status === 200) {
      console.log("response :", response);
      console.log(response.status, " - ", response.statusText);
      let results = await gatherResponse(response);
      return new Response(
        `The id : ${JSON.stringify(params)}\n\n${JSON.stringify(
          response
        )}\n\n${JSON.stringify(results)}`,
        {
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
        }
      );
    }
  }
  return new Response(
    `The id : ${JSON.stringify(params)}\n\n${JSON.stringify(response)}`,
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );

  //   const urlFetch = `https://${AppUrl}/${AppName}/_search?q=InventoryDBID : ${params.id}`
  //    const urlFetch = `https://${AppUrl}/${JewelrySerialApp}/_doc/${params.id}/_source`
  //    response = await fetch(urlFetch, init)
  //    response = JSON.stringify(response, null, 2)
  //   console.log("response :",response)
  // let updatedResponse =  await response.json()
  //   let results = await gatherResponse(response)
  //   results = JSON.stringify(results, null, 2)
  //    console.log("results :",results)
  //let updatedResults = await results.json()

  //    const appbaseRequest = new Request(
  //     "https://es-cluster-kwfl-acumatica-catalog-v7-536qcv.searchbase.io/kwfl-acumatica-catalog-v7-prod-jewelrystyle2testing/_search?q=InventoryDBID : 57126",
  //     {
  //       headers: {
  //         Authorization:
  //           "Basic c3Nra0hocnYyOjg1NWM2ZTA3LTc5NjctNGM1Yi1iZjliLTBmOWRmZDFhY2FhYg==",
  //       },
  //     }
  //   );

  // return new Response(`The id : ${JSON.stringify(params)}\n\n${JSON.stringify(response)}\n\n${JSON.stringify(results)}`,{
  //       headers: {
  //         "content-type": "application/json;charset=UTF-8"
  //       }
  //     })
  //   return new Response(`The id : ${params}\n\n${response}\n\n${results}`,{
  //       headers: {
  //         "content-type": "application/json;charset=UTF-8"
  //       }
  //     })
  //   return new Response(`The id : ${params}`,{ headers:{ "content-type":"application/json" } })
};
