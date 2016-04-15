var cloud = function(container, list) {

	var holder;
	var max_size = 100,
		min_size = 18;

	var max_frequency;

	var sort = function() {
		if (typeof list != undefined && list != null) {
			/* Sort List by Frequency */
			list.sort(function(a,b){return b[1] - a[1]});
			max_frequency = list[0][1];
		} else {
			list = [];
		}
	}

	var build = function() {
		if (typeof list != undefined && list != null) {
			for ( i = 0 ; i < list.length; i++ ) {

				offset = (list[i][1] / max_frequency) * max_size;

				if ( offset < min_size ) offset = min_size;

				var a = $("<a />", {
					text: list[i][0],
					href: '#'
				});

				a.css('font-size', offset);
				a.css({'color': '#000', 'text-decoration': 'none', 'float': 'left'});

				holder.append(a);

			}
		}
	}

	var setHolder = function() {
		holder = $("<div />").appendTo($(container));

		holder.css({ 
			'width': '500px',
			'overflow': 'hidden'
		});
	}

	var reload = function() {
		clear();
		sort();
		build();
	}

	var clear = function() {
		holder.html('');
	}

	this.add = function(item) {
		list.push(item);

		reload();
	}

	/* Start The Cloud */
	if (typeof container == 'string') {
		setHolder();
		reload();
	}
}