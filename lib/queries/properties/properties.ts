export const ALL_PROPERTIES = `
  query {
    propertyCollection(limit: 9) {
      total
      items {
        sys {
          id
        }
        title
        slug
        price
        location
        totalArea
        images: imagesCollection(limit: 10) {
          items {
            url
          }
        }
        amenities: amenitiesCollection(limit: 3) {
          items {
            name
          }
        }
      }
    }
  }
`;
