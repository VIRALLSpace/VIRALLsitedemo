var myCodeMirror = CodeMirror(document.getElementById("codemirror"), {
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ante vehicula, egestas velit id, sodales lorem. Fusce ornare risus dui, a tristique orci varius ut. Nunc mollis quis odio ut feugiat. Ut nunc metus, tempor vel felis et, consequat malesuada augue. Duis sollicitudin suscipit tortor eget porttitor. Maecenas at placerat ante. Pellentesque vel efficitur tortor. Sed varius, sapien sed fringilla bibendum, augue nisl porttitor nulla, pharetra blandit lorem dui id mauris. Sed convallis varius massa. Aliquam non lectus non lorem varius dictum vel consectetur nisi. Aliquam tempus ac ipsum ac elementum. Ut in sapien eu ante feugiat vehicula eget in nibh. Vivamus vitae finibus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nulla arcu, finibus vel odio et, pharetra auctor justo. Integer rutrum, enim vel venenatis commodo, mauris augue venenatis ante, at ultricies nibh diam ac erat.",
  mode:  "javascript",
  lineWrapping: true,
});

$("#run").on('click',function(){
  var code = {}
  code['virall_load'] = encodeURIComponent(document.getElementById("codemirror").innerText);
  console.log(code);
  $.ajax({
	url: "https://theglasshaus.org/api/compute.php",
	data: code,
	success: function(response) {
		document.getElementById("visualizer").innerText = response;
	}
  });
});