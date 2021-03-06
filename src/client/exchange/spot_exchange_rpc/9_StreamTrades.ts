import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { TradeExecutionSide, TradeDirection } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcSpotStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotStream = new ExchangeGrpcSpotStream(
    network.exchangeApi
  );

  const marketId =
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";
  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const direction = TradeDirection.Sell;
  const executionSide = TradeExecutionSide.Taker;
  const pagination = {
    skip: 0,
    limit: 10,
    key: "",
  };

  await exchangeGrpcSpotStream.streamSpotTrades({
    marketId: marketId,
    direction: direction,
    subaccountId: subaccountId,
    pagination: pagination,
    executionSide: executionSide,
    callback: (streamSpotTrades) => {
      console.log(streamSpotTrades);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
