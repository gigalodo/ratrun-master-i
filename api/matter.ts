import { UserDataType } from "@/types/user";
import { Get, Post } from "./api";

export const getTotalCount = () => {
  return Get(null, "/mattersTotalCount");
};

export const getProLang = () => {
  return Get(null, "/mattersProgrammingLanguage");
};

export const getMatters = () => {
  return Get(null, "/matters");
};

/*
export const getKeyword = (id: Number) => {
  return Post(id, "/mattersKeyword");
};
*/

export const getKeyword = () => {
  return Get(null, "/mattersKeyword");
};

export const getPrefecture = () => {
  return Get(null, "/mattersPrefecture");
};
