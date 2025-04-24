import { PostService } from './05-dip-start-b';

// Main
(async () => {
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
