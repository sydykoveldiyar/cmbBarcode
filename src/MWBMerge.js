//1. MWBScanner_wa <<<<<<<<<<<>>>>>>>>>>>

/*
Changelog: https://cmbdn.cognex.com/download/changelog/cmb/cmbweb-web-assembly
*/

 var CONSTANTS = {
	/** @name Grayscale image size range
	 ** @{ */
	MWB_GRAYSCALE_LENX_MIN :      10,
	MWB_GRAYSCALE_LENX_MAX :      5000,
	MWB_GRAYSCALE_LENY_MIN :      10,
	MWB_GRAYSCALE_LENY_MAX :      5000,
	/** @} */
	
	/**
	* @name Basic return values for API functions
	* @{
	*/
	MWB_RT_OK :                     0,
	MWB_RT_FAIL :                  -1,
	MWB_RT_NOT_SUPPORTED :         -2,
	MWB_RT_BAD_PARAM :             -3,



	/** @brief  Code39 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE39_REQUIRE_CHECKSUM :  0x2,
	/**/

	/** @brief  Code39 decoder flags value: don't require stop symbol - can lead to false results
	*/
	MWB_CFG_CODE39_DONT_REQUIRE_STOP : 0x4,
	/**/

	/** @brief  Code39 decoder flags value: decode full ASCII
	*/
	MWB_CFG_CODE39_EXTENDED_MODE :      0x8,
	/**/
	
	/** @brief  Code39 decoder flags value: Try decoding result to CODE32. if failed, Code39 will return
	*/
	MWB_CFG_CODE39_CODE32_ENABLED :      0x10,
	/**/

	/** @brief  Code39 decoder flags value: ADD 'A' prefix to Code32 result
	*/
	MWB_CFG_CODE39_CODE32_PREFIX :      0x20,
	/**/

	/** @brief  Code93 decoder flags value: decode full ASCII
	*/
	MWB_CFG_CODE93_EXTENDED_MODE :      0x8,
	/**/


	/** @brief  Code25 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE25_REQ_CHKSUM :        0x1,
	/**/

	/** @brief  Code11 decoder flags value: require checksum check
	*  MWB_CFG_CODE11_REQ_SINGLE_CHKSUM is set by default
	*/
	MWB_CFG_CODE11_REQ_SINGLE_CHKSUM:         0x1,
	MWB_CFG_CODE11_REQ_DOUBLE_CHKSUM:         0x2,
	/**/

	/** @brief  MSI Plessey decoder flags value: require checksum check
	*  MWB_CFG_MSI_REQ_10_CHKSUM is set by default
	*/
	MWB_CFG_MSI_REQ_10_CHKSUM :                 0x01,
	MWB_CFG_MSI_REQ_1010_CHKSUM :               0x02,
	MWB_CFG_MSI_REQ_11_IBM_CHKSUM :             0x04,
	MWB_CFG_MSI_REQ_11_NCR_CHKSUM :             0x08,
	MWB_CFG_MSI_REQ_1110_IBM_CHKSUM :           0x10,
	MWB_CFG_MSI_REQ_1110_NCR_CHKSUM :           0x20,
	/**/

	/** @brief  Codabar decoder flags value: include start/stop symbols in result
	*/
	MWB_CFG_CODABAR_INCLUDE_STARTSTOP :        0x1,
	/**/
	
	/** @brief  Datamatrix decoder flags value: enable DPM mode
	  */
	MWB_CFG_DM_DPM_MODE :      0x2,
	/**/
		
	/** @brief  Telepen decoder flags
	 */
	MWB_CFG_TELEPEN_FORCE_NUMERIC :      0x1,
	/**/
	
	
	/** @brief  Barcode decoder param types
	*/
	MWB_PAR_ID_ECI_MODE :            0x08,
	MWB_PAR_ID_RESULT_PREFIX :       0x10,
	MWB_PAR_ID_VERIFY_LOCATION :	 0x20,
	
	// working for Datamatrix currently
	MWB_PAR_ID_SCAN_COLOR :			 0x40,
	/**/

	/** @brief  Barcode param values
	*/

	MWB_PAR_VALUE_ECI_DISABLED :    0x00, //default
	MWB_PAR_VALUE_ECI_ENABLED :     0x01,

	MWB_PAR_VALUE_RESULT_PREFIX_NEVER :   0x00, // default
	MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS :  0x01,
	MWB_PAR_VALUE_RESULT_PREFIX_DEFAULT : 0x02,
	
	MWB_PAR_VALUE_VERIFY_LOCATION_OFF :   0x00,
	MWB_PAR_VALUE_VERIFY_LOCATION_ON :  0x01,
	
	MWB_PAR_VALUE_COLOR_NORMAL :  		0x01,
	MWB_PAR_VALUE_COLOR_INVERTED :  	0x02,
	MWB_PAR_VALUE_COLOR_BOTH :  		0x04, //default
	/**/


	/** @brief  UPC/EAN decoder disable addons detection
	*/
	MWB_CFG_EANUPC_DISABLE_ADDON :  0x1,
	MWB_CFG_EANUPC_DONT_EXPAND_UPCE :   0x2,
	/**/

	/** @brief  Global decoder flags value: apply sharpening on input image
	*/
	MWB_CFG_GLOBAL_HORIZONTAL_SHARPENING :          0x01,
	MWB_CFG_GLOBAL_VERTICAL_SHARPENING :            0x02,
	MWB_CFG_GLOBAL_SHARPENING :                     0x03,

	/** @brief  Global decoder flags value: apply rotation on input image
	*/
	MWB_CFG_GLOBAL_ROTATE90 :                       0x04,
	MWB_CFG_GLOBAL_ROTATE180:                       0x08,



	/** @brief  Global decoder flags value: calculate location for 1D barcodeTypes (Code128, Code93, Code39 supported)
	*/
	MWB_CFG_GLOBAL_CALCULATE_1D_LOCATION   :  0x10,

	/** @brief  Global decoder flags value: fail 1D decode if result is not confirmed by location expanding (Code128, Code93, Code39 supported)
	*/
	MWB_CFG_GLOBAL_VERIFY_1D_LOCATION    :   0x20,
	/** @brief  Global decoder flags value: fail decode if result is not touching the center of viewfinder (2D + Code128, Code93, Code39 supported)
	* 1D locaiton flags will be enabled automatically with this one
	*/
	MWB_CFG_GLOBAL_USE_CENTRIC_SCANNING  :   0x40,
	
	/** @brief  Global decoder flags value: disable some image pre=processing, suitable for devices with weak CPU
	  */
	MWB_CFG_GLOBAL_DISABLE_PREPROCESSING :            0x80,
		
	/** @brief  Global decoder flags value: Enable multiple barcode detection in single image
	  */
	MWB_CFG_GLOBAL_ENABLE_MULTI :                    0x100,
	
	/** @brief  Global decoder flags value: mulyiple scan lines density
	  */
	MWB_CFG_GLOBAL_SCANLINESx2 :                    0x200,
	MWB_CFG_GLOBAL_SCANLINESx4 :                    0x400,
	MWB_CFG_GLOBAL_SCANLINESx8 :                    0x800,

	/** @brief  Code39 decoder flags value: require checksum check
	*/
	MWB_CFG_CODE39_REQ_CHKSUM            :    0x2,
	/**/


	/**
	* @name Bit mask identifiers for supported decoder types
	* @{ */
	MWB_CODE_MASK_NONE :             0x00000000,
	MWB_CODE_MASK_QR :               0x00000001,
	MWB_CODE_MASK_DM :               0x00000002,
	MWB_CODE_MASK_RSS :              0x00000004,
	MWB_CODE_MASK_39 :               0x00000008,
	MWB_CODE_MASK_EANUPC :           0x00000010,
	MWB_CODE_MASK_128 :              0x00000020,
	MWB_CODE_MASK_PDF :              0x00000040,
	MWB_CODE_MASK_AZTEC :            0x00000080,
	MWB_CODE_MASK_25 :               0x00000100,
	MWB_CODE_MASK_93 :               0x00000200,
	MWB_CODE_MASK_CODABAR :          0x00000400,
	MWB_CODE_MASK_DOTCODE :          0x00000800,
	MWB_CODE_MASK_11 :               0x00001000,
	MWB_CODE_MASK_MSI :              0x00002000,
	MWB_CODE_MASK_MAXICODE:          0x00004000,
	MWB_CODE_MASK_POSTAL:            0x00008000,
	MWB_CODE_MASK_TELEPEN:           0x00010000,
	MWB_CODE_MASK_ALL :              0x00ffffff,
	/** @} */

	/**
	* @name Basic return values for RegisterSDK function
	* @{
	*/
	MWB_RTREG_OK                  : 0,
	MWB_RTREG_INVALID_KEY         : -1,
	MWB_RTREG_INVALID_CHECKSUM    : -2,
	MWB_RTREG_INVALID_APPLICATION : -3,
	MWB_RTREG_INVALID_SDK_VERSION : -4,
	MWB_RTREG_INVALID_KEY_VERSION : -5,
	MWB_RTREG_INVALID_PLATFORM    : -6,
	MWB_RTREG_KEY_EXPIRED         : -7,
	/** @} */

	/**
	* Messages for the return codes
	*
	*/
	REGMESSAGES : {
	"0"  : 'Registration OK',
	"-1" : 'Registration Invalid Key',
	"-2" : 'Registration Invalid Checksum',
	"-3" : 'Registration Invalid Application',
	"-4" : 'Registration Invalid SDK Version',
	"-5" : 'Registration Invalid Key Version',
	"-6" : 'Registration Invalid Platform',
	"-7" : 'Registration Key Expired',

	},
	/**
	* @name Bit mask identifiers for RSS decoder types
	* @{ */
	MWB_SUBC_MASK_RSS_14 :           0x00000001,
	MWB_SUBC_MASK_RSS_14_STACK :     0x00000002,
	MWB_SUBC_MASK_RSS_LIM :          0x00000004,
	MWB_SUBC_MASK_RSS_EXP :          0x00000008,
	/** @} */

	/**
	* @name Bit mask identifiers for QR decoder types
	* @{ */
	MWB_SUBC_MASK_QR_STANDARD :      0x00000001,
	MWB_SUBC_MASK_QR_MICRO    :      0x00000002,
	/** @} */
	
	/**
	* @name Bit mask identifiers for PDF decoder types
	* @{ */
	MWB_SUBC_MASK_PDF_STANDARD :      0x00000001,
	MWB_SUBC_MASK_PDF_MICRO    :      0x00000002,
	/** @} */


	/**
	* @name Bit mask identifiers for Code 2 of 5 decoder types
	* @{ */
	MWB_SUBC_MASK_C25_INTERLEAVED :  0x00000001,
	MWB_SUBC_MASK_C25_STANDARD :     0x00000002,
	MWB_SUBC_MASK_C25_ITF14 :        0x00000004,
	MWB_SUBC_MASK_C25_IATA  :        0x00000008,
	MWB_SUBC_MASK_C25_MATRIX :       0x00000010,
	MWB_SUBC_MASK_C25_COOP   :       0x00000020,
	MWB_SUBC_MASK_C25_INVERTED:      0x00000040,

	/** @} */

	/**
	* @name Bit mask identifiers for POSTAL decoder types
	* @{ */
	MWB_SUBC_MASK_POSTAL_POSTNET :   0x00000001,
	MWB_SUBC_MASK_POSTAL_PLANET  :   0x00000002,
	MWB_SUBC_MASK_POSTAL_IM      :   0x00000004,
	MWB_SUBC_MASK_POSTAL_ROYAL   :   0x00000008,
	MWB_SUBC_MASK_POSTAL_AUSTRALIAN :0x00000010,

	/** @} */


	/**
	* @name Bit mask identifiers for UPC/EAN decoder types
	* @{ */
	MWB_SUBC_MASK_EANUPC_EAN_13 :    0x00000001,
	MWB_SUBC_MASK_EANUPC_EAN_8 :     0x00000002,
	MWB_SUBC_MASK_EANUPC_UPC_A :     0x00000004,
	MWB_SUBC_MASK_EANUPC_UPC_E :     0x00000008,
	MWB_SUBC_MASK_EANUPC_UPC_E1 :    0x00000010,
	/** @} */

	/**
	* @name Bit mask identifiers for 1D scanning direction
	* @{ */
	MWB_SCANDIRECTION_HORIZONTAL :   0x00000001,
	MWB_SCANDIRECTION_VERTICAL :     0x00000002,
	MWB_SCANDIRECTION_OMNI :         0x00000004,
	MWB_SCANDIRECTION_AUTODETECT :   0x00000008,
	MWB_SCANDIRECTION_CUSTOM :   	 0x00000010,
	/** @} */

	FOUND_NONE          :   0,
	FOUND_DM            :   1,
	FOUND_39            :   2,
	FOUND_RSS_14        :   3,
	FOUND_RSS_14_STACK  :   4,
	FOUND_RSS_LIM       :   5,
	FOUND_RSS_EXP       :   6,
	FOUND_EAN_13        :   7,
	FOUND_EAN_8         :   8,
	FOUND_UPC_A         :   9,
	FOUND_UPC_E         :   10,
	FOUND_128           :   11,
	FOUND_PDF           :   12,
	FOUND_QR            :   13,
	FOUND_AZTEC         :   14,
	FOUND_25_INTERLEAVED:   15,
	FOUND_25_STANDARD   :   16,
	FOUND_93            :   17,
	FOUND_CODABAR       :   18,
	FOUND_DOTCODE       :   19,
	FOUND_128_GS1       :   20,
	FOUND_ITF14         :   21,
	FOUND_11            :   22,
	FOUND_MSI           :   23,
	FOUND_25_IATA       :   24,
	FOUND_25_MATRIX     :   25,
	FOUND_25_COOP       :   26,
	FOUND_25_INVERTED   :   27,
	FOUND_QR_MICRO      :   28,
	FOUND_MAXICODE      :   29,
	FOUND_POSTNET       :   30,
	FOUND_PLANET        :   31,
	FOUND_IMB           :   32,
	FOUND_ROYALMAIL     :   33,
	FOUND_MICRO_PDF     :   34,
	FOUND_32	        :   35,
	FOUND_AUSTRALIAN    :   36,
	FOUND_TELEPEN	    :   37,


/** Set the scanning resolution of the camera, aspect ratio may vary
    * available options:
    *   SD		 640x480
    *   HD		1280x720
    *   FHD		1920x1080
    */
	CamRes_SD			: 0,
	CamRes_HD			: 1,
	CamRes_FHD			: 2,	
	
	OrientationPortrait :       'Portrait',
	OrientationLandscapeLeft :  'LandscapeLeft',
	OrientationLandscapeRight : 'LandscapeRight',
	OrientationAll :            'All',
	OverlayModeNone :           0,
	OverlayModeMW :             1,
	OverlayModeImage :          2,
	PM_NONE :                   0,
	PM_PAUSE :                  1,
	PM_STOP_BLINKING :          2,



	/**
	* @name Bit mask identifiers for supported decoder types
	* @{ */
	MWP_PARSER_MASK_NONE :               0x00000000,
	MWP_PARSER_MASK_GS1  :               0x00000001,
	MWP_PARSER_MASK_IUID :               0x00000002,
	MWP_PARSER_MASK_ISBT :               0x00000004,
	MWP_PARSER_MASK_AAMVA:               0x00000008,
	MWP_PARSER_MASK_HIBC :               0x00000010,
	MWP_PARSER_MASK_SCM  :               0x00000020,
	MWP_PARSER_MASK_AUTO :               0x000000ff,

	/** @} */


	/**
	* @name Partial View Constants, in case we usePartialScanner but don't supply position parameters
	* @{ */

	XPOINT : 0,
	YPOINT : 0,
	WIDTH  : 50,
	HEIGHT : 50
	/** @} */
};


