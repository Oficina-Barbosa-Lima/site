/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);						function openModal(imgSrc, altText) {
							var modal = document.getElementById("imageModal");
							var modalImg = document.getElementById("modalImg");
							var captionText = document.getElementById("modalCaption");
							modal.style.display = "flex";
							setTimeout(function() { modal.style.opacity = "1"; }, 10);
							modalImg.src = imgSrc;
							captionText.innerHTML = altText;
						}
						function closeModal() {
							var modal = document.getElementById("imageModal");
							modal.style.opacity = "0";
							setTimeout(function() { modal.style.display = "none"; }, 300);
						}
						// Close modal when clicking outside the image
						document.getElementById('imageModal').addEventListener('click', function(e) {
							if (e.target !== document.getElementById('modalImg')) {
								closeModal();
							}
						});
						// Close modal when pressing ESC key
						document.addEventListener('keydown', function(e) {
							if (e.key === "Escape" && document.getElementById("imageModal").style.display === "flex") {
								closeModal();
							}
						});
