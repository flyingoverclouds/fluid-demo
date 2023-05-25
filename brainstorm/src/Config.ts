import {
	AzureClientProps,
	AzureLocalConnectionConfig,
	AzureRemoteConnectionConfig,
} from "@fluidframework/azure-client";
import { SharedMap } from "fluid-framework";
import { getRandomName } from "@fluidframework/server-services-client";
import { v4 as uuid } from "uuid";
import { InsecureTokenProvider } from "@fluidframework/test-client-utils";

export const useAzure = process.env.REACT_APP_FLUID_CLIENT === "azure";

export const containerSchema = {
	initialObjects: {
		map: SharedMap,
	},
};

const userConfig = {
	id: uuid(),
	name: getRandomName(),
};


const remoteConnectionConfig: AzureRemoteConnectionConfig = {
	type: "remote",
	tenantId: "XXXX", // TODO: REPLACE WITH YOUR TENANT ID
	tokenProvider: new InsecureTokenProvider(
		"XXXXX" /* TODO: REPLACE WITH YOUR PRIMARY KEY */, 
		userConfig
	),
	endpoint: "https://XXXXX.fluidrelay.azure.com", // TODO: REPLACE WITH YOUR AZURE ENDPOINT
};

const localConnectionConfig: AzureLocalConnectionConfig = {
	type: "local",
	tokenProvider: new InsecureTokenProvider("", userConfig),
	endpoint: "http://localhost:7070",
};

export const connectionConfig: AzureClientProps = {
	connection: useAzure ? remoteConnectionConfig : localConnectionConfig,
};
