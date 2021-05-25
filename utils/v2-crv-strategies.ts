import { e18 } from './web3-utils';

export const defaultRequiredHarvestAmount = e18.mul(10_000);

export const v2CrvStrategies = [
  {
    name: 'yUSD',
    wantSymbol: 'yDAI+yUSDC+yUSDT+yTUSD',
    added: true,
    address: '0x6d45c5a8C1cF1f77Ab89cAF8D44917730298bab7',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'y3CRV',
    wantSymbol: '3Crv',
    added: true,
    address: '0x9d7c11D1268C8FD831f1b92A304aCcb2aBEbfDe1',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100, decimals: 18 },
    profitFactor: 1000,
  },
  {
    name: 'GUSD',
    wantSymbol: 'gusd3CRV',
    added: true,
    address: '0x9C1117cf2ED3A0F4A9F069001F517c1D511c8B53',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100, decimals: 18 },
    profitFactor: 1000,
  },
  {
    name: 'DUSD',
    wantSymbol: 'dusd3CRV',
    added: true,
    address: '0x4C547b6202247E7B7c45A95d7747A85704530ab3',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100, decimals: 18 },
    profitFactor: 1000,
  },
  {
    name: 'Compound',
    wantSymbol: 'cDAI+cUSDC',
    added: true,
    address: '0xdDAAc8B5Dd65d079b6572e43890BDD8d95bD5cc3',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'yBUSD',
    wantSymbol: 'yDAI+yUSDC+yUSDT+yBUSD',
    added: true,
    address: '0xB3E1a513a2fE74EcF397dF9C0E6BCe5B57A961C8',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'musd3CRV',
    added: true,
    address: '0xf9fF7f463A7e6f43d4E65c230D3743355fC954e4',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'ust3CRV',
    added: true,
    address: '0xbf811462955DEeD9aaD62EFE771E34e8B5811857',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'saCRV',
    added: true,
    address: '0x106838c85Ab33F41567F7AbCfF787d7269E824AF',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'crvPlain3andSUSD',
    added: true,
    address: '0x9730F52AB5BcEc960bE41b0fE4913a09c0B57066',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'usdn3CRV',
    added: true,
    address: '0x23a09D84e50fF3fDFa270308851443734b0a4b6D',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'usdp3CRV',
    added: true,
    address: '0x94fA3A90E680f6b866545C904D1dc9DEe6416de9',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'LUSD3CRV-f',
    added: true,
    address: '0x3a700f6c8dC7989Dbbde64C183d964bC20123e2C',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'FRAX3CRV-f',
    added: true,
    address: '0xEA3fA970005911421C49Be5D64CD56b9397cCad5',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'BUSD3CRV-f',
    added: true,
    address: '0xD670439D889f9Eb16497d8D6EA9a5E549ae5bFF5',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 100_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'undefined',
    wantSymbol: 'linkCRV',
    added: true,
    address: '0x0E94D346D8A53FEF83484b178a581695E0001E55',
    requiredHarvestAmount: e18.mul(10000),
    requiredEarn: { amount: 3_000, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'hbtc',
    wantSymbol: 'hCRV',
    added: true,
    address: '0xEeabc022EA72AFC585809214a43e1dDF3b34FBB6',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'sbtc',
    wantSymbol: 'crvRenWSBTC',
    added: true,
    address: '0x24345144c80BC994C12d85fb276bB4c5520579Ea',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'obtc',
    wantSymbol: 'oBTC/sbtcCRV',
    added: true,
    address: '0x126e4fDfa9DCEA94F8f4157EF8ad533140C60fC7',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'pbtc',
    wantSymbol: 'pBTC/sbtcCRV',
    added: true,
    address: '0xf726472B7BE7461001df396C55CAdB1870c78dAE',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'rbtc',
    wantSymbol: 'crvRenWBTC',
    added: true,
    address: '0x9eCC1abbA680C5cAACA37AD56E446ED741d86731',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'bbtc',
    wantSymbol: 'bBTC/sbtcCRV',
    added: true,
    address: '0xe9Fd1BEfdd412C8966689A64dE74a783AfA6AD57',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
  {
    name: 'tbtc',
    wantSymbol: 'tbtc/sbtcCrv',
    added: true,
    address: '0x060E04305C07DdE40A9f57bB4fFAcd662D51Ab96',
    requiredHarvestAmount: e18.mul(5000),
    requiredEarn: { amount: 3, decimals: 18 },
    profitFactor: 1,
  },
];
