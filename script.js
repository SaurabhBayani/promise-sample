//	Using Simple Callback
$.getJSON('http://hipsterjesus.com/api/', function(data) {
  $('body').append(data.text);
});



//	Using promise returned by $.getJSON
/*var promise = $.getJSON('http://hipsterjesus.com/api/');
promise.then(function(data){
	$('body').append(data.text);
}); */


//	Pyramid of doom, Always AVOID it
/*$.getJSON('http://hipsterjesus.com/api/', function(data) {
	console.info('Inside First Callback');
  	
  	$.getJSON('http://hipsterjesus.com/api/', function(data) {
  		console.info('Inside Second Callback');
  		
  		$.getJSON('http://hipsterjesus.com/api/', function(data) {
  			console.info('Inside Third Callback');
  			
  			$.getJSON('http://hipsterjesus.com/api/', function(data) {
  				console.info('Inside Fourth Callback');
			});
		
		});
	
	});

});*/




//	Promise inside promise (Can also form Pyramid of DOOM)
/*var promise  = $.getJSON('http://hipsterjesus.com/api/');

promise.then(function(data) {
	console.info('Inside first promise');
	
	var promise2  = $.getJSON('http://hipsterjesus.com/api/');
	promise2.then(function(data){
		console.info('Inside Second promise')

		var promise3  = $.getJSON('http://hipsterjesus.com/api/');
		promise3.then(function(data){
			console.info('Inside Third promise')
			
			var promise4  = $.getJSON('http://hipsterjesus.com/api/');
			promise4.then(function(data){
				console.info('Inside Fourth promise')
			});
		});
	});
}); */



//	Promise, By proper way(Chaining)
/*var promise  = $.getJSON('http://hipsterjesus.com/api/');

promise.then(function (data) {
	console.info('Inside first promise');
	return $.getJSON('http://hipsterjesus.com/api/');
}).then(function (data) {
	console.info('Inside Second promise');
	return $.getJSON('http://hipsterjesus.com/api/');
}).then(function (data) {
	console.info('Inside Third promise');
	return $.getJSON('http://hipsterjesus.com/api/');
}).then(function (data) {
	console.info('Inside Fourth promise');
}).catch(function (error) {
	console.warn('There is some error', error);
}); */



//	When-then(jQuery) like structure for promise
/*Promise.all([
	$.getJSON('http://hipsterjesus.com/api/'),
	$.getJSON('http://hipsterjesus.com/api/'),
	$.getJSON('http://hipsterjesus.com/api/'),
	$.getJSON('http://hipsterjesus.com/api/')
]).then(function(values){
	console.warn('Inside First promise');
	console.log(values[0])
	console.warn('Inside Second promise');
	console.log(values[1])
	console.warn('Inside Third promise');
	console.log(values[2])
	console.warn('Inside Fourth promise');
	console.log(values[3])
})*/