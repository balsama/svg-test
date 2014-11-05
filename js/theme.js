(function ($) {
  /**
   * Swap out svg files for PNGs on unsupporting devices. Modrnizr determines
   * what an unsupporting device is by adding the .no-svg class to the html
   * tag.
   */
  function svgToPng() {
    $('.no-svg .js__svg-image').each(function() {
      var src = $(this).attr('src');
      src = src.replace("svg", "png");
      $(this).attr('src', src);
    });
  }

  /**
   * Gives each bootstrap tab a unique URL.
   */
  var hash = document.location.hash;
  var prefix = "tab-";
  if (hash) {
    $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
  }
  // Change hash for page-reload
  $('.nav-tabs a').on('shown.bs.tab', function(e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
    var width = $(window).width();
    navHeight(width);
  });

  var s = Snap('#svg-1');

  var circle1x = '5%';
  var circle1y = '65%';
  var circle2x = '30%';
  var circle2y = 85;
  var circle4x = '82%';
  var circle4y = '44%';

  var circle1 = s.circle(circle1x, circle1y, 90);
  var circle2 = s.circle(circle2x, circle2y, 70);
  var circle3 = s.circle(500, 15, 32);
  var circle4 = s.circle(circle4x, circle4y, 30);
  var circle5 = s.circle('102%', 190, 80);

  var circleCenter1 = s.circle(circle1x, circle1y, 7);
  var circleCenter2 = s.circle(circle2x, circle2y, 5);
  var circleCenter4 = s.circle(circle4x, circle4y, 3);
  var circleCenters = s.group(circleCenter1, circleCenter2, circleCenter4);

  var line1 = s.line(circle1x, circle1y, circle2x, circle2y);
  var line2 = s.line(circle1x, circle1y, circle4x, circle4y);
  var line3 = s.line(circle4x, circle4y, '102%', 190);
  var lines = s.group(line1, line2, line3);

  var circles = s.group(
        circle1,
        circle2,
        circle3,
        circle4,
        circle5
      );
  circles.attr({
    fill: 'transparent',
    stroke: '#dfdfdf',
    strokeWidth: 4
  });

  var blur = s.paper.filter(Snap.filter.blur(2, 2));
  circle2.attr({
    filter: blur
  });
  circleCenter2.attr({
    filter: blur
  });
  circle3.attr({
    filter: blur
  });

  circle4.attr({
    strokeWidth: 2
  });

  lines.attr({
    stroke: "#dfdfdf",
    strokeWidth: 2
  });

  circleCenters.attr({
    fill: '#dfdfdf'
  });

  circle1.animate({r: 70}, 10000);

  circle3.animate({transform: 'r70, 400, 400'}, 100000);

  circle2.animate({cx: '10%', cy: '90%' }, 60000);
  circleCenter2.animate({cx: '10%', cy: '90%' }, 60000);
  line1.animate({x2: '10%', y2: '90%'}, 60000);

  circle4.animate({cx: '44%', cy: '30%'}, 50000);
  circleCenter4.animate({cx: '44%', cy: '30%'}, 50000);
  line2.animate({x2: '44%', y2: '30%'}, 50000);
  line3.animate({x1: '44%', y1: '30%', y2: '130%'}, 50000);

  circle5.animate({cy: '130%'}, 50000);

  /**
   * Stuff to run immediately upon page load
   */
  svgToPng();

  /**
   * Stuff to run on resize.
   */
  $(window).resize(function() {
    waitForFinalEvent(function() {
      var width = $(window).width();
      // Place functions here
    }, 500, "");
  });

  /**
   * Stuff to run after page load is complete.
   */
  $(document).ready(function() {
    // Place functions here
  });

  /**
   * Helper function to delay firing resize events until the user actually
   * stops resizing their browser.
   */
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

}(jQuery));

