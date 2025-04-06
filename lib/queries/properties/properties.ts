export const propertyTypesQuery = `
  query {
    propertyTypeCollection {
      items {
        name
        description
        sys {
          id
        }
      }
    }
  }
`;

export const getAllPropertiesQuery = `
  query {
    propertyCollection(limit: 10) {
      total
      items {
        sys {
          id
        }
        title
        location
        price
        totalArea
        propertyType {
          name
        }
        imagesCollection(limit: 10) {
          items {
            url
          }
        }
        amenitiesCollection(limit: 10) {
          items {
            ... on Amenity {
              name
            }
          }
        }
        slug
      }
    }
  }
`;
