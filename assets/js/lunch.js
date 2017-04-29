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
// Show time
$(document).ready(function() {
  // Prototype to remove object from array, removes first matching object only
	Array.prototype.remove = function (v) {
    if (this.indexOf(v) != -1) {
      this.splice(this.indexOf(v), 1);
      return true;
    }
    return false;
	}
	// Randomly select restaurant
	var getRestaurant = function(restaurants) {
		var choice = Math.floor(Math.random() * restaurants.length);
	    return restaurants[choice];
	}
	var decision = getRestaurant(restaurantsList);
	// Remove selected restaurant from list
	restaurantsList.remove(decision);
	console.log(restaurantsList);
	// Delay new restaurant message
  setTimeout(function(){
  	// Add new restaurant message
		  $(".conversation").append( "<div class='response'><a href='" + decision.website + "' class='response__text' target='_blank'><p>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" );
    // Force scroll to bottom of page
	  window.scrollTo(0,document.body.scrollHeight);
	// Set message delay
	}, 1000);
  $('#somewhere-else').click(function() {
  	// Check that there are restaurants left
  	if (restaurantsList.length > 0) {
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
			// Remove selected restaurant from list
			restaurantsList.remove(decision);
			console.log(restaurantsList);
			// Delay new restaurant message
		  setTimeout(function(){
		  	// Add new restaurant message
			  $(".conversation").append( "<div class='response'><a href='" + decision.website + "' class='response__text' target='_blank'><p>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" );
	      // Force scroll to bottom of page
			  window.scrollTo(0,document.body.scrollHeight);
			// Set message delay
			}, 750);
		} else {
			// Add new call message bubble
		  $(".conversation").append("<div class='call'><p class='call__text'>Somewhere else.</p></div>");
		  // Force scroll to bottom of page
			window.scrollTo(0,document.body.scrollHeight);
			setTimeout(function(){
			  // Add end-of-the-line message
			  $(".conversation").append("<div class='response'><p class='response__text'>I'm out of ideas.</p></div>");
			  // Remove option to prompt new response
			  $("#somewhere-else").replaceWith('<p class="text-input__option">&#xfeff;</p>');
			  // Force scroll to bottom of page
			  window.scrollTo(0,document.body.scrollHeight);
			// Set message delay
		  }, 750);
		}
	});
});