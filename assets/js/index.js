	
	// For highlighting ascii values in a given range

	document.getElementsByClassName('ascii-submit')[0].addEventListener('click', function() {
		var from = document.getElementsByClassName("ascii-from")[0].value;
		var to = document.getElementsByClassName("ascii-to")[0].value;
		var counter = 0;

		for (var i = from ; i <= to; i++) {

			var asciiCode = document.getElementsByClassName(i);
			var ClickedCodeCount = asciiCode.length;

			for (var j = 0; j < ClickedCodeCount; j++) {
				asciiCode[j].classList.add("highlight");
			}

			if(counter > 1000) {
				break;
			}

			counter ++;
		}

		
	}, false);


	// For highlighting hex values in a given range

	document.getElementsByClassName('hex-submit')[0].addEventListener('click', function() {
		var from = document.getElementsByClassName("hex-from")[0].value;
		var to = document.getElementsByClassName("hex-to")[0].value;
		var counter = 0;

		while(from != to) {

			var hex = document.getElementsByClassName(from);
			var ClickedCodeCount = hex.length;

			for (var j = 0; j < ClickedCodeCount; j++) {
				hex[j].classList.add("highlight");
			}

			var from = (parseInt(from, 16) + 1).toString(16);

			if (from == to) {
				var hex = document.getElementsByClassName(from);
				var ClickedCodeCount = hex.length;

				for (var j = 0; j < ClickedCodeCount; j++) {
					hex[j].classList.add("highlight");
				}

			}

			if(counter > 1000) {
				break;
			}

			counter ++;
		}
		
	}, false);




	// For Handling file upload

	document.getElementById('file').addEventListener('change', handleFileSelect, false);

	function handleFileSelect(evt) {
		var file = evt.target.files; 
		var reader = new FileReader();
		reader.readAsText(file[0]);

		reader.onload = function(e) {
		var content = reader.result;
			render(content);
		};

	}



	// For rendering the Hex and Ascii codes

	function render(content) {

		var hexCodeString = "";
		var asciiCodeString = ""; 
		var count = content.length;

		for (var i = 0; i < count; i++) {
			var hex = content[i].charCodeAt(0).toString(16);
			var ascii = content[i].charCodeAt(0);

			var uniqueClass = hex + ascii;

			hexCodeString += `<div class="hex-block ${uniqueClass} ${hex} ${ascii}">${hex}</div>`;
			asciiCodeString += `<div class="ascii-block ${uniqueClass} ${hex} ${ascii}">${ascii}</div>`;
		}


		document.getElementsByClassName('hex-block-container')[0].innerHTML = hexCodeString;
		document.getElementsByClassName('ascii-block-container')[0].innerHTML = asciiCodeString;	

		var hexBlock = document.getElementsByClassName('hex-block');
		var asciiBlock = document.getElementsByClassName('ascii-block');


		// For adding click event listener for Hex codes
		var count = hexBlock.length;
		for (var i = 0; i < count; i++) {

			hexBlock[i].addEventListener("click", function(){

			var highlight = document.getElementsByClassName("highlight");
			var highlightCount = highlight.length;

			for (var k = 0; k < highlightCount; k++) {
				highlight[0].classList.remove("highlight");
			}

			var classNames = this.className.split(" "); 
			var ClickedhexCode = document.getElementsByClassName(classNames[1]);
			var ClickedCodeCount = ClickedhexCode.length;

			for (var j = 0; j < ClickedCodeCount; j++) {
				ClickedhexCode[j].classList.add("highlight");
			}

			}, false);

		}

		// For adding click event listener for Ascii codes

		var asciiBlock = document.getElementsByClassName('ascii-block');	
		var count = asciiBlock.length;

		for (var i = 0; i < count; i++) {
			asciiBlock[i].addEventListener("click", function(){

				var highlight = document.getElementsByClassName("highlight");
				var highlightCount = highlight.length;

				for (var k = 0; k < highlightCount; k++) {
					highlight[0].classList.remove("highlight");
				}

				var classNames = this.className.split(" "); 
				var ClickedasciiCode = document.getElementsByClassName(classNames[1]);
				var ClickedCodeCount = ClickedhexCode.length;


				for (var j = 0; j < ClickedCodeCount; j++) {
					ClickedasciiCode[j].classList.add("highlight");
				}

			}, false);

		}


	}







 /*  

	Logic explanation:

	Step 1 : First we get the file contents using javascript file api  ( Line no 74)
	Step 2 : Then we call render function for rendering the necessary HTML needed. ( Line no 92) 
	Step 3 : After loading the HTML we add "click" event listener on both Hex and Ascii codes (Line no 120 and Line no 147)
	Step 4 : I have added both Hex code and Ascii code for a given character as class so when we click a Hex code 
			 and add highlight  class to it it gets added to its corresponding Ascii as well. So we can avoid one extra step
			 to convert Hex to Ascii and vice and versa for highlighting.
	Step 5 : For selecting a range for Ascii we increament a loop from its "from" to its "to" and add highlight class to it since 
			 every Ascii code has its corresponding  Hex code as class to it. It gets highlight as well.
	Step 6 : For selecting a range for Hex we do the same.
	Step 7 : Both the range codes has a limit of 1000 to prevent browser from crashing. Consedering UX guidlines. So atleast 1000 values 
			 will be shown and page will not be unresponsive. 		   
	

	You can Cross check values on following links: 
	https://xem.github.io/hex/viewer_input_es6.html  
	https://ascii.cl/
	
	
	Output explanation: 

	1 .
	If you upload given text file (Provieded in the zip) for as a test input which consist of text "h i".
	Hex output will be : 68 (hex for lowercase h), 20 (hex for space),  69 (hex for lowercase i)
	Ascii output will be : 104 (Ascii for lowercase h),  32 (Ascii for space),  105 (Ascii for lowercase i) 

	if you click on 68 then 68 and 104 will highlight and vece versa.
	since  both are hex and Ascii values for lowercase h respectively. 

	2.
	For range values if you select 68 (hex for lowercase h) to 69 (hex for lowercase i)
	it will highlight avalaible hex values in the range that is 68 and 69 and
	its corresponding Ascii values 104 (Ascii for lowercase h) and 105 (Ascii for lowercase i).
	and same for the Ascii.


 */




