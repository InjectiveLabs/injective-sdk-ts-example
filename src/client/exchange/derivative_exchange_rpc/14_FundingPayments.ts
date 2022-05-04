import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";


(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const subaccountId = "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const marketId = "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const skip = 0;
  const limit = 10;

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const fundingPayments = await exchangeClient.derivativesApi.fetchDerivativeFundingPayments(
    {
      marketId: marketId,
      subaccountId: subaccountId,
      pagination: {
        skip: skip,
        limit: limit,
        key: ""
      }
    }
  );

  console.log(protoObjectToJson(fundingPayments, {}));
})();


