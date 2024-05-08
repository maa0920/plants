function createUrls() {
                    var baseURLs = [
                        { name: "Strader's Garden Centers", url: "http://plants.straders.net/12150020/Results?Keyword={PLANT_NAME}&CatAny=True&Height=Any&HeightDim=feet&Spread=Any&SpreadDim=feet&FlowerColor=&FlowerColorJS=&FoliageType=&FoliageColor=&FoliageColorJS=&FallColor=&FallColorJS=&SunShade=&Moisture=&Submit=Search" },
                        { name: "Flowerama Columbus", url: "https://www.floweramacolumbus.com/flowers/search/?search={PLANT_NAME}&unscript=" },
                        { name: "Fireside Floral Studio", url: "https://firesidefloralstudio.com/catalogsearch/result/?q={PLANT_NAME}" },
                        { name: "From You Flowers", url: "https://www.fromyouflowers.com/search?key={PLANT_NAME}" }
                    ]; // Array of base URLs with store names
                    var plantName = document.getElementById("plantName").value;
                    var outputs = [];
                    
                    // Update the paragraph with the input value
                    document.getElementById("resultsFor").textContent = "Results for: " + plantName;
                    

                    // Loop through each base URL and construct the corresponding URL and output
                    baseURLs.forEach(function(baseURL) {
                        // Replace the placeholder {PLANT_NAME} with the actual plant name in the URL
                        var finalURL = baseURL.url.replace("{PLANT_NAME}", encodeURIComponent(plantName));

                        // Construct the output string using the store name
                        var output = "<a href='" + finalURL + "'>" + baseURL.name + "</a>";

                        outputs.push(output); // Store each output in the outputs array
                    });

                    // Clear previous output
                    document.getElementById("output").innerHTML = "";

                    // Display all outputs in the "output" div
                    document.getElementById("output").innerHTML = outputs.join("<br>");
}
function switchToSpringStyles() {
    document.getElementById("springStylesheet").disabled = false;
    document.getElementById("autumnStylesheet").disabled = true;
    document.getElementById("outdoorList").style.display = "block";
    document.getElementById("indoorList").style.display = "none";
    }

function switchToAutumnStyles() {
    document.getElementById("springStylesheet").disabled = true;
    document.getElementById("autumnStylesheet").disabled = false;
    document.getElementById("outdoorList").style.display = "none";
    document.getElementById("indoorList").style.display = "block";
    }



/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/form.js"></script>
	<script src="jquery-3.7.0.min.js"></script>
<!--	<script src="https://unpkg.com/ai-taxonomist/dist/src/index.js?module" type="module"></script>
<ai-taxonomist apiKey="YOUR_API_KEY"></ai-taxonomist> -->*/


