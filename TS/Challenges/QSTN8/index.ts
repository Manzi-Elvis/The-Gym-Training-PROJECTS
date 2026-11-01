type ApiResponse =
  | { status: "success"; data: string[] }
  | { status: "error"; message: string }
  | { status: "loading"; progress: number };

function handleResponse(response: ApiResponse): string | string[] | number {
//   if (response.status === "success") {
//     return response.data;
//   }

  if (response.status === "error") {
    return response.message;
  }

  if (response.status === "loading"){
      return response.progress;
  }

  return `Success: ${response.data.length} items`;
}