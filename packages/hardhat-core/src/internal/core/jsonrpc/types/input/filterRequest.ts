import * as t from "io-ts";

// TS2742 workaround
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BN } from "ethereumjs-util";

import { optionalOrNullable } from "../../../../util/io-ts";
import { rpcHash } from "../base-types";

import { optionalRpcOldBlockTag } from "./blockTag";
import { optionalRpcLogAddress } from "./logAddress";
import { optionalRpcLogTopics } from "./logTopics";

export const rpcFilterRequest = t.type(
  {
    fromBlock: optionalRpcOldBlockTag,
    toBlock: optionalRpcOldBlockTag,
    address: optionalRpcLogAddress,
    topics: optionalRpcLogTopics,
    blockHash: optionalOrNullable(rpcHash),
  },
  "RpcFilterRequest"
);

export type RpcFilterRequest = t.TypeOf<typeof rpcFilterRequest>;

export const optionalRpcFilterRequest = optionalOrNullable(rpcFilterRequest);

export type OptionalRpcFilterRequest = t.TypeOf<
  typeof optionalRpcFilterRequest
>;
