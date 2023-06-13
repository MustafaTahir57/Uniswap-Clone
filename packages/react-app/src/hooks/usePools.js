import Web3 from "web3";
import { useEffect, useState } from "react";
import { useConfig } from "@usedapp/core";

import { ROUTER_ADDRESS } from "../config";
import { getFactoryInfo, getRouterInfo } from "../utils";

export const loadPools = async (providerUrl) => {

  // const providerUrl = "https://eth-goerli.g.alchemy.com/v2/coZEQSCUaF5Slouu4eK7750NHGLJZGxH"
  
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);
  const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
  const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

  console.log({factoryInfo});
  console.log(providerUrl);
  console.log(factoryInfo.pairsInfo)
  return factoryInfo.pairsInfo;
}

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId])
        .then((pools) => {
          setPools(pools);
          console.log(readOnlyUrls[readOnlyChainId]);
          console.log(pools);
          setLoading(false);
        });
  }, [readOnlyUrls, readOnlyChainId]);

  return [loading, pools];
}
