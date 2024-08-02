sui client call --package 刚刚记录的包id --module My_token  --function mint_in_my_module --args  刚刚记录的Obj id  铸造数量 接收者的地址  --gas-budget=100000000 

 sui client call --package 0x78a9a7d886e3da62dfd17445fbfb27768431155d269fd8207c18c983738710ca --module iyi_coin --function mint_in_my_module --args  0x5d82b013f52b433e7e7ecacd68f1994ad7eddca0fe08d69259eba153a8c3c248  100000000 0x27ed7fc49f315ef2ce1211473a5676844b7172f7845df47c4e38d272c22d9d46  --gas-budget=10000000


 sui client call --package 0x78a9a7d886e3da62dfd17445fbfb27768431155d269fd8207c18c983738710ca --module faucet_coin --function mint --args  0x0fc692f9d90e29a31c2a38a976fd3d7117aed58718c0431d1b0db6a87b5e1b90  100000000   --gas-budget=10000000


 0x7b8e0864967427679b4e129f79dc332a885c6087ec9e187b53451a9006ee15f2