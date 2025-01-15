import { env } from 'next-runtime-env';
import { ClusterType } from '@utils/clusterTypes';

const explorerName = env('NEXT_PUBLIC_EXPLORER_NAME') || 'Solana';
const explorerSymbol = env('NEXT_PUBLIC_EXPLORER_SYMBOL') || 'SOL';
const clusterName = env('NEXT_PUBLIC_CLUSTER_NAME') || 'customnet';
const clusterUri = env('NEXT_PUBLIC_CLUSTER_URI') || 'http://localhost:8899';

console.log('explorerName', explorerName);


const explorer = {
    name: explorerName,
    symbol: explorerSymbol,
    clusters: [
        {
            cluster: ClusterType.Custom,
            name: clusterName,
            uri: clusterUri,
        },
    ],
};

export default explorer;
