var restaurantsList = [
  // Clerkenwell options
  { name :    'Arancini Brothers',
    website : '//arancinibrothers.com/#location' },
  { name :    'Brewdog',
    website : '//brewdog.com/bars/uk/clerkenwell' },
  { name :    'Benugo',
    website : '//benugo.com/cafes/clerkenwell' },
  { name :    'Chick',
    website : '#' },
  { name :    'Clerkenwell Kitchen',
    website : '//theclerkenwellkitchen.co.uk/' },
  { name :    'Daddy Donkey',
    website : '//daddydonkey.co.uk/' },
  { name :    'Exmouth Arms',
    website : '//exmoutharms.com/' },
  { name :    'Itsu',
    website : '//itsu.com/location/cowcross-street/' },
  { name :    'Jerkkies',
    website : '//jerkkies.com/' },
  { name :    'La Cocinita',
    website : '//facebook.com/lacocinitastreetfood/' },
  { name :    'La Forchetta',
    website : '#' },
  { name :    'Leon',
    website : '//leon.co/restaurants/farringdon/' },
  { name :    'Mugen',
    website : '//mugenholdings.com/takeaway-shop.html' },
  { name :    'Nando’s',
    website : '//nandos.co.uk/restaurants/farringdon' },
  { name :    'Panzo',
    website : '//panzopizza.com/' },
  { name :    'Pieminister',
    website : '//pieminister.co.uk/restaurants/leather-lane/' },
  { name :    'Pret',
    website : '//pret.co.uk/en-gb/find-a-pret/ec1r0at/' },
  { name :    'Risotto man',
    website : '//sporeboys.com/about.html' },
  { name :    'Subway',
    website : '//subway.com/en-gb/findastore' },
  { name :    'Tikkarito',
    website : '//tikkarito.co.uk/#news-section' },
  { name :    'The Crown Tavern',
    website : '//thecrowntavernec1.co.uk/' },
  { name :    'United Chip',
    website : '//unitedchip.co.uk/' },
  { name :    'Veggie Pret',
    website : '//pret.co.uk/en-gb/find-a-pret/ec1r0at/' },
  // Non-specific suggestions
  { name :    'Walk down Exmouth Market',
    website : '//exmouth.london/' },
  { name :    'Walk over to Leather Lane',
    website : '//leatherlanestars.wordpress.com/the-market/' },
  { name :    'Hike to Whitecross Market',
    website : '//bitecross.co.uk/' },
  { name :    'Order Deliveroo',
    website : '//deliveroo.co.uk/restaurants/london/clerkenwell?postcode=EC1R0AT' }
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