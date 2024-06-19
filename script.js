function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
  
      // Create a new 'recommendation' element and set its value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = '<span>&#8220;</span>' + recommendation.value + '<span>&#8221;</span>';
  
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element);
  
      // Reset the value of the textarea
      recommendation.value = "";
  
      // Show success popup
      showPopup(true);  // Invoke showPopup with true to show the popup
    }
  }
  function showPopup(show) {
    var popup = document.getElementById('popup');
    document.getElementById('recommend_btn').addEventListener('click', addRecommendation);
    if (show) {
        popup.style.visibility = 'visible';
    } else {
        popup.style.visibility = 'hidden';
    }
}



  