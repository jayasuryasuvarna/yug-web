export const PROPERTY_FIELDS = `
  fragment PropertyFields on Property {
    sys {
      id
    }
    title
    slug
    description
    status
    features
    price
    priceUnit
    pricePerUnit
    location
    totalArea
    completionDate
    constructionProgress
    numberOfVillas
    brochureUrl
    threeDDesignUrl
    
    propertyType {
      name
      description
    }
    
    imagesCollection {
      items {
        url
        title
        description
        width
        height
      }
    }

    videosCollection {
      items {
        url
        title
        description
        contentType
        width
        height
      }
    }

    amenitiesCollection {
      items {
        sys {
          id
        }
        name
        available
      }
    }
    
    propertyInvestmentDetailsCollection {
      items {
        sys {
          id
        }
        name
        value
        customDescription
        investmentType {
          name
          description
          unit
        }
      }
    }
    
    propertyCropsCollection {
      items {
        sys {
          id
        }
        estimatedYieldPerYear
        revenuePerUnit
        maintenanceCost
        customDescription
        specificHarvestingMonths
        cropType {
          name
          description
          harvestingSeasons
          maintenanceRequirements
          image {
            url
            title
            description
          }
        }
      }
    }
  }
`;
