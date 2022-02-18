import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import {
    BatchSwapStep,
    FetchPoolsInput,
    FundManagement,
    SwapType,
} from '@/modules/swaps/types';
import { ExitPoolRequest, JoinPoolRequest } from '@/types';
import { SubgraphPoolBase } from '@balancer-labs/sor';

export type OutputReference = {
    index: number;
    key: BigNumber;
};

export interface EncodeBatchSwapInput {
    swapType: SwapType;
    swaps: BatchSwapStep[];
    assets: string[];
    funds: FundManagement;
    limits: string[];
    deadline: BigNumberish;
    value: BigNumberish;
    outputReferences: OutputReference[];
}

export interface EncodeExitPoolInput {
    poolId: string;
    poolKind: number;
    sender: string;
    recipient: string;
    outputReferences: OutputReference[];
    exitPoolRequest: ExitPoolRequest;
}

export interface EncodeJoinPoolInput {
    poolId: string;
    poolKind: number;
    sender: string;
    recipient: string;
    joinPoolRequest: JoinPoolRequest;
    value: BigNumber;
    outputReference: BigNumber;
}

export interface EncodeUnwrapAaveStaticTokenInput {
    staticToken: string;
    sender: string;
    recipient: string;
    amount: BigNumberish;
    toUnderlying: boolean;
    outputReferences: BigNumberish;
}

export interface EncodeUnwrapYearnVaultTokenInput {
    vaultToken: string;
    sender: string;
    recipient: string;
    amount: BigNumberish;
    outputReference: BigNumberish;
}

export interface ExitAndBatchSwapInput {
    exiter: string;
    swapRecipient: string;
    poolId: string;
    exitTokens: string[];
    userData: string;
    expectedAmountsOut: string[];
    finalTokensOut: string[];
    slippage: string;
    fetchPools: FetchPoolsInput;
}

export type ExitPoolData = ExitPoolRequest & EncodeExitPoolInput;

export type UnwrapType = 'aave' | 'yearn';

export interface NestedLinearPool {
    pool: SubgraphPoolBase;
    mainToken: string;
    poolTokenAddress: string;
}

export interface BatchRelayerJoinPool {
    poolId: string;
    joinType: 'exact-in' | 'exact-out';
    tokens: {
        address: string;
        amount: string;
    }[];
    bptOut: string;
    fetchPools: FetchPoolsInput;
    slippage: string;
    funds: FundManagement;
}