var BarcodeScanner = {
	/**
	* Init decoder with default params.
	*/
	MWBinitDecoder: null, //assigned with cwrap on module load //default settings are the first thing executed in native main
	MWBinitDecoder_arguments: [], //data_types
	
	/**
	* Returns json object of cmbWebVersion, decoderVersion and fullVersion.
	*/
	MWBgetVersion: null, //assigned with cwrap on module load
	MWBgetVersion_arguments: [],
	
	/**
	* result.code - string representation of barcode result
	* result.parsedCode - string json representation of parsed barcode result (if any)
	* result.type - type of barcode detected or 'Cancel' if scanning is canceled
	* result.bytes - bytes array of raw barcode result
	* result.isGS1 - (boolean) barcode is GS1 compliant
	* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
	* result.imageWidth - Width of the scanned image
	* result.imageHeight - Height of the scanned image
	*/
	MWBstartScanner: function () { MWBScanner.start(); }, //deprecated - prototype.startScanning is used instead
	MWBstartScanner_arguments: [],
	
	/**
	* Registers licensing information for all SDK functionality.
	* It should be called once on app startup.
	*
	* @param[in]   key                     License key string
	* @param[in]   callback                Result callback
	*
	*/
	MWBregisterSDK: null, //rm
	MWBregisterSDK_arguments: [],

	/**
	* Obtain the device ID
	*/

	MWBgetDeviceID: null, //n/a
	MWBgetDeviceID_arguments: [],
	
	/**
	* Sets active or inactive status of decoder types
	*
	* @param[in]       activeCodes             ORed bit flags (MWB_CODE_MASK_...) of decoder types
	*                                          to be activated.
	*/
	MWBsetActiveCodes: null, //assigned with cwrap on module load
	MWBsetActiveCodes_arguments: ['number'],
	
	/**
	* Get active decoder types
	*
	* @retval          Active decoder types
	*/
	MWBgetActiveCodes: null, //assigned with cwrap on module load
	MWBgetActiveCodes_arguments: [],
	
	/**
	* Set active subcodes for given code group flag.
	* Subcodes under some decoder type are all activated by default.
	*
	* @param[in]       codeMask                Single decoder type/group (MWB_CODE_MASK_...)
	* @param[in]       subMask                 ORed bit flags of requested decoder subtypes (MWB_SUBC_MASK_)
	*/
	MWBsetActiveSubcodes: null, //assigned with cwrap on module load
	MWBsetActiveSubcodes_arguments: ['number', 'number'],
	
	/**
	* MWBsetFlags configures options (if any) for decoder type specified in codeMask.
	* Options are given in  flags as bitwise OR of option bits. Available options depend on selected decoder type.
	*
	* @param[in]   codeMask                Single decoder type (MWB_CODE_MASK_...)
	* @param[in]   flags                   ORed bit mask of selected decoder type options (MWB_FLAG_...)
	*/
	MWBsetFlags: null, //assigned with cwrap on module load
	MWBsetFlags_arguments: ['number', 'number'],
	
	/**
	* MWBsetMinLength configures minimum result length for decoder type specified in codeMask.
	*
	* @param[in]   codeMask                Single decoder type (MWB_CODE_MASK_...)
	* @param[in]   minLength               Minimum result length for selected decoder type
	*/
	MWBsetMinLength: null, //assigned with cwrap on module load
	MWBsetMinLength_arguments: ['number', 'number'],
	
	/**
	* This function enables some control over scanning lines choice for 1D barcodes. By ORing
	* available bit-masks user can add one or more direction options to scanning lines set.
	* @n           - MWB_SCANDIRECTION_HORIZONTAL - horizontal lines
	* @n           - MWB_SCANDIRECTION_VERTICAL - vertical lines
	* @n           - MWB_SCANDIRECTION_OMNI - omnidirectional lines
	* @n           - MWB_SCANDIRECTION_AUTODETECT - enables BarcodeScanner's
	*                autodetection of barcode direction
	*
	* @param[in]   direction               ORed bit mask of direction modes given with
	*                                      MWB_SCANDIRECTION_... bit-masks
	*/
	MWBsetDirection: null, //assigned with cwrap on module load
	MWBsetDirection_arguments: ['number'],
	
	/**
	* Sets rectangular area for barcode scanning with selected single decoder type.
	* After MWBsetScanningRect() call, all subseqent scans will be restricted
	* to this region. If rectangle is not set, whole image is scanned.
	* Also, if width or height is zero, whole image is scanned.
	*
	* Parameters are interpreted as percentage of image dimensions, i.e. ranges are
	* 0 - 100 for all parameters.
	*
	* @param[in]   codeMask            Single decoder type selector (MWB_CODE_MASK_...)
	* @param[in]   left                X coordinate of left edge (percentage)
	* @param[in]   top                 Y coordinate of top edge (percentage)
	* @param[in]   width               Rectangle witdh (x axis) (percentage)
	* @param[in]   height              Rectangle height (y axis) (percentage)
	*/
	MWBsetScanningRect: null, //assigned with cwrap on module load
	MWBsetScanningRect_arguments: ['number', 'number','number', 'number', 'number'],
	
	/**
	 * Get rectangular area for barcode scanning with selected single or multiple decoder type(s).
	 * If codeMask is 0, union rectangle of all ACTIVE barcode types will be returned
	 * Output values are in percentages of screeen width and height (range 0 - 100)
	 *
	 * @param[in]   codeMask             Single decoder type selector (MWB_CODE_MASK_...) or 0
	 * @param[out]  left                 X coordinate of left edge
	 * @param[out]  top                  Y coordinate of top edge
	 * @param[out]  width                Rectangle witdh (x axis)
	 * @param[out]  height               Rectangle height (y axis)
	 *
	 * @retval      MWB_RT_OK            Rectangle get successfully
	 * @retval      MWB_RT_NOT_SUPPORTED Rectangle get failed
	 */
	MWBgetScanningRect: null, //assigned with cwrap on module load - for internal use only
	MWBgetScanningRect_arguments: ['number'],
	
	/**
	* Barcode detector relies on image processing and geometry inerpolation for
	* extracting optimal data for decoding. Higher effort level involves more processing
	* and intermediate parameter values, thus increasing probability of successful
	* detection with low quality images, but also consuming more CPU time.
	*
	* @param[in]   level                   Effort level - available values are 1, 2, 3, 4 and 5.
	*                                      Levels greater than 3 are not suitable fro real-time decoding
	*/
	MWBsetLevel: null, //assigned with cwrap on module load
	MWBsetLevel_arguments: ['number'],
	
	/**
	* Sets prefered User Interface orientation of scanner screen
	* Choose one fo the available values:
	* OrientationPortrait
	* OrientationLandscapeLeft
	* OrientationLandscapeRight
	*
	* Default value is OrientationPortrait
	*/
	MWBsetInterfaceOrientation: null, //rm | AnchorView | set_Preview_anchor maybe
	MWBsetInterfaceOrientation_arguments: [], //also here
	
	/**
	* Choose overlay graphics type for scanning screen:
	* OverlayModeNone   - No overlay is displayed
	* OverlayModeMW     - Use MW Dynamic Viewfinder with blinking line (you can customize display options
	*                     in native class by changing defaults)
	* OverlayModeImage  - Show image on top of camera preview
	*
	* Default value is OverlayModeMW
	*/
	MWBsetOverlayMode: function (mode) { 
		MW_properties.global.overlay.mode = ((typeof mode) == 'number') ? mode : 1;
	},
	MWBsetOverlayMode_arguments: ['number'],
	
	/**
	* Set blinking line visible
	* Default value is true
	*/
	MWBsetBlinkingLineVisible: function (visible) { 
		if ((typeof visible) == 'boolean')
		{
			if (visible)    MW_properties.global.overlay.lineColor = "rgba(255, 0, 0, 1.0)"; // the color will be reset to red
			else            MW_properties.global.overlay.lineColor = "rgba(255, 0, 0, 1.0)"; // will affect the viewfinder border as well
		}
	},
	MWBsetBlinkingLineVisible_arguments: ['boolean'],
	
	/**
	* Set pause mode
	*
	* What happens when the scanner is paused:
	*
	*   PM_NONE             - Nothing happens
	*   PM_PAUSE            - Blinking lines are replaced with a pause view
	*   PM_STOP_BLINKING    - Blinking lines stop blinking
	*
	*   Default value is PM_PAUSE
	*/
	MWBsetPauseMode: function (mode) { 
		/* What happens when the scanner is paused:
            *
            *   PM_NONE             - Nothing happens
            *   PM_PAUSE            - Blinking lines are replaced with a pause view
            *   PM_STOP_BLINKING    - Blinking lines stop blinking
            *
            *   Default value is PM_PAUSE
        */
        MW_properties.global.overlay.pauseMode = ((typeof mode) == 'number') ? mode : 1; // currently PM_STOP_BLINKING
		
		//use this code and set anim to 0
		//this.lineV.style.animation = this.lineH.style.animation = "fadeColor " + overlayProperties.blinkingRate + "ms infinite";
		
		//or you could do
		//mwBlinkingLines.v.style.animationPlayState = "running";
		//mwBlinkingLines.v.style.animationPlayState = "paused";
		
		//the PM_STOP_BLINKING behaviour is done in togglePause method
	},
	MWBsetPauseMode_arguments: ['number'],
	
	/**
	* Enable or disable high resolution scanning. It's recommended to enable it when target barcodes
	* are of high density or small footprint. If device doesn't support high resolution param will be ignored
	*
	* Accepts boolean (false - 480p, true - 720p) or constants (CamRes_SD - 480p, CamRes_HD - 720p, CamRes_FullHD - 1080p)
	* Default value is true (enabled) / CamRes_HD (720p)
	*/
	MWBenableHiRes: function (enable) { 
		if ((typeof enable) == 'boolean' || (typeof enable) == 'number')
		{
			//range check
			let arg_value = Number(enable);
			arg_value = ((typeof enable) == 'number' && (arg_value < 0 || arg_value > 2)) ? CONSTANTS.CamRes_HD : arg_value;
			
			//book-keeping
			MW_properties.gui_accessible.cameraResolution.runtime_value =
			MW_properties.gui_accessible.cameraResolution.initial_value = enable;
			
			let from_MW_properties = MW_properties.gui_accessible.cameraResolution.values;
			let actual_value = from_MW_properties[arg_value];
			
			//used-in setter
			JavaScript_mediaDevices_API.constraints_init(actual_value[0], actual_value[1], null);
		}
	},
	MWBenableHiRes_arguments: ['boolean'],
	
	/**
	* Enable or disable flash toggle button on scanning screen. If device doesn't support flash mode
	* button will be hidden regardles of param
	*
	* Default value is true (enabled)
	*/
	MWBenableFlash: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.hideFlash = !enable;
	},
	MWBenableFlash_arguments: ['boolean'],
	
	/**
	* Set default state of flash (torch) when scanner activity is started
	*
	* Default value is false (disabled)
	*/
	MWBturnFlashOn: function (on) { 
		if ((typeof on) == 'boolean') JavaScript_mediaDevices_API.torchState = on;
	},
	MWBturnFlashOn_arguments: ['boolean'],
	
	/**
	* Toggle on/off flash state
	*
	*/
	MWBtoggleFlash: function () { JavaScript_mediaDevices_API.flashToggler(true); },
	MWBtoggleFlash_arguments: [],
	
	/**
	* Enable or disable zoom button on scanning screen. If device doesn't support zoom,
	* button will be hidden regardles of param. Zoom is not supported on Windows Phone 8 //DELETE comments for windows - ADD for PC
	* as there's no zooming api available!
	*
	* Default value is true (enabled)
	*/
	MWBenableZoom: function (enable) { 
		if ((typeof enable) == 'boolean') MW_properties.global.fullscreenButtons.hideZoom = !enable;
	},
	MWBenableZoom_arguments: ['boolean'],
	
	/**
	* Set desired initial zoom level. Zoom is supported only by chrome.
	* Initial zoom level can be 0 - no zoom, 1 - 50% or 2 - max zoom. Default is 0.
	*
	*/
	MWBsetZoomLevel: function (zoomLevel) {
		if ((typeof zoomLevel) == 'number' && (zoomLevel >=0 && zoomLevel <= 2))
		JavaScript_mediaDevices_API.zoomLevel = zoomLevel;
	},
	MWBsetZoomLevel_arguments: ['number'/*, 'number', 'number'*/],
	
	/**
	* Toggle on/off zoom state
	*
	*/
	MWBtoggleZoom: function () { JavaScript_mediaDevices_API.zoomLooper(); },
	MWBtoggleZoom_arguments: [],
	
	/**
	* Set maximum threads to be used for decoding. Value will be limited to maximum available CPU cores.
	* Default is 4 (will trim to max available value). Set to 1 to disable multi-threaded decoding
	*/
	MWBsetMaxThreads: null, //TO-DO here (THERE IS NO MULTITHREADING AS OF NOW)
	MWBsetMaxThreads_arguments: ['number'],
	
	/**
	* Set custom key:value pair which is accesible from native code.
	*/
	MWBsetCustomParam: null, //DELETE this
	MWBsetCustomParam_arguments: ['number', 'number'], //probs also this
	
	/**
	* Enable/disable continuous scanning. If 'shouldClose' is 'false', result callback will be performed and
	* scanner will be paused. The User can call 'resumeScanning' to continue scanning, or 'closeScanner'
	* for closing the scanner. Default is 'true'.
	* Function is not available on WP8 due to the technical limitations.
	*/
	MWBcloseScannerOnDecode: function (_close) { 
		if ((typeof _close) == 'boolean')
		{
			//book-keeping
			MW_properties.gui_accessible.continuous.runtime_value =
			MW_properties.gui_accessible.continuous.initial_value = !_close;
			
			//used-in setter
			MWBScanner.set_Continuous(!_close);
		}
	},
	MWBcloseScannerOnDecode_arguments: ['boolean'],
	
	/**
	* Resume scanning. Use this method if already using MWBcloseScannerOnDecode(false).
	* Function is not available on WP8 due to the technical limitations.
	*/
	MWBresumeScanning: function () { 
		MWBScanner.PAUSE_DECODING = false;
	},
	MWBresumeScanning_arguments: [],
	
	/**
	* Close scanner. Use this method if already using MWBcloseScannerOnDecode(false).
	* Function is not available on WP8 due to the technical limitations.
	*/
	MWBcloseScanner: function () { MWBScanner.destroyPreview(); },
	MWBcloseScanner_arguments: [],
	
	/**
	* Use 60 fps when available.
	* Function is only available on iOS.
	* Default is 'false'
	*/
	MWBuse60fps: null, //DELETE
	MWBuse60fps_arguments: ['boolean'],
	
		
	MWBscanFrame_ext : function (imgData, success) {
		{
			var data = imgData.data; //new Uint8ClampedArray([1, 20, -3, 129, 15]); //checks out
			var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
			
			var dataPtr = Module._malloc(nDataBytes); //buffer
			Module.HEAPU8.set(data, dataPtr); //[typedArray_dataSource, heapMemory_pointer]
			
			// Call function and get result
			var jsonMWResult = "";
			var scanFrame = Module.cwrap('scanFrame', 'string', ['number', 'number', 'number', 'number']); //for some reason this has to be inside this scope
			//probs asign cwrap when Module is loaded
			
			let DEBUG_PRINT = 0;
			
			jsonMWResult = scanFrame(dataPtr, imgData.width, imgData.height, DEBUG_PRINT); //dataURL is png (no bmp or something raw)
			
			var MWResult_obj = (DEBUG_PRINT == 0) ? JSON.parse(jsonMWResult) : jsonMWResult;
			
			//MWResult_obj take .code and JSON.parse it as well (but how can we know if its JSON result from the parser? -needs indicator)

			//var result = WindowsComponnent.ScannerPage.scanImage(imgData.data, imgData.width, imgData.height); // imgData.data is a byte array where each pixel is [RGBA]
			
			//HERE display-return result
			
			/**
			  * result.code - string representation of barcode result (MWResult.text or JSON string from parser)
			  * result.parsedCode - string json representation of parsed barcode result (if any)
			  * result.type - type of barcode detected or 'Cancel' if scanning is canceled
			  * result.bytes - bytes array of raw barcode result
			  * result.isGS1 - (boolean) barcode is GS1 compliant
			  * result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
			  * result.imageWidth - Width of the scanned image
			  * result.imageHeight - Height of the scanned image
			  */
			
			if ((typeof success) == 'function')
			{
				if (MWResult_obj && MWResult_obj.type != "No MWResult.")
					success(MWResult_obj);
				else
					success(MW_methods.helpers.otherResult(
						"No barcode found.",	//code
						"NoResult"				//type
					));
			}
			else if (mwb_debug_print) console.log(MWResult_obj);
			
			//return;
			
			// Free memory
			Module._free(dataPtr); //but what if you change the address the dataPtr points to in C++ | Verify, and if true, store a copy to restore OG from (or just -= size)
			dataPtr = null;
			Module._free(jsonMWResult);
		}
	},
	
	/**
	* Scan image.
	* imageURI - path to the image to be scanned.
	*/
	MWBscanImage: function (imageURI, success) { //callback is optional
        imageURI = ((typeof imageURI) == 'string') ? imageURI : '';

        // clear needs to be done for every scan
        //WindowsComponnent.ScannerPage.iniClear();
		MW_methods.helpers.reset_Decoder(); //but ScanRects are not 0-100 //and effort lvl is 2
		scannerConfig();
		
		//mwb_debug_print = true;
        if (mwb_debug_print) console.log('about to scan image: ' + imageURI);
		
        var canvasFrame = document.createElement("canvas");

        var pad = 20;

        var imageOverlay = document.createElement("img");
        imageOverlay.src = imageURI;

        imageOverlay.onload = function () {
            canvasFrame.width = imageOverlay.width + (pad * 2);
            canvasFrame.height = imageOverlay.height + (pad * 2);

            var ctx = canvasFrame.getContext("2d");

            // draw white background to pad image with white frame
            ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
            ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);

            ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
                                        pad, pad, imageOverlay.width, imageOverlay.height);   // destination rectangle

            var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
			
			BarcodeScanner.MWBscanFrame_ext(imgData, success);
			
			//ios canvas memory limit workaround
			ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
			canvasFrame.width = 0;
			canvasFrame.height = 0;
        }
    },
	MWBscanImage_arguments: ['string'], //callback is optional
	
	/**
	* Scan frame.
	* image_data - ImageData object or dataURL string to be scanned.
	* image_type - "ImageData" or "dataURL" string describing image_data data type.
	*/
	MWBscanFrame: function (image_data, image_type, success) { //callback is optional
        
		var isImageData;
		
		if ((typeof image_type) == 'string' && image_type === "ImageData") isImageData = true;
		else 
			if ((typeof image_type) == 'string' && image_type === "dataURL") isImageData = false;
		else 
			return null; //or a specific {} ?		

        // clear needs to be done for every scan
		MW_methods.helpers.reset_Decoder(); //but ScanRects are not 0-100 //and effort lvl is 2
		scannerConfig();
		
		var imgData;
		
		if (isImageData === false)
		{
			if (image_data.startsWith("data:image") === false) return null; //or a specific {} ?
			
			var canvasFrame = document.createElement("canvas");
			var pad = 0;
			var ctx = canvasFrame.getContext("2d");
			
			var imageOverlay = new Image();			
			imageOverlay.onload = function () {
				
				canvasFrame.width = imageOverlay.width + (pad * 2);
				canvasFrame.height = imageOverlay.height + (pad * 2);

				// draw white background to pad image with white frame
				ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
				ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);

				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
											pad, pad, imageOverlay.width, imageOverlay.height);   // destination rectangle

				imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
				
				//
				BarcodeScanner.MWBscanFrame_ext(imgData, success);
				
				//ios canvas memory limit workaround
				ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
				canvasFrame.width = 0;
				canvasFrame.height = 0;

			};
			imageOverlay.src = image_data; //strDataURI;
		}
		else 
		{
			imgData = image_data;
        
			BarcodeScanner.MWBscanFrame_ext(imgData, success);
		}
    },
	MWBscanFrame_arguments: ['object|string', 'string'], //callback is optional
	
	/**
	* Set custom decoder param.
	* MWB_setParam set custom decoder param id/value pair for decoder type specified in \a codeMask.
	* codeMask                Single decoder type (MWB_CODE_MASK_...)
	* paramId                 ID of param
	* paramValue              Integer value of param
	*/
	MWBsetParam: null, //assigned with cwrap on module load
	MWBsetParam_arguments: ['number','number', 'number'],
	
	/**
	* Pause scanner view
	*/
	MWBtogglePauseResume: function () {
		MWBScanner.PAUSE_DECODING = !MWBScanner.PAUSE_DECODING; //this works as intended
		
		if (MW_properties.global.overlay.pauseMode == 2) //PM_STOP_BLINKING
		{
			//use this code and set anim to 0 (this resets lines to full stroke)
			var this_root = Dynamic_DOM_Elements;
			var anim_state = (MWBScanner.PAUSE_DECODING) ? 0 : MW_properties.global.overlay.blinkingRate;
			
			this_root.lineV.style.animation = this_root.lineH.style.animation = "fadeColor " + anim_state + "ms infinite";
			
			//or you could do (this one stops it in mid-transition)
			//if (MWBScanner.PAUSE_DECODING)
			//{
			//	this_root.lineV.style.animationPlayState = "paused";
			//	this_root.lineH.style.animationPlayState = "paused";
			//}
			//else
			//{
			//	this_root.lineV.style.animationPlayState = "running";
			//	this_root.lineH.style.animationPlayState = "running";
			//}
		}
		else if (MW_properties.global.overlay.pauseMode == 1) //PM_PAUSE
		{
			//TO-DO
		}
	},
	MWBtogglePauseResume_arguments: [],
	
	/**
	*  Ignore result if scanned the same code in continuous scanning mode
	*
	*  delay         Time interval between 2 scan results with the same result.code in milliseconds
	*/
	MWBduplicateCodeDelay: null, //assigned with cwrap on module load
	MWBduplicateCodeDelay_arguments: ['number'],
	
	/**
	*  Use auto generated full screen scanning rectangle, or use user defined scanning rectangles
	*
	*  useAutoRect   Whether or not to use auto generated full screen scanning rectangle, or use user defined scanning rectangles [true, false]; default: true
	*/
	MWBuseAutoRect: null, //TO-DO or DELETE
	MWBuseAutoRect_arguments: [], //pointless since the default is 100%
	
	/**
	*  Use front facing camera
	*
	*  useFrontCamera   Whether or not to use front facing camera [true, false]; default: false
	*/
	MWBuseFrontCamera: function (front) {
		if ((typeof front) == 'boolean')
		{
			//book-keeping
			MW_properties.gui_accessible.frontCamera.runtime_value =
			MW_properties.gui_accessible.frontCamera.initial_value = front;
			
			//used-in setter
			JavaScript_mediaDevices_API.constraints_init(null, null, front);
			
			//and, only makes sense for mobile devices with 2 cams, PC doesn't have that
		}
	},
	MWBuseFrontCamera_arguments: ['boolean'],
	
	/**
	*  Set active parser type
	*
	*  activeParser  Available options:
	*                   MWP_PARSER_MASK_NONE
	*                   MWP_PARSER_MASK_AUTO
	*                   MWP_PARSER_MASK_GS1
	*                   MWP_PARSER_MASK_IUID
	*                   MWP_PARSER_MASK_ISBT
	*                   MWP_PARSER_MASK_AAMVA
	*                   MWP_PARSER_MASK_HIBC
	*                   MWP_PARSER_MASK_SCM
	*
	*/
	MWBsetActiveParser: null, //assigned with cwrap on module load
	MWBsetActiveParser_arguments: ['number'],
	
	/**
	*  Resize partial scanner view
	*
	*  x, y, width, height (percentage of screen size)
	*/
	MWBresizePartialScanner: function (x, y, w, h) { //just a wrapper
		MWBScanner.resizePreview(x, y, w, h); 
		
		//note - has to be inside a f()
		//because MWBScanner is probs not defined when this var is defined
		//but when its called later on, it will be
		//Works!
	},
	MWBresizePartialScanner_arguments: ['number','number', 'number', 'number'],
	
	/**
	*  @name usePartialScanner
	*
	*  @description
	*    introduced in 3.1 expects a boolean, if true the startScanner will use a partial scanner, default should be false
	*/
	MWBusePartialScanner: function (partial) {
		
		if ((typeof partial) == 'boolean')
		{
			//book-keeping
			MW_properties.gui_accessible.partialView.runtime_value =
			MW_properties.gui_accessible.partialView.initial_value = partial;
			
			//used-in setter
			if (partial) MWBScanner.resizePreview.apply(null, MWBScanner.partialView_XYWH.initial_value); //run-time ?
			
			//rn those values are only set by API resize, not by proto start
			
			else MWBScanner.resizePreview(0, 0, 100, 100);
		}
	},
	MWBusePartialScanner_arguments: ['boolean'],
	
	MWBsetDecoderTimeout: function (timeout) { 
		if ((typeof timeout) == 'number')
		{
			//no book-keeping
			MWBScanner.set_DecoderTimeout(timeout);
		}
	},
	MWBsetDecoderTimeout_arguments: ['number'],
	
	MWBsetDpsLimit: function (dps) { 
		if ((typeof dps) == 'number')
		{
			//no book-keeping
			MWBScanner.set_DpsLimit(dps);
		}
	},
	MWBsetDpsLimit_arguments: ['number']//,
	
};

/**
* Scanner Defaults to be loaded in the constructor of Scanner
* TODO: maybe set the callback function to an empty anonymous function
**/
var defaults = {
	
	init_decoder : false,
	valid_key : false,
	dflt_clb : function(result) {
		/**
		* result.code - string representation of barcode result
		* result.parsedCode - string json representation of parsed barcode result (if any)
		* result.type - type of barcode detected or 'Cancel' if scanning is canceled
		* result.bytes - bytes array of raw barcode result
		* result.isGS1 - (boolean) barcode is GS1 compliant
		* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
		* result.imageWidth - Width of the scanned image
		* result.imageHeight - Height of the scanned image
		*/
		if (result.type == 'NoResult') { //CHANGE THIS?
			//Perform some action on scanning canceled if needed
		}
		else if (result && result.code){
			navigator.notification.alert(result.code, function(){}, result.type + (result.isGS1?" (GS1)":""), 'Close');
		}
	},
	company_logo: "cognex_icon.png", //different domain host req. cross-origin code
	company_logo_set: false
}

/**
* @name
*   Scanner
* @description
*   constructor of the scanner object
* @params
*   key   optional license key
*
*/
var Scanner = function() {

	var self = this;
	//load defaults
	for (var key in defaults) {
		if (defaults.hasOwnProperty(key)) {
			self[key] = defaults[key];
		}
	}
}

/**
*  @name initDecoder
*  @description setups a default decoder
*
* @return promise
**/
Scanner.prototype.initDecoder = function() {
	
	var that = this;
	return new window.Promise(function(resolve, reject) {
		if(!that.init_decoder)
		return BarcodeScanner.MWBinitDecoder(function(){ resolve('FRESH_INIT'); that.init_decoder = true; });
		else
		resolve('VETERAN_INIT');
	});
}

/**
*  @name getVersion
*  @description Returns json object of cmbWebVersion, decoderVersion and fullVersion.
*
*  @return json object
**/
Scanner.prototype.getVersion = function() {
	var jsonVersion = BarcodeScanner.MWBgetVersion();
	var jsonVersion_obj = JSON.parse(jsonVersion);
	Module._free(jsonVersion);
	
	return jsonVersion_obj;
}

/**

*   @name
*     setKey //no longer aplicable, DELETE or?
*   @description
*     sets the license key to be used with our decoder
*   @params
*     key : the license key
*   @return promise that resolves to a boolean value. True if key was valid; false in every other case
*
*
**/
Scanner.prototype.setKey = function(key) {
	
	var that = this;
	if(typeof key === 'undefined' || !key) key = '';

	if( this.valid_key ) {
		return new window.Promise(function(resolve, reject) {
			resolve(that.valid_key);
		})
	}
	else {
		return new window.Promise(function(resolve, reject) {
		return BarcodeScanner.MWBregisterSDK(key, function(result) {
				
				if (mwb_debug_print) console.log(CONSTANTS.REGMESSAGES[parseInt(result)]);
				
				if( parseInt(result) === 0 ) that.valid_key = true;
				
				resolve(that.valid_key);
			})
		});
	}
}

/**
*   @name
*     setCallback
*   @description
*     set a custom callback function that's called once the scan is performed. Should be called in the configuration stage
*   @params
*     callback - a callback function with result parameter
*
*
**/
Scanner.prototype.setCallback = function(callback) {
	if (mwb_debug_print) console.log('setCallback called');
	this.dflt_clb = callback;
}

Scanner.prototype.setIcon = function(/*iconURI, allowCrossOrigin*/) {
	
	if (mwbScanner.company_logo_set) return;
	
	if (mwb_debug_print) console.log('setIcon called');
	
	let argsCount = arguments.length;
	
	if (argsCount >= 1)
	{
		if (typeof arguments[0] == 'string') this.company_logo = arguments[0];
		
		if (argsCount == 2) {
			if (typeof arguments[1] == 'boolean')
			this.company_logo_allow_cross_origin = arguments[1];
		}
	}
	
	var allowCrossOrigin = this.company_logo_allow_cross_origin;
	
	var ImageScanner = {
		
		MWBgetDataFromImage: function (imageURI) {
			imageURI = ((typeof imageURI) == 'string') ? imageURI : '';
			
			if (imageURI === '') return; //simple

			var canvasFrame = document.createElement("canvas");

			var pad = 0;

			var imageOverlay = document.createElement("img");
			if (allowCrossOrigin) imageOverlay.crossOrigin = "anonymous";
			
			imageOverlay.onerror = function () {
				
				if (mwb_debug_print) console.log("icon image did not load");
				return;
			}
			
			imageOverlay.src = imageURI;

			imageOverlay.onload = function () {
				
				canvasFrame.width = imageOverlay.width + (pad * 2);
				canvasFrame.height = imageOverlay.height + (pad * 2);

				var ctx = canvasFrame.getContext('2d');//, { alpha: false });
				
				ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
				ctx.fillRect(0, 0, canvasFrame.width, canvasFrame.height);
				//ctx.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
				//ctx.globalAlpha = 0.0;

				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,
					pad, pad, imageOverlay.width, imageOverlay.height);

				var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);

				var data = imgData.data;
				var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
				
				var dataPtr = Module._malloc(nDataBytes);
				Module.HEAPU8.set(data, dataPtr);
				
				var _set_Icon = Module.cwrap('set_Icon', 'number', ['number', 'number', 'number']);
				
				var _rt = _set_Icon(dataPtr, canvasFrame.width, canvasFrame.height);
				
				Module._free(dataPtr);
				dataPtr = null;
				
				mwbScanner.company_logo_set = true;
			}
		}
	};
	
	try {
		//Scanner.defaults.company_logo
		var count = 0;
		//if (mwb_debug_print) console.log(count, mwbScanner.company_logo);
		
		ImageScanner.MWBgetDataFromImage(mwbScanner.company_logo);
		
	} catch (e) {
		if (mwb_debug_print) console.log('icon_e: ' + e);
	}
}

