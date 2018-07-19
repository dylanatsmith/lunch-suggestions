var restaurantsList = [
  { name :    'Arancini Brothers',
    website : 'https://arancinibrothers.com/#location' },
  { name :    'Brewdog',
    website : 'https://brewdog.com/bars/uk/clerkenwell' },
  { name :    'Benugo',
    website : 'https://benugo.com/cafes/clerkenwell' },
  { name :    'Chick',
    website : '#' },
  { name :    'Clerkenwell Kitchen',
    website : 'http://theclerkenwellkitchen.co.uk/' },
  { name :    'Daddy Donkey',
    website : 'http://www.daddydonkey.co.uk/' },
  { name :    'Exmouth Arms',
    website : 'http://www.exmoutharms.com/' },
  { name :    'Itsu',
    website : 'https://itsu.com/location/cowcross-street/' },
  { name :    'Jerkkies',
    website : 'https://jerkkies.com/' },
  { name :    'La Cocinita',
    website : 'https://facebook.com/lacocinitastreetfood/' },
  { name :    'La Forchetta',
    website : '#' },
  { name :    'Leon',
    website : 'https://leon.co/restaurants/farringdon/' },
  { name :    'Mugen',
    website : 'https://mugenholdings.com/takeaway-shop.html' },
  { name :    'Nando’s',
    website : 'https://nandos.co.uk/restaurants/farringdon' },
  { name :    'Panzo',
    website : 'https://panzopizza.com/' },
  { name :    'Pieminister',
    website : 'https://pieminister.co.uk/restaurants/leather-lane/' },
  { name :    'Pret',
    website : 'https://pret.co.uk/en-gb/find-a-pret/ec1r0at/' },
  { name :    'Risotto man',
    website : 'http://sporeboys.com/about.html' },
  { name :    'Subway',
    website : 'https://subway.com/en-gb/findastore' },
  { name :    'Tikkarito',
    website : 'https://tikkarito.co.uk/#news-section' },
  { name :    'The Crown Tavern',
    website : 'https://thecrowntavernec1.co.uk/' },
  { name :    'United Chip',
    website : 'http://www.unitedchip.co.uk/' },
  { name :    'Veggie Pret',
    website : 'https://pret.co.uk/en-gb/find-a-pret/ec1r0at/' },
  // A few non-specific suggestions
  { name :    'Walk down Exmouth Market',
    website : 'http://exmouth.london/' },
  { name :    'Walk over to Leather Lane',
    website : 'https://leatherlanestars.wordpress.com/the-market/' },
  { name :    'Hike to Whitecross Market',
    website : 'http://www.bitecross.co.uk/' },
  { name :    'Order Deliveroo',
    website : 'https://deliveroo.co.uk/restaurants/london/clerkenwell?postcode=EC1R0AT' }
];

var bubbleFade    = 300;
var suggestionDelay = 1000;
var promptDelay   = 3000;

function allowNewSuggestion() {
	setTimeout(function() {
		$("#somewhere-else").html('Somewhere else.');
	}, promptDelay)
}

function scrollToBottom() {
	window.scrollTo(0,document.body.scrollHeight);
}

Array.prototype.remove = function (v) {
  if (this.indexOf(v) != -1) {
    this.splice(this.indexOf(v), 1);
    return true;
  }
  return false;
}

function showNewRestaurant() {

	var getRestaurant = function(restaurants) {
		var choice = Math.floor(Math.random() * restaurants.length);
	    return restaurants[choice];
	}

	var decision = getRestaurant(restaurantsList);
	
	restaurantsList.remove(decision); // So it can't be chosen again
  
  setTimeout(function(){
		$( "<div class='response'><a href='" + decision.website + "' class='response__text' target='_blank'><p>" + decision.name + "</p><span class='response__arrow'>&nbsp;⟶</span></a></div>" ).hide().appendTo(".conversation").fadeIn(bubbleFade);
	  scrollToBottom();
	}, suggestionDelay);
}

$(document).ready(function() {

	showNewRestaurant();
	allowNewSuggestion();

  $('#somewhere-else').click(function() {

  	$("<div class='call'><p class='call__text'>Somewhere else.</p></div>").hide().appendTo(".conversation").fadeIn(bubbleFade); // Add new request chat bubble

  	if (restaurantsList.length > 0) {        // Check that there are restaurants left

			$("#somewhere-else").html('&#xfeff;'); // Prevent request for new restaurant
			showNewRestaurant();
			scrollToBottom();
			allowNewSuggestion()

		} else {

			setTimeout(function(){
			  $("<div class='response'><p class='response__text'>I'm out of ideas.</p></div>").hide().appendTo(".conversation").fadeIn(bubbleFade);
			  $("#somewhere-else").replaceWith('<p class="text-input__option">&#xfeff;</p>'); // Remove option to prompt new response
			  scrollToBottom();
		  }, suggestionDelay);

		}
	});
});