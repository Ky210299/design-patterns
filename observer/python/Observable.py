class Observable:

    def __init__(self):
        self._observers = dict()

    def attach(self, event, obs):
        if event not in self._observers:
            self._observers[event] = []
        self._observers[event].append(obs)

    def detach(self, event, obs):
        if event not in self._observers:
            return
        if event in self._observers[event]:
            self._observers[event].remove(obs)

    def notify(self, event, data=None):
        if event in self._observers:
            for obs in self._observers[event]:
                obs.update(data)
