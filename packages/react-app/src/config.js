import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xd953Ac9635cce62de74eFfF90f7d01a5586151fD"; 

//0xC434C5e5b95A2A192A70494DA257379043987B47
//0xd953Ac9635cce62de74eFfF90f7d01a5586151fD

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/coZEQSCUaF5Slouu4eK7750NHGLJZGxH",
  },
};
