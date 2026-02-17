class Nodo_Cola:
    def __init__(self, name=None, rut=None, age=0):
        self._name = name
        self._rut = rut
        self._age = age
        self._next = None

class Cola:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
    
    def is_empty(self):
        return self.first is None
    
    def get_size(self):
        return self.size

    def insert(self, nodo):
        if self.is_empty():
            self.first = nodo
            self.last = nodo
        else:
            self.last._next = nodo
            self.last = nodo
        
        nodo._next = None
        self.size += 1
    
    def unfold_queue(self):
        current = self.first
        
        if current is None:
            print("La cola está vacía.")
            return
        while current is not None:
            print(f"Nombre: {current._name}, RUT: {current._rut}, Edad: {current._age}")
            current = current._next
    
    def get_first(self):
        return self.first
    def get_last(self):
        return self.last
