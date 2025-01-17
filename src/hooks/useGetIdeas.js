import ApiService from "../service/ApiService";
import { useQuery } from "react-query";

export const useGetIdeas = () => {
  return useQuery({
    queryKey: "ideas",
    queryFn: () =>
      ApiService.get("/ideas?append[]=small_image&append[]=medium_image"),
  });
};
