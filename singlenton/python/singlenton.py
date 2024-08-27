class Singlenton:
    __instance = None
    def __new__(cls):
        if Singlenton.__instance is None:
            print("new instance has been create")
            Singlenton.__instance = object.__new__(cls)
        return Singlenton.__instance



    
# NOTE: Another way more pythonic
def singlenton(cls):

    instances = dict()
    
    def wrap(*arg, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*arg, **kwargs)
        return instances[cls]

    return wrap

@singlenton
class User():

    def __init__(self, name):
        self.name = name
        

def main():
    obj1 = Singlenton()
    obj2 = Singlenton()
    print(obj1 is obj2)
    print(obj1, obj2)

    user1 = User('Pancri')
    user2 = User('Robert')
    print(user1 is user2)
if __name__ == '__main__':
    main()