/**
* @name
*   loadSettings
* @params
*   settings - an array of settings objects with the following structure, use this to loadSettings
*     {"method" : "MWBmethod" , "value" : "array of params that the method expects"}
*     example:
*       [
*         {'method': 'MWBsetActiveCodes', 'value' : [cc.MWB_CODE_MASK_128]},
*         {'method': 'MWBsetFlags', 'value' : [cc.MWB_CODE_MASK_39, cc.MWB_CFG_CODE39_EXTENDED_MODE]},
*         {'method': 'MWBsetDirection', 'value' : [cc.MWB_SCANDIRECTION_VERTICAL | cc.MWB_SCANDIRECTION_HORIZONTAL]},
*         {'method': 'MWBsetScanningRect', 'value' : [cc.MWB_CODE_MASK_39, 20,20,60,60]},
*         {'method': 'MWBsetMinLength', 'value' : [cc.MWB_CODE_MASK_39, 4]},
*         {'method': 'MWBsetParam', 'value' : [cc.MWB_CODE_MASK_DM, cc.MWB_PAR_ID_RESULT_PREFIX, cc.MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS]},
*         {'method': 'MWBsetActiveParser', 'value' : [cc.MWP_PARSER_MASK_ISBT]}
*       ]
* @return
*   promise that resolves with the loaded settings
*
**/
Scanner.prototype.loadSettings = function(settings) {
	if (mwb_debug_print) console.log('loadSettings called!');
    var that = this;
    return new window.Promise(function(resolve, reject) {
        if(Array.isArray(settings)) {
			for (var i = settings.length - 1; i >= 0; i--) {
				var expression = settings[i];
				if (mwb_debug_print) console.log(expression);
				if (mwb_debug_print) console.log(expression.value);
				if(Array.isArray(expression.value)) //else report error
				BarcodeScanner[expression.method].apply(null, expression.value);
			}
        }
        resolve(settings);
    });
}

/**
*  @name getConstants
*  @description : exposes the contants of the scanner so we can use them when calling configuration functions
**/
Scanner.prototype.getConstants = function() {
	
	return CONSTANTS;
}

/**
*  @name getDeviceID
*  @description get the DeviceID that was generated for this device
*
**/
Scanner.prototype.getDeviceID = function() {
	
	return new window.Promise(function(resolve, reject) {
		BarcodeScanner.MWBgetDeviceID(function(result) {
			// if (mwb_debug_print) console.log(result);
			resolve(result);
		});
	});
}

/**
*  @name getCameras
*  @description get cameras for this device
*  @callback results
*	foundCameras.id - string hex value of the camera ID
*	foundCameras.label - string value of the camera label / description
**/
Scanner.prototype.getCameras = function() {
	
	return new window.Promise(function(resolve, reject) {
		const mwb_getCameraSelection = async () => {
		  const devices = await navigator.mediaDevices.enumerateDevices();
		  const videoDevices = devices.filter(device => device.kind === 'videoinput');
		  mwb_VDList = videoDevices.map(videoDevice => {
			return { id: videoDevice.deviceId, label: videoDevice.label };
		  });
		  resolve(mwb_VDList);
		};
		navigator.mediaDevices.enumerateDevices().then(mwb_getCameraSelection);
	});
}

/**
*  @name setCamera
*  @params
*  id *required
*  @description set camera to use for this device
*  Overrides the effect of the MWBuseFrontCamera setting.
**/
Scanner.prototype.setCamera = function(id) {
	if (typeof id == "string") mwb_VDSelection = id;
}

/**
@name scanImage
@params
imageUri *required
callback *optional will get replaced by a default callback if it's missing

@description scan an image from an URI

@callback results
* result.code - string representation of barcode result
* result.parsedCode - string json representation of parsed barcode result (if any)
* result.type - type of barcode detected or 'Cancel' if scanning is canceled
* result.bytes - bytes array of raw barcode result
* result.isGS1 - (boolean) barcode is GS1 compliant
* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
* result.imageWidth - Width of the scanned image
* result.imageHeight - Height of the scanned image

**/
Scanner.prototype.scanImage = function() {

	var args = Array.prototype.slice.call(arguments)
	,callback = this.dflt_clb
	,that = this
	,imageUri = args[0];


	if(args.length == 2)
	if(typeof args[1] === 'function') callback = args[1];

	BarcodeScanner.MWBscanImage(imageUri, callback);
}

/**
@name scanFrame
@params
imageData *required (ImageData or dataURL of an image)
callback *optional will get replaced by a default callback if it's missing

@description scan an image from an URI

@callback results
* result.code - string representation of barcode result
* result.parsedCode - string json representation of parsed barcode result (if any)
* result.type - type of barcode detected or 'Cancel' if scanning is canceled
* result.bytes - bytes array of raw barcode result
* result.isGS1 - (boolean) barcode is GS1 compliant
* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
* result.imageWidth - Width of the scanned image
* result.imageHeight - Height of the scanned image

**/
Scanner.prototype.scanFrame = function() {

	var args = Array.prototype.slice.call(arguments)
	,callback = this.dflt_clb
	,that = this
	,image_data = args[0]; //ImageData or dataURL
	
	var image_type = "";

	if(args.length == 2)
	if(typeof args[1] === 'function') callback = args[1];
	
	if(typeof args[0] === 'object') image_type = "ImageData";
	if(typeof args[0] === 'string') image_type = "dataURL";

	BarcodeScanner.MWBscanFrame(image_data, image_type, callback);
}

/**
*   @name startScanning
*   @description proxy method for starting the scanner with different params (in view/ fullscreen).
*	This should be called from outside, usually from an UI element that triggers a click/tap event
*
**/
Scanner.prototype.startScanning = function() {
	
	scannerConfig();
	if (MWBScanner.PAUSE_DECODING) BarcodeScanner.MWBtogglePauseResume(); //reset
	
	//expected number of args: 0, 1, 4, 5
	
	let argsCount = arguments.length;
	let callback;
	let x,y,w,h; //and also the args in a common runtime location
	
	let args_ok = true; //assume and test to disprove
	
	let partialView = false;
	if (mwb_debug_print) console.log('argsCount');
	if (mwb_debug_print) console.log(argsCount);
	if (argsCount < 4)
	{
		//fullScreen
		if (argsCount >= 1)
		if (typeof arguments[0] == 'function') callback = arguments[0]; else args_ok = false;
	
		partialView = false;
	}
	else
	{
		//partialView
		if (argsCount >= 5)
		{
			if (typeof arguments[0] == 'function') callback = arguments[0];  else args_ok = false;
			if (typeof arguments[1] == 'number') x = arguments[1]; else args_ok = false;
			if (typeof arguments[2] == 'number') y = arguments[2]; else args_ok = false;
			if (typeof arguments[3] == 'number') w = arguments[3]; else args_ok = false;
			if (typeof arguments[4] == 'number') h = arguments[4]; else args_ok = false;
		}
		else
		{
			if (typeof arguments[0] == 'number') x = arguments[0]; else args_ok = false;
			if (typeof arguments[1] == 'number') y = arguments[1]; else args_ok = false;
			if (typeof arguments[2] == 'number') w = arguments[2]; else args_ok = false;
			if (typeof arguments[3] == 'number') h = arguments[3]; else args_ok = false;
		}
		
		partialView = true;
	}
	
	if (args_ok)
	{
		//call with args
		
		if (partialView) MWBScanner.resizePreview(x,y,w,h);
		else MWBScanner.resizePreview(0, 0, 100, 100);
		
		MWBScanner.start(callback); //callback is safe-checked
	}
	else
	{
		//argless call (use defaults)
		if (mwb_debug_print) console.log("error: provided arguments for startScanning don't match the expected data types");
		
		//implement as you wanted - theres callback for start
		MWBScanner.start();
	}
	
};

/**
* @name closeScanner
* @description exposes the closeScanner native function, when called it closes the scanner window
**/
Scanner.prototype.closeScanner = function(){
	BarcodeScanner.MWBcloseScanner();
};

/**
* @name togglePauseResume
* @description exposes the togglePauseResume native function, when called it toggles pause/resume of scanning
**/
Scanner.prototype.togglePauseResume = function(){
	BarcodeScanner.MWBtogglePauseResume();
};

/**
* @name toggleFlash
* @description exposes the toggleFlash native function, when called it toggles the flash function of the camera
**/
Scanner.prototype.toggleFlash = function(){
	BarcodeScanner.MWBtoggleFlash();
};

/**
* @name toggleZoom
* @description exposes the toggleZoom native function, toggles the zoom
**/
Scanner.prototype.toggleZoom = function(){
	BarcodeScanner.MWBtoggleZoom();
};

/**
* @name resumeScanning
* @description exposes the resumeScanning native function, resumes scanning after it was paused
**/
Scanner.prototype.resumeScanning = function(){
	BarcodeScanner.MWBresumeScanning();
};

/**
* @name setScannerOverlayMode
* @description exposes the setScannerOverlayMode native function, see MWBsetOverlayMode for more
**/
Scanner.prototype.setScannerOverlayMode = function(overlayMode){
	BarcodeScanner.MWBsetOverlayMode(overlayMode);
};

/**
* @name setBlinkingLineVisible
* @description exposes the setBlinkingLineVisible native function
**/
Scanner.prototype.setBlinkingLineVisible = function(visible){
	BarcodeScanner.MWBsetBlinkingLineVisible(visible);
};

/**
* @name resizePartialScanner
* @description exposes the resizePartialScanner native function. It sets the size of the partial scanner
**/
Scanner.prototype.resizePartialScanner = function(x, y, width, height) {
	BarcodeScanner.MWBresizePartialScanner(x, y, width, height);
};

Scanner.prototype.CONSTANTS = CONSTANTS;
//var mwbScanner = new Scanner();

Scanner.prototype.generateMethod = function(methodPrefix, methodName){
	function new_method(){
		//var methodName = 'MWBsetActiveCodes'; //maybe keep a table of valid method names to avoid errors due to missed strings
		var argsCount = BarcodeScanner[methodName + "_arguments"].length;
		var jsonArgs = JSON.stringify(BarcodeScanner[methodName + "_arguments"]);
		if(arguments.length != argsCount) { if (mwb_debug_print) console.log('error: provided ' + arguments.length + ' argument(s) but function '+ methodName + '(' + jsonArgs + ') takes ' + argsCount + ' argument(s)'); return; }
		
		for (var arg = 0; arg < argsCount; arg++)
		{
			var argType = BarcodeScanner[methodName + "_arguments"][arg];
			if (typeof arguments[arg] !== argType) { if (mwb_debug_print) console.log('error: provided "' + typeof arguments[arg] + '" in arguments[' + arg + '] but function ' + methodName + '(' + jsonArgs + ') takes "' + argType + '"'); return; }
		}
		
		var cwrap_args_array = []; //every arg is a number regardless of the data type on the native side
		for (var arg = 0; arg < argsCount; arg++) { cwrap_args_array.push('number'); }
		
		var f = Module.cwrap(methodPrefix + methodName, 'number', cwrap_args_array);
		var RT = f.apply(null, arguments);
		
		if (RT < 0) //this only works for functions that return int (most do, but some- like scanFrame, don't)
		{
			var json_args = JSON.stringify(arguments);
			if (mwb_debug_print) console.log('error: function ' + methodName + ' returned ' + RT); return;
		}
		
		return RT; //maybe use mwb_debug_print above
	};
	
	return new_method;
}

const sound = new Audio("data:audio/wav;base64,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");
Scanner.prototype.beep = function() {
	sound.pause();
	sound.currentTime = 0;
	sound.play();
}

//2. MWBConfig_wa <<<<<<<<<<<>>>>>>>>>>>
/*
*	USAGE: INCLUDE WITH  <script type="text/javascript" src="js/MWBConfig_wa.js"></script> in your index.html
*/
/*var scannerConfig = function(){
	
	if(mwb_debug_print) console.log('scannerConfig called');
	if(mwb_debug_print) console.log(mwbScanner);
	
	//Add an event listener
	document.addEventListener("scannerModuleLoaded", function(e) {
		
		if (mwb_debug_print) console.log(e.detail); //Prints "Scanner is ready."
		
		//can use mwbScanner.* methods now
		
	});
	
	
	/**
	* result.code - string representation of barcode result
	* result.parsedCode - string json representation of parsed result (if any)
	* result.type - type of barcode detected or 'Cancel' if scanning is canceled
	* result.bytes - bytes array of raw barcode result
	* result.isGS1 - (boolean) barcode is GS1 compliant
	* result.location - contains rectangle points p1,p2,p3,p4 with the corresponding x,y
	* result.imageWidth - Width of the scanned image
	* result.imageHeight - Height of the scanned image
	*\/
	
	//Here we have a straight forward callback that just alerts the value.
	//This callback will be set as default and mwbScanner.startScanner can be called without inline callbacks
	//However users still have the option to not even use setCallback, and set a callback function directly passed as parameter to mwbScanner.startScanner
    mwbScanner.setCallback(
		function (result) {
		
			if (result.type == "Cancel") console.log("No Barcode.");
			else alert(result.type + '\n' + result.code);
		
			//mwbScanner.resumeScanning(); //if using !MWBcloseScannerOnDecode
		}
	);

    // Some predefined settings, comment out the ones you don't want enabled
    var mw_c = mwbScanner.getConstants(),
	settings = [
		{"method" : "MWBsetActiveCodes", "value" : [
			mw_c.MWB_CODE_MASK_QR | 
			mw_c.MWB_CODE_MASK_DM | 
			//mw_c.MWB_CODE_MASK_RSS | 
			//mw_c.MWB_CODE_MASK_39 | 
			mw_c.MWB_CODE_MASK_EANUPC | 
			//mw_c.MWB_CODE_MASK_128 | 
			mw_c.MWB_CODE_MASK_PDF | 
			//mw_c.MWB_CODE_MASK_AZTEC | 
			//mw_c.MWB_CODE_MASK_25 | 
			//mw_c.MWB_CODE_MASK_93 | 
			//mw_c.MWB_CODE_MASK_CODABAR | 
			//mw_c.MWB_CODE_MASK_DOTCODE | 
			//mw_c.MWB_CODE_MASK_11 | 
			//mw_c.MWB_CODE_MASK_MSI | 
			//mw_c.MWB_CODE_MASK_MAXICODE | 
			//mw_c.MWB_CODE_MASK_POSTAL |
			0x0 //for binary-OR syntax purposes
		]}
		//,{"method" : "MWBsetLevel", "value" : [2]} //3 will try to scan harder than the default which is 2
		,{"method" : "MWBsetActiveParser", "value" : [mw_c.MWP_PARSER_MASK_AAMVA]}
		//,{"method" : "MWBenableFlash", "value" : [true]}
		//,{"method" : "MWBenableZoom", "value" : [true]}
		//,{"method" : "MWBsetOverlayMode", "value" : [mw_c.OverlayModeImage]}
		//,{"method" : "MWBsetBlinkingLineVisible", "value" : [true]}
		//,{"method" : "MWBsetPauseMode", "value" : [mw_c.PM_STOP_BLINKING]}
		//,{"method" : "MWBusePartialScanner", "value" : [false]}
		//,{"method" : "MWBenableHiRes", "value" : [true]}
		//,{"method" : "MWBuseFrontCamera", "value" : [false]}
		//,{"method" : "MWBcloseScannerOnDecode", "value" : [false]}
		,{"method" : "MWBsetDecoderTimeout", "value" : [30]} //10-60
		,{"method" : "MWBsetDpsLimit", "value" : [2]} //1-30
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_25, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_39, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_93, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_128, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_AZTEC, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_DM, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_EANUPC, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_PDF, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_QR, 20, 2, 60, 96]} //for some reason decoding QR codes is harder when the code fills up the viewfinder
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_RSS, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_DOTCODE, 30, 20, 40, 60]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_11, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MSI, 2, 2, 96, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MAXICODE, 20, 2, 60, 96]}
		//,{"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_POSTAL, 2, 2, 96, 96]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_25, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_39, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_MSI, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 5]}
		//,{"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_11, 5]}
		//,{"method" : 'MWBsetDirection', "value" : [mw_c.MWB_SCANDIRECTION_VERTICAL | mw_c.MWB_SCANDIRECTION_HORIZONTAL]}
	];
		
	return mwbScanner.loadSettings(settings)
				.then(function(response){
					//if (mwb_debug_print) console.log(response); //the response is the settings array
				})
				.catch(function(reason){
					if (mwb_debug_print) console.log(reason)
				});
}*/

//3. sdk_modular <<<<<<<<<<<>>>>>>>>>>>
/*NOTE: some methods from native lib aren't made available - like enable/disable a particular symbology and getting settings, like active symbologies, etc.

Design Q: Keep startScanning(x,y,w,h) args interface, and result success callback user/default?

MAYBE .iniClear() -this was mainly used for mthreading(no such thing here)

1. get device/platform info
2. obtain current orientation from native js

5. focus() to div.click depending on how it works with mediaStream

6. how do/will flash/zoom references work?
7. proper resize and whatnot depending on device/platform (desk vs. phone)
MAYBE close button for iOS, and/or event handler for close/back for all platforms

Design Q: add DOMs before/after camera OK, and/or display none/invisible


API events:

-1- the Promise returned from getUserMedia, goes into .catch when:
	-camera is used by another app, with e: NavigatorUserMediaError {name: "TrackStartError", message: "", constraintName: ""}
	-camera use blocked, with e: NavigatorUserMediaError {name: "PermissionDeniedError", message: "", constraintName: ""}
	-no camera, with e: NavigatorUserMediaError {name: "DevicesNotFoundError", message: "", constraintName: ""}
	
-2- mediaStream.oninactive event is raised when you say 'pull out' the camera

*/


//1. dynamic DOM elements (preview, wrapper divs, overlay canvas, zoom/flash), that 1 const container

var mwb_debug_print = false;

