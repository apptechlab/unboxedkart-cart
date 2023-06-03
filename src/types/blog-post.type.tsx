export type BlogPostType = {
    title: string;
    postId: string;
    authorDetails: BlogPostAuthorDetailsType;
    imageUrl: string;
    content: BlogPostContentType[]
};

export type BlogPostAuthorDetailsType = {
    name: string;
    url: string;
    photoUrl: string;
    title: string;
}


export type BlogPostContentType = {
    content: string;
    fontSize: number;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    linkTo?: string;
}