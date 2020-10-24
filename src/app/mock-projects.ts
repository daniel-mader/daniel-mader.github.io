import {Project, Tag} from './project';

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'How to support different JWTs in your Spring Boot application',
    shortDescription: 'A guide on how to support multiple JWTs signed by different issuers in your Spring Boot Application.',
    tags: [Tag.Security, Tag.Backend]
    /* Read the full blog post [here](https://www.novatec-gmbh.de/blog).
    ## Code
    [https://github.com/daniel-mader/blog-post-spring-multi-jwt](https://github.com/daniel-mader/blog-post-spring-multi-jwt)

    ## Why?
    If you're migrating from some sort of custom token signing mechanism to a standardized protocol like OpenID Connect,
    you might need to support both tokens to prevent breaking changes.
    */
  },
  {
    id: 1,
    title: 'Awesome Keycloak',
    shortDescription: 'A beautifully styled Keycloak, configured to use a modern form of authentication: WebAuthn',
    tags: [Tag.Security, Tag.Frontend]
  },
  {
    id: 2,
    title: 'Kotlin Multiplatform Validator',
    shortDescription: 'Compiling Kotlin code to run on a JVM backend as well as generating an npm module that can be used in the frontend.',
    tags: []
  },
  {
    id: 3,
    title: 'OAuth Test Client',
    shortDescription: 'Single-page application that\'s verbose about its communication with an OAuth authorization server.',
    tags: []
    /* For example, you can test your authorization server with this client to see what it will look like from your consumers. */
  }
];
