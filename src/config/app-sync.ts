import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

// import Auth from "@aws-amplify/auth";
import { AuthOptions, AUTH_TYPE, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

interface AuthLink {
  url: string;
  region: string;
  auth: AuthOptions;
  disableOffline?: boolean;
}

// Config Objects
const awsConfig = {
  graphQlEndpoint:
    "https://oh2zevyf2zd7tfny2d23npg3ou.appsync-api.ca-central-1.amazonaws.com/graphql",
  region: "ca-central-1",
};

const apiKeyAuthConfig: AuthLink = {
  url: awsConfig.graphQlEndpoint,
  region: awsConfig.region,
  disableOffline: true,
  auth: { type: AUTH_TYPE.API_KEY, apiKey: "da2-67ztikq2i5e5ta34crlc7khnem" },
};

const createLink = ({ auth, region, url }: AuthLink): ApolloLink => {
  const httpLink = createHttpLink({ uri: url });

  return from([
    createAuthLink({ auth, region, url }),
    createSubscriptionHandshakeLink(url, httpLink),
  ]);
};

const apiKeyCache = new InMemoryCache({});

const ApiKeyClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: createLink(apiKeyAuthConfig),
  cache: apiKeyCache,
  connectToDevTools: true,
});

export { ApiKeyClient };
