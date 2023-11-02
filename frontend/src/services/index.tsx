import API from "./API";
export interface Books {
  bookName: string;
  johner: string;
}
export const getMyBooks = () => {
  return API.get("/book");
};

export const postBooks = async (data: Books) => {
  return await API.post("/book", data);
};
