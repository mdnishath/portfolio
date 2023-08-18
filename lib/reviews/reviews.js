import graphqlRequest from "../graphqlRequest";
export async function getAllReviews() {
  const query = {
    query: `query getAllReviews {
        reviews {
          nodes {
            content(format: RAW)
            id
            title
            featuredImage {
                node {
                  mediaItemUrl
                }
              }
          }
        }
      }`,
  };
  const resJson = await graphqlRequest(query);
  // console.log(resJson);
  const allReviews = resJson?.data?.reviews;
  return allReviews;
}
