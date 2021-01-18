/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      name
      altText
      image
      camera
      focalLength
      aperture
      shutterSpeed
      ISO
      createdAt
      updatedAt
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        altText
        image
        camera
        focalLength
        aperture
        shutterSpeed
        ISO
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
