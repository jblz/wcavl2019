( async function() {
	// src: https://stackoverflow.com/a/23234031/5883953
	function isElementInViewport( el ) {
		const rect = el.getBoundingClientRect();
		return ! ( rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight );
	}

	const el = document.querySelector( 'article .entry-content' );
	el.innerHTML = wp.autop.autop(
		`These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent.

	Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter.

	I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I'm comparing the molecular integrity of that bubble against our phasers.` );

	const btn = document.createElement( 'button' );

	// Wrap UI components with translation functions
	const { __ } = wp.i18n;
	btn.textContent = __( 'Engage!' );

	const wrapper = document.createElement( 'div' );
	wrapper.className = 'demo-1-button-wrapper';

	const tipTarget = document.createElement( 'span' );
	tipTarget.className = 'demo-1-tip-target';

	wrapper.appendChild( btn );
	wrapper.appendChild( tipTarget );
	el.appendChild( wrapper )

	const vizInterval = setInterval( () => {

		if ( ! isElementInViewport( tipTarget ) ) {
			return;
		}

		clearInterval( vizInterval );

		setTimeout( () => {
			wp.element.render(
				wp.element.createElement( wp.nux.DotTip, {
					tipId: 'jbwca19-button-demo1'
				}, __( 'Boldly go where no one has gone before!' ) ),
				tipTarget
			);
		}, 700 );
	}, 200 );
} )();
