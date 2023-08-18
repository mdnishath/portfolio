import graphqlRequest from "../graphqlRequest";
export async function getAllProjects() {
  const query = {
    query: `query getAllProjects {
        projects {
            nodes {
              id
              slug
              status
              title
              uri
              projectId
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              projectInfo {
                livePreview
                githubRepo
              }
            }
          }
          }`,
  };
  const resJson = await graphqlRequest(query);
  const allProjects = resJson?.data?.projects;
  return allProjects;
}
