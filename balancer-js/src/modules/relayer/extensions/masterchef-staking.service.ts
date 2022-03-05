import {
    EncodeMasterChefDepositInput,
    EncodeMasterChefWithdrawInput,
} from '@/modules/relayer/types';
import { Interface } from '@ethersproject/abi';
import fBeetsBarStakingAbi from '@/lib/abi/FBeetsBarStaking.json';

export class MasterChefStakingService {
    public encodeDeposit(params: EncodeMasterChefDepositInput): string {
        const fBeetsBarStakingLibrary = new Interface(fBeetsBarStakingAbi);

        return fBeetsBarStakingLibrary.encodeFunctionData('masterChefDeposit', [
            params.sender,
            params.recipient,
            params.token,
            params.pid,
            params.amount,
            params.outputReference,
        ]);
    }

    public encodeWithdraw(params: EncodeMasterChefWithdrawInput): string {
        const fBeetsBarStakingLibrary = new Interface(fBeetsBarStakingAbi);

        return fBeetsBarStakingLibrary.encodeFunctionData(
            'masterChefWithdraw',
            [
                params.recipient,
                params.pid,
                params.amount,
                params.outputReference,
            ]
        );
    }
}
