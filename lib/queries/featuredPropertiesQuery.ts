export const FEATURED_PROPERTIES = `
  query {
      propertyCollection(limit: 3) {
      items {
        slug
        title
        description
        imagesCollection {
          items {
            url
          }
        }
        location
        price
        propertyCropsCollection {
          items {
            cropType {
              name
            }
          }
        }
      }
    }
  }
`;
