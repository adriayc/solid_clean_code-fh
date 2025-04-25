import { LocalDataBaseService } from './05-dip-start-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor() {}

  async getPosts() {
    const jsonDB = new LocalDataBaseService();
    this.posts = await jsonDB.getFakePostsDatabase();

    return this.posts;
  }
}
