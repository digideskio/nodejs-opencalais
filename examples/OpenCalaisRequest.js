var licenseID = '',
	opencalais = require('../lib/opencalais')(licenseID),
	gnosis='text/gnosis',
	json='application/json',
	simple='text/simple',
	microformat='text/microformats',
	rdf='XML/RDF',
	content = '<doc><title>Tragedia aérea en Tigre: Quiénes son los dueños de las casas de Nordelta dañadas por el avión</title>' +
			  '<header>http://www.clarin.com/sociedad/barrio-cayo-avion-lujoso-pais_0_1212478980.html</header>' +
			  '<body>Una de ellas quedó totalmente destruida. Y otras dos sufrieron importantes daños. Están ubicadas en La Isla, la zona más cotizada de Nordelta. Allí las viviendas cuestan, en promedio, un millón de dólares.' +
			  'La Isla, el barrio donde cayó ayer el avión piloteado por Andy Deutsch, ex dueño de LAPA, es el más lujoso del megacomplejo Nordelta. Se trata, incluso, de la zona residencial considerada la más exclusiva de la Argentina, habitada por empresarios y celebridades de diferentes rubros.La caída de la aeronave de Deutsch provocó serios daños en tres casas de la zona. Primero golpeó con el techo de un chalé, luego impactó en el pavimento de la calle que separa dos terrenos, y se fue encima de una segunda casa, que sufrió los peores daños. Esta vivienda pertenece a la familia Blaistein, dueña de la cadena de locales de venta de sanitarios y otros materiales para la construcción y el hogar. "La casa sobre la cual cayó la aeronave quedó totalmente destruida; no está habitable para nada”, confirmó esta mañana en declaraciones radiales el intendente de Tigre, Julio Zamora. Por último, las llamas afectaron también la mansión del empresario del fútbol Gustavo Ranucci, un representante de jugadores que supo estar cerca de Marcelo Tinelli cuando el ahora vicepresidente de San Lorenzo se acercó al club con jugadores en el 2008.' +
			  'Las casas más afectadas están situadas frente a la de la hija de Eduardo Costantini, desarrollador de Nordelta, que no está en este momento en el país. Y también están muy cerca de donde vive el periodista Marcelo Longobardi.' +
			  'La Isla tiene en total 273 lotes, rodeados de verde y espejos de agua, a solamente una hora de la Capital Federal. Las casas más chicas del barrio tienen 500 metros cuadrados de superficie cubierta, y hay de hasta 1.500 metros cuadrados. En promedio, las operaciones de compra de inmuebles del lugar ronda el millón de dólares.</body></doc>';

opencalais.request(content, {"outputFormat":json}, function(err,res) {
  console.log(JSON.stringify(res, null, 4));
});