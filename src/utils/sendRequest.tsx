import { getRootUrl } from "./getRootUrl";

export default async function sendRequest(
  path: string,
  options: RequestInit = {}
) {
  const headers = {
    ...(options.headers || {}),
    "Content-type": "application/json",
  };

  return await fetch(`${getRootUrl()}${path}`, {
    method: "POST",
    ...options,
    headers,
  });
}

