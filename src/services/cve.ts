import http from "@/integrations/network";

export const postSearchText = async (searchText: string) => {
  if (!searchText) return null;
  console.log(searchText);
  try {
    const x = await http.get("/health");
    console.log("----------->", { x });
    const response = await http.post("/search", {
      prompt: searchText,
      limit: 10,
    });
    console.log("----------->", response.data);
    return response.data;
  } catch (error) {
    console.log("----------->", error);
  }
};

export const getCVE = async (cveId: string) => {
  const response = await http.get(`/cve/${cveId}`);
  return response.data;
};
