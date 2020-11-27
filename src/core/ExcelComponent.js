import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners);
		this.$root = $root;
		this.name = options.name || '';
	} 
	toHTML() {
		return '';
	}

	init() {
		this.initDOMListeners();
	}

	desctroy() {
		this.removeDOMListeners();
	}
}
