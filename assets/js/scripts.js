jQuery(function ($) {

  /* :::::::::: Show/Hide Top Nav on Scroll :::::::::: */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100 && !$('#stickyheader').hasClass('open')) {
      $('#stickyheader').addClass('open').slideDown();
    } else if ($(this).scrollTop() <= 100) {
      $('#stickyheader').removeClass('open').slideUp();
    }
  });

  /* :::::::::: Accessible Gallery Modals + Arrow Navigation :::::::::: */
  var $mainContent = $('#main');
  if (!$mainContent.length) {
    $mainContent = $('.wrapper');
  }

  var $triggers = $('.piece-trigger');
  // DOM order of triggers defines gallery order
  var overlayIds = $triggers
    .map(function () {
      return $(this).data('overlay');
    })
    .get();

  var $activeOverlay = null;
  var $lastFocusedElement = null;
  var currentIndex = -1;

  function getFocusableElements($container) {
    return $container
      .find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      .filter(':visible');
  }

  function showOverlay($overlay) {
    if (!$overlay.length) return;

    $activeOverlay = $overlay;

    $overlay
      .stop(true, true)
      .css('display', 'none')
      .attr('aria-hidden', 'false')
      .fadeIn(200, function () {
        // Prefer focusing the Close button for clarity
        var $closeBtn = $overlay.find('.overlay-close').first();
        if ($closeBtn.length) {
          $closeBtn.focus();
        } else {
          // Fallback to first focusable element
          var $focusable = getFocusableElements($overlay);
          if ($focusable.length) {
            $focusable.first().focus();
          } else {
            $overlay.attr('tabindex', '-1').focus();
          }
        }
      });
  }

  function openOverlayFromTrigger($overlay, index) {
    if (!$overlay.length) return;

    $lastFocusedElement = $(document.activeElement);
    currentIndex = index;

    $mainContent.attr('aria-hidden', 'true');
    showOverlay($overlay);
  }

  // Smooth crossfade between overlays when switching
  function switchOverlay(newIndex) {
    if (!overlayIds.length) return;

    if (newIndex < 0) {
      newIndex = overlayIds.length - 1;
    } else if (newIndex >= overlayIds.length) {
      newIndex = 0;
    }

    var nextId = overlayIds[newIndex];
    var $nextOverlay = $('#' + nextId);
    if (!$nextOverlay.length) return;

    var $current = $activeOverlay;
    currentIndex = newIndex;

    if ($current && $current[0] !== $nextOverlay[0]) {
      $current.stop(true, true).fadeOut(200, function () {
        $current.attr('aria-hidden', 'true').hide();
      });
    }

    showOverlay($nextOverlay);
  }

  function closeOverlay() {
    if (!$activeOverlay) return;

    $activeOverlay
      .attr('aria-hidden', 'true')
      .fadeOut(200, function () {
        if ($lastFocusedElement && $lastFocusedElement.length) {
          $lastFocusedElement.focus();
        }
      });

    $mainContent.removeAttr('aria-hidden');
    $activeOverlay = null;
    currentIndex = -1;
  }

  // Open on thumbnail button click
  $triggers.on('click', function (e) {
    e.preventDefault();

    var targetId = $(this).data('overlay');
    if (!targetId) return;

    var index = overlayIds.indexOf(targetId);
    if (index === -1) {
      index = 0;
    }

    var $overlay = $('#' + targetId);
    if ($overlay.length) {
      openOverlayFromTrigger($overlay, index);
    }
  });

  // Close on close button
  $('.piece-overlay').on('click', '.overlay-close', function (e) {
    e.preventDefault();
    closeOverlay();
  });

  // Close on backdrop click (only outer overlay)
  $('.piece-overlay').on('click', function (e) {
    if (e.target === this) {
      closeOverlay();
    }
  });

  // Visible nav buttons: Previous / Next
  $('.piece-overlay').on('click', '.overlay-next', function (e) {
    e.preventDefault();

    if (currentIndex === -1 && $activeOverlay) {
      var activeId = $activeOverlay.attr('id');
      var idx = overlayIds.indexOf(activeId);
      if (idx !== -1) currentIndex = idx;
    }

    if (currentIndex !== -1) {
      switchOverlay(currentIndex + 1);
    }
  });

  $('.piece-overlay').on('click', '.overlay-prev', function (e) {
    e.preventDefault();

    if (currentIndex === -1 && $activeOverlay) {
      var activeId = $activeOverlay.attr('id');
      var idx = overlayIds.indexOf(activeId);
      if (idx !== -1) currentIndex = idx;
    }

    if (currentIndex !== -1) {
      switchOverlay(currentIndex - 1);
    }
  });

  // ESC, arrow keys, and focus trapping
  $(document).on('keydown', function (e) {
    if (!$activeOverlay) return;

    var isEscape = e.key === 'Escape' || e.keyCode === 27;
    var isTab = e.key === 'Tab' || e.keyCode === 9;
    var isArrowRight = e.key === 'ArrowRight' || e.keyCode === 39;
    var isArrowLeft = e.key === 'ArrowLeft' || e.keyCode === 37;

    // ESC: close and restore focus to trigger
    if (isEscape) {
      e.preventDefault();
      closeOverlay();
      return;
    }

    // Arrow keys: switch projects
    if (isArrowRight || isArrowLeft) {
      e.preventDefault();

      if (currentIndex === -1 && $activeOverlay) {
        var activeId = $activeOverlay.attr('id');
        var idx = overlayIds.indexOf(activeId);
        if (idx !== -1) currentIndex = idx;
      }

      if (currentIndex !== -1) {
        if (isArrowRight) {
          switchOverlay(currentIndex + 1);
        } else if (isArrowLeft) {
          switchOverlay(currentIndex - 1);
        }
      }

      return;
    }

    // TAB focus trapping inside active overlay
    if (isTab) {
      var $focusable = getFocusableElements($activeOverlay);
      if (!$focusable.length) return;

      var first = $focusable[0];
      var last = $focusable[$focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  /* :::::::::: Parallax Hero Image :::::::::: */
  var $parallaxImg = $('.parallax-img');

  if ($parallaxImg.length) {
    // Ensure starting transform is sane
    $parallaxImg.css('transform', 'translate(-50%, 0)');

    // Update on scroll
    $(window).on('scroll.parallax', function () {
      // Disable parallax under 890px (mobile / small tablet)
      if (window.innerWidth < 890) {
        $parallaxImg.css('transform', 'translate(-50%, 0)');
        return;
      }

      var scrolled = $(this).scrollTop();
      var offset = scrolled * 0.3; // parallax strength

      $parallaxImg.css('transform', 'translate(-50%, ' + offset + 'px)');
    });

    // Also listen for resize so switching across the 890px threshold feels clean
    $(window).on('resize.parallax', function () {
      if (window.innerWidth < 890) {
        $parallaxImg.css('transform', 'translate(-50%, 0)');
      }
    }).trigger('resize.parallax');
  }

});
