// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { ExchangeClient } from "@injectivelabs/sdk-ts";
// import { protoObjectToJson } from "@injectivelabs/sdk-ts";
//
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//
//   const marketIds = ["0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0"]
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
//     network.exchangeApi
//   );
//   const market = await exchangeClient.spotApi.fetchSpotOrderbooks(marketIds);
//
//   console.log(protoObjectToJson(market, {}));
// })();
//
//
//