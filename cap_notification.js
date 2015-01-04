+function($){
	'use strict'

	var notification = {}
	notification.compNotifier = null;

	////////////////////////////////////////////////////
	// Aplicación para visualizar nueva notificación. //
	////////////////////////////////////////////////////
	/**
	 * Permite generar nuevas notificaciones.
	 * 
	 * @param  {String} type      Define el tipo de alerta que se va a utilizar.
	 * @param  {String} message   Define el mensaje que se mostrara en la nueva notificación.
	 * @param  {Number} timer     Si este valor existe y es mayor que 0, define el tiempo en que sera visible la a alerta.
	 * @return {jQuery}           Retorna la alerta creada.
	 */
	notification = function(type, message, timer) {
		var boxNotifier = $('[box-notifier]', notification.compNotifier)
		var models = $('[models]', notification.compNotifier)

		models.hide()

		var alert = $('[alert-'+type+']',models).clone()

		$('[text]',alert).html(message)

		boxNotifier.append(alert)

		if (timer || timer > 0) {
			alert.delay(timer).hide(0)
		}

		return alert
	}

	$.notification = window.notification = notification
}(jQuery)
$(function(){
	'use strict'
	var compNotifier = $('[comp-notifier]')
	notification.compNotifier = compNotifier
})