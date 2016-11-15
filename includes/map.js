	$(function() {
				$('#thumbs').carouFredSel({
					synchronise: ['#images', false, true],
					auto: false,
					width: 800,
					height: 600,
					items: {
						visible: 3,
						start: -1
					},
					scroll: {
						onBefore: function( data ) {
							data.items.old.eq(1).removeClass('selected');
							data.items.visible.eq(1).addClass('selected');
						}
					},
					prev: '#prev',
					next: '#next'
				});

				$('#images').carouFredSel({
					auto: false,
					items: 1,
					scroll: {
						fx: 'fade'
					}
				});

				$('#thumbs img').click(function() {
					$('#thumbs').trigger( 'slideTo', [this, -1] );
				});
				$('#thumbs img:eq(1)').addClass('selected');
			});