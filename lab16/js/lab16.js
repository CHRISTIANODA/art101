/**
 * Authors: Ethan Chen <ethchen@ucsc.edu> & Christian Oda <cwoda@ucsc.edu>
 * Created: 4 March 2021
 * License: Public Domain
 **/

// link ajax
function savoryJSON() {
  var comicObj = $.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    datatype: "json",
    data: {
    },
    success: function(data) {
      //set data for comic JSON
      var textData = JSON.stringify(data);
      var imgUrl = data.img;
      var title = data.title;
      var alt = data.alt;
      //add data to output div
      $('#output').html('<h1>' + title + '</h1><img src="' + imgUrl + '" title="' + alt + '">');
      console.log("Mission successful:", textData);
    },
    error: function(xhr, status, strErr) {
      console.log("Mission failed -", strErr);
    },
    complete: function(xhr, status) {
      console.log("You have completed your extraordinary quest");
    }
  })
}

// run function
savoryJSON();
