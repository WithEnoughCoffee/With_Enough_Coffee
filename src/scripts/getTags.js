export default function getTags(posts) {
	return [...new Set(posts.flatMap((post) => post.data.tags || []))];
}
