export class Post {
    _id!: string;
    category?: string;
    title?: string;
    content!: string;
    username!: string;
    upvotes?: number;
}