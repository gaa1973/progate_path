import {Post} from "@/api/models/post";

export const fetchPost = async (id: number): Promise<Post | null> => {
  const post = await Post.find(id);
  if (post === undefined) return null;
  return post;
};