var Dynamic_DOM_Elements = {
	
	previewFrame_Style: document.createElement('link'),
	previewFrame_Style_init: function () {
		/*this.previewFrame_Style.rel = "stylesheet";
		this.previewFrame_Style.type = "text/css";
		this.previewFrame_Style.href = "barcode-scanner-preview-style.css";
		
		document.head.appendChild(this.previewFrame_Style);*/
	},
	
	//create inner div container for the video element
	previewFrame: document.createElement('div'),
	previewFrame_init: function () {
		this.previewFrame.id = "root-div-inview";
		this.previewFrame.className = "barcode-scanner-wrap-inview";
	},
	
	proxyWrapPreview: document.createElement('div'), //might not be needed
	proxyWrapPreview_init: function () {
		this.proxyWrapPreview.className = "proxy-wrap-of-preview-inview";
		this.proxyWrapPreview.style.cssText = "width: 100%; height: 100%;";
	},
	
	preview: document.createElement('video'),
	preview_init: function (handler) {
		this.preview.id = "video-layer";
		this.preview.className = "barcode-scanner-preview-inview";
		/*this.preview.addEventListener('click', //function() {
			// focus(); //TO-DO //besides, won't MWOverlay that is, canvas be on top?
		//});
		handler
		);*/
	},
	
	//create canvas for Overlay
	overlay: document.createElement('canvas'),
	overlay_init: function () {
		this.overlay.id = "canvas-overlay";
		this.overlay.className = "shadow-overlay";
	},
	
	//create canvas for lines
	lineV: document.createElement('canvas'),
	lineV_init: function () {
		this.lineV.id = "canvas-line-v";
		this.lineV.className = "blinking-line";
	},
	
	lineH: document.createElement('canvas'),
	lineH_init: function () {
		this.lineH.id = "canvas-line-h";
		this.lineH.className = "blinking-line";
	},
	
	lines: { v: this.lineV, h: this.lineH }, //at this point, because its async op, lineV and lineH aren't set yet, and undefined is what will be copied
	
	lines_Style_init: function (overlayProperties) {
		//set lines style
		this.lineV.style.backgroundColor = this.lineH.style.backgroundColor = overlayProperties.lineColor;
		this.lineV.style.animation = this.lineH.style.animation = "fadeColor " + overlayProperties.blinkingRate + "ms infinite";
	},
	
	//maybe have a function to 'import' and 'export' all needed ref
	
	//create image buttons for flash
	flash: document.createElement('div'),
	flash_init: function (buttons, handler) {
		this.flash.id = "flash-button";
		
		var divImage = document.createElement('img');
		divImage.id = "flash-image";
		divImage.src = buttons.flash_icons[0];
		
		//if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideFlash) this.flash.style.display = "none";
		
		this.flash.appendChild(divImage);
		
		this.flash.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.flash.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.flash.style.cssFloat = "none";
	},
	
	//and zoom
	zoom: document.createElement('div'),
	zoom_init: function (buttons, handler) {
		this.zoom.id = "zoom-button";
		
		var divImage = document.createElement('img');
		divImage.id = "zoom-image";
		divImage.src = buttons.zoom_icons[0];
		
		// if not enabled hide the button as if it doesn't exist at all
		if (buttons.hideZoom) this.zoom.style.display = "none";
		
		this.zoom.appendChild(divImage);
		
		this.zoom.addEventListener('click', handler, false);
		
		// **style for position needs to be linked to canvasOverlay's position
		this.zoom.style.position = "fixed"; //absolute anchors it to page, fixed to screen
		this.zoom.style.cssFloat = "none";
	},
	
	disappearElements: function (onStart)
	{
		//until video is loaded
		this.overlay.style.display = "none"; //or style.visibility = "hidden";
		this.lineV.style.display = "none";
		this.lineH.style.display = "none";
		this.flash.style.display = "none";
		this.zoom.style.display = "none";
		
		//previewFrame handling for height 0 until 8ms on 2+ runs
		//this.previewFrame.style.display = "none";
		//if (typeof onStart == 'boolean' && onStart) setTimeout(function(){ Dynamic_DOM_Elements.previewFrame.style.display = "initial"; }, 32); //8 min | higher time seems to fix the height 0 bug and
		//the black preview 'flashing' before starting on 2+ runs, at least on Note5
		//LG is also ok, only lags when anchor is used, but still ok
		
		//lets try with hidden
		this.previewFrame.style.visibility = "hidden";
	},
	
	revealElements: function ()
	{
		//when video stream data is loaded AND preview-overlay calcs are done
		this.overlay.style.display = "initial"; //or style.visibility = "visible";
		this.lineV.style.display = "initial";
		this.lineH.style.display = "initial";
		this.flash.style.display = (JavaScript_mediaDevices_API.flash.supported) ? ((MW_properties.global.fullscreenButtons.hideFlash) ? "none" : "initial") : "none"; //HERE
		this.zoom.style.display = (JavaScript_mediaDevices_API.zoom.supported) ? ((MW_properties.global.fullscreenButtons.hideZoom) ? "none" : "initial") : "none";
		
		//HTC flash/zoom buttons something not there on first run Bug fix
		setTimeout(function () {
			
			if (Dynamic_DOM_Elements.flash.style.display == "none" ||
				Dynamic_DOM_Elements.zoom.style.display == "none")
			{
				let zoom = Dynamic_DOM_Elements.zoom;
				let canvasOverlay = Dynamic_DOM_Elements.overlay;
				
				Dynamic_DOM_Elements.flash.style.display = (JavaScript_mediaDevices_API.flash.supported) ? ((MW_properties.global.fullscreenButtons.hideFlash) ? "none" : "initial") : "none";
				Dynamic_DOM_Elements.zoom.style.display = (JavaScript_mediaDevices_API.zoom.supported) ? ((MW_properties.global.fullscreenButtons.hideZoom) ? "none" : "initial") : "none";
				
				zoom.style.left = ((canvasOverlay.offsetWidth + canvasOverlay.offsetLeft) - zoom.offsetWidth) + "px"; //crucial
			}
			
		}, 0);
		
		//seems to work fine, no height 0 bug either
		this.previewFrame.style.visibility = "visible";
	},
	
	previewFrameParent: null,
	
	addPreview: function (container) {
		[this.proxyWrapPreview].forEach(function (element) {
			Dynamic_DOM_Elements.previewFrame.appendChild(element); //this. has a different scope here
		});
		//Insert preview frame and controls into container if provided or into page
		var container_exists = (container != undefined && container != null && typeof container === 'object' && container.tagName === 'DIV'); //NOTE: should container be limited to div ?
		this.previewFrameParent = (container_exists) ? container : document.body; //can also use default container HERE
		
		this.previewFrameParent.appendChild(this.previewFrame); if (mwb_debug_print) { console.log(this.previewFrame); console.log('neposredno po add:'); console.log(this.previewFrame.offsetHeight); }
		this.previewFrameParent.appendChild(this.overlay);
		this.previewFrameParent.appendChild(this.lineV);
		this.previewFrameParent.appendChild(this.lineH);
		this.previewFrameParent.appendChild(this.flash);
		this.previewFrameParent.appendChild(this.zoom);
	},
	
	destroyPreview: async function (this_root, track) {
		
		//stop decoder
		MWBScanner.DECODER_ACTIVE = false;
		
		//rm decoder timeout timer
		if (JavaScript_mediaDevices_API.scanner_timeout != null)
		{
			clearTimeout(JavaScript_mediaDevices_API.scanner_timeout);
			JavaScript_mediaDevices_API.scanner_timeout = null;
		}
		
		//to prevent 'black blinks before T's are finalized' for next run
		this.disappearElements();
		
		//set the remaining 'execution heavy' tasks after some time (128ms)
		//giving a chance for the DOM changes to complete
		//also take that into account for the alert after in the calling function
		//AND, now in a timer the ctx of this changes, so use direct access
		setTimeout(function () {
			Dynamic_DOM_Elements.preview.play(); //calling this before track.stop() will 'clear' the last frame
			//that might be left from pause on result success (both on HTC and Note5)
			
			//while that fixes that on devices like HTC, it also makes closing the scanner / removing the preview much slower on devices like Note5 - actually, doesn't matter, seems Note5 does the slow removal anyways
			
			//on Note5 Firefox, it seems last frame is always stored, regardless of .play() above or
			//using .pause for result success
			
			//one more thing to try: delete object, create new preview
			
			//if (mwb_debug_print) console.log('this_root');
			//if (mwb_debug_print) console.log(this_root);
			//if (mwb_debug_print) console.log(track);
			//SO apparently leaving those args makes them accessable
			//but specifying them as args to f() of setTimeout makes them undefined
			
			//video.pause(); //lets hope this is the this we need, yes, it works, but camera is still not stopped and keeps dissipating heat CONFIRMED! camera is on and running, its just the preview thats no longer updated
			//we're gonna have to stop this in its tracks
			track.stop(); //should hold the local ref, yep it does
			this_root.videoTrack = null;
			this_root.mediaStream = null;
			
			//clear last frame from videoElement
			//Dynamic_DOM_Elements.preview.src = ""; // empty source
			//Dynamic_DOM_Elements.preview.load();
			//^that however messes with the clearing of the timeout for some reason
			
			//this is probably going to change into destroy preview, no sense to keep it without a stream
			//also:
			if (this_root.torchState) //and would have to be done on any close/stop/destroy
			{
				this_root.torchState = false;
				Dynamic_DOM_Elements.flash.getElementsByTagName("img")[0].src = MW_properties.global.fullscreenButtons.flash_icons[0];
			}
			
			//remove event listeners:
			
			window.removeEventListener('resize', MW_methods.eventHandlers.resize, false);
			
			if (MW_methods.helpers._Screen_Orientation === 'undefined')
			{
				//
				window.removeEventListener('resize', MW_methods.helpers.orientationChangeHandler, false); //same handler - checks inside, for now
			}
			else
			{
				screen.orientation.removeEventListener('change', MW_methods.helpers.orientationChangeHandler);
			}
			
			//NOTE: flash and zoom use already_inited
			//so the EL is added once
			//no need to remove it
			
			Dynamic_DOM_Elements.preview.removeEventListener('loadeddata', this_root.videoStreamData_handler_wrapper); //crucial
			
			var this_root_2 = Dynamic_DOM_Elements;
				
			//remove added elements
			this_root_2.previewFrameParent.removeChild(this_root_2.zoom);
			this_root_2.previewFrameParent.removeChild(this_root_2.flash);
			this_root_2.previewFrameParent.removeChild(this_root_2.lineH);
			this_root_2.previewFrameParent.removeChild(this_root_2.lineV);
			this_root_2.previewFrameParent.removeChild(this_root_2.overlay);
			this_root_2.previewFrameParent.removeChild(this_root_2.previewFrame); //if (mwb_debug_print) { console.log(this.previewFrame); console.log('neposredno po remove:'); console.log(this.previewFrame.offsetHeight); }
			
		}, 128);
	},
	already_inited: false,
	main_createPreview: function (MW_properties, MW_methods) {
		//
		if (mwb_debug_print) console.log('createPreview ');
		
		if (!this.already_inited) {
			this.previewFrame_Style_init();
			this.previewFrame_init();			
		}
		
		var partialView = MW_properties.global.partialView;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		MW_methods.anchorView_toOrientation(this.previewFrame, partialView.x, partialView.y, partialView.width, partialView.height, partialView.orientation, viewfinderOnScreenView.orientation);
		
		if (!this.already_inited) {
			this.proxyWrapPreview_init(); //might not be needed
			this.preview_init(function(){}); //needs a handler for focus on click OR nah? Maybe propagate thru canvas-overlay, or let continuous handle it?
			
			this.overlay_init();
			
			this.proxyWrapPreview.appendChild(this.preview); //might not be needed
			
			var mwBlinkingLines = MW_properties.global.blinkingLines;
			
			this.lineV_init();
			this.lineH_init();
			
			//obtain a ref
			mwBlinkingLines.v = this.lineV;
			mwBlinkingLines.h = this.lineH;
			
			var mwOverlayProperties = MW_properties.global.overlay;
			
			this.lines_Style_init(mwOverlayProperties); //might need to be exec more that once on start if different MW_overlay modes are used
			
			//scanningRects, union - here or? -taken care of in separate f() called before 'start scanning'
			
			var fullscreenButtons = MW_properties.global.fullscreenButtons;
			//^ add from ln 650 ..done.
			
			this.flash_init(fullscreenButtons, JavaScript_mediaDevices_API.flashToggler); //clickedFlash
			this.zoom_init(fullscreenButtons, JavaScript_mediaDevices_API.zoomLooper); //clickedZoom
			
			this.already_inited = true;
		}
		
		//MAYBE TO-DO:
		//close button might be needed for iOS
		//obtain window.navigator.platform (and/or other properties)
		//event-listener-handle-rs for (close), pause, resume - maybe w/ flag
		
		
		this.disappearElements(true); //same as no MWOverlay
		this.addPreview(MW_properties.global.container);
	}
};

//add-on to 2. APIs
var mwb_VDList;
var mwb_VDSelection = '';

//2. APIs: mesiaStream obj, zoom/flash capabilities settings, navigator.* , orientation/back events info, 
//	[anything else emscripten or nativeJS and/or Mozilla api HERE]
var JavaScript_mediaDevices_API = {
	//
	supported: false,
	browser_supported_constraints: null,
	runtime_settings_videoTrack: null,
	hardware_capabilities_ranges_videoTrack: null,
	
	_ImageCapture: (typeof ImageCapture === 'undefined') ? 'undefined' : ImageCapture,
	imageCapture: null,
	get_videoTrack_capabilities_timeout: 200,
	
	mediaStream: null,
	videoTrack: null,
	
	frameWidth: { min: 640, ideal: 1280, max: 1920 },
	frameHeight: { min: 480, ideal: 720, max: 1080 },
	
	frontCamera: false,
	
	constraints: {
		video: {
			width: null,//this.frameWidth,
			height: null,//this.frameHeight,
			frameRate: 30,
			facingMode: '',//(this.frontCamera) ? 'user' : 'environment',
			focusMode: 'continuous'
		}
	},
	
	constraints_init: function (width, height, useFrontCamera) {
		
		//this function can be called without args which will set the defaults
		if (typeof width === 'number') this.frameWidth.ideal = width;
		if (typeof height === 'number') this.frameHeight.ideal = height;
		if (typeof useFrontCamera === 'boolean') this.frontCamera = useFrontCamera;
		
		this.constraints.video.width = this.frameWidth;
		this.constraints.video.height = this.frameHeight;
		if (mwb_VDSelection === '')
		this.constraints.video.facingMode = (this.frontCamera) ? 'user' : 'environment';
		else
		this.constraints.video.deviceId = { exact: mwb_VDSelection };
		
		//maybe set to MW_properties here (and maybe keep caps object there)
		MW_properties.global.hardwareCameraResolution.width = this.frameWidth.ideal;
		MW_properties.global.hardwareCameraResolution.height = this.frameHeight.ideal;
		
		if (mwb_debug_print) {
			console.log('constraints:');
			console.log(this.constraints);
		}
	},
	
	flash: { supported: false, ready: false },
	zoom: { supported: false, ready: false },
	
	torchState: false,
	zoomLevels: [],
	zoomLevel: 0,
	
	imageCapture_options: {
		fillLightMode: (true/*this.torchState*/) ? 'flash' : 'off' //doesn't make a difference at this time | Tho is might with proper context? (and re-set)
		//focusMode: 'continuous'
	},
	
	flashToggler: function (use_toggle) {
		//because this is added as a handler to flash (DOM element) click
		//the context of this is different, i.e. the flash div
		let flash_state = JavaScript_mediaDevices_API.flash; //by ref
		let torchState = JavaScript_mediaDevices_API.torchState; //by value!
		let imageCapture = JavaScript_mediaDevices_API.imageCapture; //by ref
		let imageCapture_options = JavaScript_mediaDevices_API.imageCapture_options; //by ref
		let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
		
		if (mwb_debug_print && flash_state.supported) console.log('Torch is supported.');
		if (mwb_debug_print) console.log('the way it works is: lets find out');
		if (mwb_debug_print) console.log('the way it works is: ' + flash_state.supported + " and " + flash_state.ready);
		if (!flash_state.supported || !flash_state.ready) return;
		if (use_toggle) torchState = !torchState;
		if (mwb_debug_print) console.log('the way torch is: ' + torchState);
		
		try {
			//(re)setOptions is enough to turn the torch off	
			imageCapture.setOptions(imageCapture_options).then(() => {
				videoTrack.applyConstraints({
					advanced: [{torch: torchState}] //this set to true is a must to turn it on
					}); //but flash isn't turned off, only on LG
			});
		} catch (e) { if (mwb_debug_print) { console.log('imageCapture.setOptions is NOT supported'); console.log(e); }
		
			//instead try the one-way ON
			if (JavaScript_mediaDevices_API.browser_supported_constraints.torch) {
				videoTrack.applyConstraints({
					advanced: [{torch: torchState}]
				})
				.catch(e => console.log(e));
			}
		};
		
		Dynamic_DOM_Elements.flash.getElementsByTagName("img")[0].src = MW_properties.global.fullscreenButtons.flash_icons[Number(torchState)];
		JavaScript_mediaDevices_API.torchState = torchState;
	},
	
	zoomLooper: function ()
	{
		let zoom_state = JavaScript_mediaDevices_API.zoom; //by ref
		let zoomLevel = JavaScript_mediaDevices_API.zoomLevel; //by value!
		let zoomLevels = JavaScript_mediaDevices_API.zoomLevels; //by ref
		let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
		
		if (mwb_debug_print && zoom_state.supported) console.log('Zoom is supported.');
		
		if (!zoom_state.supported || !zoom_state.ready) return;
		zoomLevel++; zoomLevel %= 3;
		videoTrack.applyConstraints({ advanced: [{zoom: zoomLevels[zoomLevel]}] });
		
		if (mwb_debug_print) console.log('req zoomLevel: ' + zoomLevels[zoomLevel]);
		setTimeout(function(){
		if (mwb_debug_print) console.log('new zoomLevel: ' + videoTrack.getSettings().zoom);
		//Note5 and LG: [1, 2.45, 3.9], and then 1, 1, 1 on clicks but zooms fine, so it seems the report doesn't work, otherwise it's fine
		//HTC: [100, 245, 390], and then 100, 240, 390 might not report always correctly but thats just console/js lag (y), otherwise zooms fine
		}, 128);
		
		JavaScript_mediaDevices_API.zoomLevel = zoomLevel;
	},
	
	//simple error handling code; handleError() is called to handle promises which fail (.catch)
	handleError: function (reason) { 
		if (mwb_debug_print) console.log("Error " + reason.name + " in constraint " + reason.constraint + ": " + reason.message);
		
		if ((typeof MWBScanner.result_callback) == 'function')
		MWBScanner.result_callback(
			MW_methods.helpers.otherResult(
				MW_properties.runtime.errorDescriptions[reason.name].userFriendly, //code
				MW_properties.runtime.errorDescriptions[reason.name], //errorDescriptions
				"Error" //type
			)
		);
	},
	
	scanner_timeout: null,
	videoStreamData_handler_wrapper: null,
	
	init_values: function (video, videoStreamData_handler, inactiveStream_handler) {
		//
		MW_methods.helpers.CreateErrorDescriptions();
		//
		this.supported = (typeof navigator.mediaDevices === 'object' && typeof navigator.mediaDevices.getUserMedia === 'function') ? true : false;
		
		if (!this.supported) {
			if (location.protocol == "http:") JavaScript_mediaDevices_API.handleError({name: "ProtocolError"});
			return 'undefined';
		}
		
		this.browser_supported_constraints = navigator.mediaDevices.getSupportedConstraints();
		
		if (mwb_debug_print) {
			
			console.log('capabilities / browser_supported_constraints:');
			console.log(this.browser_supported_constraints); //might be needed for conditional code in different browsers
			//what if no camera for example?
		}
		
		//set objects to nested objects in constraints
		this.constraints_init();
		
		//you need capabilities.zoom.constructor.name MediaSettingsRange and .torch | if not there if will be 'undefined'
		navigator.mediaDevices.getUserMedia(this.constraints)
		.then(function (stream) {
			
			let this_root = JavaScript_mediaDevices_API; //different scope of this
			
			this_root.mediaStream = stream;
			stream.oninactive = function () {				
				if (typeof inactiveStream_handler === 'function') inactiveStream_handler();
			};			
			
			const track = stream.getVideoTracks()[0];
			this_root.videoTrack = track;
						
			this_root.runtime_settings_videoTrack = track.getSettings();
			
			if (mwb_debug_print) {
				
				console.log('VT capabilities / runtime_settings_videoTrack:');
				console.log(this_root.runtime_settings_videoTrack); //might be needed for conditional code in different browsers
			}
			
			//actual available camera resolution might be different from requested ideal
			if ((typeof this_root.runtime_settings_videoTrack.width === 'undefined') || (typeof this_root.runtime_settings_videoTrack.height === 'undefined'))
			{
				throw "Properties width and height in VT capabilities aren't available!";
			}
			else
			{
				if (mwb_debug_print) console.log('HERE WH ' + this_root.runtime_settings_videoTrack.width + " " + this_root.runtime_settings_videoTrack.height);
				MW_properties.global.hardwareCameraResolution.width = this_root.runtime_settings_videoTrack.width;
				MW_properties.global.hardwareCameraResolution.height = this_root.runtime_settings_videoTrack.height;
			}
			
			//videoTrack capabilities depends on ImageCapture promise or timeout
			function capabilitiesDependentCode() {
				//if (mwb_debug_print) console.log(track);
				
				let capabilities_Indicator = null;
				let ranges_exist = false;
				
				try {
					const videoCapabilities = track.getCapabilities(); //Firefox doesn't support this method
					capabilities_Indicator = this_root.hardware_capabilities_ranges_videoTrack = videoCapabilities;
					ranges_exist = true;
					
				} catch (e) { if (mwb_debug_print) { console.log('track.getCapabilities not supported'); console.log(e); }
					
					//use this.browser_supported_constraints instead
					capabilities_Indicator = this_root.browser_supported_constraints;
					//Firefox doesn't support torch and zoom anyways
				}
				
				if (capabilities_Indicator.torch) this_root.flash.supported = true;
				
				else { if (mwb_debug_print) console.log('Torch is NOT supported.'); Dynamic_DOM_Elements.flash.style.display = "none"; }
				
				if (capabilities_Indicator.zoom) this_root.zoom.supported = true;
				else { if (mwb_debug_print) console.log('Zoom is NOT supported.'); Dynamic_DOM_Elements.zoom.style.display = "none"; return; } //display of flash and zoom is also handled by revealElements
				
				if (ranges_exist)
				{
					const min = capabilities_Indicator.zoom.min;
					const max = capabilities_Indicator.zoom.max;
					const step = capabilities_Indicator.zoom.step;
					
					//ranges might use different scale on different devices
					const number_of_digits = MW_methods.helpers.get_number_of_Digits(max);
					
					const _max = max - Math.pow(10, (number_of_digits - 2)); //this substracts 1% from max (needed because values are stepped and max might be ignored like out-of-range value)
					const mid = min + ((_max - min) / 2);
					
					this_root.zoomLevels = [min, mid, _max]; //would this work?
					if (mwb_debug_print) console.log('this_root.zoomLevels');
					if (mwb_debug_print) console.log(this_root.zoomLevels);
					if (mwb_debug_print) console.log('step: ' + step);
				}
				else
					this_root.zoomLevels = [100, 250-8, 400-16]; //extrapolated defaults
				
				//this_root.zoomLevel = 0; //reset to 100% (no zoom)
				
				this_root.flash.ready = true; //test in ffox
				this_root.zoom.ready = true; //test in ffox

				//apply config-selected zoomLevel
				let zoom_state = JavaScript_mediaDevices_API.zoom; //by ref
				let zoomLevel = JavaScript_mediaDevices_API.zoomLevel; //by value!
				let zoomLevels = JavaScript_mediaDevices_API.zoomLevels; //by ref
				let videoTrack = JavaScript_mediaDevices_API.videoTrack; //by ref
				
				if (mwb_debug_print && zoom_state.supported) console.log('Zoom is supported.');
				
				if (!zoom_state.supported || !zoom_state.ready) return;
				videoTrack.applyConstraints({ advanced: [{zoom: zoomLevels[zoomLevel]}] });
			}
			
			if (JavaScript_mediaDevices_API._ImageCapture === 'undefined') //this_root or leave it be
			{
				if (mwb_debug_print) console.log('there is no ImageCapture api');
				setTimeout(function () {
					capabilitiesDependentCode();
				}, this_root.get_videoTrack_capabilities_timeout);
			}
			else
			{
				//Create image capture object and get camera capabilities
				const imageCapture = new JavaScript_mediaDevices_API._ImageCapture(track);
				this_root.imageCapture = imageCapture;
				const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {
					//
					//check if camera has a torch
					capabilitiesDependentCode();
					
					if (!JavaScript_mediaDevices_API.flash.supported) return; //test return - also this. scope?
					else JavaScript_mediaDevices_API.flash.ready = true;
				});
			}
			
			if (typeof videoStreamData_handler === 'function')
			{
				this_root.videoStreamData_handler_wrapper = function () { videoStreamData_handler(this_root.mediaStream); };
				video.addEventListener('loadeddata', this_root.videoStreamData_handler_wrapper);
			}
			
			video.srcObject = this_root.mediaStream;			
			video.onloadedmetadata = function (e) { //also make the proxy wrapper visible
			if (mwb_debug_print) console.log('onloadedmetadata, calling play'); //seems this event come later than
				
				if (mwb_debug_print) console.log('video muted: ');
				if (mwb_debug_print) console.log(this.muted);
				this.muted = true;
				if (mwb_debug_print) console.log(this.muted);
				if (mwb_debug_print) console.log('calling play again 1');
				this.play()
				.catch(function(e) {
					//JavaScript_mediaDevices_API.handleError(e); //scope
					
					//setTimeout(function() {
					//	Dynamic_DOM_Elements.disappearElements(true); //arg doesn't matter now
					//	//but revealElements is probs called which negates these effects, so
					//}, 32);
					//video.setAttribute('webkit-playsinline', 'webkit-playsinline');
					video.setAttribute('playsinline', 'playsinline');
					if (mwb_debug_print) console.log('calling play again 2');
					
					//doesn't work for Safari
					//setTimeout(function() {
					//	if (mwb_debug_print) console.log('calling play again 3');
					//	video.play();
					//}, 50);
					
					MW_methods.helpers.safari_video_click_workaround(video);
				});
				
				this_root.flashToggler(false);
				
				if (MWBScanner.decoder_timeout != 0)
				JavaScript_mediaDevices_API.scanner_timeout = setTimeout(async function () {
					
					//if (!MWBScanner.DECODER_ACTIVE) return; //we'll see
					
					MWBScanner.DECODER_ACTIVE = false;
					JavaScript_mediaDevices_API.scanner_timeout = null;
					
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
					await wait(100); //waiting for last frame to finish decoding, tho it really shouldn't matter, and can be handled in another way
					MWBScanner.destroyPreview(); //not truly awaitable at this point
					//await wait(1000);
					//await wait(1000);
					
					//no need for above arbitrary max wait, but at least 128 for destroyPreview to finalize and another 100 of leeway
					await wait(128);
					await wait(100);
					alert('Scanner timeout');
				}, MWBScanner.decoder_timeout * 1000); //also link this with the setting minTimeout for frames and interval decoding //that should also be tied with fps from caps of this track | 10 *
			};
		})
		.catch(function(e) {
			JavaScript_mediaDevices_API.handleError(e); //scope
		});
	},
	
	//check if after putting the app in suspension still
	//works-uses the camera on mobile - android and rest
	//timeout would be nice
	
};

