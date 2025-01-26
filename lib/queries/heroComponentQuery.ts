export const HERO_COMPONENT_QUERY = `
  query GetHeroComponent {
    heroComponentCollection(limit: 1) {
      items {
        title
        subTitle
        coverImage {
          url
        }
      }
    }
  }
`;