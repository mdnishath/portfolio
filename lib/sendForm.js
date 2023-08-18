export const sendContactForm = async (data) =>
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    "Content-Type": "application/json",
  });
