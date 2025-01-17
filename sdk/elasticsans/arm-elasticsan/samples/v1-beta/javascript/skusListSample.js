/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all the available Skus in the region and information related to them
 *
 * @summary List all the available Skus in the region and information related to them
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/Skus_List_MaximumSet_Gen.json
 */
async function skusListMaximumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const filter = "aaaa";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.skus.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

skusListMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to List all the available Skus in the region and information related to them
 *
 * @summary List all the available Skus in the region and information related to them
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/Skus_List_MinimumSet_Gen.json
 */
async function skusListMinimumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.skus.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

skusListMinimumSetGen().catch(console.error);
