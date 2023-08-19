export const sendContactForm = async (data) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    // Handle errors here, such as logging or displaying an error message to the user
    console.error("Error sending contact form:", error);
    throw error; // Rethrow the error if needed
  }
};
