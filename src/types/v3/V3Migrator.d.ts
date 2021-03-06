/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface V3MigratorInterface extends ethers.utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
    "factory()": FunctionFragment;
    "migrate(tuple)": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "nonfungiblePositionManager()": FunctionFragment;
    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createAndInitializePoolIfNecessary",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [
      {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "nonfungiblePositionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermit",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowed",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowedIfNecessary",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitIfNecessary",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAndInitializePoolIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonfungiblePositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowedIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitIfNecessary",
    data: BytesLike
  ): Result;

  events: {};
}

export class V3Migrator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: V3MigratorInterface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    "WETH9()"(overrides?: CallOverrides): Promise<[string]>;

    createAndInitializePoolIfNecessary(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createAndInitializePoolIfNecessary(address,address,uint24,uint160)"(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    migrate(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))"(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<[string]>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  "WETH9()"(overrides?: CallOverrides): Promise<string>;

  createAndInitializePoolIfNecessary(
    token0: string,
    token1: string,
    fee: BigNumberish,
    sqrtPriceX96: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createAndInitializePoolIfNecessary(address,address,uint24,uint160)"(
    token0: string,
    token1: string,
    fee: BigNumberish,
    sqrtPriceX96: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  migrate(
    params: {
      pair: string;
      liquidityToMigrate: BigNumberish;
      percentageToMigrate: BigNumberish;
      token0: string;
      token1: string;
      fee: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      refundAsETH: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))"(
    params: {
      pair: string;
      liquidityToMigrate: BigNumberish;
      percentageToMigrate: BigNumberish;
      token0: string;
      token1: string;
      fee: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      refundAsETH: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multicall(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "multicall(bytes[])"(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

  "nonfungiblePositionManager()"(overrides?: CallOverrides): Promise<string>;

  selfPermit(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)"(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  selfPermitAllowed(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)"(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  selfPermitAllowedIfNecessary(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  selfPermitIfNecessary(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    "WETH9()"(overrides?: CallOverrides): Promise<string>;

    createAndInitializePoolIfNecessary(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createAndInitializePoolIfNecessary(address,address,uint24,uint160)"(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    migrate(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))"(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

    "nonfungiblePositionManager()"(overrides?: CallOverrides): Promise<string>;

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH9()"(overrides?: CallOverrides): Promise<BigNumber>;

    createAndInitializePoolIfNecessary(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createAndInitializePoolIfNecessary(address,address,uint24,uint160)"(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))"(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH9()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createAndInitializePoolIfNecessary(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createAndInitializePoolIfNecessary(address,address,uint24,uint160)"(
      token0: string,
      token1: string,
      fee: BigNumberish,
      sqrtPriceX96: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrate(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))"(
      params: {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multicall(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonfungiblePositionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)"(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
