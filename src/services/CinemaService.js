import api from "./api";

export const findByTitle = async (title, page = 1) => {
  try {
    const params = { s: title, page };
    const { data } = await api.get("", { params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
