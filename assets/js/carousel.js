/*
	carousel.js — turns every <div class="carousel"> into a simple image slider.
	No configuration needed: add <figure class="slide"> elements and it works.
*/
(function () {
	document.querySelectorAll('.carousel').forEach(function (carousel) {
		var slides = carousel.querySelectorAll('.slide');
		if (slides.length < 2) return; // a single image needs no controls

		var index = 0;

		var controls = document.createElement('div');
		controls.className = 'controls';
		controls.innerHTML =
			'<button type="button" class="prev" aria-label="Previous image">&#8249;</button>' +
			'<span class="counter" aria-live="polite"></span>' +
			'<button type="button" class="next" aria-label="Next image">&#8250;</button>';
		carousel.appendChild(controls);

		var counter = controls.querySelector('.counter');

		function show(i) {
			index = (i + slides.length) % slides.length;
			slides.forEach(function (s, n) {
				s.classList.toggle('is-active', n === index);
			});
			counter.textContent = (index + 1) + ' / ' + slides.length;
		}

		controls.querySelector('.prev').addEventListener('click', function () { show(index - 1); });
		controls.querySelector('.next').addEventListener('click', function () { show(index + 1); });

		// Arrow keys when the carousel (or a button in it) has focus
		carousel.setAttribute('tabindex', '0');
		carousel.addEventListener('keydown', function (e) {
			if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
			if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
		});

		// Swipe on phones
		var startX = null;
		carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
		carousel.addEventListener('touchend', function (e) {
			if (startX === null) return;
			var dx = e.changedTouches[0].clientX - startX;
			if (Math.abs(dx) > 40) show(dx < 0 ? index + 1 : index - 1);
			startX = null;
		});

		carousel.classList.add('is-ready');
		show(0);
	});
})();
