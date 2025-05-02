interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function fetchPost(id: number): Promise<Post> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Post = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        throw error;
    }
}


export async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Post[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw error;
    }
}
