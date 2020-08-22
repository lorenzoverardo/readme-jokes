const axios = require('axios');
var joke;
var renderJoke;

async function main(){
	try{
		async function getJoke(){
			let response = await axios.get("https://jokes-api-lv.ew.r.appspot.com/random_joke");
			let joke = response.data;
			return joke;
		};
		joke = await getJoke();
		
		if (joke.setup) {
			renderJoke = 
			`<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
				<foreignObject width="100%" height="100%">
					<div xmlns="http://www.w3.org/1999/xhtml">
						<style>
							.container {
								border: 5px;
								border-radius: 10px;
								background: #242423;
							}
							.text{
								padding-top: 1px;
								font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
								text-align: center;
								color: #ffffff;
							}
							.name {
								text-align: right;
								font-size: 10px;
								padding-right: 5px;
								padding-bottom: 2px;
							}
						</style>
						<div class="container">
							<div class="text">
								<p>${joke.setup}</p>
								<p>${joke.punchline}</p>
								<p class="name">readme jokes by lorenzoverardo</p>
							</div>
						</div>
					</div>
				</foreignObject>
			</svg>`;
		} else {
			renderJoke = 
			`<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
				<foreignObject width="100%" height="100%">
					<div xmlns="http://www.w3.org/1999/xhtml">
						<style>
							.container {
								border: 5px;
								border-radius: 10px;
								background: #242423;
							}
							.text{
								padding-top: 1px;
								padding-left: 10px;
								padding-right: 10px;
								font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
								text-align: center;
								color: #ffffff;
							}
							.name {
								text-align: right;
								font-size: 10px;
								padding-bottom: 2px;
							}
						</style>
						<div class="container">
							<div class="text">
								<p>${joke.punchline}</p>
								<p class="name">readme jokes by lorenzoverardo</p>
							</div>
						</div>
					</div>
				</foreignObject>
			</svg>`;
		}
	}catch(UnhandledPromiseRejection){
		return main();
	}
}
main();
module.exports = async (req, res) => {
	res.setHeader("Content-Type", "image/svg+xml");
	res.send(renderJoke);
};
setInterval(function(){ main(); }, 500);