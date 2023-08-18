export const sendContactForm = async (data) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data), // Stringify the data if it's an object
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const responseData = await res.json(); // Parse the response data
  return responseData;
};
