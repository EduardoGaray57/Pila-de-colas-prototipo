import pytest
from src.Pila import Pila
from src.Cola import Cola, Nodo_Cola

# Test Pila

def test_empty_stack():
    pila = Pila()
    assert pila.is_empty() is True
    assert len(pila) == 0

def test_push_pila():
    pila = Pila()
    cola = Cola()
    cola.insert(Nodo_Cola("Eduardo", "19.954.048-3", 21))

    pila.push(cola)

    assert pila.is_empty() is False
    assert len(pila) == 1

def test_pop_pila():
    pila = Pila()
    cola = Cola()
    cola.insert(Nodo_Cola("Eduardo", "19.954.048-3", 30))

    pila.push(cola)
    result = pila.pop()

    assert isinstance(result, Cola)
    assert pila.is_empty() is True
    assert len(pila) == 0

def test_pop_empty_stack():
    pila = Pila()
    with pytest.raises(IndexError):
        pila.pop()

def test_delete_until_empty():
    pila = Pila()
    for i in range(5):
        cola = Cola()
        cola.insert(Nodo_Cola(f"Persona {i}", "11.111.111-1", i))
        pila.push(cola)
    
    while not pila.is_empty():
        pila.pop()
    
    assert pila.is_empty() is True
    assert len(pila) == 0

# Test Cola

def test_empty_queue():
    cola = Cola()
    assert cola.is_empty() is True
    assert cola.get_size() == 0

def test_insert_cola():
    cola = Cola()
    nodo = Nodo_Cola("Eduardo", "19.954.048-3", 40)

    cola.insert(nodo)

    assert cola.is_empty() is False
    assert cola.get_size() == 1
    assert cola.get_first() == nodo
    assert cola.get_last() == nodo

def test_insert_multiple_in_queue():
    cola = Cola()
    for i in range(10):
        cola.insert(Nodo_Cola(f"Persona {i}", f"11.111.111-{i}", i))
    
    assert cola.get_size() == 10
    assert cola.get_first() is not None
    assert cola.get_last() is not None  

# Test Rut

def test_to_validate_valid_RUT():
    pila = Pila()
    assert pila.validar_rut("19.954.048-3") is True

def test_validate_invalid_RUT():
    pila = Pila()
    assert pila.validar_rut("19.954.048-9") is False

def test_rut_a_number():
    pila = Pila()
    assert pila.from_rut_to_number("19.954.048-3") == 199540483