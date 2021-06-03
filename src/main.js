var MWB = require('./MWBMerge'); //.js can but not needed
var MWBCfg = require('./MWBConfig_wa'); //.js can but not needed

Module = MWB.Module;
window.mwbScanner = MWB.mwbScanner; //if you want to make it global

MWB.setWasmPath(MWBCfg.setWasmPath());

document.addEventListener("preScannerModuleLoaded", async function() {
	MWBCfg.set_mwbScanner(MWB.mwbScanner);
	MWB.set_scannerConfig(MWBCfg.scannerConfig);
	MWBCfg.scannerConfig(); //
	
	const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
	await wait(1);
});

document.addEventListener("scannerModuleLoaded", async function() {
	
	//your code here:
	
	//can use mwbScanner.* methods now
	MWB.mwbScanner.scanImage("test_img.png"/*, function(res){console.log(res);}*/);
	
	//Example for getting available cameras and setting a desired camera
	/**
	* foundCameras.id - string hex value of the camera ID
	* foundCameras.label - string value of the camera label / description
	*/
	/*MWB.mwbScanner.getCameras().then(function(foundCameras){
		let cameraCount = foundCameras.length;
		console.log("Cameras found: " + cameraCount);
		
		//list found cameras with label / name and id
		for (let i = 0; i < cameraCount; i++)
			console.log("Camera " + i + " name: " + foundCameras[i].label + " with ID: " + foundCameras[i].id);
		
		//use desired camera.id for the param
		let desiredCameraIndex = 0;
		let desiredCameraId = foundCameras[desiredCameraIndex].id;
		MWB.mwbScanner.setCamera(desiredCameraId); //overrides the effect of the MWBuseFrontCamera setting
	});*/
	
});