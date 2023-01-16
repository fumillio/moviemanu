function getStarsFromVote(vote) {
    var fullStars = Math.floor(vote);
    var halfStar = vote % 1 >= 0.5 ? 1 : 0;
    var emptyStars = 5 - fullStars - halfStar;
  
    var starsHTML = "";
    for (var i = 0; i < fullStars; i++) {
      starsHTML += '<span class="star full"></span>';
    }
    if (halfStar) {
      starsHTML += '<span class="star half"></span>';
    }
    for (var i = 0; i < emptyStars; i++) {
      starsHTML += '<span class="star empty"></span>';
    }
  
    return starsHTML;
}