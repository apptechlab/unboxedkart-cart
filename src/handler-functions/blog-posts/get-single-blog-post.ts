
import { useQuery } from "react-query";
import http from "../../rest-api/utils/http";
import { BlogPostType } from "../../types/blog-post.type";


export const fetchSingleBlogPost = async (postId: any) => {
    const url = `https://server.unboxedkart.com/blogposts?q=${postId}`;
    const response = await http.get(url);
    console.log("single product response", response);
    const data = response.data;
    console.log("single product data", data);
    return data as BlogPostType;
};

export const useSingleBlogPostQuery = (slug: any) => {
    return useQuery<BlogPostType, Error>([fetchSingleBlogPost], () =>
        fetchSingleBlogPost(slug)
    );
};