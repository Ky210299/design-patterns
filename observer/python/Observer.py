class Observer:

    def __init__(self, name, fn):
        self._name = name
        self._fn = fn

    def update(self, data=None):
        self._fn(data)

