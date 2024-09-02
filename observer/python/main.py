from Observable import Observable
from Observer import Observer

class Forum(Observable):
    def __init__(self, name):
        super().__init__()
        self._name = name
        self._posts = []

    def add_post(self, title):
        self._posts.append(title)
        print(f"New Post Created: {title}")
        self.notify("new_post", title)

    def remove_post(self, title):
        if title in self._posts:
            self._posts.remove(title)
            print(f"post removed {title}")
            self.notify("post_remove", title)
        else:
            print("the post does not exist")

    def see_posts(self):
        for post in self._posts:
            print(post, end=" || ")

def new_post_handler(title):
    print(f"New post created {title}")

def post_deleted_handler(title):
    print(f"Post {title}, has been deleted")

def main():
    obs1= Observer("new_post", new_post_handler)
    obs2 = Observer("post_remove", post_deleted_handler)
    forum = Forum("My forum")
    forum.attach("new_post", obs1)
    forum.attach("post_remove", obs2)
    forum.add_post("Post 1")
    forum.add_post("Post 2")
    forum.see_posts()
    forum.remove_post("Post 2")
    forum.see_posts()

if __name__ == "__main__":
    main()
