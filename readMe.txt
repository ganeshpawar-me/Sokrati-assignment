 	Above project is available at https://portfolio-37b00.firebaseapp.com/

	Logic explanation:

	1. 
	First we get the file contents using javascript file api  ( Line no 74).

	2. 
	Then we call render function for rendering the necessary HTML needed. ( Line no 92) .

	3. 
	After loading the HTML we add "click" event listener on both Hex and Ascii codes (Line no 120 and Line no 147).

	4.
	I have added both Hex code and Ascii code for a given character as class so when we click a Hex code and add highlight class to it. it gets added to its corresponding Ascii as well. So we can avoid one extra step to convert Hex to Ascii and vice and versa for highlighting.

	5.
	For selecting a range for Ascii we increament a loop from its "from" to its "to" and add highlight class to it. Since every Ascii code has its corresponding  Hex code as class to it. It gets highlight as well.

	6.
	For selecting a range for Hex we do the same.

	7.
	Both the range codes has a limit of 1000 to prevent browser from crashing. Consedering UX guidlines. So atleast 1000 values will be shown and page will not be unresponsive. 		   
	

	You can Cross check Hex and Ascii values on following links: 
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