from Cola import Cola, Nodo_Cola
from Pila import Pila

def main():
    pila = Pila()

    # Crear primera cola
    cola1 = Cola()
    cola1.insert(Nodo_Cola("Eduardo", "19.954.048-3", 21))
    cola1.insert(Nodo_Cola("Elein", "1.455-k", 105))

    pila.push(cola1)

    salir = False

    while not salir:
        print("\n1. Ingresar nodo")
        print("2. Mostrar lista")
        print("3. Salir")

        try:
            opcion = int(input("Seleccione opción: "))
        except ValueError:
            print("Ingrese un número válido")
            continue

        if opcion == 1:
            nombre = input("Ingrese nombre: ")

            rut = input("Ingrese rut (xx.xxx.xxx-x): ")
            while not pila.validar_rut(rut):
                print("RUT inválido, intente nuevamente")
                rut = input("Ingrese rut (xx.xxx.xxx-x): ")

            print("RUT como número:", pila.from_rut_to_number(rut))

            try:
                edad = int(input("Ingrese edad: "))
            except ValueError:
                print("Edad inválida")
                continue

            # Nueva cola para cada ingreso (igual que diseño original)
            nueva_cola = Cola()
            nueva_cola.insert(Nodo_Cola(nombre, rut, edad))

            pila.push(nueva_cola)

        elif opcion == 2:
            pila.unfold_stack()

        elif opcion == 3:
            salir = True

        else:
            print("Opción inválida")

if __name__ == "__main__":
    main()