//3. SDK-related setting and features, partial view calculations, MWOverlay logic,
//	changes in DOM elements AND SDK-settings on C++ (scanRects), resize calculations,
//	event handlers, maybe back/close handling
const MW_assetsPath = "./assets/"; //added './' prefix for webpack
var MW_properties = {
	
	global: {
		partialView: //{ x: 0, y: 0, width: 100, height: 100, orientation: 0 }, //is orientation used here? -that only serves for that 'anchor' FEATURE
		{ x: 5, y: 5, width: 90, height: 54.73, orientation: 0 },
		//{ x: 25, y: 15, width: 50, height: 94.73/1.5, orientation: 0 },
		//{ x: 15, y: 15, width: 70/2, height: 94.73/2, orientation: 0 }
		//{ x: 20, y: 40, width: 64, height: 48, orientation: 0 }
		//it can be just ref, or specific props- but you'd still need to set them thru ref //1920 x 974 = 0.333 x 0.493 | 90, 54.73 | 33.33, 49.29
		blinkingLines: { v: null, h: null }, //MWOverlay DOM elements ref //final
		overlay: { 
			mode: 1, 
			pauseMode: 2, //1
			lineColor: "rgba(255, 0, 0, 1.0)", 
			locationColor: "rgba(0, 255, 0, 1.0)", 
			borderWidth: 2, 
			linesWidth: 1, 
			blinkingRate: 500, 
			locationShowTime: 200 + 300, //Safari actually shows the frame with more time - actually no, even with 500ms the glitch after show happens in Landscape
			locationAllPointsDraw: true, 
			imageSrc: MW_assetsPath + "overlay_mw.png" 
		}, //partial const
		fullscreenButtons: {
			flash: null,	   
			zoom: null,
			flash_icons: [MW_assetsPath + "flashbuttonoff.png", MW_assetsPath + "flashbuttonon.png"],
			zoom_icons:  [MW_assetsPath + "zoom.png"],
			hideFlash: false,
			hideZoom: false
		}, //partial const
		hideDuringUpdate: false, //(mostly) const
		hardwareCameraResolution: { width: 1280, height: 720 }, //ini
		//hardwareCameraResolution: { width: 640, height: 480 },
		numberOfSupporedCodes: 16, //const
		codeMasksArray: [], //const-final
		untouchedScanningRectsArray: [], //const-final
		//DOM_complete: false, //needed?
		//anyScannerStarted: false, //needed?
		video: null, //final
		container: null //final
	},
	
	runtime: {
		viewfinderOnScreenView: { orientation: 0, x: 0, y: 0, width: 0, height: 0 }, //only one that needs to be updated during orientation change
		untouchedScanningRectsUnion: { x: 0, y: 0, width: 100, height: 100 }, //get THIS / init from SDK
		is_portrait: false,
		operatingSystem: '', //final
		firstTimeUpdate: false,
		currentOrientation: 0, //landscape, portrait, landscapeFlipped
		errorDescriptions: {}
	},
	
	//note: initial_value for all settings are api configurable
	//also, runtime_value is set from initial_value and then gets changed
	//adapters should change gui states and also adapt gui values to expected method
	//values and vice-versa
	//requires type of control n data (int/[int]/bool/[bool], arr w/ len) value
	//n data type of method/arg, i.e. always [arg]
	
	gui2api_adapter: function () {
		//
		//all it does is convert one data type to another adequate one
		//can use the *.gui_*.cam*.*_value and their typeof to determine what 2 what
		//also can hold there gui_values and api_value(S), as in
		//copy the ones you use to init the gui s with generate
		
		//FIRST OF ALL CHANGE THE SCRIPTS TO POINT TO wa_dev		//done
		//same for bookmarks on phones 		THIS needs doing
		//in fact, do it now ..done
	},
	
	gui_accessible: {
		//
		cameraResolution: {
			values: [[640, 480], [1280, 720], [1920, 1080]],
			default_value: true, //gui toggle state i.e. 720
			initial_value: true,
			runtime_value: true
		},
		
		frontCamera: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		multipleBarcodes: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		activeCode: {
			values: null, //2^i
			default_value: 1, //Select barcode: on 0
			initial_value: 1,
			runtime_value: 1
		},
		
		activeCodes: {
			values: null, //binary OR union of 2^i
			default_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false],
			//115 //contains QR | DM | EAN/UPC | CODE128 | PDF
			initial_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false],
			runtime_value: [true, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false]
		},
		
		effortLevel: {
			values: [1, 2], //not actually used (bool to number + 1 logic applied)
			default_value: true, //gui toggle => 2
			initial_value: 2, //needs adapter | 2-5 mapped to toggle on
			runtime_value: 2
			//gui2api
			//api2gui adapter
			//changes when/on:
		},
		
		partialView: { // !fullScreen
			values: [false, true],
			default_value: true,
			initial_value: true,
			runtime_value: true
		},
		
		partialView_XYWH: {
			values: null, //0-100 for each
			default_value: [5, 5, 90, 50],
			initial_value: [5, 5, 90, 50],
			runtime_value: [5, 5, 90, 50]
		},
		
		partialView_Anchor: {
			values: null, //0-3
			default_value: 1 //selects must have 0 reserved | select_AnchorView_handler does -= 1
			
			//NO NEED?
		},
		
		continuous: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		},
		
		parser: {
			values: [0x0, 0xFF], //again, not actually used (same values used tho)
			default_value: true, //gui toggle state i.e. 0xFF
			initial_value: true,
			runtime_value: true
		},
		
		timeout: {
			values: null, //10-60
			default_value: [30],
			initial_value: [30],
			runtime_value: [30]
		},
		
		dps: {
			values: null, //1-30 (fps max)
			default_value: [2], //20
			initial_value: [2],
			runtime_value: [2]
		},		
		
		pause: {
			values: [false, true],
			default_value: false,
			initial_value: false,
			runtime_value: false
		}		
	}
};

