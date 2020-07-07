

$(document).ready(function() {
    $("#footer").load("footer.html");
    
    $('#search').click(function(event){
      
      $('#display_at').empty()
      $('#display_kt').empty()
      $('#display_st').empty()
      $('#title').empty()
      
      var searchTerm = $('#term').val().trim();
      var i=0;
      console.log("searching for: " + searchTerm);
      $.get("/api/search?term=" + searchTerm).then((res) => {
        //o$('#display').text("Hiiiiiiiiii " );
        
        console.log(JSON.parse(res));
        var stringify = JSON.parse(res);
        $('#title').append(searchTerm);

        for (var i = 0; i < 3; i++) {
          
            $('#display_at').append(i+1 + ". " + stringify[i]['element_name'] + ":  " + stringify[i]['description']);
            $('#display_at').append("<br>");
            //console.log(stringify[i]['element_name'] + "  ----  "+ stringify[i]['description']);
        }
        
        for (var i = 3; i < 6; i++) {
          
            $('#display_kt').append(i-2 + ". " + stringify[i]['element_name'] + ":  " + stringify[i]['description']);
            $('#display_kt').append("<br>");
            //console.log(stringify[i]['element_name'] + "  ----  "+ stringify[i]['description']);
        }
        for (var i = 6; i < 9; i++) {
          
            $('#display_st').append(i-5 + ". " + stringify[i]['element_name'] + ":  " + stringify[i]['description']);
            $('#display_st').append("<br>");
            //console.log(stringify[i]['element_name'] + "  ----  "+ stringify[i]['description']);
        }
        


      })
    })
    
});
 
 