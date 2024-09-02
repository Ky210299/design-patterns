import Observer from './Observer.js';
import Subject from './Subject.js';

class Forum extends Subject {
  constructor(name){
    super(),
    this.name = name
    this.posts = []
  }
  addPost(title) {
    this.posts.push(title);
    this.notify("newPost", title);
  }
  deletePost(title) {
    this.posts = this.posts.filter(post => post !== title);
    this.notify("postDeleted", title);
  }
}

const obs1 = new Observer("newPost", (title) => {
  console.log("A new post has been create: ", title)
})
const obs2 = new Observer("deletedPost", (title)=> {
  console.log("the post: ", title, " has been deleted: ")
})
const cleanForumObs = new Observer("cleanForum",(title)=> {
  console.log("Cleaning the post :", title)
} )

const forum = new Forum("My forum");
forum.attach("newPost", obs1);
forum.attach("postDeleted", obs2 );
forum.attach("postDeleted", cleanForumObs);
forum.addPost("Pancracio muere");
forum.addPost("Adoptan dinosaurio de 10 metros");
forum.addPost("Chino se come otro murcielago");
forum.deletePost("Pancracio muere");





