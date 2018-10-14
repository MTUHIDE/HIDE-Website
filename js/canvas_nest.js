
		acc_strength = 1;
pull_strength = 0.007;
stick_distance = 70000;
cursor_stick_distance = 20000;
zIndex = -2;
opacity = .8;
line_color = "204, 51, 255";
count = 60;

// Get the modal
var modal = document.getElementById('id01');
            
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

! function() {
  // Encapsulate the method after compression to reduce the file size
  function get_attribute(node, attr, default_value) {
    return node.getAttribute(attr) || default_value;
  }
  // Encapsulates the method, and reduces the file size after compression
  function get_by_tagname(name) {
    return document.getElementsByTagName(name);
  }
  // Get configuration parameters
  function get_config_option() {
    var scripts = get_by_tagname("script"),
      script_len = scripts.length,
      script = scripts[script_len - 1]; // The currently loaded script
    return {
      l: script_len, // Length, used to generate id
      z: get_attribute(script, "zIndex", zIndex), // z-index
      o: get_attribute(script, "opacity", opacity), // opacity
      c: get_attribute(script, "color", line_color), // color
      n: get_attribute(script, "count", count) // count
    };
  }
  // Set the width of the canvas
  function set_canvas_size() {
    canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
    canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }

  // Drawing process
  function draw_canvas() {
    context.clearRect(0, 0, canvas_width, canvas_height);
    // Random lines and the current position of the union array
    var e, i, d, x_dist, y_dist, dist; // Temporary node
    // Traverse handles every point
    random_points.forEach(function(r, idx) {
      r.x += r.xa, 
      r.y += r.ya, // mobile
      r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1, 
      r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, // Hit the border, reverse rebound
      context.fillRect(r.x - 0.5, r.y - 0.5, 0, 0); // Draw a point with a width of 1
      // Starting from the next point
      for (i = idx + 1; i < all_array.length; i++) {
        e = all_array[i];
        // The current point exists
        if (null !== e.x && null !== e.y) {
          x_dist = r.x - e.x; // X axis distance l
          y_dist = r.y - e.y; // Y axis distance n
          dist = x_dist * x_dist + y_dist * y_dist; // Total distance, m

          dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= pull_strength * x_dist, r.y -= pull_strength * y_dist), // Close to the time to accelerate
            d = (e.max - dist) / e.max,
            context.beginPath(),
            context.lineWidth = (d+1) / 2,
            context.strokeStyle = "rgba(" + config.c + "," + (d + 0.2) + ")",
            context.moveTo(r.x, r.y),
            context.lineTo(e.x, e.y),
            context.stroke());
        }
      }
    }), frame_func(draw_canvas);
  }
  // Create a canvas and add it to the body
  var the_canvas = document.createElement("canvas"), // Canvas
    config = get_config_option(), // Configuration
    canvas_id = "c_n" + config.l, // Canvas id
    context = the_canvas.getContext("2d"), canvas_width, canvas_height, 
    frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
      window.setTimeout(func, 1000 / 45);
    }, random = Math.random, 
    current_point = {
      x: null, // Current mouse x
      y: null, // Current mouse y
      max: cursor_stick_distance // The square of the radius of the circle
    },
    all_array;
  the_canvas.id = canvas_id;
  the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
  get_by_tagname("body")[0].appendChild(the_canvas);

  // Initialize the canvas size
  set_canvas_size();
  window.onresize = set_canvas_size;
  // When the mouse position storage, leave the time, release the current location information
  window.onmousemove = function(e) {
    e = e || window.event;
    current_point.x = e.clientX;
    current_point.y = e.clientY;
  }, window.onmouseout = function() {
    current_point.x = null;
    current_point.y = null;
  };
  // Randomly generate config.n line location information
  for (var random_points = [], i = 0; config.n > i; i++) {
    var x = random() * canvas_width, // Random location
      y = random() * canvas_height,
      xa = acc_strength * random() - acc_strength / 2, // Random movement direction
      ya = acc_strength * random() - acc_strength / 2;
    // Random point
    random_points.push({
      x: x,
      y: y,
      xa: xa,
      ya: ya,
      max: stick_distance // Sticking distance
    });
  }
  all_array = random_points.concat([current_point]);
  // 0.1 seconds after drawing
  setTimeout(function() {
    draw_canvas();
  }, 100);
}();
