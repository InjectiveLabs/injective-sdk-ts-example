import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/dist/client/exchange/ExchangeGrpcClient";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const address = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku";
  const epoch = -1;

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const rewards = await exchangeClient.account.fetchRewards(
    {
      address: address,
      epoch: epoch
    }
    );

  console.log(protoObjectToJson(rewards));
})();
