export const OUR_OFFERINGS_QUERY = `
  query {
    farmlandCollection {
      items {
        title
        description
        imagesCollection {
          items {
            url
          }
        }
        location
        price
        managedCrops
      }
    }
  }
`;

export const FEATURED_PROPERTIES =`
query FeaturedProperties {
  farmlandCollection {
    items {
      title
      location
      price
      description
      imagesCollection {
        items {
          url
        }
      }
      managedCrops
      expectedYield
    }
  }
}
`;