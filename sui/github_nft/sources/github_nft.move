/// Module: github_nft
module github_nft::github_nft {
    use std::string::{String, utf8};
    use sui::package;
    use sui::display;
    use sui::table::{Self, Table};
    use sui::event;

    // 最大 NFT 数量
    const MAX_SUPPLY: u64 = 10;
    // 错误码信息
    const ENotEnoughSupply: u64 = 0;
    const EDontMintAgain: u64 = 1;

    // nft 的基本信息
    public struct GithubNFT has key, store {
        id: UID, // 唯一标识符
        nft_id: u64, // 表示铸造 NFT 的编号,表示这是铸造的第几个NFT
        name: String, // 表示铸造 NFT 的名称
        image_url: String, // 表示铸造 NFT 的图片地址
        creator: address, // 表示铸造 NFT 的地址
        recipient: address, // 表示接收 NFT 的地址
    }

    // 铸造记录
    public struct MintRecord has key {
        id: UID,
        record: Table<address, u64>,
    }
    // 用户铸造 NFT 传递消息的结构体信息
    public struct NFTMinted has copy, drop {
        object_id: ID,
        creator: address,
        name: String,
    }

    // fun init(otw: GithubNFT, ctx: &mut TxContext){
    //     let publisher = package::claim(otw, ctx);
    // }
}
