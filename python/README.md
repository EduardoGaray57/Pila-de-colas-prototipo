# 📘 Proyecto: Pila de Colas en Python

## 📌 Descripción

Este proyecto implementa una **estructura de datos compuesta: una pila de colas**, desarrollada en **Python**, como parte del trabajo correspondiente a la **Semana 2**.

El sistema permite gestionar información de personas utilizando colas, las cuales son almacenadas dentro de una pila. De esta forma, se combinan dos estructuras fundamentales:
- **Pila (LIFO – Last In, First Out)**
- **Cola (FIFO – First In, First Out)**

---

## 🧱 Estructura del proyecto

```
python/
│
├── Pila.py
├── Cola.py
├── AppPilaCola.py
│
└── tests/
    └── test_pila_cola.py
```

---

## 🧩 Componentes principales

### 🔹 Cola (`Cola.py`)
Implementada mediante nodos enlazados (`Nodo_Cola`).  
Cada cola almacena información de personas, incluyendo nombre, RUT y edad.

**Métodos principales:**
- `insert(nodo)`
- `is_empty()`
- `get_size()`
- `unfold_queue()`

---

### 🔹 Pila (`Pila.py`)
Implementada mediante nodos enlazados (`Nodo_Pila`).  
Cada nodo de la pila almacena una **cola completa**.

**Métodos principales:**
- `push(cola)`
- `pop()`
- `is_empty()`
- `unfold_stack()`
- `validar_rut(rut)`
- `from_rut_to_number(rut)`

---

### 🔹 Aplicación principal (`AppPilaCola.py`)
Aplicación por consola que permite:
- Ingresar personas
- Validar RUT chileno
- Crear colas de personas
- Apilar colas
- Mostrar el contenido completo de la pila

---

## 🧪 Pruebas unitarias

Las pruebas fueron desarrolladas utilizando **pytest** y consideran:

- Pila vacía
- Inserción y eliminación de elementos
- Eliminación de elementos hasta vaciar la pila
- Inserción de múltiples elementos
- Manejo de errores (pop en pila vacía)
- Funcionamiento de la cola
- Validación de RUT válido e inválido

### ▶️ Ejecutar los tests

Desde la carpeta raíz del proyecto:

```bash
pytest -v
```

---

## 📊 Cobertura de código

La cobertura de código se mide utilizando **pytest-cov**.

### ▶️ Ejecutar coverage

```bash
pytest --cov=src.
```

### 📈 Resultado obtenido

- **Cobertura total aproximada:** 80%

La cobertura no alcanza el 100% debido a que algunas líneas corresponden a salidas por consola (`print`) y ramas defensivas que no afectan la lógica principal del sistema.

---

## 🛠 Tecnologías utilizadas

- Python 3.14
- pytest
- pytest-cov

---

## ✅ Estado del proyecto

✔ Implementación completa  
✔ Pruebas unitarias realizadas  
✔ Manejo de errores  
✔ Código documentado  
✔ Proyecto listo para entrega  
