var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var flag = $('#flag');

$('#search').click(searchCountries);

$('#country-name').keypress(function() {
	if(event.which == 13) searchCountries();
});
		

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var code = item.alpha3Code.toLowerCase();
		var table = $('<table>').addClass('countries-table').appendTo(countriesList);
		var tableHeader = $('<tr>').addClass('table-header').appendTo(countriesList);
		var flag = $('<th>').addClass('flag').appendTo(tableHeader);
		$('<img>').attr('src', 'https://restcountries.eu/data/' + code + '.svg').appendTo(flag);
		$('<th>').addClass('name').text(item.name).appendTo(tableHeader);

		var tableContent = $('<tbody>').addClass('table-content').appendTo(countriesList);

		var capital = $('<tr>').addClass('capital').appendTo(tableContent);
		$('<td>').text('Capital city').appendTo(capital);
		$('<td>').text(item.capital).appendTo(capital);

		var region = $('<tr>').addClass('region').appendTo(tableContent);
		$('<td>').text('Region').appendTo(region);
		$('<td>').text(item.region).appendTo(region);

		var population = $('<tr>').addClass('population').appendTo(tableContent);
		$('<td>').text('Population').appendTo(population);
		$('<td>').text(item.population + ' people').appendTo(population);

		var landArea = $('<tr>').addClass(' Land area').appendTo(tableContent);
		$('<td>').text('Land area').appendTo(landArea);
		$('<td>').text(item.landArea + ' sq. km').appendTo(landArea);

		var language = $('<tr>').addClass('language').appendTo(tableContent);
		$('<td>').text('Language').appendTo(language);
		$('<td>').text(item.language + ' lang').appendTo(language);

		var currency = $('<tr>').addClass('currency').appendTo(tableContent);
		$('<td>').text('Currency').appendTo(currency);
		$('<td>').text(item.currencies).appendTo(currency);
	});	
}

