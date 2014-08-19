


	// get the dom element to put the logo
	var canvasElm = document.getElementById('canvas3d');


	// inits
	g = {}
	var controls = null;
	var scene =  new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, $(canvasElm).width()/$(canvasElm).height(), 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	var dynamicTexture  = new THREEx.DynamicTexture(380,380);

	// to move camera with mouse
	controls = new THREE.OrbitControls( camera );

	// controls = new THREE.TrackballControls( camera );
	// controls.target.set( 0, 0, 0 )

	renderer.setSize( $(canvasElm).width(), $(canvasElm).height() );
	renderer.setClearColor     (0x444444, 0.4);
	$(canvasElm).append(renderer.domElement);
	//document.body.appendChild(renderer.domElement);

	// add subtle ambient lighting
	var ambientLight = new THREE.AmbientLight(0xbbbbbb);
	scene.add(ambientLight);

	// directional lighting
	var directionalLight = new THREE.DirectionalLight(0x555555, 0.5);
	directionalLight.position.set(0, 0, 2).normalize();
	scene.add(directionalLight);


	// set view point
	camera.position.z = 400



	// containerize geomtries
	var letters = {
		'z1': {},
		'o1': {},
		'h1': {},
		'o2': {}
	}


	// put the cube
	letters.z1.geometry = new THREE.CubeGeometry(100, 100, 100); 

	letters.z1.materials = [
		new THREE.MeshBasicMaterial({ 'color': 0x761117, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xef463f, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xef463f, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xef463f, 
									 }),
	    new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('/logo/zoho/images/z.png')
										}),
	    new THREE.MeshBasicMaterial({ 'color': 0xef463f, 
									 })
	];

	letters.z1.cube = new THREE.Mesh( letters.z1.geometry, 
		new THREE.MeshFaceMaterial(letters.z1.materials) );


	letters.z1.cube.rotation.x = 0.0;
	letters.z1.cube.rotation.y = -0.0;
	letters.z1.cube.rotation.z = 0.2;

	letters.z1.cube.position.x = -220;

	g = letters;

	scene.add(letters.z1.cube);




	letters.o1.geometry = new THREE.CubeGeometry(100, 100, 100); 

	letters.o1.materials = [
		new THREE.MeshBasicMaterial({ 'color': 0x68bf6a, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x67bf6b, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x98d0a1, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x68bf6a, 
									 }),
	    new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('/logo/zoho/images/o.png')
										}),
	    new THREE.MeshBasicMaterial({ 'color': 0x68bf6a, 
									 })
	];

	letters.o1.cube = new THREE.Mesh( letters.o1.geometry, 
		new THREE.MeshFaceMaterial(letters.o1.materials) );


	letters.o1.cube.rotation.x = 0.0;
	letters.o1.cube.rotation.y = -0.0;
	letters.o1.cube.rotation.z = -0.4;

	letters.o1.cube.position.x = -90;

	// add cube to scene
	scene.add(letters.o1.cube);


	letters.h1.geometry = new THREE.CubeGeometry(100, 100, 100); 

	letters.h1.materials = [
		new THREE.MeshBasicMaterial({ 'color': 0x0c9ad6, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x92caed, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x92caed, 
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0x92caed, 
									 }),
	    new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('/logo/zoho/images/h.png')
										}),
	    new THREE.MeshBasicMaterial({ 'color': 0x92caed, 
									 })
	];

	letters.h1.cube = new THREE.Mesh( letters.h1.geometry, 
		new THREE.MeshFaceMaterial(letters.h1.materials) );


	letters.h1.cube.rotation.x = 0.0;
	letters.h1.cube.rotation.y = -0.0;
	letters.h1.cube.rotation.z = 0.2;

	letters.h1.cube.position.x = 30;

	// add cube to scene
	scene.add(letters.h1.cube);


	letters.o2.geometry = new THREE.CubeGeometry(100, 100, 100); 

	letters.o2.materials = [
		new THREE.MeshBasicMaterial({ 'color': 0xfff270, // right
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xfff270, // left
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xfff270, // top
									 }),
	    new THREE.MeshBasicMaterial({ 'color': 0xfff270, // bottom
									 }),
	    new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('/logo/zoho/images/o2.png')
										}), // front
	    new THREE.MeshBasicMaterial({ 'color': 0xfff270, 
									 }) //back
	];

	letters.o2.cube = new THREE.Mesh( letters.o2.geometry, 
		new THREE.MeshFaceMaterial(letters.o2.materials) );


	letters.o2.cube.rotation.x = 0.0;
	letters.o2.cube.rotation.y = -0.0;
	letters.o2.cube.rotation.z = 0.0;

	letters.o2.cube.position.x = 140;

	// add cube to scene
	scene.add(letters.o2.cube);



	///////////
	// FLOOR //
	///////////
	var floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 10, 10 );
	// DoubleSide: render texture on both sides of mesh
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -60;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);




	var render = function() {

		try {
			requestAnimationFrame(render);	
		} catch(e) {
			try {
				requestID = window.mozRequestAnimationFrame(render);
			} catch(e) {
				try {
					requestID = window.webkitRequestAnimationFrame(render);	
				} catch(e) {
					throw "Your browser doesn't support requestAnimationFrame";	
				}
				
			}
		}
		
		controls.update();
		renderer.render(scene, camera);


	}
	render();
