/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ApiVersion20171201Preview,
  MetricsNamespacesClientOptionalParams
} from "./models";

const packageName = "monitor-metrics-namespaces";
const packageVersion = "1.0.0-beta.1";

/** @hidden */
export class MetricsNamespacesClientContext extends coreHttp.ServiceClient {
  $host: string;
  apiVersion: ApiVersion20171201Preview;

  /**
   * Initializes a new instance of the MetricsNamespacesClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion20171201Preview,
    options?: MetricsNamespacesClientOptionalParams
  ) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "https://management.azure.com";

    // Parameter assignments
    this.apiVersion = apiVersion;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
  }
}