
	document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '#splide', {
            perPage: 1,
            type:'loop',
            breakpoints:{
                '950': {
                    perPage: 1,
                    gap: '1rem',
                }
            },
            padding: {
                right: '0rem',
                left : '0rem',
            },
            autoWidth: 'auto'
        } ).mount();

       new Splide( '.splide', {
            perPage: 1,
            type:'loop',
            breakpoints:{
                '950': {
                    perPage: 1,
                    gap: '1rem',
                }
            },
            padding: {
                right: '0rem',
                left : '0rem',
            },
            autoWidth: 'auto'
        }).mount();
	});
