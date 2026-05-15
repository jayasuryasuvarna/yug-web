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
        priceUnit
        pricePerUnit
        totalArea
        propertyType {
          name
        }
        imagesCollection(limit: 10) {
          items {
            url
          }
        }
        videosCollection(limit: 5) {
          items {
            url
            contentType
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
