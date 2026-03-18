"use server";

function requiredString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing ${key}`);
  }
  return value.trim();
}

function optionalString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function submitContact(
  _prevState: { ok: boolean; message: string } | null,
  formData: FormData,
) {
  const payload = {
    name: requiredString(formData, "name"),
    email: requiredString(formData, "email"),
    company: optionalString(formData, "company"),
    projectDescription: requiredString(formData, "projectDescription"),
    createdAt: new Date().toISOString(),
  };

  // For now: log the request on the server.
  console.log("[boolat] Contact request", payload);

  return { ok: true, message: "Thanks — we’ll reach out shortly." };
}

