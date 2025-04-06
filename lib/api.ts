import { HERO_COMPONENT_QUERY } from '@/lib/queries/heroComponentQuery';
import { FEATURED_PROPERTIES } from './queries/featuredPropertiesQuery';
import { PROPERTY_FIELDS } from './queries/propertyQuery';
import { propertyTypesQuery, getAllPropertiesQuery } from './queries/properties/properties';

const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, variables: Record<string, any> = {}, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${ process.env.CONTENTFUL_SPACE_ID }/environments/${ process.env.CONTENTFUL_ENVIRONMENT }`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query, variables }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

function extractHeroComponent(fetchResponse: any) {
  return;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${ slug }" }, preview: true, limit: 1) {
        items {
          ${ POST_GRAPHQL_FIELDS }
        }
      }
    }`,
    {},
    true,
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${ isDraftMode ? "true" : "false"
    }) {
        items {
          ${ POST_GRAPHQL_FIELDS }
        }
      }
    }`,
    {},
    isDraftMode,
  );
  console.log("entries---->", entries);

  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${ slug }" }, preview: ${ preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${ POST_GRAPHQL_FIELDS }
        }
      }
    }`,
    {},
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${ slug }" }, order: date_DESC, preview: ${ preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${ POST_GRAPHQL_FIELDS }
        }
      }
    }`,
    {},
    preview,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}


export async function getHeroComponent(isDraftMode: boolean) {
  const entry = await fetchGraphQL(
    HERO_COMPONENT_QUERY,
    {},
    isDraftMode,
  );

  return entry?.data?.heroComponentCollection?.items?.[0];
}

export async function getFeaturedProperties() {
  const entry = await fetchGraphQL(
    FEATURED_PROPERTIES,
  );

  return entry?.data?.propertyCollection?.items;
}

export async function getPropertyBySlug(slug: string) {
  const query = `
  ${ PROPERTY_FIELDS }
  query ($slug: String!) {
    propertyCollection(where: { slug: $slug }, limit: 1) {
      items {
        ...PropertyFields
      }
    }
  }
`;

  const variables = { slug };

  const entry = await fetchGraphQL(query, variables);

  return entry?.data?.propertyCollection?.items?.[0];
}

export async function getPropertyTypes() {
  const response = await fetchGraphQL(propertyTypesQuery);
  return response.data;
}

export async function getAllProperties() {
  const response = await fetchGraphQL(getAllPropertiesQuery);
  return response.data;
}

export async function getUniqueLocations(properties: any[]) {
  // Extract unique locations from properties
  const locations = new Set(properties.map(property => property.location));
  return Array.from(locations).sort();
}
