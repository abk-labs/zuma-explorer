import { NFTokenCollectionNFTGrid } from '@components/account/nftoken/NFTokenCollectionNFTGrid';
import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import explorerConfig from '@/explorer.config';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `NFToken NFTs belonging to the collection ${props.params.address}`,
        title: `NFToken Collection NFTs | ${await getReadableTitleFromAddress(props)} | ${explorerConfig.name}`,
    };
}

export default function NFTokenCollectionPage({ params: { address } }: Props) {
    return <NFTokenCollectionNFTGrid collection={address} />;
}
