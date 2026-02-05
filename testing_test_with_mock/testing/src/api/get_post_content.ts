import {fetchPost} from "@/api/fetch_post";

export const getPostContent = async (id: number): Promise<string | null> => {
  const post = await fetchPost(id);
  if (post === null) {
    return null;
  }
  return post.content;
};
