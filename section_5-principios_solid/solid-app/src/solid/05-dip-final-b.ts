import { JsonDataBaseService, LocalDataBaseService } from './05-dip-final-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: JsonDataBaseService) {}

  async getPosts() {
    // const jsonDB = new LocalDataBaseService();
    // this.posts = await jsonDB.getFakePosts();
    // const jsonDB = new JsonDataBaseService();
    // this.posts = await jsonDB.getPosts();
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
