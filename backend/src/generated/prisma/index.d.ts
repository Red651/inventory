
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model inventory_files
 * 
 */
export type inventory_files = $Result.DefaultSelection<Prisma.$inventory_filesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory_files`: Exposes CRUD operations for the **inventory_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventory_files
    * const inventory_files = await prisma.inventory_files.findMany()
    * ```
    */
  get inventory_files(): Prisma.inventory_filesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    inventory: 'inventory',
    images: 'images',
    inventory_files: 'inventory_files'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "inventory" | "images" | "inventory_files"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      inventory_files: {
        payload: Prisma.$inventory_filesPayload<ExtArgs>
        fields: Prisma.inventory_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventory_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventory_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          findFirst: {
            args: Prisma.inventory_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventory_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          findMany: {
            args: Prisma.inventory_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>[]
          }
          create: {
            args: Prisma.inventory_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          createMany: {
            args: Prisma.inventory_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventory_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>[]
          }
          delete: {
            args: Prisma.inventory_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          update: {
            args: Prisma.inventory_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          deleteMany: {
            args: Prisma.inventory_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventory_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventory_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>[]
          }
          upsert: {
            args: Prisma.inventory_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_filesPayload>
          }
          aggregate: {
            args: Prisma.Inventory_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory_files>
          }
          groupBy: {
            args: Prisma.inventory_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventory_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventory_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Inventory_filesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    inventory?: inventoryOmit
    images?: imagesOmit
    inventory_files?: inventory_filesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    inventory_files: number
    images: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_files?: boolean | InventoryCountOutputTypeCountInventory_filesArgs
    images?: boolean | InventoryCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountInventory_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_filesWhereInput
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity_available: number | null
    unit_price: number | null
    total_value: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity_available: number | null
    unit_price: number | null
    total_value: number | null
  }

  export type InventoryMinAggregateOutputType = {
    item_id: string | null
    item_name: string | null
    category: string | null
    source: string | null
    serial_number: string | null
    certificate: string | null
    quantity_available: number | null
    unit_price: number | null
    total_value: number | null
    supplier_name: string | null
    supplier_contact: string | null
    current_location: string | null
    date_maintenance: Date | null
    date_of_acquisition: Date | null
    expiration_date: Date | null
    condition: string | null
    check_inventory_update: string | null
    group_division: string | null
    notes: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    item_id: string | null
    item_name: string | null
    category: string | null
    source: string | null
    serial_number: string | null
    certificate: string | null
    quantity_available: number | null
    unit_price: number | null
    total_value: number | null
    supplier_name: string | null
    supplier_contact: string | null
    current_location: string | null
    date_maintenance: Date | null
    date_of_acquisition: Date | null
    expiration_date: Date | null
    condition: string | null
    check_inventory_update: string | null
    group_division: string | null
    notes: string | null
  }

  export type InventoryCountAggregateOutputType = {
    item_id: number
    item_name: number
    category: number
    source: number
    serial_number: number
    certificate: number
    quantity_available: number
    unit_price: number
    total_value: number
    supplier_name: number
    supplier_contact: number
    current_location: number
    date_maintenance: number
    date_of_acquisition: number
    expiration_date: number
    condition: number
    check_inventory_update: number
    group_division: number
    notes: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity_available?: true
    unit_price?: true
    total_value?: true
  }

  export type InventorySumAggregateInputType = {
    quantity_available?: true
    unit_price?: true
    total_value?: true
  }

  export type InventoryMinAggregateInputType = {
    item_id?: true
    item_name?: true
    category?: true
    source?: true
    serial_number?: true
    certificate?: true
    quantity_available?: true
    unit_price?: true
    total_value?: true
    supplier_name?: true
    supplier_contact?: true
    current_location?: true
    date_maintenance?: true
    date_of_acquisition?: true
    expiration_date?: true
    condition?: true
    check_inventory_update?: true
    group_division?: true
    notes?: true
  }

  export type InventoryMaxAggregateInputType = {
    item_id?: true
    item_name?: true
    category?: true
    source?: true
    serial_number?: true
    certificate?: true
    quantity_available?: true
    unit_price?: true
    total_value?: true
    supplier_name?: true
    supplier_contact?: true
    current_location?: true
    date_maintenance?: true
    date_of_acquisition?: true
    expiration_date?: true
    condition?: true
    check_inventory_update?: true
    group_division?: true
    notes?: true
  }

  export type InventoryCountAggregateInputType = {
    item_id?: true
    item_name?: true
    category?: true
    source?: true
    serial_number?: true
    certificate?: true
    quantity_available?: true
    unit_price?: true
    total_value?: true
    supplier_name?: true
    supplier_contact?: true
    current_location?: true
    date_maintenance?: true
    date_of_acquisition?: true
    expiration_date?: true
    condition?: true
    check_inventory_update?: true
    group_division?: true
    notes?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    item_id: string
    item_name: string | null
    category: string | null
    source: string | null
    serial_number: string | null
    certificate: string | null
    quantity_available: number | null
    unit_price: number | null
    total_value: number | null
    supplier_name: string | null
    supplier_contact: string | null
    current_location: string | null
    date_maintenance: Date | null
    date_of_acquisition: Date | null
    expiration_date: Date | null
    condition: string | null
    check_inventory_update: string | null
    group_division: string | null
    notes: string | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    item_name?: boolean
    category?: boolean
    source?: boolean
    serial_number?: boolean
    certificate?: boolean
    quantity_available?: boolean
    unit_price?: boolean
    total_value?: boolean
    supplier_name?: boolean
    supplier_contact?: boolean
    current_location?: boolean
    date_maintenance?: boolean
    date_of_acquisition?: boolean
    expiration_date?: boolean
    condition?: boolean
    check_inventory_update?: boolean
    group_division?: boolean
    notes?: boolean
    inventory_files?: boolean | inventory$inventory_filesArgs<ExtArgs>
    images?: boolean | inventory$imagesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    item_name?: boolean
    category?: boolean
    source?: boolean
    serial_number?: boolean
    certificate?: boolean
    quantity_available?: boolean
    unit_price?: boolean
    total_value?: boolean
    supplier_name?: boolean
    supplier_contact?: boolean
    current_location?: boolean
    date_maintenance?: boolean
    date_of_acquisition?: boolean
    expiration_date?: boolean
    condition?: boolean
    check_inventory_update?: boolean
    group_division?: boolean
    notes?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    item_name?: boolean
    category?: boolean
    source?: boolean
    serial_number?: boolean
    certificate?: boolean
    quantity_available?: boolean
    unit_price?: boolean
    total_value?: boolean
    supplier_name?: boolean
    supplier_contact?: boolean
    current_location?: boolean
    date_maintenance?: boolean
    date_of_acquisition?: boolean
    expiration_date?: boolean
    condition?: boolean
    check_inventory_update?: boolean
    group_division?: boolean
    notes?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    item_id?: boolean
    item_name?: boolean
    category?: boolean
    source?: boolean
    serial_number?: boolean
    certificate?: boolean
    quantity_available?: boolean
    unit_price?: boolean
    total_value?: boolean
    supplier_name?: boolean
    supplier_contact?: boolean
    current_location?: boolean
    date_maintenance?: boolean
    date_of_acquisition?: boolean
    expiration_date?: boolean
    condition?: boolean
    check_inventory_update?: boolean
    group_division?: boolean
    notes?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "item_name" | "category" | "source" | "serial_number" | "certificate" | "quantity_available" | "unit_price" | "total_value" | "supplier_name" | "supplier_contact" | "current_location" | "date_maintenance" | "date_of_acquisition" | "expiration_date" | "condition" | "check_inventory_update" | "group_division" | "notes", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_files?: boolean | inventory$inventory_filesArgs<ExtArgs>
    images?: boolean | inventory$imagesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      inventory_files: Prisma.$inventory_filesPayload<ExtArgs>[]
      images: Prisma.$imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: string
      item_name: string | null
      category: string | null
      source: string | null
      serial_number: string | null
      certificate: string | null
      quantity_available: number | null
      unit_price: number | null
      total_value: number | null
      supplier_name: string | null
      supplier_contact: string | null
      current_location: string | null
      date_maintenance: Date | null
      date_of_acquisition: Date | null
      expiration_date: Date | null
      condition: string | null
      check_inventory_update: string | null
      group_division: string | null
      notes: string | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const inventoryWithItem_idOnly = await prisma.inventory.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `item_id`
     * const inventoryWithItem_idOnly = await prisma.inventory.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `item_id`
     * const inventoryWithItem_idOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory_files<T extends inventory$inventory_filesArgs<ExtArgs> = {}>(args?: Subset<T, inventory$inventory_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends inventory$imagesArgs<ExtArgs> = {}>(args?: Subset<T, inventory$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly item_id: FieldRef<"inventory", 'String'>
    readonly item_name: FieldRef<"inventory", 'String'>
    readonly category: FieldRef<"inventory", 'String'>
    readonly source: FieldRef<"inventory", 'String'>
    readonly serial_number: FieldRef<"inventory", 'String'>
    readonly certificate: FieldRef<"inventory", 'String'>
    readonly quantity_available: FieldRef<"inventory", 'Int'>
    readonly unit_price: FieldRef<"inventory", 'Float'>
    readonly total_value: FieldRef<"inventory", 'Float'>
    readonly supplier_name: FieldRef<"inventory", 'String'>
    readonly supplier_contact: FieldRef<"inventory", 'String'>
    readonly current_location: FieldRef<"inventory", 'String'>
    readonly date_maintenance: FieldRef<"inventory", 'DateTime'>
    readonly date_of_acquisition: FieldRef<"inventory", 'DateTime'>
    readonly expiration_date: FieldRef<"inventory", 'DateTime'>
    readonly condition: FieldRef<"inventory", 'String'>
    readonly check_inventory_update: FieldRef<"inventory", 'String'>
    readonly group_division: FieldRef<"inventory", 'String'>
    readonly notes: FieldRef<"inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data?: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.inventory_files
   */
  export type inventory$inventory_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    where?: inventory_filesWhereInput
    orderBy?: inventory_filesOrderByWithRelationInput | inventory_filesOrderByWithRelationInput[]
    cursor?: inventory_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventory_filesScalarFieldEnum | Inventory_filesScalarFieldEnum[]
  }

  /**
   * inventory.images
   */
  export type inventory$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    cursor?: imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    image_id: string | null
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
  }

  export type ImagesMaxAggregateOutputType = {
    image_id: string | null
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
  }

  export type ImagesCountAggregateOutputType = {
    image_id: number
    item_id: number
    file_type: number
    file_name: number
    content: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    image_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
  }

  export type ImagesMaxAggregateInputType = {
    image_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
  }

  export type ImagesCountAggregateInputType = {
    image_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    image_id: string
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectScalar = {
    image_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
  }

  export type imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "item_id" | "file_type" | "file_name" | "content", ExtArgs["result"]["images"]>
  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }
  export type imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }
  export type imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | images$inventoryArgs<ExtArgs>
  }

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: string
      item_id: string | null
      file_type: string | null
      file_name: string | null
      content: Uint8Array | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const imagesWithImage_idOnly = await prisma.images.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {imagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `image_id`
     * const imagesWithImage_idOnly = await prisma.images.createManyAndReturn({
     *   select: { image_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {imagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `image_id`
     * const imagesWithImage_idOnly = await prisma.images.updateManyAndReturn({
     *   select: { image_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends images$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, images$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images model
   */
  interface imagesFieldRefs {
    readonly image_id: FieldRef<"images", 'String'>
    readonly item_id: FieldRef<"images", 'String'>
    readonly file_type: FieldRef<"images", 'String'>
    readonly file_name: FieldRef<"images", 'String'>
    readonly content: FieldRef<"images", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data?: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images createManyAndReturn
   */
  export type imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images updateManyAndReturn
   */
  export type imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * images.inventory
   */
  export type images$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model inventory_files
   */

  export type AggregateInventory_files = {
    _count: Inventory_filesCountAggregateOutputType | null
    _min: Inventory_filesMinAggregateOutputType | null
    _max: Inventory_filesMaxAggregateOutputType | null
  }

  export type Inventory_filesMinAggregateOutputType = {
    file_id: string | null
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
  }

  export type Inventory_filesMaxAggregateOutputType = {
    file_id: string | null
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
  }

  export type Inventory_filesCountAggregateOutputType = {
    file_id: number
    item_id: number
    file_type: number
    file_name: number
    content: number
    _all: number
  }


  export type Inventory_filesMinAggregateInputType = {
    file_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
  }

  export type Inventory_filesMaxAggregateInputType = {
    file_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
  }

  export type Inventory_filesCountAggregateInputType = {
    file_id?: true
    item_id?: true
    file_type?: true
    file_name?: true
    content?: true
    _all?: true
  }

  export type Inventory_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_files to aggregate.
     */
    where?: inventory_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_files to fetch.
     */
    orderBy?: inventory_filesOrderByWithRelationInput | inventory_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventory_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventory_files
    **/
    _count?: true | Inventory_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_filesMaxAggregateInputType
  }

  export type GetInventory_filesAggregateType<T extends Inventory_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory_files[P]>
      : GetScalarType<T[P], AggregateInventory_files[P]>
  }




  export type inventory_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_filesWhereInput
    orderBy?: inventory_filesOrderByWithAggregationInput | inventory_filesOrderByWithAggregationInput[]
    by: Inventory_filesScalarFieldEnum[] | Inventory_filesScalarFieldEnum
    having?: inventory_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventory_filesCountAggregateInputType | true
    _min?: Inventory_filesMinAggregateInputType
    _max?: Inventory_filesMaxAggregateInputType
  }

  export type Inventory_filesGroupByOutputType = {
    file_id: string
    item_id: string | null
    file_type: string | null
    file_name: string | null
    content: Uint8Array | null
    _count: Inventory_filesCountAggregateOutputType | null
    _min: Inventory_filesMinAggregateOutputType | null
    _max: Inventory_filesMaxAggregateOutputType | null
  }

  type GetInventory_filesGroupByPayload<T extends inventory_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventory_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventory_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventory_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Inventory_filesGroupByOutputType[P]>
        }
      >
    >


  export type inventory_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_files"]>

  export type inventory_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_files"]>

  export type inventory_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_files"]>

  export type inventory_filesSelectScalar = {
    file_id?: boolean
    item_id?: boolean
    file_type?: boolean
    file_name?: boolean
    content?: boolean
  }

  export type inventory_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "item_id" | "file_type" | "file_name" | "content", ExtArgs["result"]["inventory_files"]>
  export type inventory_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }
  export type inventory_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }
  export type inventory_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_files$inventoryArgs<ExtArgs>
  }

  export type $inventory_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory_files"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: string
      item_id: string | null
      file_type: string | null
      file_name: string | null
      content: Uint8Array | null
    }, ExtArgs["result"]["inventory_files"]>
    composites: {}
  }

  type inventory_filesGetPayload<S extends boolean | null | undefined | inventory_filesDefaultArgs> = $Result.GetResult<Prisma.$inventory_filesPayload, S>

  type inventory_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventory_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventory_filesCountAggregateInputType | true
    }

  export interface inventory_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory_files'], meta: { name: 'inventory_files' } }
    /**
     * Find zero or one Inventory_files that matches the filter.
     * @param {inventory_filesFindUniqueArgs} args - Arguments to find a Inventory_files
     * @example
     * // Get one Inventory_files
     * const inventory_files = await prisma.inventory_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_filesFindUniqueArgs>(args: SelectSubset<T, inventory_filesFindUniqueArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_filesFindUniqueOrThrowArgs} args - Arguments to find a Inventory_files
     * @example
     * // Get one Inventory_files
     * const inventory_files = await prisma.inventory_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, inventory_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesFindFirstArgs} args - Arguments to find a Inventory_files
     * @example
     * // Get one Inventory_files
     * const inventory_files = await prisma.inventory_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_filesFindFirstArgs>(args?: SelectSubset<T, inventory_filesFindFirstArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesFindFirstOrThrowArgs} args - Arguments to find a Inventory_files
     * @example
     * // Get one Inventory_files
     * const inventory_files = await prisma.inventory_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, inventory_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventory_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_files
     * const inventory_files = await prisma.inventory_files.findMany()
     * 
     * // Get first 10 Inventory_files
     * const inventory_files = await prisma.inventory_files.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const inventory_filesWithFile_idOnly = await prisma.inventory_files.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends inventory_filesFindManyArgs>(args?: SelectSubset<T, inventory_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory_files.
     * @param {inventory_filesCreateArgs} args - Arguments to create a Inventory_files.
     * @example
     * // Create one Inventory_files
     * const Inventory_files = await prisma.inventory_files.create({
     *   data: {
     *     // ... data to create a Inventory_files
     *   }
     * })
     * 
     */
    create<T extends inventory_filesCreateArgs>(args: SelectSubset<T, inventory_filesCreateArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventory_files.
     * @param {inventory_filesCreateManyArgs} args - Arguments to create many Inventory_files.
     * @example
     * // Create many Inventory_files
     * const inventory_files = await prisma.inventory_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventory_filesCreateManyArgs>(args?: SelectSubset<T, inventory_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventory_files and returns the data saved in the database.
     * @param {inventory_filesCreateManyAndReturnArgs} args - Arguments to create many Inventory_files.
     * @example
     * // Create many Inventory_files
     * const inventory_files = await prisma.inventory_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventory_files and only return the `file_id`
     * const inventory_filesWithFile_idOnly = await prisma.inventory_files.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventory_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, inventory_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory_files.
     * @param {inventory_filesDeleteArgs} args - Arguments to delete one Inventory_files.
     * @example
     * // Delete one Inventory_files
     * const Inventory_files = await prisma.inventory_files.delete({
     *   where: {
     *     // ... filter to delete one Inventory_files
     *   }
     * })
     * 
     */
    delete<T extends inventory_filesDeleteArgs>(args: SelectSubset<T, inventory_filesDeleteArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory_files.
     * @param {inventory_filesUpdateArgs} args - Arguments to update one Inventory_files.
     * @example
     * // Update one Inventory_files
     * const inventory_files = await prisma.inventory_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventory_filesUpdateArgs>(args: SelectSubset<T, inventory_filesUpdateArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventory_files.
     * @param {inventory_filesDeleteManyArgs} args - Arguments to filter Inventory_files to delete.
     * @example
     * // Delete a few Inventory_files
     * const { count } = await prisma.inventory_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventory_filesDeleteManyArgs>(args?: SelectSubset<T, inventory_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_files
     * const inventory_files = await prisma.inventory_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventory_filesUpdateManyArgs>(args: SelectSubset<T, inventory_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_files and returns the data updated in the database.
     * @param {inventory_filesUpdateManyAndReturnArgs} args - Arguments to update many Inventory_files.
     * @example
     * // Update many Inventory_files
     * const inventory_files = await prisma.inventory_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventory_files and only return the `file_id`
     * const inventory_filesWithFile_idOnly = await prisma.inventory_files.updateManyAndReturn({
     *   select: { file_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventory_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, inventory_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory_files.
     * @param {inventory_filesUpsertArgs} args - Arguments to update or create a Inventory_files.
     * @example
     * // Update or create a Inventory_files
     * const inventory_files = await prisma.inventory_files.upsert({
     *   create: {
     *     // ... data to create a Inventory_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_files we want to update
     *   }
     * })
     */
    upsert<T extends inventory_filesUpsertArgs>(args: SelectSubset<T, inventory_filesUpsertArgs<ExtArgs>>): Prisma__inventory_filesClient<$Result.GetResult<Prisma.$inventory_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventory_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesCountArgs} args - Arguments to filter Inventory_files to count.
     * @example
     * // Count the number of Inventory_files
     * const count = await prisma.inventory_files.count({
     *   where: {
     *     // ... the filter for the Inventory_files we want to count
     *   }
     * })
    **/
    count<T extends inventory_filesCountArgs>(
      args?: Subset<T, inventory_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventory_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventory_filesAggregateArgs>(args: Subset<T, Inventory_filesAggregateArgs>): Prisma.PrismaPromise<GetInventory_filesAggregateType<T>>

    /**
     * Group by Inventory_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_filesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventory_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventory_filesGroupByArgs['orderBy'] }
        : { orderBy?: inventory_filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventory_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory_files model
   */
  readonly fields: inventory_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventory_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends inventory_files$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, inventory_files$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory_files model
   */
  interface inventory_filesFieldRefs {
    readonly file_id: FieldRef<"inventory_files", 'String'>
    readonly item_id: FieldRef<"inventory_files", 'String'>
    readonly file_type: FieldRef<"inventory_files", 'String'>
    readonly file_name: FieldRef<"inventory_files", 'String'>
    readonly content: FieldRef<"inventory_files", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * inventory_files findUnique
   */
  export type inventory_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter, which inventory_files to fetch.
     */
    where: inventory_filesWhereUniqueInput
  }

  /**
   * inventory_files findUniqueOrThrow
   */
  export type inventory_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter, which inventory_files to fetch.
     */
    where: inventory_filesWhereUniqueInput
  }

  /**
   * inventory_files findFirst
   */
  export type inventory_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter, which inventory_files to fetch.
     */
    where?: inventory_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_files to fetch.
     */
    orderBy?: inventory_filesOrderByWithRelationInput | inventory_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_files.
     */
    cursor?: inventory_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_files.
     */
    distinct?: Inventory_filesScalarFieldEnum | Inventory_filesScalarFieldEnum[]
  }

  /**
   * inventory_files findFirstOrThrow
   */
  export type inventory_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter, which inventory_files to fetch.
     */
    where?: inventory_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_files to fetch.
     */
    orderBy?: inventory_filesOrderByWithRelationInput | inventory_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_files.
     */
    cursor?: inventory_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_files.
     */
    distinct?: Inventory_filesScalarFieldEnum | Inventory_filesScalarFieldEnum[]
  }

  /**
   * inventory_files findMany
   */
  export type inventory_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter, which inventory_files to fetch.
     */
    where?: inventory_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_files to fetch.
     */
    orderBy?: inventory_filesOrderByWithRelationInput | inventory_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventory_files.
     */
    cursor?: inventory_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_files.
     */
    skip?: number
    distinct?: Inventory_filesScalarFieldEnum | Inventory_filesScalarFieldEnum[]
  }

  /**
   * inventory_files create
   */
  export type inventory_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory_files.
     */
    data?: XOR<inventory_filesCreateInput, inventory_filesUncheckedCreateInput>
  }

  /**
   * inventory_files createMany
   */
  export type inventory_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_files.
     */
    data: inventory_filesCreateManyInput | inventory_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory_files createManyAndReturn
   */
  export type inventory_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * The data used to create many inventory_files.
     */
    data: inventory_filesCreateManyInput | inventory_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory_files update
   */
  export type inventory_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory_files.
     */
    data: XOR<inventory_filesUpdateInput, inventory_filesUncheckedUpdateInput>
    /**
     * Choose, which inventory_files to update.
     */
    where: inventory_filesWhereUniqueInput
  }

  /**
   * inventory_files updateMany
   */
  export type inventory_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_files.
     */
    data: XOR<inventory_filesUpdateManyMutationInput, inventory_filesUncheckedUpdateManyInput>
    /**
     * Filter which inventory_files to update
     */
    where?: inventory_filesWhereInput
    /**
     * Limit how many inventory_files to update.
     */
    limit?: number
  }

  /**
   * inventory_files updateManyAndReturn
   */
  export type inventory_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * The data used to update inventory_files.
     */
    data: XOR<inventory_filesUpdateManyMutationInput, inventory_filesUncheckedUpdateManyInput>
    /**
     * Filter which inventory_files to update
     */
    where?: inventory_filesWhereInput
    /**
     * Limit how many inventory_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory_files upsert
   */
  export type inventory_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory_files to update in case it exists.
     */
    where: inventory_filesWhereUniqueInput
    /**
     * In case the inventory_files found by the `where` argument doesn't exist, create a new inventory_files with this data.
     */
    create: XOR<inventory_filesCreateInput, inventory_filesUncheckedCreateInput>
    /**
     * In case the inventory_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventory_filesUpdateInput, inventory_filesUncheckedUpdateInput>
  }

  /**
   * inventory_files delete
   */
  export type inventory_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
    /**
     * Filter which inventory_files to delete.
     */
    where: inventory_filesWhereUniqueInput
  }

  /**
   * inventory_files deleteMany
   */
  export type inventory_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_files to delete
     */
    where?: inventory_filesWhereInput
    /**
     * Limit how many inventory_files to delete.
     */
    limit?: number
  }

  /**
   * inventory_files.inventory
   */
  export type inventory_files$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * inventory_files without action
   */
  export type inventory_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_files
     */
    select?: inventory_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_files
     */
    omit?: inventory_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_filesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    item_id: 'item_id',
    item_name: 'item_name',
    category: 'category',
    source: 'source',
    serial_number: 'serial_number',
    certificate: 'certificate',
    quantity_available: 'quantity_available',
    unit_price: 'unit_price',
    total_value: 'total_value',
    supplier_name: 'supplier_name',
    supplier_contact: 'supplier_contact',
    current_location: 'current_location',
    date_maintenance: 'date_maintenance',
    date_of_acquisition: 'date_of_acquisition',
    expiration_date: 'expiration_date',
    condition: 'condition',
    check_inventory_update: 'check_inventory_update',
    group_division: 'group_division',
    notes: 'notes'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    image_id: 'image_id',
    item_id: 'item_id',
    file_type: 'file_type',
    file_name: 'file_name',
    content: 'content'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const Inventory_filesScalarFieldEnum: {
    file_id: 'file_id',
    item_id: 'item_id',
    file_type: 'file_type',
    file_name: 'file_name',
    content: 'content'
  };

  export type Inventory_filesScalarFieldEnum = (typeof Inventory_filesScalarFieldEnum)[keyof typeof Inventory_filesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    item_id?: UuidFilter<"inventory"> | string
    item_name?: StringNullableFilter<"inventory"> | string | null
    category?: StringNullableFilter<"inventory"> | string | null
    source?: StringNullableFilter<"inventory"> | string | null
    serial_number?: StringNullableFilter<"inventory"> | string | null
    certificate?: StringNullableFilter<"inventory"> | string | null
    quantity_available?: IntNullableFilter<"inventory"> | number | null
    unit_price?: FloatNullableFilter<"inventory"> | number | null
    total_value?: FloatNullableFilter<"inventory"> | number | null
    supplier_name?: StringNullableFilter<"inventory"> | string | null
    supplier_contact?: StringNullableFilter<"inventory"> | string | null
    current_location?: StringNullableFilter<"inventory"> | string | null
    date_maintenance?: DateTimeNullableFilter<"inventory"> | Date | string | null
    date_of_acquisition?: DateTimeNullableFilter<"inventory"> | Date | string | null
    expiration_date?: DateTimeNullableFilter<"inventory"> | Date | string | null
    condition?: StringNullableFilter<"inventory"> | string | null
    check_inventory_update?: StringNullableFilter<"inventory"> | string | null
    group_division?: StringNullableFilter<"inventory"> | string | null
    notes?: StringNullableFilter<"inventory"> | string | null
    inventory_files?: Inventory_filesListRelationFilter
    images?: ImagesListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    item_id?: SortOrder
    item_name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    serial_number?: SortOrderInput | SortOrder
    certificate?: SortOrderInput | SortOrder
    quantity_available?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    supplier_name?: SortOrderInput | SortOrder
    supplier_contact?: SortOrderInput | SortOrder
    current_location?: SortOrderInput | SortOrder
    date_maintenance?: SortOrderInput | SortOrder
    date_of_acquisition?: SortOrderInput | SortOrder
    expiration_date?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    check_inventory_update?: SortOrderInput | SortOrder
    group_division?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    inventory_files?: inventory_filesOrderByRelationAggregateInput
    images?: imagesOrderByRelationAggregateInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    item_id?: string
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    item_name?: StringNullableFilter<"inventory"> | string | null
    category?: StringNullableFilter<"inventory"> | string | null
    source?: StringNullableFilter<"inventory"> | string | null
    serial_number?: StringNullableFilter<"inventory"> | string | null
    certificate?: StringNullableFilter<"inventory"> | string | null
    quantity_available?: IntNullableFilter<"inventory"> | number | null
    unit_price?: FloatNullableFilter<"inventory"> | number | null
    total_value?: FloatNullableFilter<"inventory"> | number | null
    supplier_name?: StringNullableFilter<"inventory"> | string | null
    supplier_contact?: StringNullableFilter<"inventory"> | string | null
    current_location?: StringNullableFilter<"inventory"> | string | null
    date_maintenance?: DateTimeNullableFilter<"inventory"> | Date | string | null
    date_of_acquisition?: DateTimeNullableFilter<"inventory"> | Date | string | null
    expiration_date?: DateTimeNullableFilter<"inventory"> | Date | string | null
    condition?: StringNullableFilter<"inventory"> | string | null
    check_inventory_update?: StringNullableFilter<"inventory"> | string | null
    group_division?: StringNullableFilter<"inventory"> | string | null
    notes?: StringNullableFilter<"inventory"> | string | null
    inventory_files?: Inventory_filesListRelationFilter
    images?: ImagesListRelationFilter
  }, "item_id">

  export type inventoryOrderByWithAggregationInput = {
    item_id?: SortOrder
    item_name?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    serial_number?: SortOrderInput | SortOrder
    certificate?: SortOrderInput | SortOrder
    quantity_available?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_value?: SortOrderInput | SortOrder
    supplier_name?: SortOrderInput | SortOrder
    supplier_contact?: SortOrderInput | SortOrder
    current_location?: SortOrderInput | SortOrder
    date_maintenance?: SortOrderInput | SortOrder
    date_of_acquisition?: SortOrderInput | SortOrder
    expiration_date?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    check_inventory_update?: SortOrderInput | SortOrder
    group_division?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    item_id?: UuidWithAggregatesFilter<"inventory"> | string
    item_name?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    category?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    source?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    serial_number?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    certificate?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    quantity_available?: IntNullableWithAggregatesFilter<"inventory"> | number | null
    unit_price?: FloatNullableWithAggregatesFilter<"inventory"> | number | null
    total_value?: FloatNullableWithAggregatesFilter<"inventory"> | number | null
    supplier_name?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    supplier_contact?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    current_location?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    date_maintenance?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    date_of_acquisition?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    expiration_date?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    condition?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    check_inventory_update?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    group_division?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    notes?: StringNullableWithAggregatesFilter<"inventory"> | string | null
  }

  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    image_id?: UuidFilter<"images"> | string
    item_id?: UuidNullableFilter<"images"> | string | null
    file_type?: StringNullableFilter<"images"> | string | null
    file_name?: StringNullableFilter<"images"> | string | null
    content?: BytesNullableFilter<"images"> | Uint8Array | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }

  export type imagesOrderByWithRelationInput = {
    image_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: string
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    item_id?: UuidNullableFilter<"images"> | string | null
    file_type?: StringNullableFilter<"images"> | string | null
    file_name?: StringNullableFilter<"images"> | string | null
    content?: BytesNullableFilter<"images"> | Uint8Array | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }, "image_id">

  export type imagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    _count?: imagesCountOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    image_id?: UuidWithAggregatesFilter<"images"> | string
    item_id?: UuidNullableWithAggregatesFilter<"images"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"images"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"images"> | string | null
    content?: BytesNullableWithAggregatesFilter<"images"> | Uint8Array | null
  }

  export type inventory_filesWhereInput = {
    AND?: inventory_filesWhereInput | inventory_filesWhereInput[]
    OR?: inventory_filesWhereInput[]
    NOT?: inventory_filesWhereInput | inventory_filesWhereInput[]
    file_id?: UuidFilter<"inventory_files"> | string
    item_id?: UuidNullableFilter<"inventory_files"> | string | null
    file_type?: StringNullableFilter<"inventory_files"> | string | null
    file_name?: StringNullableFilter<"inventory_files"> | string | null
    content?: BytesNullableFilter<"inventory_files"> | Uint8Array | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }

  export type inventory_filesOrderByWithRelationInput = {
    file_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
  }

  export type inventory_filesWhereUniqueInput = Prisma.AtLeast<{
    file_id?: string
    AND?: inventory_filesWhereInput | inventory_filesWhereInput[]
    OR?: inventory_filesWhereInput[]
    NOT?: inventory_filesWhereInput | inventory_filesWhereInput[]
    item_id?: UuidNullableFilter<"inventory_files"> | string | null
    file_type?: StringNullableFilter<"inventory_files"> | string | null
    file_name?: StringNullableFilter<"inventory_files"> | string | null
    content?: BytesNullableFilter<"inventory_files"> | Uint8Array | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }, "file_id">

  export type inventory_filesOrderByWithAggregationInput = {
    file_id?: SortOrder
    item_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    _count?: inventory_filesCountOrderByAggregateInput
    _max?: inventory_filesMaxOrderByAggregateInput
    _min?: inventory_filesMinOrderByAggregateInput
  }

  export type inventory_filesScalarWhereWithAggregatesInput = {
    AND?: inventory_filesScalarWhereWithAggregatesInput | inventory_filesScalarWhereWithAggregatesInput[]
    OR?: inventory_filesScalarWhereWithAggregatesInput[]
    NOT?: inventory_filesScalarWhereWithAggregatesInput | inventory_filesScalarWhereWithAggregatesInput[]
    file_id?: UuidWithAggregatesFilter<"inventory_files"> | string
    item_id?: UuidNullableWithAggregatesFilter<"inventory_files"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"inventory_files"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"inventory_files"> | string | null
    content?: BytesNullableWithAggregatesFilter<"inventory_files"> | Uint8Array | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    role: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    role: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type inventoryCreateInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    inventory_files?: inventory_filesCreateNestedManyWithoutInventoryInput
    images?: imagesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    inventory_files?: inventory_filesUncheckedCreateNestedManyWithoutInventoryInput
    images?: imagesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_files?: inventory_filesUpdateManyWithoutInventoryNestedInput
    images?: imagesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_files?: inventory_filesUncheckedUpdateManyWithoutInventoryNestedInput
    images?: imagesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
  }

  export type inventoryUpdateManyMutationInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventoryUncheckedUpdateManyInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagesCreateInput = {
    image_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
    inventory?: inventoryCreateNestedOneWithoutImagesInput
  }

  export type imagesUncheckedCreateInput = {
    image_id?: string
    item_id?: string | null
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type imagesUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    inventory?: inventoryUpdateOneWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    item_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type imagesCreateManyInput = {
    image_id?: string
    item_id?: string | null
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type imagesUpdateManyMutationInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type imagesUncheckedUpdateManyInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    item_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type inventory_filesCreateInput = {
    file_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
    inventory?: inventoryCreateNestedOneWithoutInventory_filesInput
  }

  export type inventory_filesUncheckedCreateInput = {
    file_id?: string
    item_id?: string | null
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type inventory_filesUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    inventory?: inventoryUpdateOneWithoutInventory_filesNestedInput
  }

  export type inventory_filesUncheckedUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    item_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type inventory_filesCreateManyInput = {
    file_id?: string
    item_id?: string | null
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type inventory_filesUpdateManyMutationInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type inventory_filesUncheckedUpdateManyInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    item_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Inventory_filesListRelationFilter = {
    every?: inventory_filesWhereInput
    some?: inventory_filesWhereInput
    none?: inventory_filesWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: imagesWhereInput
    some?: imagesWhereInput
    none?: imagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inventory_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    item_id?: SortOrder
    item_name?: SortOrder
    category?: SortOrder
    source?: SortOrder
    serial_number?: SortOrder
    certificate?: SortOrder
    quantity_available?: SortOrder
    unit_price?: SortOrder
    total_value?: SortOrder
    supplier_name?: SortOrder
    supplier_contact?: SortOrder
    current_location?: SortOrder
    date_maintenance?: SortOrder
    date_of_acquisition?: SortOrder
    expiration_date?: SortOrder
    condition?: SortOrder
    check_inventory_update?: SortOrder
    group_division?: SortOrder
    notes?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    quantity_available?: SortOrder
    unit_price?: SortOrder
    total_value?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    item_id?: SortOrder
    item_name?: SortOrder
    category?: SortOrder
    source?: SortOrder
    serial_number?: SortOrder
    certificate?: SortOrder
    quantity_available?: SortOrder
    unit_price?: SortOrder
    total_value?: SortOrder
    supplier_name?: SortOrder
    supplier_contact?: SortOrder
    current_location?: SortOrder
    date_maintenance?: SortOrder
    date_of_acquisition?: SortOrder
    expiration_date?: SortOrder
    condition?: SortOrder
    check_inventory_update?: SortOrder
    group_division?: SortOrder
    notes?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    item_id?: SortOrder
    item_name?: SortOrder
    category?: SortOrder
    source?: SortOrder
    serial_number?: SortOrder
    certificate?: SortOrder
    quantity_available?: SortOrder
    unit_price?: SortOrder
    total_value?: SortOrder
    supplier_name?: SortOrder
    supplier_contact?: SortOrder
    current_location?: SortOrder
    date_maintenance?: SortOrder
    date_of_acquisition?: SortOrder
    expiration_date?: SortOrder
    condition?: SortOrder
    check_inventory_update?: SortOrder
    group_division?: SortOrder
    notes?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    quantity_available?: SortOrder
    unit_price?: SortOrder
    total_value?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: inventoryWhereInput | null
    isNot?: inventoryWhereInput | null
  }

  export type imagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type inventory_filesCountOrderByAggregateInput = {
    file_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type inventory_filesMaxOrderByAggregateInput = {
    file_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type inventory_filesMinOrderByAggregateInput = {
    file_id?: SortOrder
    item_id?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type inventory_filesCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput> | inventory_filesCreateWithoutInventoryInput[] | inventory_filesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_filesCreateOrConnectWithoutInventoryInput | inventory_filesCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_filesCreateManyInventoryInputEnvelope
    connect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
  }

  export type imagesCreateNestedManyWithoutInventoryInput = {
    create?: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput> | imagesCreateWithoutInventoryInput[] | imagesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInventoryInput | imagesCreateOrConnectWithoutInventoryInput[]
    createMany?: imagesCreateManyInventoryInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type inventory_filesUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput> | inventory_filesCreateWithoutInventoryInput[] | inventory_filesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_filesCreateOrConnectWithoutInventoryInput | inventory_filesCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_filesCreateManyInventoryInputEnvelope
    connect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
  }

  export type imagesUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput> | imagesCreateWithoutInventoryInput[] | imagesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInventoryInput | imagesCreateOrConnectWithoutInventoryInput[]
    createMany?: imagesCreateManyInventoryInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type inventory_filesUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput> | inventory_filesCreateWithoutInventoryInput[] | inventory_filesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_filesCreateOrConnectWithoutInventoryInput | inventory_filesCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_filesUpsertWithWhereUniqueWithoutInventoryInput | inventory_filesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_filesCreateManyInventoryInputEnvelope
    set?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    disconnect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    delete?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    connect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    update?: inventory_filesUpdateWithWhereUniqueWithoutInventoryInput | inventory_filesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_filesUpdateManyWithWhereWithoutInventoryInput | inventory_filesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_filesScalarWhereInput | inventory_filesScalarWhereInput[]
  }

  export type imagesUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput> | imagesCreateWithoutInventoryInput[] | imagesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInventoryInput | imagesCreateOrConnectWithoutInventoryInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutInventoryInput | imagesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: imagesCreateManyInventoryInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutInventoryInput | imagesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutInventoryInput | imagesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type inventory_filesUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput> | inventory_filesCreateWithoutInventoryInput[] | inventory_filesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_filesCreateOrConnectWithoutInventoryInput | inventory_filesCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_filesUpsertWithWhereUniqueWithoutInventoryInput | inventory_filesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_filesCreateManyInventoryInputEnvelope
    set?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    disconnect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    delete?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    connect?: inventory_filesWhereUniqueInput | inventory_filesWhereUniqueInput[]
    update?: inventory_filesUpdateWithWhereUniqueWithoutInventoryInput | inventory_filesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_filesUpdateManyWithWhereWithoutInventoryInput | inventory_filesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_filesScalarWhereInput | inventory_filesScalarWhereInput[]
  }

  export type imagesUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput> | imagesCreateWithoutInventoryInput[] | imagesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInventoryInput | imagesCreateOrConnectWithoutInventoryInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutInventoryInput | imagesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: imagesCreateManyInventoryInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutInventoryInput | imagesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutInventoryInput | imagesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutImagesInput = {
    create?: XOR<inventoryCreateWithoutImagesInput, inventoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutImagesInput
    connect?: inventoryWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type inventoryUpdateOneWithoutImagesNestedInput = {
    create?: XOR<inventoryCreateWithoutImagesInput, inventoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutImagesInput
    upsert?: inventoryUpsertWithoutImagesInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutImagesInput, inventoryUpdateWithoutImagesInput>, inventoryUncheckedUpdateWithoutImagesInput>
  }

  export type inventoryCreateNestedOneWithoutInventory_filesInput = {
    create?: XOR<inventoryCreateWithoutInventory_filesInput, inventoryUncheckedCreateWithoutInventory_filesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_filesInput
    connect?: inventoryWhereUniqueInput
  }

  export type inventoryUpdateOneWithoutInventory_filesNestedInput = {
    create?: XOR<inventoryCreateWithoutInventory_filesInput, inventoryUncheckedCreateWithoutInventory_filesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_filesInput
    upsert?: inventoryUpsertWithoutInventory_filesInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutInventory_filesInput, inventoryUpdateWithoutInventory_filesInput>, inventoryUncheckedUpdateWithoutInventory_filesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type inventory_filesCreateWithoutInventoryInput = {
    file_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type inventory_filesUncheckedCreateWithoutInventoryInput = {
    file_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type inventory_filesCreateOrConnectWithoutInventoryInput = {
    where: inventory_filesWhereUniqueInput
    create: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_filesCreateManyInventoryInputEnvelope = {
    data: inventory_filesCreateManyInventoryInput | inventory_filesCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type imagesCreateWithoutInventoryInput = {
    image_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type imagesUncheckedCreateWithoutInventoryInput = {
    image_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type imagesCreateOrConnectWithoutInventoryInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput>
  }

  export type imagesCreateManyInventoryInputEnvelope = {
    data: imagesCreateManyInventoryInput | imagesCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type inventory_filesUpsertWithWhereUniqueWithoutInventoryInput = {
    where: inventory_filesWhereUniqueInput
    update: XOR<inventory_filesUpdateWithoutInventoryInput, inventory_filesUncheckedUpdateWithoutInventoryInput>
    create: XOR<inventory_filesCreateWithoutInventoryInput, inventory_filesUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_filesUpdateWithWhereUniqueWithoutInventoryInput = {
    where: inventory_filesWhereUniqueInput
    data: XOR<inventory_filesUpdateWithoutInventoryInput, inventory_filesUncheckedUpdateWithoutInventoryInput>
  }

  export type inventory_filesUpdateManyWithWhereWithoutInventoryInput = {
    where: inventory_filesScalarWhereInput
    data: XOR<inventory_filesUpdateManyMutationInput, inventory_filesUncheckedUpdateManyWithoutInventoryInput>
  }

  export type inventory_filesScalarWhereInput = {
    AND?: inventory_filesScalarWhereInput | inventory_filesScalarWhereInput[]
    OR?: inventory_filesScalarWhereInput[]
    NOT?: inventory_filesScalarWhereInput | inventory_filesScalarWhereInput[]
    file_id?: UuidFilter<"inventory_files"> | string
    item_id?: UuidNullableFilter<"inventory_files"> | string | null
    file_type?: StringNullableFilter<"inventory_files"> | string | null
    file_name?: StringNullableFilter<"inventory_files"> | string | null
    content?: BytesNullableFilter<"inventory_files"> | Uint8Array | null
  }

  export type imagesUpsertWithWhereUniqueWithoutInventoryInput = {
    where: imagesWhereUniqueInput
    update: XOR<imagesUpdateWithoutInventoryInput, imagesUncheckedUpdateWithoutInventoryInput>
    create: XOR<imagesCreateWithoutInventoryInput, imagesUncheckedCreateWithoutInventoryInput>
  }

  export type imagesUpdateWithWhereUniqueWithoutInventoryInput = {
    where: imagesWhereUniqueInput
    data: XOR<imagesUpdateWithoutInventoryInput, imagesUncheckedUpdateWithoutInventoryInput>
  }

  export type imagesUpdateManyWithWhereWithoutInventoryInput = {
    where: imagesScalarWhereInput
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyWithoutInventoryInput>
  }

  export type imagesScalarWhereInput = {
    AND?: imagesScalarWhereInput | imagesScalarWhereInput[]
    OR?: imagesScalarWhereInput[]
    NOT?: imagesScalarWhereInput | imagesScalarWhereInput[]
    image_id?: UuidFilter<"images"> | string
    item_id?: UuidNullableFilter<"images"> | string | null
    file_type?: StringNullableFilter<"images"> | string | null
    file_name?: StringNullableFilter<"images"> | string | null
    content?: BytesNullableFilter<"images"> | Uint8Array | null
  }

  export type inventoryCreateWithoutImagesInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    inventory_files?: inventory_filesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutImagesInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    inventory_files?: inventory_filesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutImagesInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutImagesInput, inventoryUncheckedCreateWithoutImagesInput>
  }

  export type inventoryUpsertWithoutImagesInput = {
    update: XOR<inventoryUpdateWithoutImagesInput, inventoryUncheckedUpdateWithoutImagesInput>
    create: XOR<inventoryCreateWithoutImagesInput, inventoryUncheckedCreateWithoutImagesInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutImagesInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutImagesInput, inventoryUncheckedUpdateWithoutImagesInput>
  }

  export type inventoryUpdateWithoutImagesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_files?: inventory_filesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutImagesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_files?: inventory_filesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateWithoutInventory_filesInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    images?: imagesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutInventory_filesInput = {
    item_id?: string
    item_name?: string | null
    category?: string | null
    source?: string | null
    serial_number?: string | null
    certificate?: string | null
    quantity_available?: number | null
    unit_price?: number | null
    total_value?: number | null
    supplier_name?: string | null
    supplier_contact?: string | null
    current_location?: string | null
    date_maintenance?: Date | string | null
    date_of_acquisition?: Date | string | null
    expiration_date?: Date | string | null
    condition?: string | null
    check_inventory_update?: string | null
    group_division?: string | null
    notes?: string | null
    images?: imagesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutInventory_filesInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutInventory_filesInput, inventoryUncheckedCreateWithoutInventory_filesInput>
  }

  export type inventoryUpsertWithoutInventory_filesInput = {
    update: XOR<inventoryUpdateWithoutInventory_filesInput, inventoryUncheckedUpdateWithoutInventory_filesInput>
    create: XOR<inventoryCreateWithoutInventory_filesInput, inventoryUncheckedCreateWithoutInventory_filesInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutInventory_filesInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutInventory_filesInput, inventoryUncheckedUpdateWithoutInventory_filesInput>
  }

  export type inventoryUpdateWithoutInventory_filesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    images?: imagesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutInventory_filesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    item_name?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    serial_number?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_available?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    total_value?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_contact?: NullableStringFieldUpdateOperationsInput | string | null
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    date_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_of_acquisition?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    check_inventory_update?: NullableStringFieldUpdateOperationsInput | string | null
    group_division?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    images?: imagesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventory_filesCreateManyInventoryInput = {
    file_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type imagesCreateManyInventoryInput = {
    image_id?: string
    file_type?: string | null
    file_name?: string | null
    content?: Uint8Array | null
  }

  export type inventory_filesUpdateWithoutInventoryInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type inventory_filesUncheckedUpdateWithoutInventoryInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type inventory_filesUncheckedUpdateManyWithoutInventoryInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type imagesUpdateWithoutInventoryInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type imagesUncheckedUpdateWithoutInventoryInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type imagesUncheckedUpdateManyWithoutInventoryInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}