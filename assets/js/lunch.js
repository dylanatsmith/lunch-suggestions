var restaurantsList = [
  // Clerkenwell options
  { name :    'Arancini Brothers',
    website : '' },
  { name :    'Brewdog',
    website : '' },
  { name :    'Benugo',
    website : '' },
  { name :    'Chick',
    website : '' },
  { name :    'Clerkenwell Kitchen',
    website : '' },
  { name :    'Daddy Donkey',
    website : '' },
  { name :    'Exmouth Arms',
    website : '' },
  { name :    'Itsu',
    website : '' },
  { name :    'Jerkkies',
    website : '' },
  { name :    'La Cocinita',
    website : '' },
  { name :    'La Forchetta',
    website : '' },
  { name :    'Leon',
    website : '' },
  { name :    'Mugen',
    website : '' },
  { name :    'Nando’s',
    website : '' },
  { name :    'Panzo',
    website : '' },
  { name :    'Pieminister',
    website : '' },
  { name :    'Pret',
    website : '' },
  { name :    'Risotto man',
    website : '' },
  { name :    'Subway',
    website : '' },
  { name :    'Tikkarito',
    website : '' },
  { name :    'The Crown Tavern',
    website : '' },
  { name :    'United Chip',
    website : '' },
  { name :    'Veggie Pret',
    website : '' },
  // Non-specific suggestions
  { name :    'Walk down Exmouth Market',
    website : '' },
  { name :    'Walk over to Leather Lane',
    website : '' },
  { name :    'Hike to Whitecross Market',
    website : '' },
  { name :    'Order Deliveroo',
    website : '' }
];

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
	// Delay new restaurant message
  setTimeout(function(){
  	// Add new restaurant message
		  $(".conversation").append( "<div class='response'><a href='" + decision.website + "' class='response__text' target='_blank'><p>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" );
    // Force scroll to bottom of page
	  window.scrollTo(0,document.body.scrollHeight);
	// Set message delay
	}, 1000);
	setTimeout(function(){
		// Allow new suggestion
	  $("#somewhere-else").text('Somewhere else.');
	}, 2000);
  $('#somewhere-else').click(function() {
  	// Check that there are restaurants left
  	if (restaurantsList.length > 0) {
	    // Add new call message bubble
		  $(".conversation").append("<div class='call'><p class='call__text'>Somewhere else.</p></div>");
		  // Remove somewhere else option
			$("#somewhere-else").html('&#xfeff;');
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
			// Delay new restaurant message
		  setTimeout(function(){
		  	// Add new restaurant message
			  $(".conversation").append( "<div class='response'><a href='" + decision.website + "' class='response__text' target='_blank'><p>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" );
	      // Force scroll to bottom of page
			  window.scrollTo(0,document.body.scrollHeight);
			// Set message delay
			}, 1000);

			// Allow new suggestion
			setTimeout(function(){
			  $("#somewhere-else").html('Somewhere else.');
		  }, 2000);
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
		  }, 1000);
		}
	});
});