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
        videosCollection {
          items {
            url
            contentType
          }
        }
        location
        price
        priceUnit
        pricePerUnit
        totalArea
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
