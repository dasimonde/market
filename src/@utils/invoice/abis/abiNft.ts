const abiNft = [
  {
    inputs: [
      { internalType: 'address', name: '_template721', type: 'address' },
      { internalType: 'address', name: '_template', type: 'address' },
      { internalType: 'address', name: '_router', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'datatokenAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxTokens',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxBalance',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'allowedSwapper',
        type: 'address'
      }
    ],
    name: 'DispenserCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'instance',
        type: 'address'
      }
    ],
    name: 'InstanceDeployed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newTokenAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'templateAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'tokenName',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'admin',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'tokenURI',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'transferable',
        type: 'bool'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      }
    ],
    name: 'NFTCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'dispenserContract',
        type: 'address'
      }
    ],
    name: 'NewDispenser',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'exchangeId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'exchangeContract',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'baseToken',
        type: 'address'
      }
    ],
    name: 'NewFixedRate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'poolAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'ssContract',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'baseTokenAddress',
        type: 'address'
      }
    ],
    name: 'NewPool',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_templateAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nftTemplateCount',
        type: 'uint256'
      }
    ],
    name: 'Template20Added',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_templateAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nftTemplateCount',
        type: 'uint256'
      }
    ],
    name: 'Template721Added',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newTokenAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'templateAddress',
        type: 'address'
      },
      { indexed: false, internalType: 'string', name: 'name', type: 'string' },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      { indexed: false, internalType: 'uint256', name: 'cap', type: 'uint256' },
      {
        indexed: false,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      }
    ],
    name: 'TokenCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: '_templateAddress', type: 'address' }
    ],
    name: 'add721TokenTemplate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_templateAddress', type: 'address' }
    ],
    name: 'addTokenTemplate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string', name: 'tokenURI', type: 'string' },
          { internalType: 'bool', name: 'transferable', type: 'bool' },
          { internalType: 'address', name: 'owner', type: 'address' }
        ],
        internalType: 'struct IFactory.NftCreateData',
        name: '_NftCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string[]', name: 'strings', type: 'string[]' },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' },
          { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' },
          { internalType: 'bytes[]', name: 'bytess', type: 'bytes[]' }
        ],
        internalType: 'struct IFactory.ErcCreateData',
        name: '_ErcCreateData',
        type: 'tuple'
      }
    ],
    name: 'createNftWithErc20',
    outputs: [
      { internalType: 'address', name: 'erc721Address', type: 'address' },
      { internalType: 'address', name: 'erc20Address', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string', name: 'tokenURI', type: 'string' },
          { internalType: 'bool', name: 'transferable', type: 'bool' },
          { internalType: 'address', name: 'owner', type: 'address' }
        ],
        internalType: 'struct IFactory.NftCreateData',
        name: '_NftCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string[]', name: 'strings', type: 'string[]' },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' },
          { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' },
          { internalType: 'bytes[]', name: 'bytess', type: 'bytes[]' }
        ],
        internalType: 'struct IFactory.ErcCreateData',
        name: '_ErcCreateData',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'dispenserAddress',
            type: 'address'
          },
          { internalType: 'uint256', name: 'maxTokens', type: 'uint256' },
          { internalType: 'uint256', name: 'maxBalance', type: 'uint256' },
          { internalType: 'bool', name: 'withMint', type: 'bool' },
          { internalType: 'address', name: 'allowedSwapper', type: 'address' }
        ],
        internalType: 'struct IFactory.DispenserData',
        name: '_DispenserData',
        type: 'tuple'
      }
    ],
    name: 'createNftWithErc20WithDispenser',
    outputs: [
      { internalType: 'address', name: 'erc721Address', type: 'address' },
      { internalType: 'address', name: 'erc20Address', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string', name: 'tokenURI', type: 'string' },
          { internalType: 'bool', name: 'transferable', type: 'bool' },
          { internalType: 'address', name: 'owner', type: 'address' }
        ],
        internalType: 'struct IFactory.NftCreateData',
        name: '_NftCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string[]', name: 'strings', type: 'string[]' },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' },
          { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' },
          { internalType: 'bytes[]', name: 'bytess', type: 'bytes[]' }
        ],
        internalType: 'struct IFactory.ErcCreateData',
        name: '_ErcCreateData',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'fixedPriceAddress',
            type: 'address'
          },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' },
          { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' }
        ],
        internalType: 'struct IFactory.FixedData',
        name: '_FixedData',
        type: 'tuple'
      }
    ],
    name: 'createNftWithErc20WithFixedRate',
    outputs: [
      { internalType: 'address', name: 'erc721Address', type: 'address' },
      { internalType: 'address', name: 'erc20Address', type: 'address' },
      { internalType: 'bytes32', name: 'exchangeId', type: 'bytes32' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string', name: 'tokenURI', type: 'string' },
          { internalType: 'bool', name: 'transferable', type: 'bool' },
          { internalType: 'address', name: 'owner', type: 'address' }
        ],
        internalType: 'struct IFactory.NftCreateData',
        name: '_NftCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string[]', name: 'strings', type: 'string[]' },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' },
          { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' },
          { internalType: 'bytes[]', name: 'bytess', type: 'bytes[]' }
        ],
        internalType: 'struct IFactory.ErcCreateData',
        name: '_ErcCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256[]', name: 'ssParams', type: 'uint256[]' },
          { internalType: 'uint256[]', name: 'swapFees', type: 'uint256[]' },
          { internalType: 'address[]', name: 'addresses', type: 'address[]' }
        ],
        internalType: 'struct IFactory.PoolData',
        name: '_PoolData',
        type: 'tuple'
      }
    ],
    name: 'createNftWithErc20WithPool',
    outputs: [
      { internalType: 'address', name: 'erc721Address', type: 'address' },
      { internalType: 'address', name: 'erc20Address', type: 'address' },
      { internalType: 'address', name: 'poolAddress', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'symbol', type: 'string' },
          { internalType: 'uint256', name: 'templateIndex', type: 'uint256' },
          { internalType: 'string', name: 'tokenURI', type: 'string' },
          { internalType: 'bool', name: 'transferable', type: 'bool' },
          { internalType: 'address', name: 'owner', type: 'address' }
        ],
        internalType: 'struct IFactory.NftCreateData',
        name: '_NftCreateData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint8', name: '_metaDataState', type: 'uint8' },
          {
            internalType: 'string',
            name: '_metaDataDecryptorUrl',
            type: 'string'
          },
          {
            internalType: 'string',
            name: '_metaDataDecryptorAddress',
            type: 'string'
          },
          { internalType: 'bytes', name: 'flags', type: 'bytes' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
          { internalType: 'bytes32', name: '_metaDataHash', type: 'bytes32' },
          {
            components: [
              {
                internalType: 'address',
                name: 'validatorAddress',
                type: 'address'
              },
              { internalType: 'uint8', name: 'v', type: 'uint8' },
              { internalType: 'bytes32', name: 'r', type: 'bytes32' },
              { internalType: 'bytes32', name: 's', type: 'bytes32' }
            ],
            internalType: 'struct IERC721Template.metaDataProof[]',
            name: '_metadataProofs',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct ERC721Factory.MetaData',
        name: '_MetaData',
        type: 'tuple'
      }
    ],
    name: 'createNftWithMetaData',
    outputs: [
      { internalType: 'address', name: 'erc721Address', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_templateIndex', type: 'uint256' },
      { internalType: 'string[]', name: 'strings', type: 'string[]' },
      { internalType: 'address[]', name: 'addresses', type: 'address[]' },
      { internalType: 'uint256[]', name: 'uints', type: 'uint256[]' },
      { internalType: 'bytes[]', name: 'bytess', type: 'bytes[]' }
    ],
    name: 'createToken',
    outputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'uint256', name: '_templateIndex', type: 'uint256' },
      {
        internalType: 'address',
        name: 'additionalERC20Deployer',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'additionalMetaDataUpdater',
        type: 'address'
      },
      { internalType: 'string', name: 'tokenURI', type: 'string' },
      { internalType: 'bool', name: 'transferable', type: 'bool' },
      { internalType: 'address', name: 'owner', type: 'address' }
    ],
    name: 'deployERC721Contract',
    outputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'disable721TokenTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'disableTokenTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'erc20List',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'erc721List',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentNFTCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentNFTTemplateCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentTemplateCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentTokenCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'getNFTTemplate',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'templateAddress', type: 'address' },
          { internalType: 'bool', name: 'isActive', type: 'bool' }
        ],
        internalType: 'struct ERC721Factory.Template',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'getTokenTemplate',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'templateAddress', type: 'address' },
          { internalType: 'bool', name: 'isActive', type: 'bool' }
        ],
        internalType: 'struct ERC721Factory.Template',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'nftTemplateList',
    outputs: [
      { internalType: 'address', name: 'templateAddress', type: 'address' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'reactivate721TokenTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'reactivateTokenTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'bytes32', name: 'orderTxId', type: 'bytes32' },
          {
            components: [
              {
                internalType: 'address',
                name: 'providerFeeAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'providerFeeToken',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'providerFeeAmount',
                type: 'uint256'
              },
              { internalType: 'uint8', name: 'v', type: 'uint8' },
              { internalType: 'bytes32', name: 'r', type: 'bytes32' },
              { internalType: 'bytes32', name: 's', type: 'bytes32' },
              { internalType: 'uint256', name: 'validUntil', type: 'uint256' },
              { internalType: 'bytes', name: 'providerData', type: 'bytes' }
            ],
            internalType: 'struct IERC20Template.providerFee',
            name: '_providerFee',
            type: 'tuple'
          }
        ],
        internalType: 'struct ERC721Factory.reuseTokenOrder[]',
        name: 'orders',
        type: 'tuple[]'
      }
    ],
    name: 'reuseMultipleTokenOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'router',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'address', name: 'consumer', type: 'address' },
          { internalType: 'uint256', name: 'serviceIndex', type: 'uint256' },
          {
            components: [
              {
                internalType: 'address',
                name: 'providerFeeAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'providerFeeToken',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'providerFeeAmount',
                type: 'uint256'
              },
              { internalType: 'uint8', name: 'v', type: 'uint8' },
              { internalType: 'bytes32', name: 'r', type: 'bytes32' },
              { internalType: 'bytes32', name: 's', type: 'bytes32' },
              { internalType: 'uint256', name: 'validUntil', type: 'uint256' },
              { internalType: 'bytes', name: 'providerData', type: 'bytes' }
            ],
            internalType: 'struct IERC20Template.providerFee',
            name: '_providerFee',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'consumeMarketFeeAddress',
                type: 'address'
              },
              {
                internalType: 'address',
                name: 'consumeMarketFeeToken',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'consumeMarketFeeAmount',
                type: 'uint256'
              }
            ],
            internalType: 'struct IERC20Template.consumeMarketFee',
            name: '_consumeMarketFee',
            type: 'tuple'
          }
        ],
        internalType: 'struct ERC721Factory.tokenOrder[]',
        name: 'orders',
        type: 'tuple[]'
      }
    ],
    name: 'startMultipleTokenOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'templateCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'templateList',
    outputs: [
      { internalType: 'address', name: 'templateAddress', type: 'address' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

export default abiNft