var MW_methods = {
	
	/**
	 * Processes preview behaviour.
	 * FEATURE: can transform based on anchor_to
	 * Generic method.
	 */
	anchorView_toOrientation: function (view, x1, y1, w1, h1, anchor_to, current_orientation) {

		if (anchor_to < 0 || anchor_to > 3 || current_orientation < 0 || current_orientation > 2) return;

		if (anchor_to == 0) //anchor_free: percentages are applied "as is" | behaviour: preview transforms dynamically for different orientations
		{
			view.style.cssText = "left: " + x1 + "%; top: " + y1 + "%; width: " + w1 + "%; height: " + h1 + "%;";
		}
		else //anchor_to_orientation: percentages are applied wrt. orientation | behaviour: preview stays fixed/immutable wrt. orientation
		{
			//[anchor_to] x [current_orientation]
			var anchoringProperties = [
				//landscape                                 portrait                                landscape flipped
				[{ x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], // landscape
				[{ x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }], // portrait
				[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  // landscape flipped
			];
			anchor_to--;
			view.style.cssText =	"left: " + anchoringProperties[anchor_to][current_orientation].x +
									"%; top: " + anchoringProperties[anchor_to][current_orientation].y +
									"%; width: " + anchoringProperties[anchor_to][current_orientation].width +
									"%; height: " + anchoringProperties[anchor_to][current_orientation].height + "%;";
		}
	},
	
	/**
	 * Transforms the viewfinder to reflect scanning area in decoder.
	 */
	rotateAny_toOrientation: function (scanningRect1, to_orientation) {
		
		if (to_orientation < 0 || to_orientation > 2) return;

		var x1 = scanningRect1.x;
		var y1 = scanningRect1.y;
		var w1 = scanningRect1.width;
		var h1 = scanningRect1.height;

		var from_orientation = MW_properties.runtime.viewfinderOnScreenView.orientation; //it was always from landscape (decoder) until now
		
		//[to_orientation] x [from_orientation] //transpose it if you want [from][to]
		/*var orientationRotation = [
			//landscape                                 portrait                                landscape flipped
			[{ x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], //landscape
			[{ x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }], //portrait
			[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  //landscape flipped
		];*/

		var orientationRotationT = [
			//landscape                                 portrait                                landscape flipped
			[{ x: x1, y: y1, width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }, { x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }], //landscape
			[{ x: (100 - y1 - h1), y: x1, width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }, { x: y1, y: (100 - x1 - w1), width: h1, height: w1 }], //portrait
			[{ x: (100 - x1 - w1), y: (100 - y1 - h1), width: w1, height: h1 }, { x: (100 - y1 - h1), y: (100 - x1 - w1), width: h1, height: w1 }, { x: x1, y: y1, width: w1, height: h1 }]  //landscape flipped
		];

		return orientationRotationT[from_orientation][to_orientation];
	},

	/**
	 * Transforms the viewfinder to reflect scanning area in decoder 2.
	 */
	scaleFull_toPartial: function (scanningRect1, partialScale, scaleHeight) {
		
		if (partialScale < 0.01 || partialScale > 1.0 || scaleHeight < 0 || scaleHeight > 1) return;

		var x1 = scanningRect1.x;
		var y1 = scanningRect1.y;
		var w1 = scanningRect1.width;
		var h1 = scanningRect1.height;

		var cropScaleP = (1 - partialScale) * 100; //on [0,100) scale
		//[scaleDirection]
		var scale_and_center = [
			//scale down and translate to justified position
			{ x: ((cropScaleP / 2) + (x1 * partialScale)), y: y1, width: (w1 * partialScale), height: h1 }, //scaleWidth
			{ x: x1, y: ((cropScaleP / 2) + (y1 * partialScale)), width: w1, height: (h1 * partialScale) }  //scaleHeight
		];

		return scale_and_center[scaleHeight];
	},
	
	//^ these look nice
	
	/**
	 * Calculates the scanningRects for all codes and sets them in the SDK.
	 */
	calcScanningRect: function (is_portrait, _isDivArHigher, _croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView)
	{
		if (mwb_debug_print) console.log('calcScanningRect(' + is_portrait + ' ' + _isDivArHigher + ' ' + _croppedCameraAreaScale + ') ');

		var viewfinderAreaScale = (1 - _croppedCameraAreaScale);
		
		var widthIndex = 0;
		var heightIndex = 1;
		
		//since w3/mozilla were considerate enough to design an API that results in getting each
		//frame exaclty in the orientation its preview-ed in (unlike landscape only)
		//that messes with the calcs in scaleFull_toPartial, so this small but crucial extra step is needed:
		if (is_portrait)
		{
			widthIndex = 1;
			heightIndex = 0;
		}
		
		var codeMasksArray = MW_properties.global.codeMasksArray; //global (not arg) access like the rest
			//if (mwb_debug_print) console.log('masks');
			//if (mwb_debug_print) console.log(codeMasksArray);
		
		// determine if cutting is done by width or height
		if ((!is_portrait && _isDivArHigher) || (is_portrait && !_isDivArHigher))
		{
			// it's done by height, rare                
			var codeMask, 
				scanningRectTM;

			var i = 0;
			for (; i < numberOfSupporedCodes; i++) {
				// copy needed primitive types BY VALUE | these functions create new structures and assign primitive types by value | no ref here
				scanningRectTM = this.rotateAny_toOrientation(untouchedScanningRectsArray[i], viewfinderOnScreenView.orientation);
				scanningRectTM = this.scaleFull_toPartial(scanningRectTM, viewfinderAreaScale, heightIndex);
				
				//OK, so here, finish with this and the MAIN FLOW of execution, and then see what happens with
				//scanRects vs. the simplest way do to what you need with C++
				
				// set in decoder
				codeMask = codeMasksArray[i];
				//if (mwb_debug_print) console.log(scanningRectTM);
				//HERE - commented out the call to set for test purposes
				BarcodeScanner.MWBsetScanningRect(codeMask, scanningRectTM.x, scanningRectTM.y, scanningRectTM.width, scanningRectTM.height);
			}
		}
		else
		{
			// it's by width, most common
			var codeMask,
				scanningRectTM;

			var i = 0;
			for (; i < numberOfSupporedCodes; i++) {
				
				// copy needed primitive types BY VALUE | these functions create new structures and assign primitive types by value | no ref here
				scanningRectTM = this.rotateAny_toOrientation(untouchedScanningRectsArray[i], viewfinderOnScreenView.orientation);
				scanningRectTM = this.scaleFull_toPartial(scanningRectTM, viewfinderAreaScale, widthIndex);
				
				//HERE undefined .x => because DOM lags, previewFrame is 0, so viewfinderAreaScale is 0, and
				//scaleFull_toPartial checks 0.01 - 1, and just returns, which is undefined for scanningRectTM
				//sol: place resize in setTimeout(0) ?

				// set in decoder
				codeMask = codeMasksArray[i];
				//if (mwb_debug_print) console.log(scanningRectTM);
				//HERE - commented out the call to set for test purposes
				BarcodeScanner.MWBsetScanningRect(codeMask, scanningRectTM.x, scanningRectTM.y, scanningRectTM.width, scanningRectTM.height);
			}
		}
		
		if (true && mwb_debug_print) {
			//get viewfinder			
			var viewfnderUnionRect = BarcodeScanner.MWBgetScanningRect(0); //wait, shouldn't there be an actual call (not just once on start) for changes for this function?
			//cuz this is debug, and optional - not code dependent
			//either missed something when re-using, or no need cuz SR% are wrt. MW_overlay on screen
			//hmmm..
			
			//anyways, lets try without this part-block
			//if (mwb_debug_print) console.log('praame li nesto');
			//if (mwb_debug_print) console.log(viewfnderUnionRect);
			viewfnderUnionRect = JSON.parse(viewfnderUnionRect);
			if (mwb_debug_print) console.log('viewfinderUnion after TM ' + viewfnderUnionRect.x + ' ' + viewfnderUnionRect.y + ' ' + viewfnderUnionRect.width + ' ' + viewfnderUnionRect.height + ' ');
		}
	},
	
	/**
	 * Calculates overlay coordinates for canvas and calls calcScanningRect.
	 */
	calcPreview: function (is_portrait, hardwareCameraResolution, preview, MW_properties, Dynamic_DOM_Elements) {
		
		//obtain args
		var numberOfSupporedCodes = MW_properties.global.numberOfSupporedCodes;
		var untouchedScanningRectsArray = MW_properties.global.untouchedScanningRectsArray;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		
		if (mwb_debug_print) console.log('calcPreview(' + is_portrait + ') ');
		
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var window_AR = windowWidth / windowHeight;
		var rootDivInviewTop = previewFrame.offsetTop; //or just get it through _DOM ? //document.getElementById("root-div-inview")
		var rootDivInviewLeft = previewFrame.offsetLeft;
		var rootDivInviewWidth = previewFrame.offsetWidth;
		var rootDivInviewHeigth = previewFrame.offsetHeight;
		var rootDivInview_AR = rootDivInviewWidth / rootDivInviewHeigth;
		
		var cameraWidth = hardwareCameraResolution.width;
		var cameraHeight = hardwareCameraResolution.height;
		var camera_AR = cameraWidth / cameraHeight;
		//if (mwb_debug_print) console.log('explorer reporting');
		//if (mwb_debug_print) console.log(cameraWidth + ", " + cameraHeight);
		//if (mwb_debug_print) console.log(camera_AR);
		//DOM elements weren't fully rendered (previewFRame has size of 0)
		//altough it seems (After moving this code after video load) it works just fine, both on firefox and chrome
		
		if (is_portrait) {
			cameraWidth = hardwareCameraResolution.height;
			cameraHeight = hardwareCameraResolution.width;
			camera_AR = cameraWidth / cameraHeight;
			//if (mwb_debug_print) console.log('is_port');
			//if (mwb_debug_print) console.log(cameraWidth + ", " + cameraHeight);
			//if (mwb_debug_print) console.log(camera_AR);
		}
		//if (mwb_debug_print) console.log(JavaScript_mediaDevices_API.runtime_settings_videoTrack.width);
		//if (mwb_debug_print) console.log(JavaScript_mediaDevices_API.runtime_settings_videoTrack.height);
		
		if (mwb_debug_print) console.log("in calcPreview, { "+ rootDivInview_AR +" <> "+ camera_AR +" }" + " { "+ rootDivInviewWidth +" <> "+ rootDivInviewHeigth +" }");

		if (rootDivInview_AR == camera_AR) return;
		else
			if (rootDivInview_AR > camera_AR)
			{
				// fill div by width, most likely portrait
				var scalingFactor = rootDivInviewWidth / cameraWidth;
				var new_cameraHeight = cameraHeight * scalingFactor;
				var croppedCameraArea = new_cameraHeight - rootDivInviewHeigth;
				
				// get percentages:
				var croppedCameraAreaScale = croppedCameraArea / new_cameraHeight;
				var translatedCameraTopP = -(croppedCameraAreaScale / 2) * 100;
				
				preview.style.cssText = "position: absolute; margin: auto; top: 0; bottom: 0; width: 100%; height: auto;";
				
				this.calcScanningRect(is_portrait, true, croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView);
			}
			else
				if (rootDivInview_AR < camera_AR) // default remaining
				{
					//fill div by height
					var scalingFactor = rootDivInviewHeigth / cameraHeight;
					var new_cameraWidth = cameraWidth * scalingFactor;
					var croppedCameraArea = new_cameraWidth - rootDivInviewWidth;

					// get percentages
					var croppedCameraAreaScale = croppedCameraArea / new_cameraWidth;
					var translateCameraLeftP = -(croppedCameraAreaScale / 2) * 100;

					var croppedinDivAreaScale = croppedCameraArea / rootDivInviewWidth;
					var translateinDivLeftP = -(croppedinDivAreaScale / 2) * 100;
					translateinDivLeftP += 0;
					
					preview.style.cssText = "position: absolute; margin-left: " + translateinDivLeftP + "%; width: auto; height: 100%;";
					
					this.calcScanningRect(is_portrait, false, croppedCameraAreaScale, numberOfSupporedCodes, untouchedScanningRectsArray, viewfinderOnScreenView);
				}
	},
	
	/**
	 * Draws overlay lines inside the canvasOverlay area.
	 * @param  {object} lines	canvases for overlay blinking lines
	 * @param  {float} x1		canvasOverlay Left
	 * @param  {float} y1		canvasOverlay Top
	 * @param  {float} w1		canvasOverlay Width
	 * @param  {float} h1		canvasOverlay Left
	 * @param  {float} lineThickness CanvasBlinkingLine lineThickness
	 */
	drawOverlayLines: function (lines, x1, y1, w1, h1, lineThickness) {

		var startLeft = x1;
		var startTop = y1;
		lines.v.style.left = lines.h.style.left = (startLeft - 0) + "px";
		lines.v.style.top = lines.h.style.top = (startTop - 0) + "px";

		lines.v.width = lines.h.width = w1;
		lines.v.height = lines.h.height = h1;
		
		
		lines.v.width = lineThickness;
		lines.v.style.left = (startLeft + (w1 / 2) - (lines.v.width / 2) - 0) + "px";

		lines.h.height = lineThickness;
		lines.h.style.top = (startTop + (h1 / 2) - (lines.h.height / 2) - 0) + "px";
		
		// NOTE: at the time this is called the canvas lines have already been added to the html document and the animation has been started and can't be changed at this point
		// SOLUTION: execute these instructions in createPreview before canvas lines are added (because resize and subsequently this function is called after)
		//canvasBlinkingLineV.style.backgroundColor = canvasBlinkingLineH.style.backgroundColor = mwOverlayProperties.lineColor;
		//canvasBlinkingLineV.style.animation = canvasBlinkingLineH.style.animation = "fadeColor " + mwOverlayProperties.blinkingRate + "ms infinite";
	},
	
	/**
	 * Resizes the canvas to fill browser window dynamically.
	 */
	resizeCanvas: function (MW_properties, Dynamic_DOM_Elements) {
		
		//obtain args
		var viewfinderUnionRect = MW_properties.runtime.untouchedScanningRectsUnion; // get viewfinder (landscape)
		//var viewfinderUnionRect = JSON.parse(BarcodeScanner.MWBgetScanningRect(0));
		
		//var untouchedScanningRectsUnion = MW_properties.runtime.untouchedScanningRectsUnion;
		//untouchedScanningRectsUnion.x = viewfinderUnionRect.x;
		//untouchedScanningRectsUnion.y = viewfinderUnionRect.y;
		//untouchedScanningRectsUnion.width = viewfinderUnionRect.width;
		//untouchedScanningRectsUnion.height = viewfinderUnionRect.height;
		//^THIS is supposed to NOT be touched!
		
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		var canvasOverlay = Dynamic_DOM_Elements.overlay;
		var lines = MW_properties.global.blinkingLines;
		var flash = Dynamic_DOM_Elements.flash;
		var zoom = Dynamic_DOM_Elements.zoom;
		var mwOverlayProperties = MW_properties.global.overlay;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		if (mwb_debug_print) console.log('resizeCanvas ');

		// set canvas over preview
		canvasOverlay.style.top = previewFrame.style.top;
		canvasOverlay.style.left = previewFrame.style.left;
		canvasOverlay.width = previewFrame.offsetWidth; // capturePreviewFrame is a <div> element so it doesn't have width and height properties
		canvasOverlay.height = previewFrame.offsetHeight;
		// linking image buttons to position
		flash.style.top = (canvasOverlay.offsetTop + 2) + "px";
		flash.style.left = canvasOverlay.offsetLeft + "px";
		zoom.style.top = (canvasOverlay.offsetTop + 2) + "px";
		zoom.style.left = ((canvasOverlay.offsetWidth + canvasOverlay.offsetLeft) - zoom.offsetWidth) + "px";

		// set viewfinder in pixels
		viewfinderOnScreenView.x = canvasOverlay.width * (viewfinderUnionRect.x / 100);
		viewfinderOnScreenView.y = canvasOverlay.height * (viewfinderUnionRect.y / 100);
		viewfinderOnScreenView.width = canvasOverlay.width * (viewfinderUnionRect.width / 100);
		viewfinderOnScreenView.height = canvasOverlay.height * (viewfinderUnionRect.height / 100);

		/**
		 * Your drawings need to be inside this function otherwise they will be reset when 
		 * you resize the browser window and the canvas goes will be cleared.
		 */
		
		if (mwOverlayProperties.mode == 0) return;
		
		var ctx = canvasOverlay.getContext("2d");
			
		if (mwOverlayProperties.mode == 1)
		{
			// draw fullcanvas shadow and clear the viewfinder area
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ctx.fillRect(0, 0, canvasOverlay.width, canvasOverlay.height);
			ctx.clearRect(viewfinderOnScreenView.x, viewfinderOnScreenView.y, viewfinderOnScreenView.width, viewfinderOnScreenView.height);

			// draw red viewfinder border
			ctx.lineWidth = mwOverlayProperties.borderWidth;
			ctx.strokeStyle = mwOverlayProperties.lineColor;
			ctx.strokeRect(viewfinderOnScreenView.x, viewfinderOnScreenView.y, viewfinderOnScreenView.width, viewfinderOnScreenView.height);
			
			// draw red lines
			this.drawOverlayLines(
			lines,
			canvasOverlay.offsetLeft + viewfinderOnScreenView.x,
			canvasOverlay.offsetTop + viewfinderOnScreenView.y,
			viewfinderOnScreenView.width,
			viewfinderOnScreenView.height,
			mwOverlayProperties.linesWidth);
		}
		else if (mwOverlayProperties.mode == 2)
		{
			// if mwOverlay mode is set to image hide lines | place in createPreview
            //if (mwOverlayProperties.mode == 2) {
            //    mwBlinkingLines.v.style.visibility = "hidden";
            //    mwBlinkingLines.h.style.visibility = "hidden";
            //}
			
			//if (document.getElementById("canvas-line-v") != null) document.getElementById("canvas-line-v").style.visibility = "hidden"; // handled in createPreview
			//if (document.getElementById("canvas-line-h") != null) document.getElementById("canvas-line-h").style.visibility = "hidden";

			var imageOverlay = document.createElement("img");
			imageOverlay.src = mwOverlayProperties.imageSrc;

			imageOverlay.onload = function () {
				ctx.drawImage(imageOverlay, 0, 0, imageOverlay.width, imageOverlay.height,      // source rectangle
											0, 0, canvasOverlay.width, canvasOverlay.height);   // destination rectangle
			}
		}
	},
	
	/**
	 * Resize partial scanning view.
	 */
	resizePartialScannerView: async function resizeView(MW_properties, Dynamic_DOM_Elements) { //function name not needed | also this was referenced from global var
		//setTimeout(function(){let this_root = MW_methods;
		//obtain needed args
		var hideDuringUpdate = MW_properties.global.hideDuringUpdate;
		var proxyWrapPreview = Dynamic_DOM_Elements.proxyWrapPreview;
		var lines = MW_properties.global.blinkingLines; //Dynamic_DOM_Elements.lines; //_DOM doesn't work but MW_ works (its the time of setting those)
		
		var previewFrame = Dynamic_DOM_Elements.previewFrame;
		var partialView = MW_properties.global.partialView;
		var viewfinderOnScreenView = MW_properties.runtime.viewfinderOnScreenView;
		
		var is_portrait = MW_properties.runtime.is_portrait;
		var hardwareCameraResolution = MW_properties.global.hardwareCameraResolution;
		var preview = Dynamic_DOM_Elements.preview;
		
		//var viewfinderUnionRect = MW_properties.runtime.untouchedScanningRectsUnion;
		//var canvasOverlay = Dynamic_DOM_Elements.canvas;
		//var flash = Dynamic_DOM_Elements.flash;
		//var zoom = Dynamic_DOM_Elements.zoom;
		//var mwOverlayProperties = MW_properties.global.overlay;
		
		if (mwb_debug_print) console.log('resizePartialView | window size ' + window.innerWidth + ' ' + window.innerHeight);

		// USE THIS IF YOU WANT TO STORE THE VALUES OF THE RESIZE FOR THE NEXT SCAN
		/*partialView.x = x1;
		partialView.y = y1;
		partialView.width = w1;
		partialView.height = h1;*/

		// improve UIX during update | users don't need to see the underlying changes only the final result
		if (hideDuringUpdate) {
			proxyWrapPreview.style.visibility = "hidden"; //HERE
			//canvasOverlay.style.display = "none";
			lines.v.style.display = "none";
			lines.h.style.display = "none";
		}
			
		if (mwb_debug_print) console.log('anchorView_toOrientation: ' + 'anchor_to ' + partialView.orientation + ' -> ' + 'current_orientation ' + viewfinderOnScreenView.orientation);
		this.anchorView_toOrientation(previewFrame, partialView.x, partialView.y, partialView.width, partialView.height, partialView.orientation, viewfinderOnScreenView.orientation);
		//HERE - either anchorView_toOrientation messes up, or the DOM is lagging after the resize event is fired and so previewFrame height is 0 - in which case, use setTimeout(0) | so lets get to it
		
		
		if (mwb_debug_print) console.log('is in the clouds');
		if (mwb_debug_print) console.log('anchor: ' + partialView.orientation + " [0-3], " + viewfinderOnScreenView.orientation + " [0-2]");
		
		//maybe wait(1) between these calcs?
		
		this.calcPreview(is_portrait, hardwareCameraResolution, preview, MW_properties, Dynamic_DOM_Elements); //ALSO HERE - or previewFrame direct?
		this.resizeCanvas(MW_properties, Dynamic_DOM_Elements);
		// reappear video preview
		setTimeout(function () {
			if (hideDuringUpdate) {
				proxyWrapPreview.style.visibility = "visible";
				//canvasOverlay.style.display = "initial";
				lines.v.style.display = "initial";
				lines.h.style.display = "initial";
			}
		}, 1000); //THIS might be able to do with less - depending on device's speed?
		//}, 100);
	},
	
	eventHandlers: {
		//
		resize: function(e) {
			
			if (mwb_debug_print) { console.log('window resized'); console.log(e); }
			MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
		}
	},
	
	helpers: {
		already_inited: false,
		init_codeMasks_and_scanRects_and_union: function (MW_properties) {
			
			var _numberOfSupporedCodes = MW_properties.global.numberOfSupporedCodes;
			var codeMasksArray = MW_properties.global.codeMasksArray;
			var untouchedScanningRectsArray = MW_properties.global.untouchedScanningRectsArray;
			var untouchedScanningRectsUnion = MW_properties.runtime.untouchedScanningRectsUnion;
			
			if (!this.already_inited) //fill arrays first time
			{
				//BarcodeScanner.MWBinitDecoder(); //calling it here ensures the calls went thru | calling prinf after init in C++ also does that
				//leaving it to main, might take a while (after this point) so either call this in module.print or above call
				for (var _i = 0; _i < _numberOfSupporedCodes; _i++)
				{			
					codeMasksArray.push(Math.pow(2, _i));
					
					var rect = BarcodeScanner.MWBgetScanningRect(codeMasksArray[_i]);
					//if (mwb_debug_print) console.log(codeMasksArray[_i] + ', ');
					//if (mwb_debug_print) console.log(rect);
					var rect = JSON.parse(rect);
					untouchedScanningRectsArray.push(rect);
				}
				
				this.already_inited = true;
			}
			else //2+ 'th start
			{				
				for (var _i = 0; _i < _numberOfSupporedCodes; _i++)
				{					
					var rect = BarcodeScanner.MWBgetScanningRect(codeMasksArray[_i]);
					//if (mwb_debug_print) console.log(codeMasksArray[_i] + ', ');
					//if (mwb_debug_print) console.log(rect);
					var rect = JSON.parse(rect);
					untouchedScanningRectsArray[_i] = rect;
				}
			}
			
			//nope, still not as needed - LOOK BETTER INTO IT
			
			/*
			that setup is fine, but - you are supposed to call union (0) again, at a new run/start
			because in the meantime, scanRects and/or activeCodes (and their scanRects, and the union)
			might have changed
			
			well same goes for all scanRects, and the 'untouched' refers to them not being altered to fit
			resizes and preview crop transformation changes
			*/
			
			//if (mwb_debug_print) console.log(untouchedScanningRectsArray);
			var sdk_union = JSON.parse(BarcodeScanner.MWBgetScanningRect(0));
			
			untouchedScanningRectsUnion.x = sdk_union.x;
			untouchedScanningRectsUnion.y = sdk_union.y;
			untouchedScanningRectsUnion.width = sdk_union.width;
			untouchedScanningRectsUnion.height = sdk_union.height;

			if (mwb_debug_print) console.log('-> one-time initCodeMasksArray_and_untouchedScanningRectsArray_and_untouchedScanningRectsUnion ')
		},
		
		reset_Decoder: function () { if (mwb_debug_print) console.log('reset scanning rects'); BarcodeScanner.MWBinitDecoder(); },
		
		IsJsonString: function (jsonString, jsonDefault) { //add it later (on 5 total places)
			var jsonObject = null;
			try {
				jsonObject = JSON.parse(jsonString);
			} catch (e) {
				return jsonDefault;
			}
			return jsonObject;
		},
		
		//orientation
		OrientationType_hash: [],
		
		OrientationType_hash_init: function ()
		{
			//enum OrientationType {
			//	"portrait-primary",
			//	"portrait-secondary",
			//	"landscape-primary",
			//	"landscape-secondary"
			//};
			
			//var OrientationType_hash = [];
			this.OrientationType_hash["landscape-primary"] 	= 0;
			this.OrientationType_hash["portrait-primary"] 	= 1;
			this.OrientationType_hash["landscape-secondary"]= 2;
			//if (mwb_debug_print) console.log(this.OrientationType_hash); //[] (0) in Safari
		},
		
		_Screen_Orientation: (typeof screen.orientation === 'undefined') ? 'undefined' : screen.orientation,
		orientationChangeHandler: function () {
			//if (mwb_debug_print) console.log('its magic');
			//if (mwb_debug_print) console.log(screen);
			//if (mwb_debug_print) console.log(typeof screen); //object on Safari
			//if (mwb_debug_print) console.log(screen.orientation);
			//if (mwb_debug_print) console.log(typeof screen.orientation); //undefined on Safari
			
			//call here if (typeof MW_methods.helpers._Screen_Orientation === 'undefined')
				//or differnt handler
			
			let orientation_number = 0; //land assumed for default
			
			if (MW_methods.helpers._Screen_Orientation === 'undefined') //because of ctx change that will be undefined (different than 'undefined' of type string)
			{
				//welcome
				orientation_number = (window.innerWidth > window.innerHeight) ? /*MW_methods.helpers.OrientationType_hash["landscape-primary"]*/ 0 : /*MW_methods.helpers.OrientationType_hash["portrait-primary"]*/ 1;
				
				if (mwb_debug_print) console.log('HMM ' + screen.width + " " + screen.height + " => " + orientation_number); //screen wh are different than window.inner wh
				
				//also obtain availHeight, availLeft, availTop, availWidth and previous orientation
				//that will give you a clue about land or land-flipped
			}
			else
			{
				//logs
				if (mwb_debug_print) console.log('ORIENTATION CHANGE ' + MW_methods.helpers._Screen_Orientation);
				//if (mwb_debug_print) console.log(MW_methods.helpers.OrientationType_hash);
				//set properties
				orientation_number = MW_methods.helpers.OrientationType_hash[MW_methods.helpers._Screen_Orientation.type];
			}
			
			//
			
			let is_portrait = ((orientation_number % 2) == 1);
			if (mwb_debug_print) console.log(orientation_number + ' & ' + is_portrait);
			
			let prev_is_portrait = MW_properties.runtime.is_portrait;
			
			MW_properties.runtime.viewfinderOnScreenView.orientation = orientation_number;
			MW_properties.runtime.is_portrait = is_portrait;
			
			if (mwb_debug_print) console.log("HMM " + MW_properties.runtime.is_portrait);
			
			//since w3/mozilla were considerate enough to design an API that results in getting each
			//frame exaclty in the orientation its preview-ed in (unlike landscape only),
			//the hardwareCameraResolution also has to change values to reflect that when in portrait (already had been handled in calcPreview)
			{
				//no need to obtain frame size values from video, a simple swap should suffice
				//but that requires too many extra steps, so best to do it str8 from the source
				var videoWidth = Dynamic_DOM_Elements.preview.videoWidth,// || video.naturalWidth;
				videoHeight = Dynamic_DOM_Elements.preview.videoHeight;// || video.naturalHeight;
				
				//MW_properties.global.hardwareCameraResolution.width = videoWidth;
				//MW_properties.global.hardwareCameraResolution.height = videoHeight;
				
				//does it change at this point tho? -y.
				if (mwb_debug_print) console.log('new frame size: ' + videoWidth + 'x' + videoHeight);
				
				//MW_properties.global.hardwareCameraResolution assumes static WxH
				//for camera, e.g. 1280x720, regardless of land/port
				//since Safari doens't get its camera WH values from runtime caps api
				//it gets them from here, BUT the higher value MUST ALWAYS BE WIDTH
				
				var videoWidth_b = videoWidth,
					videoHeight_s = videoHeight;
					
				if (videoWidth < videoHeight)
				{
					videoWidth_b = videoHeight;
					videoHeight_s = videoWidth;
				}
				
				if (mwb_debug_print) console.log('explorer reporting');
				//if (MW_properties.global.hardwareCameraResolution.width == 0) //or JavaScript_mediaDevices_API.runtime_settings_videoTrack.width
				MW_properties.global.hardwareCameraResolution.width  = videoWidth_b;
				//if (MW_properties.global.hardwareCameraResolution.height == 0) //or JavaScript_mediaDevices_API.runtime_settings_videoTrack.height
				MW_properties.global.hardwareCameraResolution.height = videoHeight_s;
				
				//there seems to be some override on 2+ runs/reloads in Safari
				//so the portrait bug is fixed on 1st run, but re-appears on 2+
				//so lets set those values always, for now (they should be the same anyways)
				
				
				if (mwb_debug_print) console.log(MW_properties.global.hardwareCameraResolution);
			}
			
			// PREVIEW UPDATE SHOULD BE DONE AFTER UI CHANGE WHICH MAY TAKE SOME TIME TO COMPLETE RENDERING AFTER ORIENTATION CHANGE | HANDLED BY window.resizeEvent->resizePartialScannerView
		},
		
		safari_video_click_workaround: function (video) {
			let virtual_button = document.createElement('button');
			virtual_button.onclick = function() {
				//
				video.play(); if (mwb_debug_print) console.log('calling play again 3');
				
				//at this point its Safari
				if (mwb_debug_print) setTimeout(function() {
					//MWBScanner.resizePreview(2, 2, 96, 50);			
					if (mwb_debug_print) console.log(Dynamic_DOM_Elements.preview);
				}, 2500);
				
				this.onclick = null;
			};
			virtual_button.click();
		},
		
		get_number_of_Digits: function(x) {
			return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
		},
		
		CreateErrorProperties: function(name,message,mozilla,userFriendly,mostLikelyCause) {
			return {
				name: name,
				message: message,
				mozilla: mozilla,
				userFriendly: userFriendly,
				mostLikelyCause: mostLikelyCause
			};
		},
		
		CreateErrorDescriptions: function() {
			//Cannot start the cameraPreview when calling startScanning, only a black preview is shown.
			MW_properties.runtime.errorDescriptions["NotReadableError"] = new MW_methods.helpers.CreateErrorProperties(
				"NotReadableError",
				"Could not start video source",
				"Although the user granted permission to use the matching devices, a hardware error occurred at the operating system, browser, or Web page level which prevented access to the device.",
				"Could not start the camera",
				"Running / using the camera in another browser / native app");
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. The "http:" protocol is used and domain is not localhost.
			MW_properties.runtime.errorDescriptions.ProtocolError = new MW_methods.helpers.CreateErrorProperties(
				"",
				"",
				"If a document isn't loaded in a secure context (that is, the page was loaded using HTTP rather than HTTPS), the navigator.mediaDevices property is undefined, making access to getUserMedia() impossible.",
				"Cannot use the camera under HTTP because HTTPS is needed",
				"Accessing the web app under HTTP and not HTTPS");
				
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. "Camera - Block" permission setting set in browser by user.
			MW_properties.runtime.errorDescriptions.NotAllowedError = new MW_methods.helpers.CreateErrorProperties(
				"NotAllowedError",
				"Permission denied",
				"It also happens if the user has specified that the current browsing instance is not permitted access to the device, the user has denied access for the current session, or the user has denied all access to user media devices globally.",
				"Cannot use the camera because camera access isn't allowed",
				"No permission to access the camera i.e. camera is blocked in the browser for this site");
				
			//Cannot start the cameraPreview when calling startScanning, nothing is shown. No camera is present i.e. no USB camera is plugged in on a desktop computer.
			MW_properties.runtime.errorDescriptions.NotFoundError = new MW_methods.helpers.CreateErrorProperties(
				"NotFoundError",
				"Requested device not found",
				"No media tracks of the type specified were found that satisfy the given constraints.",
				"Cannot use the camera because no camera device is present",
				"There is no physical camera device plugged in");
				
			//Cannot test
			MW_properties.runtime.errorDescriptions.AbortError = new MW_methods.helpers.CreateErrorProperties(
				"AbortError",
				"",
				"Although the user and operating system both granted access to the hardware device, and no hardware issues occurred that would cause a NotReadableError, some problem occurred which prevented the device from being used.",
				"Some problem occurred which prevented the device from being used.",
				"");
				
			//Cannot test
			//Note: OverconstrainedError probably can never happen because we request camera properties such as resolution with values that are supported, and in the rare case they aren't any other resolutions that can be supported will be used. In case torch or zoom aren't supported they won't be requested.
			MW_properties.runtime.errorDescriptions.OverconstrainedError = new MW_methods.helpers.CreateErrorProperties(
				"OverconstrainedError",
				"",
				"The specified constraints resulted in no candidate devices which met the criteria requested.",
				"No camera is available with the resolution / features being requested",
			"");
		},
		
		otherResult: function (code, errorDetails, type) {
			return {
				code: code,
				errorDetails: errorDetails,
				type: type,
				parsedCode: null,
				isGS1: null,
				bytes: null,
				locationPoints: null,
				imageWidth: null,
				imageHeight: null,
				moduleSizeX: null,
				moduleSizeY: null,
				modulesCountX: null,
				modulesCountY: null,
				ppm: null
			};
		}
	}
};

var timePoll = 0; //for dev / testing (preview height 0 bug specifically), rm later
var callCount = 0;

//webpack extra:
require("./barcode-scanner-preview-style.css");

//4. execution flow control, pauseDecoder, args, pointers, scanImage, result callbck,
//	[future: pthreads, altho its not 'real' mthreading], clean-free
var MWBScanner = {
	
	DECODER_ACTIVE: false, //or-and pause | also, SCANNER_ACTIVE/started might be better
	
	CONTINUOUS_DECODING: false, //
	
	USE_PARSER: true, //internal use only, as in, results gets parsed on C++ side always, but this flag determines presentation or not
	
	decoder_timeout: 30, //link it w/ "30 *"
	
	dps_limit: 20,
	
	PAUSE_DECODING: false, //runtime
	
	external_helper: null, //will be set from main.js | was for gui
	
	result_callback: null,
	
	decoder: async function (video) {
		
		const DEBUG_PRINT = 0;
		var BEEP_ON_SUCCESS = false;
		var jump = 1; var jmp_count = 0; //jump one means every result is beep-ed, do not use 0 because that will be undefined
		//
		var dataPtr = null;
		var callCount = 0;
		const frameInterval = 1000 / MWBScanner.dps_limit; //50; //calc this HERE from setting
		const minTimeout = MWBScanner.decoder_timeout; //10; //this is not the ACTUAL timeout (see that "30 *" timer) //tho this isn't used - scanner_timeout is the real true timeout, which unsets DECODER_ACTIVE, which is the condition that will execute clearInterval on the next frame
		
		const totalFrames = ( 1000 / frameInterval ) * minTimeout;
		
		//var DECODER_ACTIVE = true;
		var startTime = performance.now(); //new Date().getTime();
		//
		var videoWidth = video.videoWidth,// || video.naturalWidth;
			videoHeight = video.videoHeight;// || video.naturalHeight;
		
		if (mwb_debug_print) console.log('loaded metadata of video, w,h: ' + videoWidth + ', ' + videoHeight); //w,h have values i.e. 640,480 as soon as loadedmetadata Event (first frame loaded)
			
		//can also call explorer reporting here, but resize should always be called before reaching the decoder
			
		let mwOverlayProperties = MW_properties.global.overlay;
		let viewfinderOnScreen = MW_properties.runtime.viewfinderOnScreenView;
		
		var startFrameScanning = setInterval(async function () {
			//processing
			callCount++;
			if (!MWBScanner.DECODER_ACTIVE/*callCount > totalFrames*/) { clearInterval(startFrameScanning); return; }
			
			if (MWBScanner.PAUSE_DECODING) return;
			
			//relevant on orientation change
			videoWidth = video.videoWidth;
			videoHeight = video.videoHeight;
			
			var canvasFrame = document.createElement("canvas");
			var pad = 0;
			
			canvasFrame.width = videoWidth  + (pad * 2);
			canvasFrame.height = videoHeight + (pad * 2);
			
			var ctx = canvasFrame.getContext("2d");
			
			ctx.drawImage(video, 0, 0, videoWidth, videoHeight); //source rectangle
			var imgData = ctx.getImageData(0, 0, canvasFrame.width, canvasFrame.height);
			var data = imgData.data; //new Uint8ClampedArray([1, 20, -3, 129, 15]); //checks out
			var nDataBytes = data.length * data.BYTES_PER_ELEMENT;
			
			dataPtr = Module._malloc(nDataBytes); //buffer
			Module.HEAPU8.set(data, dataPtr); //[typedArray_dataSource, heapMemory_pointer]
			
			// Call function and get result
			var jsonMWResult = "";
			var scanFrame = Module.cwrap('scanFrame', 'string', ['number', 'number', 'number', 'number']); //for some reason this has to be inside this scope
			//probs asign cwrap when Module is loaded
			
			//NOTE: no need to keep MWB_functions here as they work when defined outside but called in this scope (unlike scanFrame)
			
			startTime = performance.now(); //new Date().getTime();
			
			//set active symbologies (and all other native sdk settings) before decoding
			
			//frame TEST			
			if (false && mwb_debug_print && (callCount == ((totalFrames/4) - 1)))
			{
				//
				console.log('frame TEST x');
				let url = canvasFrame.toDataURL();
				let windowName = 'majni';
				//window.open(url, windowName);
				
				console.log(url);
			}
			
			jsonMWResult = scanFrame(dataPtr, canvasFrame.width, canvasFrame.height, DEBUG_PRINT); //dataURL is png (no bmp or something raw)
			
			var dps = 1000/(performance.now() - startTime); //not sure if this way of doing things results in proper dps
			//actually this is correct, the reason why it takes longer for frames to 'run out' is frameInterval being 50ms
			//which limits max fps to 20
			
			var MWResult_obj = (DEBUG_PRINT == 0) ? JSON.parse(jsonMWResult) : jsonMWResult;
			
			//MWResult_obj take .code and JSON.parse it as well (but how can we know if its JSON result from the parser? -needs indicator)
			
			if (DEBUG_PRINT) { console.log(MWResult_obj); return; }
			
			if (MWResult_obj.type == "No MWResult.") //maybe check for undefined
			{
				if (mwb_debug_print) console.log( "dps(" + Math.round(dps) + "), frame " + callCount + " : " + MWResult_obj.code + " " + MWResult_obj.type );
			}
			else
			{
				//location
				let result = MWResult_obj;
				
				//PPM
				var ppm;
				if (result.moduleSizeX > 0.01 && 
					(result.type != "Dotcode" && result.type != "Micro QR" && result.type != "Maxicode"))
				{
					let is2D = (result.type == "QR" || result.type == "Micro QR" || result.type == "AZTEC" || result.type == "FOUND_DM" || result.type == "Dotcode" || result.type == "Maxicode");
					ppm = (is2D)? ((result.moduleSizeX + result.moduleSizeY) / 2) : result.moduleSizeX;
				}
				result.ppm = ppm;
				
				//location
				if (result != null && result.locationPoints != null)
				{
					//capturePreview.pause();
					//MWOverlay location points green box draw
					let canvasOverlay = Dynamic_DOM_Elements.overlay;
					let preview = Dynamic_DOM_Elements.preview;
					
					//if (mwb_debug_print) console.log(preview.offsetWidth); //one of preview's sides will be cropped and bigger than canvasOverlay | note: preview.width (and height) are 0
					//if (mwb_debug_print) console.log(preview.offsetHeight);
					//if (mwb_debug_print) console.log(canvasOverlay.width);
					//if (mwb_debug_print) console.log(canvasOverlay.height);
					
					var ctx = canvasOverlay.getContext("2d");

					if (mwb_debug_print) console.log("location points:");
					if (mwb_debug_print) console.log(result.locationPoints);
					
					//let mwOverlayProperties = MW_properties.global.overlay;
					//let viewfinderOnScreen = MW_properties.runtime.viewfinderOnScreenView;
					
					ctx.lineWidth = mwOverlayProperties.borderWidth * 1; //location lines thickness
					ctx.strokeStyle = mwOverlayProperties.locationColor;

					var navigationBarHeight = (window.innerWidth > window.innerHeight) ? ((window.innerHeight * (16 / 9)) - window.innerWidth) : ((window.innerWidth * (16 / 9)) - window.innerHeight);
					
					navigationBarHeight = 0; //above is only good for windows phone

					//mwb_debug_print = true;
					if (mwb_debug_print) console.log('navigationBarHeight: ' + navigationBarHeight);

					var window_actualWidth = preview.offsetWidth;//canvasOverlay.width;//window.innerWidth;
					var window_actualHeight = preview.offsetHeight;//canvasOverlay.height;//window.innerHeight;

					//when the navigation bar is present, the image is pushed/translated by the size of the navigation bar
					if (viewfinderOnScreen.orientation == 0 || viewfinderOnScreen.orientation == 2) //landscape or flipped landscape
					{
						window_actualWidth += navigationBarHeight;
					}
					else //portrait
					{
						window_actualHeight += navigationBarHeight;
					}
					
					var translate_x = preview.offsetWidth - canvasOverlay.width;
					var translate_y = preview.offsetHeight - canvasOverlay.height;
					translate_x /= 2;
					translate_y /= 2;
					
					var scale_x = window_actualWidth / result.imageWidth;
					var scale_y = window_actualHeight / result.imageHeight;

					if (mwb_debug_print) console.log('screen w h : ' + window.innerWidth + ' ' + window.innerHeight + ' image w h : ' + result.imageWidth + ' ' + result.imageHeight + ' scales x y : ' + scale_x + ' ' + scale_y);
					
					//alert('image w h : ' + result.imageWidth + ' ' + result.imageHeight); //TEST-DEL
					
					if (false && viewfinderOnScreen.orientation == 1) //swap scales operands to account for the rotation
					{
						scale_x = window_actualWidth / result.imageHeight;
						scale_y = window_actualHeight / result.imageWidth;
						
						//most likely there won't be any need to swap translates
						//because they aren't tied with image - however, TEST!
					}

					//viewfinderOnScreen.orientation 1 port 2 flipped land
					var coordSysOrigin_x_Axis_toCenter = 0;
					var coordSysOrigin_y_Axis_toCenter = 0;

					if (false && viewfinderOnScreen.orientation != 0) //if not landscape, do some transformations to match the position on the current orientation
					{
						coordSysOrigin_x_Axis_toCenter = canvasOverlay.width / 2; //this /2 is correct
						coordSysOrigin_y_Axis_toCenter = canvasOverlay.height / 2;

						ctx.translate(coordSysOrigin_x_Axis_toCenter, coordSysOrigin_y_Axis_toCenter);
						ctx.rotate(viewfinderOnScreen.orientation * 90 * Math.PI / 180);
					}
					
					ctx.translate(-navigationBarHeight / 2, 0); //this needs to be /2 no matter what the scale_x value is

					if (!mwOverlayProperties.locationAllPointsDraw) //draw box from p1 and p3
					{
						var x = result.locationPoints.p1.x;
						var y = result.locationPoints.p1.y;

						var w = result.locationPoints.p3.x - x;
						var h = result.locationPoints.p3.y - y;

						x *= scale_x;
						y *= scale_y;
						w *= scale_x;
						h *= scale_y;

						//draw green location border polygon | swap translation back operands to account for the different width and height for portrait, otherwise just normal translation back
						if (viewfinderOnScreen.orientation == 1)
						{
							ctx.strokeRect(x - coordSysOrigin_y_Axis_toCenter, y - coordSysOrigin_x_Axis_toCenter, w, h);
						}
						else ctx.strokeRect(x - coordSysOrigin_x_Axis_toCenter, y - coordSysOrigin_y_Axis_toCenter, w, h);
					}
					else
					{
						var x1 = result.locationPoints.p1.x;
						var y1 = result.locationPoints.p1.y;
						var x2 = result.locationPoints.p2.x;
						var y2 = result.locationPoints.p2.y;
						var x3 = result.locationPoints.p3.x;
						var y3 = result.locationPoints.p3.y;
						var x4 = result.locationPoints.p4.x;
						var y4 = result.locationPoints.p4.y;
						
						x1 *= scale_x;
						y1 *= scale_y;
						x2 *= scale_x;
						y2 *= scale_y;
						x3 *= scale_x;
						y3 *= scale_y;
						x4 *= scale_x;
						y4 *= scale_y;
						
						x1 -= translate_x;
						y1 -= translate_y;
						x2 -= translate_x;
						y2 -= translate_y;
						x3 -= translate_x;
						y3 -= translate_y;
						x4 -= translate_x;
						y4 -= translate_y;
						
						if (mwb_debug_print) ctx.strokeStyle = "rgba(255, 225, 0, 1.0)";

						//draw green location border lines | swap translation back operands to account for the different width and height for portrait, otherwise just normal translation back
						if (viewfinderOnScreen.orientation == 1)
						{
							ctx.beginPath();
							ctx.moveTo(x1 - coordSysOrigin_y_Axis_toCenter, y1 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x2 - coordSysOrigin_y_Axis_toCenter, y2 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x3 - coordSysOrigin_y_Axis_toCenter, y3 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x4 - coordSysOrigin_y_Axis_toCenter, y4 - coordSysOrigin_x_Axis_toCenter);
							ctx.lineTo(x1 - coordSysOrigin_y_Axis_toCenter, y1 - coordSysOrigin_x_Axis_toCenter);

							ctx.stroke();
						}
						else
						{
							ctx.beginPath();
							ctx.moveTo(x1 - coordSysOrigin_x_Axis_toCenter, y1 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x2 - coordSysOrigin_x_Axis_toCenter, y2 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x3 - coordSysOrigin_x_Axis_toCenter, y3 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x4 - coordSysOrigin_x_Axis_toCenter, y4 - coordSysOrigin_y_Axis_toCenter);
							ctx.lineTo(x1 - coordSysOrigin_x_Axis_toCenter, y1 - coordSysOrigin_y_Axis_toCenter);

							ctx.stroke();
						}
						
						//ctx.beginPath();
						//ctx.moveTo(x1, y1);
						//ctx.lineTo(x2, y2);
						//ctx.lineTo(x3, y3);
						//ctx.lineTo(x4, y4);
						//ctx.lineTo(x1, y1);

						//ctx.stroke();
					}
				}
				
				if (BEEP_ON_SUCCESS && ++jmp_count % jump == 0) mwbScanner.beep();
				
				//var successString = "dps(" + Math.round(dps) + "), good frame " + callCount + " ... " + jsonMWResult + "\n\n" + MWResult_obj.code;
				//if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
				
				//SHOW RESULT STRING HERE
				if (MWBScanner.CONTINUOUS_DECODING)
				{
					var successString = "dps(" + Math.round(dps) + "), good frame " + callCount + " ... " + jsonMWResult + "\n\n" + MWResult_obj.code;
					
					//MWBcloseScannerOnDecode dependency
					MWBScanner.PAUSE_DECODING = true;
					
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms)); //keep this in common place - helpers
					await wait(128);
					
					if (MWBScanner.result_callback) //return to callback!
						MWBScanner.result_callback(MWResult_obj);
					else
						if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
					
				}
				else
				{
					MWBScanner.PAUSE_DECODING = true; //lock it from being changable from the gui/outside
					
					//pause preview so frame fits the location
					Dynamic_DOM_Elements.preview.pause();
					
					//show location breefly
					const wait = ms => new Promise(resolve => setTimeout(resolve, ms)); //keep this in common place - helpers
					await wait(mwOverlayProperties.locationShowTime);
					
					MWBScanner.destroyPreview(true); //has_res
					await wait(128); //wait a bit for DOM actions to complete
					//100 - PC
					//1500 Note5
					//rather fast on LG
					
					//maybe poll DOM state then show alert (or clbck)
					
					MWBScanner.PAUSE_DECODING = false; //put this back (or prev runtime/gui setting?)
					
					//API callback
					if (MWBScanner.result_callback) //return to callback!
						MWBScanner.result_callback(MWResult_obj);
					else
						if (mwb_debug_print) console.log("decoded string (" + callCount + ") " + MWResult_obj.code);
					
					//var jsonObject_ParserResult = JSON.parse(MWResult_obj.code);
					
					/*if (MWBScanner.USE_PARSER) alert(MWResult_obj.type + "\n\n" + MWResult_obj.code); //same?
					else alert(MWResult_obj.type + "\n\n" + MWResult_obj.code);*/
					
					//gui
					/*let result_element_title = document.getElementById('MWResult_title');
					result_element_title.innerHTML = " \n" + MWResult_obj.type + "\n ";
					
					let result_element = document.getElementById('MWResult');
					result_element.innerHTML = " \n" + MWResult_obj.code + "\n \n ";
					
					let result_element_wrapper = document.getElementById('MWResult_wrap');
					//this style only for 'scrollable result' mostly PDF
					//result_element_wrapper.style.height = "auto";
					//result_element_wrapper.style.position = "absolute";
					result_element_wrapper.style.visibility = "visible";
					
					//as for the result being 'scrollable' if longer than screen (parsed json),
					//poll the offestHeight, if more than window.height, then style.position = as needed
					//else = other as needed
					
					if (result_element_wrapper.offsetHeight > window.innerHeight)
					{
						result_element_wrapper.style.position = "absolute";
					}
					else
					{
						result_element_wrapper.style.position = "fixed";
					}
					
					MWBScanner.gui_demo_controls_Array[0].element_ref.scrollIntoView(false); //will scroll to top where result starts from
					
					//for some reason, maybe related to this, toggle buttons have that lag, it happens only when result > screen
					
					let button1 = document.getElementsByClassName('button1')[0];
					let button2 = document.getElementsByClassName('button2')[0];
					
					button1.style.visibility = "hidden";
					
					button2.innerHTML = "OK";
					button2.onclick = function () {
						
						let result_element_wrapper = document.getElementById('MWResult_wrap');
						result_element_wrapper.style.visibility = "hidden";
				
						let result_element_title = document.getElementById('MWResult_title');
						result_element_title.innerHTML = "";
						
						let result_element = document.getElementById('MWResult');
						result_element.innerHTML = "";
						
						//button2
						this.onclick = mwbScanner.closeScanner;
						this.innerHTML = "Stop";
						this.style.visibility = "visible";
						
						let button1 = document.getElementsByClassName('button1')[0];
						
						button1.style.visibility = "visible";
					}*/					
				}
			}
			
			
			// Free memory
			Module._free(dataPtr); //but what if you change the address the dataPtr points to in C++ | Verify, and if true, store a copy to restore OG from (or just -= size)
			dataPtr = null;
			Module._free(jsonMWResult);
			
			//if (mwb_debug_print) console.log('--------------------------------> b4'); //reaches
			//if ((callCount == (totalFrames - 1)) && JavaScript_mediaDevices_API.videoTrack != null) { JavaScript_mediaDevices_API.videoTrack.stop(); //null check!
			//if (mwb_debug_print) console.log('and after'); }
			//works, but is already handled in onloadedmetadata event => true timer
			
		}, frameInterval); 
	},
	
	start: async function (callback/*, container*/) { //result_clb, video
		
		if (MWBScanner.DECODER_ACTIVE) return null; //can't start two
		MWBScanner.DECODER_ACTIVE = true;
		
		//MWBScanner.external_helper(MWBScanner.DECODER_ACTIVE); //gui
		
		//BarcodeScanner.MWBinitDecoder(); THIS TOO PROBS - TESTING W/ DM makes the preview (and decoder) act strangely - investigate! -got em! it was setting the next mask in the custom handlers, needs to be 2^value_i - 1
		
		//set container in MW_properties.global.container, then,
		//MW_properties.global.container = container;
		//this.resizePreview(0, 0, 100, 100);
		//MW_properties.global.video = video; //also use this if there in _DOM_elements (not creating a new one) //actually, no need to do this
		
		MWBScanner.result_callback = ((typeof callback) == 'function') ? callback : mwbScanner.dflt_clb;
		
		async function after_VideoLoadedData (mediaStream) {
		
		MW_methods.helpers.reset_Decoder(); //this here -
		//call on each start scan //above method calls it as well
		//BUT - scannerConfig() needs to be called AFTER
		//AAND - reset should happen BEFORE init, cause init gets
		
		scannerConfig(); //HERE - previous set(s) from GUI will be overrided, wb HERE? -y.
		
		//if (!Dynamic_DOM_Elements.already_inited)
		await MW_methods.helpers.init_codeMasks_and_scanRects_and_union(MW_properties);
		
		//probs wait not needed:
		const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
		await wait(1); //loading video takes some time, try in play (or pool the state each, say, 50ms, for size != 0)
		Dynamic_DOM_Elements.revealElements(); //calling it here after wait(1) works just fine for no 'flashing inter-transformation changes'
		//again, you might need to use hidden and then reveal after calcs have finished, and also those internal none-initial
		
		//^THAT HAS TO BE DONE BEFORE resize, so that elements are properly calced together wrt. eachother.
		//only thing you might want to try, is making them hidden instead of display none
		
		//if that works, it should result in everything being already transformed and in place, and can even be appeared at once
		//on first frame (rn its black previewFrame after T, then MW_overlay appears, transforms, and plays)
		
		//to get out of FS
		//document.addEventListener('backbutton', function(){MWBScanner.destroyPreview()}, false); //doesn't work
		
		MW_methods.helpers.OrientationType_hash_init();
		
		//first time 4 everything | only if != landscape
		//if (MW_methods.helpers.OrientationType_hash[screen.orientation.type] != 0)
		MW_methods.helpers.orientationChangeHandler();
		
		if (MW_methods.helpers._Screen_Orientation === 'undefined')
		{
			//
			window.addEventListener('resize', MW_methods.helpers.orientationChangeHandler, false); //same handler - checks inside, for now
		}
		else
		{
			//window.
			screen.orientation.addEventListener('change', MW_methods.helpers.orientationChangeHandler);
		}
				
		window.addEventListener('resize', MW_methods.eventHandlers.resize, false);
		
		await MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements); //anchor, calcP, resizeC - which is also to be called on orient/windows size changes
		//await MW_methods.calcPreview(MW_properties.runtime.is_portrait, MW_properties.global.hardwareCameraResolution, Dynamic_DOM_Elements.preview, MW_properties, Dynamic_DOM_Elements);
		//await MW_methods.resizeCanvas(MW_properties, Dynamic_DOM_Elements);
		
		//MWBScanner.DECODER_ACTIVE = true;
		
		//if (mwb_debug_print) console.log(typeof MWBScanner.decoder);
		await MWBScanner.decoder(Dynamic_DOM_Elements.preview);
		//actually this point isn't even reached
		
		//DEBUG: USE THIS TO TEST RESIZE
		//setTimeout(function () {
		//	//if (mwb_debug_print) console.log(document.body.innerHTML); //doesn't print longer strings in console
		//	MW_properties.global.partialView.x = 30;
		//	MW_properties.global.partialView.y = 10;
		//	MW_properties.global.partialView.width = 30; //this can also be wrapped for fullscreen, and for transitions/zoom-out effect
		//	MW_properties.global.partialView.height = 70;
		//	MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
		//}, 5000);
		if (mwb_debug_print) console.log('final');
		// register an event listener to be notified and execute resizeCanvas upon window resize for desktop only AND orientation->UI change for phone/tablet
		};
		
		//promise here
		//call create
		try {
			
			await Dynamic_DOM_Elements.main_createPreview(MW_properties, MW_methods);
			
			//var timePoll = 0; //global
			//var callCount = 0;
			
			//TEST
			/*
			var poll_PreviewFrame = setInterval(function () {
				//processing
				callCount++;
				timePoll += 4;
				if (timePoll == 100) { clearInterval(poll_PreviewFrame); timePoll = 0; callCount = 0; return; }
				
				if (mwb_debug_print) console.log('previewFrame after ' + timePoll);
				if (mwb_debug_print) console.log([Dynamic_DOM_Elements.previewFrame.offsetLeft,
				Dynamic_DOM_Elements.previewFrame.offsetTop,
				Dynamic_DOM_Elements.previewFrame.offsetWidth,
				Dynamic_DOM_Elements.previewFrame.offsetHeight]);
			}, 4);*/
			
			await JavaScript_mediaDevices_API.init_values(Dynamic_DOM_Elements.preview, after_VideoLoadedData, function(){});
			
			//anyways, figured out and fixed two mysteries - use "key": in json (getScanRects), and use MWOv.lines after they've been init-ed
		} catch(error) {
			//handle errro
		}
		
		return 0;		
	},
	
	set_DecoderTimeout: function (timeout) {
		
		var timeout1 = ((typeof timeout === 'number') && (timeout == 0 || (timeout >= 10 && timeout <= 60))) ? timeout : 30; //these mix, max, default values should be taken from gui_demo_controls (prev set there)
		
		MWBScanner.decoder_timeout = timeout1;
	},
	
	set_DpsLimit: function (dps_limit) {
		
		var dps_limit1 = ((typeof dps_limit === 'number') && (dps_limit >= 1 && dps_limit <= 30)) ? dps_limit : 30; //these mix, max, default values should be taken from gui_demo_controls (prev set there)
		
		MWBScanner.dps_limit = dps_limit1;
	},
	
	set_Continuous: function (continuous) {
		
		if (!(typeof continuous === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Continuous'); return; }
		
		MWBScanner.CONTINUOUS_DECODING = continuous;
	},
	
	set_Parsing: function (use_parser) {
		
		if (!(typeof use_parser === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Parsing'); return; }
		
		if (use_parser) BarcodeScanner.MWBsetActiveParser(0xFF);
		else BarcodeScanner.MWBsetActiveParser(0x0); //or actual masks aka _NONE
		
		//How do I test if parsing took place? THIS - add it ↓ there, use it here
		//When all could have been resolved with a simple boolean indicator in the json result.
		
		MWBScanner.USE_PARSER = use_parser;
	},
	
	set_Pause: function (pause) {
		
		if (!(typeof pause === 'boolean')) { if (mwb_debug_print) console.log('error: boolean argument required for arg in set_Pause'); return; }
		
		MWBScanner.PAUSE_DECODING = pause;
	},
	
	set_Preview_anchor: function (orientation) {
		
		var anchor_to = ((typeof orientation === 'number') && (orientation >= 0 && orientation <= 3)) ? orientation : 0;
		
		if (!MWBScanner.DECODER_ACTIVE) //might need a scanner_running/active/started flag instead
		MW_properties.global.partialView.orientation = anchor_to; //0 for none, subsequent values - 1 for respective orientation
	},
	
	resizePreview: function (x, y, w, h) { //(x, y, width, height)
		
		var x1 = ((typeof x === 'number') && (x >= 0 && x <= 100)) ? x : MW_properties.global.partialView.x;
        var y1 = ((typeof y === 'number') && (y >= 0 && y <= 100)) ? y : MW_properties.global.partialView.y;
        var w1 = ((typeof w === 'number') && (w >= 0 && w <= 100)) ? w : MW_properties.global.partialView.width;
        var h1 = ((typeof h === 'number') && (h >= 0 && h <= 100)) ? h : MW_properties.global.partialView.height;
		
		if (mwb_debug_print) console.log("RESIZE: " + [x1, y1, w1, h1]);
		
		MW_properties.global.partialView.x = x1;
		MW_properties.global.partialView.y = y1;
		MW_properties.global.partialView.width = w1; //this can also be wrapped for fullscreen, and for transitions/zoom-out effect
		MW_properties.global.partialView.height = h1;
		
		if (MWBScanner.DECODER_ACTIVE) //might need a scanner_running/active/started flag instead
		MW_methods.resizePartialScannerView(MW_properties, Dynamic_DOM_Elements);
	},
	
	destroyPreview: async function (has_res) {
		
		//clean up the get out of FS thing
		//document.removeEventListener('backbutton', function(){MWBScanner.destroyPreview()}, false);
		
		const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
		
		var this_root = JavaScript_mediaDevices_API;
		var track = this_root.videoTrack;
		Dynamic_DOM_Elements.destroyPreview(this_root, track); //not truly awaitable at this point
		
		//complete empty callback
		await wait(128);
		if (typeof has_res == "undefined")
		if (MWBScanner.result_callback) //return to callback!
			MWBScanner.result_callback(
				{
					code: "",
					type: "Cancel",
					isGS1: null,
					bytes: null,
					location: null,
					imageWidth: null,
					imageHeight: null
				}
			);
		
		//MWBScanner.external_helper(MWBScanner.DECODER_ACTIVE); //gui
	},
	
	gui_demo_controls: [],
	gui_demo_controls_Array: [], //[] for- for example, to disable all (fade)
	
	gui_demo: {
		//		
		generateCustomToggleControl: function (id, text1_label, text2_values, initial_state, switch_handler) {
			//			
			var div_wrapper = document.createElement('div');
			
			var span_label = document.createElement('span');
			const whiteSpace = "    ";
			span_label.id = id + "_text1";
			span_label.innerHTML = text1_label + whiteSpace;
			
			var label_holder = document.createElement('label');
			label_holder.id = id + "_holder";
			label_holder.className = "switch";
			
			var input_checkbox = document.createElement('input');
			input_checkbox.id = id;
			input_checkbox.type = "checkbox";
			input_checkbox.checked = initial_state;
			
			var span_slider = document.createElement('span');
			span_slider.className = "slider round";
			
			var span_value = document.createElement('span');
			span_value.id = id + "_text2";
			span_value.innerHTML = text2_values[Number(initial_state)];
			
			
			function myToggle() {
				
				MWBScanner.gui_demo_controls[this.id].value = this.checked;
				
				var id = this.dataset.id;
				var text2_values = MWBScanner.gui_demo_controls[id].text2_values;
				var toggle = this; //.checked //document.getElementById(id)
				var toggle_text2 = document.getElementById(id + "_text2");
								
				//if (toggle.checked) toggle_text2.innerHTML = "HD 720p";
				//else toggle_text2.innerHTML = "SD 480p";
				
				toggle_text2.innerHTML = text2_values[Number(toggle.checked)];
				
				//first the above code will execute, then the GUI will change
				
				switch_handler();
			}			
			
			
			label_holder.appendChild(input_checkbox);
			label_holder.appendChild(span_slider);
			
			div_wrapper.appendChild(span_label);
			div_wrapper.appendChild(label_holder);
			div_wrapper.appendChild(span_value);
			
			input_checkbox.dataset.id = id; //custom data-*
			
			var custom_object = { id: id, element_ref: div_wrapper, text2_values: text2_values, event_handler: myToggle, disable_element: null, value: initial_state };
			
			input_checkbox.onclick = custom_object.event_handler;
			
			//will init work for dynamic dom elements? -y.
			
			label_holder.style.position = "absolute";
			span_value.style.position = "absolute";
			
			label_holder.style.marginTop = "-5px";
			span_value.style.marginLeft = "80px";
			span_value.style.color = "#7f7f7f";
			
			custom_object.disable_element = function (disable, hide) {
				//
				var id = this.id;
				var toggle = document.getElementById(id); //.checked
				var toggle_holder = document.getElementById(id + "_holder");
				var toggle_text1 = document.getElementById(id + "_text1");
				var toggle_text2 = document.getElementById(id + "_text2");
				
				if (disable)
				{
					toggle_holder.style.opacity = "0.5"; //use the holder
					toggle.disabled = true;
				}
				else
				{
					toggle.disabled = false;
					toggle_holder.style.opacity = "1.0"; //use the holder
				}
				
				if (typeof hide === 'boolean')
				{
					let show = !hide;
					toggle_holder.style.opacity = (show) ? ((disable) ? "0.5" : "1.0") : "0.0";
				}
				
			};
			
			document.body.appendChild(div_wrapper);
			
			MWBScanner.gui_demo_controls[id] = custom_object;
			MWBScanner.gui_demo_controls_Array.push(MWBScanner.gui_demo_controls[id]); 
		},
		
		//NOTE: select_values is used in place of text2_values and will be placed inside the select's options
		generateCustomSelectControl: function (id, text1_label, select_values, initial_state, change_handler) {
			//			
			var div_wrapper = document.createElement('div');
			
			var span_label = document.createElement('span');
			const whiteSpace = "    ";
			span_label.id = id + "_text1";
			span_label.innerHTML = text1_label + whiteSpace;
			
			//actual select
			var div_holder = document.createElement('div');
			div_holder.className = "custom-select";
			div_holder.style.width = "220px";
			
			var main_select = document.createElement('select');
			main_select.id = id;
			
			//check if array?
			const optionsCount = select_values.length; // The length property returns the number of elements
			
			for(let i = 0; i < optionsCount; i++)
			{
				var option_i = document.createElement('option');
				option_i.value = i;
				option_i.innerHTML = select_values[i];
				main_select.appendChild(option_i);
			}			
			main_select.value = Number(initial_state); //set this After options have been added
			
			div_holder.appendChild(main_select);
			//end of actual select			
			
			//var span_value = document.createElement('span');
			//span_value.id = id + "_text2";
			//span_value.innerHTML = text2_values[Number(initial_state)];
			
			
			//function handler
			function mySelect()
			{
				MWBScanner.gui_demo_controls[this.id].value = this.value; //update value
				
				change_handler(); //this should take the value above, which should be the mask
			}			
			
			div_wrapper.appendChild(span_label);
			div_wrapper.appendChild(div_holder);
			//div_wrapper.appendChild(span_value);
			
			var custom_object = { id: id, element_ref: div_wrapper, text2_values: select_values, event_handler: mySelect, disable_element: null, value: initial_state };
			
			main_select.onchange = custom_object.event_handler;
			
			//div_holder.style.position = "absolute"; //see for different positions of div_wrapper
			//span_value.style.position = "absolute";
			
			div_holder.style.marginTop = "-35px";
			div_holder.style.marginLeft = Math.round((text1_label.length + 4) * 10) + "px";
			//span_value.style.marginLeft = "100px";
			//span_value.style.color = "#7f7f7f";
			
			//custom_object.disable_element = function (disable) {
			
			document.body.appendChild(div_wrapper);
			
			MWBScanner.gui_demo_controls[id] = custom_object;
			MWBScanner.gui_demo_controls_Array.push(MWBScanner.gui_demo_controls[id]);
		},
		
		//all selects
		init_customSelects: function () {
			//
			var x, i, j, selElmnt, a, b, c;

			/*look for any elements with the class "custom-select":*/
			x = document.getElementsByClassName("custom-select");
			
			function closeAllSelect(elmnt) {
				//if (mwb_debug_print) console.log("pazi mori 2");
				/*a function that will close all select boxes in the document,
				except the current select box:*/
				var x, y, i, arrNo = [];
				x = document.getElementsByClassName("select-items");//if (mwb_debug_print) console.log(x);
				y = document.getElementsByClassName("select-selected");//if (mwb_debug_print) console.log(y);
				for (i = 0; i < y.length; i++) {
					if (elmnt == y[i]) {
						arrNo.push(i)
					} else {
						y[i].classList.remove("select-arrow-active");
					}
				}
				for (i = 0; i < x.length; i++) {
					if (arrNo.indexOf(i)) {
						x[i].classList.add("select-hide");
					}
				}
			}

			for (i = 0; i < x.length; i++) {
				
				selElmnt = x[i].getElementsByTagName("select")[0];
				
				/*for each element, create a new DIV that will act as the selected item:*/
				a = document.createElement("DIV");
				a.dataset.id = selElmnt.id; //custom data-* //to serve as ref to parent select later on click
				a.setAttribute("class", "select-selected");
				a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
				x[i].appendChild(a);
				
				/*for each element, create a new DIV that will contain the option list:*/
				b = document.createElement("DIV");
				b.setAttribute("class", "select-items select-hide");
				
				for (j = 1; j < selElmnt.length; j++) {
					
					/*for each option in the original select element,
					create a new DIV that will act as an option item:*/
					c = document.createElement("DIV");
					c.innerHTML = selElmnt.options[j].innerHTML;
					c.addEventListener("click", function(e) {
						
						/*when an item is clicked, update the original select box,
						and the selected item:*/
						var i, s, h;
						s = this.parentNode.parentNode.getElementsByTagName("select")[0];
						h = this.parentNode.previousSibling;
						
						for (i = 0; i < s.length; i++) {
							
							if (s.options[i].innerHTML == this.innerHTML) {
								s.selectedIndex = i;
								h.innerHTML = this.innerHTML;
								break;
							}
						}
						h.click();
					});
					b.appendChild(c);
				}
				x[i].appendChild(b);
				a.addEventListener("click", function(e) {
					
					/*when the select box is clicked, close any other select boxes,
					and open/close the current select box:*/
					e.stopPropagation();
					closeAllSelect(this);
					this.nextSibling.classList.toggle("select-hide");
					this.classList.toggle("select-arrow-active");
					
					let parent_select = document.getElementById(this.dataset.id);
					let prev_value = MWBScanner.gui_demo_controls[parent_select.id].value;
					
					//but is value actually changed? we need previous to compare (stored in custom object)
					if (parent_select.value != prev_value) parent_select.onchange();
				});
			}
			
			/*if the user goes anywhere outside the select box,
			then close all select boxes:*/
			document.addEventListener("click", closeAllSelect); //onfocusout works, you just have to set it for the right element|(s)
		},
		
		//NOTE: initial_states is used in place of initial_state and is an array for the initial state of each checkbox
		//multiple checkboxes can be created - only 1 text1_label for 1+ text2_values/initial_states
		//change_handler should handle changes from all checkboxes
		//checkboxes are id'd by _0x_i, where i is the index from the array text2_values
		generateCustomCheckboxesControl: function (id, text1_label, text2_values, initial_states, change_handler) {
			//
			//verify aRRays beforehand?
			var div_wrapper = document.createElement('div');
			div_wrapper.style.width = "90%"; //here
			//this is just a root-parent, but if you need to make it a table:
			//div_wrapper.style.border = "1px solid black";
			//div_wrapper.style.display = "table";
			//div_wrapper.style.tableLayout = "fixed";
			
			var span_label = document.createElement('span');
			const whiteSpace = "    ";
			span_label.id = id + "_text1";
			span_label.innerHTML = text1_label + whiteSpace;
			
			var span_padding_workaround = document.createElement('span');
			span_padding_workaround.innerHTML = whiteSpace;
			span_padding_workaround.style.display = "block";
			span_padding_workaround.style.fontSize = "8px";
			
			div_wrapper.appendChild(span_label);
			div_wrapper.appendChild(span_padding_workaround);
			
			//function handler
			function myCheckboxes()
			{
				let control_IDs = this.id.split("_0x_"); //or lastIndexOf
				let group_id =  control_IDs[0];
				let checkbox_id =  control_IDs[1];
				
				MWBScanner.gui_demo_controls[group_id].value[checkbox_id] = this.checked; //update value
				
				//this.id is id + '_' + i, where i is the index from the array text2_values
				//you could also use .dataset.custom_mask or something like that
				
				//test
				//alert(this.checked);
				
				change_handler(); //this should take the value above, which should be the mask
			}
			
			//check if array?
			const checkboxesCount = text2_values.length; // The length property returns the number of elements
			const numberOfColumns = 3; //could be changed to 4 for portrait, but that would involve re-caling all of this
			const checkboxesPerColumn = Math.ceil(checkboxesCount / numberOfColumns);
			
			var div_column_wrapper = document.createElement('div');
			div_column_wrapper.style.width = "100%"; //here
			//div_column_wrapper.style.border = "2px solid black";
			div_column_wrapper.style.display = "table";
			div_column_wrapper.style.tableLayout = "fixed";
			
			var div_columns_Array = [];
			
			for(let j = 0; j < numberOfColumns; j++)
			{
				//
				var div_column = document.createElement('div');
				div_column.style.width = "50%"; //here
				//div_column.style.border = "1px solid black";
				div_column.style.display = "table-cell";
				
				div_columns_Array.push(div_column);
				div_column_wrapper.appendChild(div_columns_Array[j]);
			}
			
			//if (mwb_debug_print) console.log(div_columns_Array);
			let j = 0;
			let column_ref = div_columns_Array[j];
			
			for(let i = 0; i < checkboxesCount; i++)
			{
				//actual checkboxes
				var label_holder = document.createElement('label');
				label_holder.id = id + "_holder";
				label_holder.className = "container";
				label_holder.innerHTML = text2_values[i]; //this element serves as span_value
				
				var input_checkbox = document.createElement('input');
				input_checkbox.id = id + '_0x_' + i; //conversion should be as expected
				input_checkbox.type = "checkbox";
				input_checkbox.checked = initial_states[i];
				input_checkbox.onchange = myCheckboxes;
				
				var span_mark = document.createElement('span');
				span_mark.className = "checkmark";
				
				label_holder.appendChild(input_checkbox);
				label_holder.appendChild(span_mark);
				
				//var span_value = document.createElement('span');
				//span_value.id = id + "_text2";
				//span_value.innerHTML = text2_values[Number(initial_state)];
				
				//div_wrapper.appendChild(label_holder); //all checkboxes in one parent div
				
				if ((checkboxesPerColumn / (i - (checkboxesPerColumn * j))) <= 1.0) j++;
				
				//if (mwb_debug_print) console.log('i and j: ' + i + ' ' + j); //dev test
				
				div_columns_Array[j].appendChild(label_holder);
			}
			
			div_wrapper.appendChild(div_column_wrapper);
			//if (mwb_debug_print) console.log('sound ost');
			var custom_object = { id: id, element_ref: div_wrapper, text2_values: text2_values, event_handler: myCheckboxes, disable_element: null, value: initial_states }; //value is an array here
			
			//no need to use margins?
			//nothing works as needed with span_label
			
			//custom_object.disable_element = function (disable) {
			
			document.body.appendChild(div_wrapper);
			
			MWBScanner.gui_demo_controls[id] = custom_object;
			MWBScanner.gui_demo_controls_Array.push(MWBScanner.gui_demo_controls[id]);
		},
		
		//NOTE: text2_values is replaced with range_values, which serve as [[min, max], ...] array of arrays for 1 or multiple range sliders
		//initial_states is an array for 1 or multiple range sliders
		generateCustomRangeSliderControl: function (id, text1_label, range_values, initial_states, change_handler) {
			//			
			var div_wrapper = document.createElement('div');
			
			var span_label = document.createElement('span');
			const whiteSpace = "    ";
			span_label.id = id + "_text1";			
			//span_label.innerHTML = text1_label + ": " + initial_states[0] + whiteSpace; //later
			
			var text1_label_Values = "";
			
			var div_holder = document.createElement('div');
			div_holder.id = id + "_holder";
			div_holder.className = "slidecontainer";
			
			function myRange() {
				
				let control_IDs = this.id.split("_0x_"); //or lastIndexOf
				let group_id =  control_IDs[0];
				let range_id =  control_IDs[1];
				
				MWBScanner.gui_demo_controls[group_id].value[range_id] = Number(this.value); //update value (for some reason originally its a string, nothing a little conversion can't fix)
				
				var id = this.dataset.id;
				var rangeSlider_text1 = document.getElementById(id + "_text1");
				
				const whiteSpace = "    ";
				let label = rangeSlider_text1.innerHTML;
				
				var rangeSlidersCount = MWBScanner.gui_demo_controls[group_id].value.length;
				
				if (rangeSlidersCount == 1)
				{
					let delimPos = label.lastIndexOf(": ");
				
					label = label.substring(0, delimPos) + ": " + this.value + whiteSpace; //label.substring(delimPos, dateString.length);
				}
				else
				{
					//4
					if (rangeSlidersCount == 4)
					{
						let delimPos = label.lastIndexOf("→ (");
						
						//Perform a global replacement:
						//str.replace(/blue/g, "red");
						let values = MWBScanner.gui_demo_controls[group_id].value + "";
						values = values.replace(/,/g, ", ");
						
						label = label.substring(0, delimPos) + "→ (" + values + ")" + whiteSpace;
					}
				}
				
				rangeSlider_text1.innerHTML = label;
				
				//first the above code will execute, then the GUI will change
				
				change_handler();
			}
			
			//check if array? and both?
			const rangeSlidersCount = range_values.length;
			
			for(let i = 0; i < rangeSlidersCount; i++)
			{
				var span_padding_workaround = document.createElement('span');
				span_padding_workaround.innerHTML = whiteSpace;
				span_padding_workaround.style.display = "block";
				span_padding_workaround.style.fontSize = "6px";
				
				var input_range = document.createElement('input');
				input_range.id = id + '_0x_' + i;
				input_range.type = "range";
				input_range.min = range_values[i][0];
				input_range.max = range_values[i][1];
				input_range.value = initial_states[i];
				input_range.className = "slider_range";
				
				input_range.dataset.id = id; //custom data-*
				input_range.oninput = myRange;
				
				text1_label_Values += initial_states[i] + ", ";
				
				//var span_value = document.createElement('span'); //inside div_holder |change: span_label will be used
				//span_value.id = id + "_text2";
				//span_value.innerHTML = initial_states[i];
				
				div_holder.appendChild(span_padding_workaround);
				div_holder.appendChild(input_range);
				//div_holder.appendChild(span_value); //span_label will be used
			}
			
			if (rangeSlidersCount == 1)
			{
				text1_label_Values = text1_label_Values.substring(0, text1_label_Values.length - 2);
				span_label.innerHTML = text1_label + ": " + text1_label_Values + whiteSpace;
			}
			else
			{
				text1_label_Values = text1_label_Values.substring(0, text1_label_Values.length - 2);
				span_label.innerHTML = text1_label + " → (" + text1_label_Values + ")" + whiteSpace;
			}	
			
			div_wrapper.appendChild(span_label);
			div_wrapper.appendChild(div_holder);
			//div_wrapper.appendChild(span_value); //already done inside div_holder
			
			
			var custom_object = { id: id, element_ref: div_wrapper, text2_values: range_values, event_handler: myRange, disable_element: null, value: initial_states }; //finish here, make it work fully
			
			
			//will init work for dynamic dom elements? -y.
			
			//label_holder.style.position = "absolute";
			//span_value.style.position = "absolute";
			//
			//label_holder.style.marginTop = "-5px";
			//span_value.style.marginLeft = "100px";
			//span_value.style.color = "#7f7f7f";
			
			custom_object.disable_element = function (disable) {
				//
				//var id = this.id;
				//var toggle = document.getElementById(id); //.checked
				//var toggle_holder = document.getElementById(id + "_holder");
				//var toggle_text1 = document.getElementById(id + "_text1");
				//var toggle_text2 = document.getElementById(id + "_text2");
				//
				//if (disable)
				//{
				//	toggle_holder.style.opacity = "0.5"; //use the holder
				//	toggle.disabled = true;
				//}
				//else
				//{
				//	toggle.disabled = false;
				//	toggle_holder.style.opacity = "1.0"; //use the holder
				//}
			};
			
			document.body.appendChild(div_wrapper);
			
			MWBScanner.gui_demo_controls[id] = custom_object;
			MWBScanner.gui_demo_controls_Array.push(MWBScanner.gui_demo_controls[id]);
		}
	}
};

//4. main <<<<<<<<<<<>>>>>>>>>>>
  //<<<<<<<<<<<<<<>>>>>>>>>>>>>
  //----
  //exporting API methods:
  //var Scanner = function(){ var self = this; } //Scanner already exists from MWBScanner_wa.js
  var mwbScanner = null;
  mwbScanner = new Scanner(); //if you don't do this (like, have it commented) nothing works and no error is thrown
  
  //var wasmPath = (typeof setWasmPath == "function") ? setWasmPath() : "index.wasm"; //won't work here with webpack, instead
  var setWasmPath = function (wasmPath) {
	Module["wasmBinaryFile"] = (typeof wasmPath == "string" && wasmPath != "") ? wasmPath : "index.wasm";
  };
  
  
  var module_loaded = false;
  
  //-----
  var Module = {
	//wasmBinaryFile: wasmPath || "index.wasm", //won't work here with webpack
	preRun: [],
	postRun: [],
	print: (function() {
		  return function(text) {
			  //-------------
			  if (module_loaded) return; //<-- this
			  //Wrapped native API methods:
				if (mwb_debug_print) console.log(text); module_loaded = true;
				
				//Get Common Scanner Information GROUP
				BarcodeScanner.MWBgetVersion = Module.cwrap('info_MWBgetVersion', 'string', []);
				
				//Configure Common Scanner Parameters/Settings GROUP
				BarcodeScanner.MWBinitDecoder	 	= mwbScanner.generateMethod('cfg_', 'MWBinitDecoder');
				BarcodeScanner.MWBsetActiveCodes 	= mwbScanner.generateMethod('cfg_', 'MWBsetActiveCodes');
				BarcodeScanner.MWBgetActiveCodes 	= mwbScanner.generateMethod('cfg_', 'MWBgetActiveCodes'); //internal use only
				BarcodeScanner.MWBsetLevel 			= mwbScanner.generateMethod('cfg_', 'MWBsetLevel');
				BarcodeScanner.MWBsetActiveParser 	= mwbScanner.generateMethod('cfg_', 'MWBsetActiveParser');
				
				//Configure Advanced Scanner Parameters/Settings GROUP
				BarcodeScanner.MWBsetActiveSubcodes = mwbScanner.generateMethod('acfg_', 'MWBsetActiveSubcodes');
				BarcodeScanner.MWBsetFlags 			= mwbScanner.generateMethod('acfg_', 'MWBsetFlags');
				BarcodeScanner.MWBsetMinLength 		= mwbScanner.generateMethod('acfg_', 'MWBsetMinLength');
				BarcodeScanner.MWBsetDirection 		= mwbScanner.generateMethod('acfg_', 'MWBsetDirection');
				BarcodeScanner.MWBsetScanningRect 	= mwbScanner.generateMethod('acfg_', 'MWBsetScanningRect');
				BarcodeScanner.MWBgetScanningRect 	= Module.cwrap('acfg_MWBgetScanningRect', 'string', ['number']); //internal use only
				BarcodeScanner.MWBsetParam 			= mwbScanner.generateMethod('acfg_', 'MWBsetParam');
				
				BarcodeScanner.MWBduplicateCodeDelay = mwbScanner.generateMethod('acfg_', 'MWBduplicateCodeDelay'); //is in C++ ? -It is now.
				//wow, this worked better than expected
				
				if (typeof Module._free == "undefined")
				Module._free = Module.cwrap('helper_MWBfree', 'number', ['number']); //internal use only
				
				const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
				//await wait(1);
				
				//scannerConfig(); //notification that scanner is ready can be sent here
				
				if (mwb_debug_print) console.log('back home'); //this point is never reach when async start is called above |(tho in .html sdk_mod has no async) ---strikethrough---
				//since then, this point is infact reached, at some later time while mediaStream inits, and this behaviour is consistent even if await is used
				
				var scanner_event=new CustomEvent("preScannerModuleLoaded",{"detail":"Scanner is ready."});document.dispatchEvent(scanner_event);
				
				
				//API methods assigned with cwrap don't book-keep or have an easy wrapper
				
				//also those methods make direct sdk calls, which might be a problem
				//if done while the decoder is running
				//but because its single threaded that can't happen
				
	};
	})()
  };

//window.Module = Module;
//window.mwbScanner = mwbScanner;

var scannerConfig = function(){};

module.exports = {
	Module: Module,
	mwbScanner: mwbScanner,
	set_scannerConfig: function(scanCfg){ scannerConfig = scanCfg; }, /*scannerConfig: scannerConfig*/ //file will be used
	setWasmPath: setWasmPath
}
//5. index <<<<<<<<<<<>>>>>>>>>>> *external