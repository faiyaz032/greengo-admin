
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
 * Model AdminUserView
 * 
 */
export type AdminUserView = $Result.DefaultSelection<Prisma.$AdminUserViewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUserViews
 * const adminUserViews = await prisma.adminUserView.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AdminUserViews
   * const adminUserViews = await prisma.adminUserView.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUserView`: Exposes CRUD operations for the **AdminUserView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUserViews
    * const adminUserViews = await prisma.adminUserView.findMany()
    * ```
    */
  get adminUserView(): Prisma.AdminUserViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    AdminUserView: 'AdminUserView'
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
      modelProps: "adminUserView"
      txIsolationLevel: never
    }
    model: {
      AdminUserView: {
        payload: Prisma.$AdminUserViewPayload<ExtArgs>
        fields: Prisma.AdminUserViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          findFirst: {
            args: Prisma.AdminUserViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          findMany: {
            args: Prisma.AdminUserViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>[]
          }
          create: {
            args: Prisma.AdminUserViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          createMany: {
            args: Prisma.AdminUserViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          update: {
            args: Prisma.AdminUserViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserViewPayload>
          }
          aggregate: {
            args: Prisma.AdminUserViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUserView>
          }
          groupBy: {
            args: Prisma.AdminUserViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserViewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminUserViewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminUserViewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminUserViewCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserViewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    adminUserView?: AdminUserViewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model AdminUserView
   */

  export type AggregateAdminUserView = {
    _count: AdminUserViewCountAggregateOutputType | null
    _min: AdminUserViewMinAggregateOutputType | null
    _max: AdminUserViewMaxAggregateOutputType | null
  }

  export type AdminUserViewMinAggregateOutputType = {
    id: string | null
    email: string | null
    lastSyncedAt: Date | null
  }

  export type AdminUserViewMaxAggregateOutputType = {
    id: string | null
    email: string | null
    lastSyncedAt: Date | null
  }

  export type AdminUserViewCountAggregateOutputType = {
    id: number
    email: number
    lastSyncedAt: number
    squareDonationsUsers: number
    quotePluginUsers: number
    wishlistFlowUsers: number
    summary: number
    mailerLiteSyncedGroups: number
    _all: number
  }


  export type AdminUserViewMinAggregateInputType = {
    id?: true
    email?: true
    lastSyncedAt?: true
  }

  export type AdminUserViewMaxAggregateInputType = {
    id?: true
    email?: true
    lastSyncedAt?: true
  }

  export type AdminUserViewCountAggregateInputType = {
    id?: true
    email?: true
    lastSyncedAt?: true
    squareDonationsUsers?: true
    quotePluginUsers?: true
    wishlistFlowUsers?: true
    summary?: true
    mailerLiteSyncedGroups?: true
    _all?: true
  }

  export type AdminUserViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUserView to aggregate.
     */
    where?: AdminUserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUserViews to fetch.
     */
    orderBy?: AdminUserViewOrderByWithRelationInput | AdminUserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUserViews
    **/
    _count?: true | AdminUserViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserViewMaxAggregateInputType
  }

  export type GetAdminUserViewAggregateType<T extends AdminUserViewAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUserView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUserView[P]>
      : GetScalarType<T[P], AggregateAdminUserView[P]>
  }




  export type AdminUserViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserViewWhereInput
    orderBy?: AdminUserViewOrderByWithAggregationInput | AdminUserViewOrderByWithAggregationInput[]
    by: AdminUserViewScalarFieldEnum[] | AdminUserViewScalarFieldEnum
    having?: AdminUserViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserViewCountAggregateInputType | true
    _min?: AdminUserViewMinAggregateInputType
    _max?: AdminUserViewMaxAggregateInputType
  }

  export type AdminUserViewGroupByOutputType = {
    id: string
    email: string
    lastSyncedAt: Date
    squareDonationsUsers: JsonValue
    quotePluginUsers: JsonValue
    wishlistFlowUsers: JsonValue
    summary: JsonValue
    mailerLiteSyncedGroups: string[]
    _count: AdminUserViewCountAggregateOutputType | null
    _min: AdminUserViewMinAggregateOutputType | null
    _max: AdminUserViewMaxAggregateOutputType | null
  }

  type GetAdminUserViewGroupByPayload<T extends AdminUserViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserViewGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserViewGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    lastSyncedAt?: boolean
    squareDonationsUsers?: boolean
    quotePluginUsers?: boolean
    wishlistFlowUsers?: boolean
    summary?: boolean
    mailerLiteSyncedGroups?: boolean
  }, ExtArgs["result"]["adminUserView"]>



  export type AdminUserViewSelectScalar = {
    id?: boolean
    email?: boolean
    lastSyncedAt?: boolean
    squareDonationsUsers?: boolean
    quotePluginUsers?: boolean
    wishlistFlowUsers?: boolean
    summary?: boolean
    mailerLiteSyncedGroups?: boolean
  }

  export type AdminUserViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "lastSyncedAt" | "squareDonationsUsers" | "quotePluginUsers" | "wishlistFlowUsers" | "summary" | "mailerLiteSyncedGroups", ExtArgs["result"]["adminUserView"]>

  export type $AdminUserViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUserView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      lastSyncedAt: Date
      squareDonationsUsers: Prisma.JsonValue
      quotePluginUsers: Prisma.JsonValue
      wishlistFlowUsers: Prisma.JsonValue
      summary: Prisma.JsonValue
      mailerLiteSyncedGroups: string[]
    }, ExtArgs["result"]["adminUserView"]>
    composites: {}
  }

  type AdminUserViewGetPayload<S extends boolean | null | undefined | AdminUserViewDefaultArgs> = $Result.GetResult<Prisma.$AdminUserViewPayload, S>

  type AdminUserViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserViewCountAggregateInputType | true
    }

  export interface AdminUserViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUserView'], meta: { name: 'AdminUserView' } }
    /**
     * Find zero or one AdminUserView that matches the filter.
     * @param {AdminUserViewFindUniqueArgs} args - Arguments to find a AdminUserView
     * @example
     * // Get one AdminUserView
     * const adminUserView = await prisma.adminUserView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserViewFindUniqueArgs>(args: SelectSubset<T, AdminUserViewFindUniqueArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUserView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserViewFindUniqueOrThrowArgs} args - Arguments to find a AdminUserView
     * @example
     * // Get one AdminUserView
     * const adminUserView = await prisma.adminUserView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserViewFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUserView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewFindFirstArgs} args - Arguments to find a AdminUserView
     * @example
     * // Get one AdminUserView
     * const adminUserView = await prisma.adminUserView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserViewFindFirstArgs>(args?: SelectSubset<T, AdminUserViewFindFirstArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUserView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewFindFirstOrThrowArgs} args - Arguments to find a AdminUserView
     * @example
     * // Get one AdminUserView
     * const adminUserView = await prisma.adminUserView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserViewFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUserViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUserViews
     * const adminUserViews = await prisma.adminUserView.findMany()
     * 
     * // Get first 10 AdminUserViews
     * const adminUserViews = await prisma.adminUserView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserViewWithIdOnly = await prisma.adminUserView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserViewFindManyArgs>(args?: SelectSubset<T, AdminUserViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUserView.
     * @param {AdminUserViewCreateArgs} args - Arguments to create a AdminUserView.
     * @example
     * // Create one AdminUserView
     * const AdminUserView = await prisma.adminUserView.create({
     *   data: {
     *     // ... data to create a AdminUserView
     *   }
     * })
     * 
     */
    create<T extends AdminUserViewCreateArgs>(args: SelectSubset<T, AdminUserViewCreateArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUserViews.
     * @param {AdminUserViewCreateManyArgs} args - Arguments to create many AdminUserViews.
     * @example
     * // Create many AdminUserViews
     * const adminUserView = await prisma.adminUserView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserViewCreateManyArgs>(args?: SelectSubset<T, AdminUserViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUserView.
     * @param {AdminUserViewDeleteArgs} args - Arguments to delete one AdminUserView.
     * @example
     * // Delete one AdminUserView
     * const AdminUserView = await prisma.adminUserView.delete({
     *   where: {
     *     // ... filter to delete one AdminUserView
     *   }
     * })
     * 
     */
    delete<T extends AdminUserViewDeleteArgs>(args: SelectSubset<T, AdminUserViewDeleteArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUserView.
     * @param {AdminUserViewUpdateArgs} args - Arguments to update one AdminUserView.
     * @example
     * // Update one AdminUserView
     * const adminUserView = await prisma.adminUserView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserViewUpdateArgs>(args: SelectSubset<T, AdminUserViewUpdateArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUserViews.
     * @param {AdminUserViewDeleteManyArgs} args - Arguments to filter AdminUserViews to delete.
     * @example
     * // Delete a few AdminUserViews
     * const { count } = await prisma.adminUserView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserViewDeleteManyArgs>(args?: SelectSubset<T, AdminUserViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUserViews
     * const adminUserView = await prisma.adminUserView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserViewUpdateManyArgs>(args: SelectSubset<T, AdminUserViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUserView.
     * @param {AdminUserViewUpsertArgs} args - Arguments to update or create a AdminUserView.
     * @example
     * // Update or create a AdminUserView
     * const adminUserView = await prisma.adminUserView.upsert({
     *   create: {
     *     // ... data to create a AdminUserView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUserView we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserViewUpsertArgs>(args: SelectSubset<T, AdminUserViewUpsertArgs<ExtArgs>>): Prisma__AdminUserViewClient<$Result.GetResult<Prisma.$AdminUserViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUserViews that matches the filter.
     * @param {AdminUserViewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const adminUserView = await prisma.adminUserView.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminUserViewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AdminUserView.
     * @param {AdminUserViewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const adminUserView = await prisma.adminUserView.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminUserViewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AdminUserViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewCountArgs} args - Arguments to filter AdminUserViews to count.
     * @example
     * // Count the number of AdminUserViews
     * const count = await prisma.adminUserView.count({
     *   where: {
     *     // ... the filter for the AdminUserViews we want to count
     *   }
     * })
    **/
    count<T extends AdminUserViewCountArgs>(
      args?: Subset<T, AdminUserViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUserView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserViewAggregateArgs>(args: Subset<T, AdminUserViewAggregateArgs>): Prisma.PrismaPromise<GetAdminUserViewAggregateType<T>>

    /**
     * Group by AdminUserView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserViewGroupByArgs} args - Group by arguments.
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
      T extends AdminUserViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserViewGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUserView model
   */
  readonly fields: AdminUserViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUserView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUserView model
   */
  interface AdminUserViewFieldRefs {
    readonly id: FieldRef<"AdminUserView", 'String'>
    readonly email: FieldRef<"AdminUserView", 'String'>
    readonly lastSyncedAt: FieldRef<"AdminUserView", 'DateTime'>
    readonly squareDonationsUsers: FieldRef<"AdminUserView", 'Json'>
    readonly quotePluginUsers: FieldRef<"AdminUserView", 'Json'>
    readonly wishlistFlowUsers: FieldRef<"AdminUserView", 'Json'>
    readonly summary: FieldRef<"AdminUserView", 'Json'>
    readonly mailerLiteSyncedGroups: FieldRef<"AdminUserView", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * AdminUserView findUnique
   */
  export type AdminUserViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter, which AdminUserView to fetch.
     */
    where: AdminUserViewWhereUniqueInput
  }

  /**
   * AdminUserView findUniqueOrThrow
   */
  export type AdminUserViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter, which AdminUserView to fetch.
     */
    where: AdminUserViewWhereUniqueInput
  }

  /**
   * AdminUserView findFirst
   */
  export type AdminUserViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter, which AdminUserView to fetch.
     */
    where?: AdminUserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUserViews to fetch.
     */
    orderBy?: AdminUserViewOrderByWithRelationInput | AdminUserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUserViews.
     */
    cursor?: AdminUserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUserViews.
     */
    distinct?: AdminUserViewScalarFieldEnum | AdminUserViewScalarFieldEnum[]
  }

  /**
   * AdminUserView findFirstOrThrow
   */
  export type AdminUserViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter, which AdminUserView to fetch.
     */
    where?: AdminUserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUserViews to fetch.
     */
    orderBy?: AdminUserViewOrderByWithRelationInput | AdminUserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUserViews.
     */
    cursor?: AdminUserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUserViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUserViews.
     */
    distinct?: AdminUserViewScalarFieldEnum | AdminUserViewScalarFieldEnum[]
  }

  /**
   * AdminUserView findMany
   */
  export type AdminUserViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter, which AdminUserViews to fetch.
     */
    where?: AdminUserViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUserViews to fetch.
     */
    orderBy?: AdminUserViewOrderByWithRelationInput | AdminUserViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUserViews.
     */
    cursor?: AdminUserViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUserViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUserViews.
     */
    skip?: number
    distinct?: AdminUserViewScalarFieldEnum | AdminUserViewScalarFieldEnum[]
  }

  /**
   * AdminUserView create
   */
  export type AdminUserViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUserView.
     */
    data: XOR<AdminUserViewCreateInput, AdminUserViewUncheckedCreateInput>
  }

  /**
   * AdminUserView createMany
   */
  export type AdminUserViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUserViews.
     */
    data: AdminUserViewCreateManyInput | AdminUserViewCreateManyInput[]
  }

  /**
   * AdminUserView update
   */
  export type AdminUserViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUserView.
     */
    data: XOR<AdminUserViewUpdateInput, AdminUserViewUncheckedUpdateInput>
    /**
     * Choose, which AdminUserView to update.
     */
    where: AdminUserViewWhereUniqueInput
  }

  /**
   * AdminUserView updateMany
   */
  export type AdminUserViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUserViews.
     */
    data: XOR<AdminUserViewUpdateManyMutationInput, AdminUserViewUncheckedUpdateManyInput>
    /**
     * Filter which AdminUserViews to update
     */
    where?: AdminUserViewWhereInput
    /**
     * Limit how many AdminUserViews to update.
     */
    limit?: number
  }

  /**
   * AdminUserView upsert
   */
  export type AdminUserViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUserView to update in case it exists.
     */
    where: AdminUserViewWhereUniqueInput
    /**
     * In case the AdminUserView found by the `where` argument doesn't exist, create a new AdminUserView with this data.
     */
    create: XOR<AdminUserViewCreateInput, AdminUserViewUncheckedCreateInput>
    /**
     * In case the AdminUserView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserViewUpdateInput, AdminUserViewUncheckedUpdateInput>
  }

  /**
   * AdminUserView delete
   */
  export type AdminUserViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
    /**
     * Filter which AdminUserView to delete.
     */
    where: AdminUserViewWhereUniqueInput
  }

  /**
   * AdminUserView deleteMany
   */
  export type AdminUserViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUserViews to delete
     */
    where?: AdminUserViewWhereInput
    /**
     * Limit how many AdminUserViews to delete.
     */
    limit?: number
  }

  /**
   * AdminUserView findRaw
   */
  export type AdminUserViewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdminUserView aggregateRaw
   */
  export type AdminUserViewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AdminUserView without action
   */
  export type AdminUserViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserView
     */
    select?: AdminUserViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUserView
     */
    omit?: AdminUserViewOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AdminUserViewScalarFieldEnum: {
    id: 'id',
    email: 'email',
    lastSyncedAt: 'lastSyncedAt',
    squareDonationsUsers: 'squareDonationsUsers',
    quotePluginUsers: 'quotePluginUsers',
    wishlistFlowUsers: 'wishlistFlowUsers',
    summary: 'summary',
    mailerLiteSyncedGroups: 'mailerLiteSyncedGroups'
  };

  export type AdminUserViewScalarFieldEnum = (typeof AdminUserViewScalarFieldEnum)[keyof typeof AdminUserViewScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserViewWhereInput = {
    AND?: AdminUserViewWhereInput | AdminUserViewWhereInput[]
    OR?: AdminUserViewWhereInput[]
    NOT?: AdminUserViewWhereInput | AdminUserViewWhereInput[]
    id?: StringFilter<"AdminUserView"> | string
    email?: StringFilter<"AdminUserView"> | string
    lastSyncedAt?: DateTimeFilter<"AdminUserView"> | Date | string
    squareDonationsUsers?: JsonFilter<"AdminUserView">
    quotePluginUsers?: JsonFilter<"AdminUserView">
    wishlistFlowUsers?: JsonFilter<"AdminUserView">
    summary?: JsonFilter<"AdminUserView">
    mailerLiteSyncedGroups?: StringNullableListFilter<"AdminUserView">
  }

  export type AdminUserViewOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    lastSyncedAt?: SortOrder
    squareDonationsUsers?: SortOrder
    quotePluginUsers?: SortOrder
    wishlistFlowUsers?: SortOrder
    summary?: SortOrder
    mailerLiteSyncedGroups?: SortOrder
  }

  export type AdminUserViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserViewWhereInput | AdminUserViewWhereInput[]
    OR?: AdminUserViewWhereInput[]
    NOT?: AdminUserViewWhereInput | AdminUserViewWhereInput[]
    lastSyncedAt?: DateTimeFilter<"AdminUserView"> | Date | string
    squareDonationsUsers?: JsonFilter<"AdminUserView">
    quotePluginUsers?: JsonFilter<"AdminUserView">
    wishlistFlowUsers?: JsonFilter<"AdminUserView">
    summary?: JsonFilter<"AdminUserView">
    mailerLiteSyncedGroups?: StringNullableListFilter<"AdminUserView">
  }, "id" | "email">

  export type AdminUserViewOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    lastSyncedAt?: SortOrder
    squareDonationsUsers?: SortOrder
    quotePluginUsers?: SortOrder
    wishlistFlowUsers?: SortOrder
    summary?: SortOrder
    mailerLiteSyncedGroups?: SortOrder
    _count?: AdminUserViewCountOrderByAggregateInput
    _max?: AdminUserViewMaxOrderByAggregateInput
    _min?: AdminUserViewMinOrderByAggregateInput
  }

  export type AdminUserViewScalarWhereWithAggregatesInput = {
    AND?: AdminUserViewScalarWhereWithAggregatesInput | AdminUserViewScalarWhereWithAggregatesInput[]
    OR?: AdminUserViewScalarWhereWithAggregatesInput[]
    NOT?: AdminUserViewScalarWhereWithAggregatesInput | AdminUserViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUserView"> | string
    email?: StringWithAggregatesFilter<"AdminUserView"> | string
    lastSyncedAt?: DateTimeWithAggregatesFilter<"AdminUserView"> | Date | string
    squareDonationsUsers?: JsonWithAggregatesFilter<"AdminUserView">
    quotePluginUsers?: JsonWithAggregatesFilter<"AdminUserView">
    wishlistFlowUsers?: JsonWithAggregatesFilter<"AdminUserView">
    summary?: JsonWithAggregatesFilter<"AdminUserView">
    mailerLiteSyncedGroups?: StringNullableListFilter<"AdminUserView">
  }

  export type AdminUserViewCreateInput = {
    id?: string
    email: string
    lastSyncedAt?: Date | string
    squareDonationsUsers: InputJsonValue
    quotePluginUsers: InputJsonValue
    wishlistFlowUsers: InputJsonValue
    summary: InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewCreatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewUncheckedCreateInput = {
    id?: string
    email: string
    lastSyncedAt?: Date | string
    squareDonationsUsers: InputJsonValue
    quotePluginUsers: InputJsonValue
    wishlistFlowUsers: InputJsonValue
    summary: InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewCreatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareDonationsUsers?: InputJsonValue | InputJsonValue
    quotePluginUsers?: InputJsonValue | InputJsonValue
    wishlistFlowUsers?: InputJsonValue | InputJsonValue
    summary?: InputJsonValue | InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewUpdatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareDonationsUsers?: InputJsonValue | InputJsonValue
    quotePluginUsers?: InputJsonValue | InputJsonValue
    wishlistFlowUsers?: InputJsonValue | InputJsonValue
    summary?: InputJsonValue | InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewUpdatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewCreateManyInput = {
    id?: string
    email: string
    lastSyncedAt?: Date | string
    squareDonationsUsers: InputJsonValue
    quotePluginUsers: InputJsonValue
    wishlistFlowUsers: InputJsonValue
    summary: InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewCreatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareDonationsUsers?: InputJsonValue | InputJsonValue
    quotePluginUsers?: InputJsonValue | InputJsonValue
    wishlistFlowUsers?: InputJsonValue | InputJsonValue
    summary?: InputJsonValue | InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewUpdatemailerLiteSyncedGroupsInput | string[]
  }

  export type AdminUserViewUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareDonationsUsers?: InputJsonValue | InputJsonValue
    quotePluginUsers?: InputJsonValue | InputJsonValue
    wishlistFlowUsers?: InputJsonValue | InputJsonValue
    summary?: InputJsonValue | InputJsonValue
    mailerLiteSyncedGroups?: AdminUserViewUpdatemailerLiteSyncedGroupsInput | string[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AdminUserViewCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    lastSyncedAt?: SortOrder
    squareDonationsUsers?: SortOrder
    quotePluginUsers?: SortOrder
    wishlistFlowUsers?: SortOrder
    summary?: SortOrder
    mailerLiteSyncedGroups?: SortOrder
  }

  export type AdminUserViewMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    lastSyncedAt?: SortOrder
  }

  export type AdminUserViewMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    lastSyncedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AdminUserViewCreatemailerLiteSyncedGroupsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUserViewUpdatemailerLiteSyncedGroupsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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