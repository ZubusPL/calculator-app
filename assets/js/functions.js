window.onload = function() {
	var
		keys = [],
		buttons = {},
		$interface = null,
		contentString, lastContentString;

	$interface = document.getElementById('interface');
	keys = $interface.getElementsByClassName('calculator__button');
	contentString = document.getElementById('content-string');
	lastContentString = contentString.innerHTML;

	buttons.clear = document.getElementById('clear');
	buttons.settings = document.getElementById('settings');

	for (var i = 0; i < keys.length; i++) {
		keys[i].addEventListener('click', onClickInterfaceButton, false);
	}

	buttons.clear.addEventListener('click', onClickClearButton, false);
	buttons.settings.addEventListener('click', onClickSettingsButton, false);

	function onClickInterfaceButton(e) {
		e.preventDefault();

		var _data = {
			element: e.target.getAttribute('data-element'),
			action: e.target.getAttribute('data-action'),
			value: e.target.getAttribute('value')
		};

		if (_data.element !== null && _data.element === 'key') {
			updateView(_data.value, 'none');
		} else if(_data.element === null && _data.value === null && _data.action !== null) {
			updateView('none', _data.action);
		}
	}

	function onClickClearButton(e) {
		e.preventDefault();

		if (buttons.clear !== 'undefined') {
			contentString.innerHTML = '';
			lastContentString = '';
		}
	}

	function onClickSettingsButton(e) {
		e.preventDefault();

		if (buttons.settings !== 'undefined') {
			console.log('yeah!');
		}
	}

	function updateView(value, action) {
		contentString.innerHTML = '';
		contentString.innerHTML += lastContentString + action + ' ' + value + '<br/>';
		lastContentString += action + ' ' + value + '<br/>';
	}
}
