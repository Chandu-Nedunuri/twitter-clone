const url = "https://jsonplaceholder.typicode.com/users";
var searchList = [];
$.ajax({
    type: "GET",
    url: url,
    data: "JSON",
    // data: form.serialize(), // serializes the form's elements.
    success: function(data) {
        var name = []
        for (var i = 0; i <= data.length; i++) {
            var obj = data[i]
            name = obj.name;
            searchList.push(name)
                // console.log(searchList);
        }
    }
})

console.log(searchList);

// var inputBox = document.getElementById('searchFilter');
// inputBox.onkeyup = function(evt) {
//     $("#autocomplete").empty();

//     var query = $('#searchFilter').val();

//     // escape regex
//     query = query.replace(
//         /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"
//     );
//     var queryRegExp = new RegExp('^' + query, 'i');

//     var results = searchList.filter(function(item) {
//         console.log(searchList)
//         return queryRegExp.test(item);

//     });

//     results.forEach(function(item) {

//         $("#autocomplete").append("<li>" + item + "</li>");
//     });

// }



// Search Filter
$('#searchFilter').autocomplete({
    source: searchList
});

//active class

$(document).ready(function() {
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});