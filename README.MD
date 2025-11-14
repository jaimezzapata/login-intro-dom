# 🚀 Ejercicio de Introducción al DOM: Login Interactivo

Este proyecto es la base para tu primera práctica de manipulación del DOM con JavaScript. Tienes un formulario de inicio de sesión estático, completamente funcional en cuanto a HTML y CSS (¡incluyendo una animación!).

Tu misión es darle vida usando JavaScript.



## 🎯 Objetivo del Aprendizaje

El propósito de esta actividad es que apliques los conceptos fundamentales de manipulación del DOM para hacer que este formulario sea interactivo.

Al finalizar, deberás haber practicado:

* **Selección de elementos** del DOM (inputs, botones, etc.).
* **Lectura de valores** de los campos de un formulario (inputs).
* **Manejo de eventos** (específicamente, el evento `click` en el botón).
* **Lógica básica** para procesar la entrada del usuario.

## 📋 Tu Tarea: Paso a Paso

Usando solo JavaScript "vanilla" (sin librerías), deberás completar las siguientes tareas.

1.  **Crea y enlaza tu script**:
    * Crea un nuevo archivo llamado `app.js` (o el nombre que prefieras).
    * Asegúrate de enlazarlo correctamente en tu `index.html` usando la etiqueta `<script>` (usualmente justo antes de cerrar el `</body>`).

2.  **Selecciona los Elementos Necesarios**:
    * Dentro de `app.js`, necesitas obtener una referencia a los elementos HTML con los que vas a interactuar. Como mínimo, necesitarás:
        * El campo (input) del email.
        * El campo (input) de la contraseña.
        * El botón "Iniciar Sesión".

3.  **Escucha el Evento "Click"**:
    * Añade un **Event Listener** (un "escuchador de eventos") al botón "Iniciar Sesión".
    * Queremos que este "escuchador" ejecute una función cada vez que el usuario haga `click` en el botón.

4.  **Implementa la Lógica de Login (dentro del evento)**:
    * Cuando el usuario haga clic en el botón, tu función deberá:
        * **Obtener los valores** actuales de los campos de email y contraseña (pista: usa la propiedad `.value`).
        * **Validar** esos valores. Para este ejercicio, una validación simple es suficiente. Por ejemplo:
            * Verificar que los campos no estén vacíos.
        * **Mostrar un resultado** en la consola del navegador (`console.log`).
            * Si la validación es exitosa (los campos están llenos), muestra un mensaje como: `Inicio de sesión exitoso para: [email del usuario]`.
            * Si la validación falla (algún campo está vacío), muestra un mensaje como: `Error: Ambos campos son obligatorios`.

---

## 🏆 Desafío Opcional (Bonus)

Si terminaste lo anterior y quieres un reto extra, intenta esto:

1.  **Validación Específica**: En lugar de solo verificar que no estén vacíos, haz que el script compruebe si el email es `user@test.com` y la contraseña es `123456`.
2.  **Mostrar Mensajes en el HTML**: En lugar de usar `console.log`, selecciona el `<h2>&nbsp;</h2>` vacío que está en el HTML y modifica su contenido (pista: usa `.textContent` o `.innerText`) para mostrar el mensaje de éxito o error directamente en la página.