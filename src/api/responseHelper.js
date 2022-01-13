export function handleApiResponse(res) {
  if (!res) {
    throw new Error("SERVER_ERROR");
  }
  if (res.status === 400) {
    throw new Error("NO_INPUT_DATA_PROVIDED");
  }
  if (res.status === 401) {
    throw new Error("UNAUTHORIZED");
  }
  if (res.status === 500) {
    throw new Error("INTERNAL_SERVER_ERROR");
  }
  return res.json();
}
