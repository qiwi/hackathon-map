/**
 * Module for working with places.
 * @class place
 * @singleton
 */
define('place', ['base', 'api'], function(base, api) {
	'use strict';

	/**
	 * @member place
	 * @method loadPlace
	 * @param {String/Number} id
	 * @param {Function} callback
	 * @param {Mixed} scope
	 * @return {Object}
	 */
	function loadPlace(id, callback, scope) {
		api.read(api.PLACE, id, callback, scope);
	}

	return {
		get: loadPlace
	};
});