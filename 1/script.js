function createDiv() {
$(document).ready(function () {  
    $(document).ready(function() {
        var test = {
          id: "div",
          class: "divclass",
          css: {
            "color": "Green"
          }
        };
        var $div = $("<div>", test);
        $div.html("New Div tag created");
        $("body").append($div);
      });
      }  