var restaurantsList = [
  {
    name :    'Cafe 338',
    website : 'http://cafe338.com/'
  },
  {
    name :    'Dirty Burger',
    website : 'http://www.eatdirtyburger.com/whitechapel'
  },
  {
    name :    'E. Pellicci',
    website : 'http://epellicci.com/'
  },
  {
    name :    'Japanese Canteen',
    website : 'http://www.thejapanesecanteen.co.uk/'
  },
  {
    name :    'McDonald’s',
    website : 'http://newscult.com/wp-content/uploads/2017/03/ronald-mcdonald-wink-1.jpg'
  },
  {
    name :    'Nando’s',
    website : 'https://www.nandos.co.uk/eat/restaurants/bethnal-green'
  },
  {
    name :    'Pie pub',
    website : 'http://www.thefloristarms.co.uk/'
  },
  {
    name    : 'Pill Box Kitchen',
    website : 'http://thepillboxkitchen.com/'
  },
  {
    name    : 'Pizza pub',
    website : 'http://www.thecamelpublichouse.london/'
  },
  {
    name    : 'Subway'
  },
  {
    name    : 'The White Hart',
    website : 'http://www.the-white-hart.co.uk/home'
  }
];

// Set up for incremental IDs
var count = 1

$(document).ready(function() {
	// Randomly select restaurant
	var getRestaurant = function(restaurants) {
		var choice = Math.floor(Math.random() * restaurants.length);
	    return restaurants[choice];
	}
	var decision = getRestaurant(restaurantsList);
	// Delay new restaurant message
  setTimeout(function(){
  	console.log('Test');
  	// Add new restaurant message
	  $(".conversation").append("<div class='response'><a class='response__text' id='website" + count + "' target='_blank'><p id='restaurant" + count + "'></p><span class='response__arrow'>&nbsp;⟶</span></a></div>");
    // Inject new random selection into new message
		var decision = getRestaurant(restaurantsList);
		document.getElementById("restaurant" + count).innerHTML = decision.name;
	  $('#website' + count).attr("href", decision.website);
    // Force scroll to bottom of page
	  window.scrollTo(0,document.body.scrollHeight);
	// Set delay length
	}, 750);
  $('#somewhere-else').click(function() {
  	count += 1
  	console.log('website' + count);
    // Add new call message bubble
	  $(".conversation").append("<div class='call'><p class='call__text'>Somewhere else.</p></div>");
		// Force scroll to bottom of page
		window.scrollTo(0,document.body.scrollHeight);
		// Get a new random restaurant
		var getRestaurant = function(restaurants) {
			var choice = Math.floor(Math.random() * restaurants.length);
		    return restaurants[choice];
		}
		var decision = getRestaurant(restaurantsList);
		// Delay new restaurant message
	  setTimeout(function(){
	  	// Add new restaurant message
		  $(".conversation").append( "<div class='response'><a href='" + decision.website + "' class='response__text' id='website" + count + "' target='_blank'><p id='restaurant" + count + "'>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" );
      // Force scroll to bottom of page
		  window.scrollTo(0,document.body.scrollHeight);
		// Set delay length
		}, 750);
	});
});

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};