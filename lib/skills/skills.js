import graphqlRequest from "../graphqlRequest";
export async function getAllSkills() {
  const query = {
    query: `query getAllSkills {
      skills (first: 1000) {
        nodes {
          date
          id
          slug
          title
          uri
          terms {
            nodes {
              name
              slug
              uri
              id
            }
          }
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
  const allSkills = resJson?.data?.skills;
  return allSkills;
}
