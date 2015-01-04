CapJS/notification
==================

CapJS/notification es un componente para HTML capas de generar notificaciones usando javascript, similar a como lo hace el método `alert()` solo que este es capas de usar el DOM del documento HTML aprovechando todas las características de HTML y CSS.

## Inicio Rápido

### Bower

Utiliza bower para instar CapJS/notification en tu proyecto con el siguiente comando.

```
bower install --save CapJS/notification
```

### Git

Usa Git para instalar CapJS/notification en tu proyecto con el siguiente comando.

```
git clone https://github.com/CapJS/notification.git
```

### Que es lo que incluye

El repositorio completo incluye los siguientes archivos, que puedes encontrar el la carpeta clonada del proyecto.

```
notification/
├── example/
├── cap_notification.js
├── cap_notification.min.js
├── LICENSE
└── README.md
```

# Mi primera aplicación

## Dependencias

Este componentes requiere satisfacer las necesidades:

 - [jQuery](https://github.com/jquery/jquery)

## Archivo cap_notification.js

El archivo `cap_notification.js` es el el componente que sera incluido en nuestro documento HTML cada ves que deseemos, utilizar este componente en nuestro proyecto para lo que lo incluiremos dentro de la etiqueta `<meta>`. y podemos usar su versión mirificada `cap_notification.min.js` la que remplaza a `cap_notification.js`.

```html
...
<head>
...
	<script src=".../cap_notification.js"></script>	
...
</head>
...
```

## Construir modelo de notificaciones

El modelo de las notificaciones son modelos escritos en HTML los cuales permiten crear las notificaciones en cuanto estas sean llamadas por el método `notification`. Para lo que este modelo tendrá reglas especificas para administrar el modelo.

```html
<div comp-notifier>
	<div models>
		<div alert-warning>
			<div text></div>
		</div>
		<div alert-danger>
			<div text></div>
		</div>
	</div>
	<div box-notifier></div>
</div>
```

### [comp-notifier]

El atributo `comp-notifier` identifica al objeto que se ara cargo del entorno. Lo que significa que contendrá tanto los modelos como el bloque de las notificaciones a generar.

### [comp-notifier][models]

El elemento con el atributo `models` debe siempre de estar siempre dentro de un objeto con el atributo `comp-notifier`, y se ara cargo de los modelos a utilizar.

Es capas de soportar tantos modelos como queramos diseñar, y se diferenciaran por el nombre definido con el atributo `alert-` Ej. El modelo con el atributo `alert-warning` puede ser encontrado como el modelo `warning`.

### [comp-notifier][models][alert-*]

Los elementos cuyo atributo inicie con `alert-`, deben de ser especificados dentro de la etiqueta con el atributo `models`. Y serán identificados como los modelos que se pueden usar al momento de generar una nueva alerta.

```html
<div comp-notifier>
	<div models>
		<div alert-default>
			El texto de la alerta es => [<div text></div>]
		</div>
	</div>
</div>
```

### [comp-notifier][models][alert-*][text]

El elemento con el atributo `text` identificara la ubicación del texto enviado a la notificación, y este texto puede ser escrito en HTML.

Ej. Aplicación

```html
...
<div alert-default>
	El texto de la alerta es => [<div text></div>]
</div>
...
<script>
	notification('default','Hola este es mi nueva alerta Uno.')
	notification('default','Hola este es mi nueva <strong>alerta</strong> Dos.')
</script>
...
```

Salida

```html
...
<div box-notifier>
	<div alert-default>
		El texto de la alerta es => [<div text>Hola este es mi nueva alerta Uno.</div>]
	</div>
	<div alert-default>
		El texto de la alerta es => [<div text>Hola este es mi nueva <strong>alerta</strong> Dos.</div>]
	</div>
</div>
...
```
