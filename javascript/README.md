# Pila de Colas – JavaScript

Proyecto académico que implementa una **Pila (Stack)** cuyos elementos son **Colas (Queue)**, desarrollado en JavaScript moderno y acompañado de **tests unitarios con Jest** y **reporte de cobertura**.

---

## 📌 Descripción

Este proyecto modela dos estructuras de datos fundamentales:

- **Cola (Queue)** → estructura FIFO
- **Pila (Stack)** → estructura LIFO que almacena colas

El objetivo principal es demostrar:
- Correcta traducción y adaptación de estructuras de datos
- Buenas prácticas en JavaScript
- Testing unitario estable
- Uso consciente de cobertura de código

---

## 🧱 Estructura del proyecto

```
/src
 ├── Cola.js        # Implementación de Queue y QueueNode
 ├── Pila.js        # Implementación de Stack y StackNode
 └── main.js        # Ejemplo de uso (opcional)
/tests
 ├── cola.test.js   # Tests unitarios de la cola
 └── pila.test.js   # Tests unitarios de la pila
/package.json
```

---

## ⚙️ Tecnologías usadas

- **JavaScript (Node.js)**
- **Jest** para testing unitario
- **Jest Coverage** para análisis de cobertura

---

## 🚀 Instalación y ejecución

### 1️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Ejecutar los tests

```bash
npm test
```

### 3️⃣ Ejecutar tests con cobertura

```bash
npm run test:coverage
```

El reporte de cobertura se genera en:

```
/coverage/lcov-report/index.html
```

---

## 🧪 Testing y cobertura

- Todos los tests pasan correctamente
- La cobertura se enfoca en **lógica y comportamiento**
- Los métodos con efectos secundarios (`console.log`) **no se testean**
- Se priorizan métodos puros como `toArray()`

Esto sigue buenas prácticas profesionales de testing.

---

## 🔄 Refactor aplicado (enfoque PRO)

Inicialmente, las estructuras incluían métodos `print()` para mostrar datos por consola.

Se aplicó un refactor para:
- Mantener `print()` solo para uso manual
- Incorporar métodos **puros** `toArray()`
- Permitir tests deterministas y estables
- Evitar bloqueos del runner de tests

---

## 🧠 Decisiones técnicas

- No se fuerza cobertura artificial
- No se testean salidas por consola
- El coverage refleja ejecución real y relevante
- Código defensivo correctamente manejado

---

## 📈 Estado final

- ✔️ Código estable
- ✔️ Tests confiables
- ✔️ Sin bucles infinitos
- ✔️ Buenas prácticas aplicadas
- ✔️ Proyecto listo para evaluación

---

## 👨‍💻 Autor

Proyecto desarrollado con fines académicos.

---

## 📄 Licencia

Uso libre para fines educativos.
