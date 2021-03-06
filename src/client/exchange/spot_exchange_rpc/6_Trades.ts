import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { TradeExecutionSide, TradeDirection } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcSpotApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotApi = new ExchangeGrpcSpotApi(network.exchangeApi);

  const marketId =
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";
  const subaccountId =
    "0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000";
  const direction = TradeDirection.Buy;
  const executionSide = TradeExecutionSide.Maker;

  const market = await exchangeGrpcSpotApi.fetchTrades({
    marketId: marketId,
    subaccountId: subaccountId,
    direction: direction,
    executionSide: executionSide,
  });

  console.log(market);
})();
