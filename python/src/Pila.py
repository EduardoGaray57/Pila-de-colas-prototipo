class Nodo_Pila:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class Pila:
    def __init__(self):
        self.top = None
        self.size = 0

    def push(self, queue):
        self.top = Nodo_Pila(data=queue, next=self.top)
        self.size += 1

    def pop(self):
        if self.top is None:
            raise IndexError("La pila está vacía")

        data = self.top.data
        self.top = self.top.next
        self.size -= 1
        return data

    def is_empty(self):
        return self.top is None

    def unfold_stack(self):
        current = self.top

        if current is None:
            print("La pila está vacía.")
            return

        while current:
            current.data.unfold_queue()
            print("-----")
            current = current.next

    def validar_rut(self, rut: str) -> bool:
        try:
            rut = rut.upper().replace(".", "").replace("-", "")
            rut_aux = int(rut[:-1])
            dv = rut[-1]

            m = 0
            s = 1
            while rut_aux != 0:
                s = (s + rut_aux % 10 * (9 - m % 6)) % 11
                m += 1
                rut_aux //= 10

            return dv == chr(s + 47 if s != 0 else 75)
        except:
            return False
    def from_rut_to_number(self, rut: str) -> int:
        rut = rut.upper().replace(".", "").replace("-", "")
        return int(rut)

    def __len__(self):
        return self.size

