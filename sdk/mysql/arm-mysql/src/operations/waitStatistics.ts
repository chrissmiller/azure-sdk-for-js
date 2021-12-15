/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WaitStatistics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementClientContext } from "../mySQLManagementClientContext";
import {
  WaitStatistic,
  WaitStatisticsInput,
  WaitStatisticsListByServerNextOptionalParams,
  WaitStatisticsListByServerOptionalParams,
  WaitStatisticsGetOptionalParams,
  WaitStatisticsGetResponse,
  WaitStatisticsListByServerResponse,
  WaitStatisticsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WaitStatistics operations. */
export class WaitStatisticsImpl implements WaitStatistics {
  private readonly client: MySQLManagementClientContext;

  /**
   * Initialize a new instance of the class WaitStatistics class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve wait statistics for specified aggregation window.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving wait statistics.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    parameters: WaitStatisticsInput,
    options?: WaitStatisticsListByServerOptionalParams
  ): PagedAsyncIterableIterator<WaitStatistic> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      parameters,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          parameters,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    parameters: WaitStatisticsInput,
    options?: WaitStatisticsListByServerOptionalParams
  ): AsyncIterableIterator<WaitStatistic[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      parameters,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        parameters,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    parameters: WaitStatisticsInput,
    options?: WaitStatisticsListByServerOptionalParams
  ): AsyncIterableIterator<WaitStatistic> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve wait statistics for specified identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param waitStatisticsId The Wait Statistic identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    waitStatisticsId: string,
    options?: WaitStatisticsGetOptionalParams
  ): Promise<WaitStatisticsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, waitStatisticsId, options },
      getOperationSpec
    );
  }

  /**
   * Retrieve wait statistics for specified aggregation window.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving wait statistics.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    parameters: WaitStatisticsInput,
    options?: WaitStatisticsListByServerOptionalParams
  ): Promise<WaitStatisticsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, parameters, options },
      listByServerOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving wait statistics.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    parameters: WaitStatisticsInput,
    nextLink: string,
    options?: WaitStatisticsListByServerNextOptionalParams
  ): Promise<WaitStatisticsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, parameters, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/waitStatistics/{waitStatisticsId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WaitStatistic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.waitStatisticsId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/waitStatistics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WaitStatisticsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WaitStatisticsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};