function find_search_results(json_file){
  d3.json(json_file, function(data)
  {
    console.log(data['response']['docs'][0]['title_display']);
    let needle1 = 'Cabell';
    let needle2 = 'Charlottesville';
    let needle3 = 'Albemarle';
    let needle4 = 'Virginia';
    let needle5 = 'Va.';
    let needle6 = 'Va';
    let needle7 = 'music';
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;
    Object.entries(data_parsed).map( (b) => {
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }
       else if (key.includes(needle1) || items.includes(needle1))        {
         console.log("Related to Cabell Hall(s)");
         search_results = search_results + 1;
      }
      else if (key.includes(needle2) || items.includes(needle2)) {
                console.log("Related to Charlottesville");
                   search_results = search_results + 1;
    }
    else if (key.includes(needle3) || items.includes(needle3)) {
        console.log("Related to Charlottesville");
           search_results = search_results + 1;
    }
    else if (key.includes(needle4) || items.includes(needle4)) {
        console.log("Related to Charlottesville");
           search_results = search_results + 1;
    }
    else if (key.includes(needle5) || items.includes(needle5)) {
        console.log("Related to Charlottesville");
           search_results = search_results + 1;
    }
    else if (key.includes(needle6) || items.includes(needle6)) {
        console.log("Related to Charlottesville");
           search_results = search_results + 1;
    }
    else if (key.includes(needle7) || items.includes(needle7)) {
        console.log("Related to music at UVa");
           search_results = search_results + 1;
  }
       });
       if (search_results > 0) {
       $('#results').append(data['response']['docs'][0]['title_display'] + '<br>');
}
       //this will be a link
        // $('#results').append(json_file);
  console.log("number of search hits: " + search_results);
  });
}

// Get zoe to look at how to get the longer list of Json files from the file.
function search(){
  var list_of_json = ["https://search.lib.virginia.edu/catalog/u6731744.json",
  "https://search.lib.virginia.edu/catalog/u6098997.json",
  "https://search.lib.virginia.edu/catalog/u5390684.json",
  "https://search.lib.virginia.edu/catalog/u1750128.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161173.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161172.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2160729.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161270.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161038.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2160562.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2160622.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161447.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161221.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161218.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161217.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161215.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161216.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2154054.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161141.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2155943.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2159792.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2162580.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161214.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2153909.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2153907.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2161177.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2160320.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2162331.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2157687.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2160319.json",
  "https://search.lib.virginia.edu/catalog/uva-lib:2156671.json",
  "https://search.lib.virginia.edu/catalog/u2120757.json",
  "https://search.lib.virginia.edu/catalog/u2152806.json",
  "https://search.lib.virginia.edu/catalog/u2789131.json",
  "https://search.lib.virginia.edu/catalog/u3714150.json",
  "https://search.lib.virginia.edu/catalog/u3860734.json",
  "https://search.lib.virginia.edu/catalog/u2759547.json",
  "https://search.lib.virginia.edu/catalog/u2789363.json",
  "https://search.lib.virginia.edu/catalog/u2096724.json",
  "https://search.lib.virginia.edu/catalog/u2110347.json",
  "https://search.lib.virginia.edu/catalog/u2786820.json",
  "https://search.lib.virginia.edu/catalog/u2493611.json",
  "https://search.lib.virginia.edu/catalog/u2079811.json",
  "https://search.lib.virginia.edu/catalog/u2789057.json",
  "https://search.lib.virginia.edu/catalog/u2789225.json",
  "https://search.lib.virginia.edu/catalog/u2245956.json",
  "https://search.lib.virginia.edu/catalog/u3943814.json",
  "https://search.lib.virginia.edu/catalog/u1966989.json",
  "https://search.lib.virginia.edu/catalog/u1900234.json",
  "https://search.lib.virginia.edu/catalog/u2100975.json",
  "https://search.lib.virginia.edu/catalog/u1749058.json",
  "https://search.lib.virginia.edu/catalog/u3931089.json",
  "https://search.lib.virginia.edu/catalog/u3900733.json",
  "https://search.lib.virginia.edu/catalog/u3902059.json",
  "https://search.lib.virginia.edu/catalog/u3997399.json",
  "https://search.lib.virginia.edu/catalog/u2785505.json",
  "https://search.lib.virginia.edu/catalog/u3564444.json",
  "https://search.lib.virginia.edu/catalog/u3834091.json",
  "https://search.lib.virginia.edu/catalog/u1750464.json",
  "https://search.lib.virginia.edu/catalog/u3545473.json",
  "https://search.lib.virginia.edu/catalog/u4637451.json",
  "https://search.lib.virginia.edu/catalog/u1749708.json",
  "https://search.lib.virginia.edu/catalog/u1990921.json",
  "https://search.lib.virginia.edu/catalog/u1804265.json",
  "https://search.lib.virginia.edu/catalog/u2636604.json",
  "https://search.lib.virginia.edu/catalog/u3903347.json",
  "https://search.lib.virginia.edu/catalog/u4015815.json",
  "https://search.lib.virginia.edu/catalog/u2397669.json",
  "https://search.lib.virginia.edu/catalog/u3971356.json",
  "https://search.lib.virginia.edu/catalog/u2369217.json",
  "https://search.lib.virginia.edu/catalog/u1749353.json",
  "https://search.lib.virginia.edu/catalog/u2478969.json",
  "https://search.lib.virginia.edu/catalog/u3902632.json",
  "https://search.lib.virginia.edu/catalog/u3904369.json",
  "https://search.lib.virginia.edu/catalog/u4865718.json",
  "https://search.lib.virginia.edu/catalog/u4441703.json",
  "https://search.lib.virginia.edu/catalog/u4443191.json",
  "https://search.lib.virginia.edu/catalog/u2016117.json",
  "https://search.lib.virginia.edu/catalog/u2341851.json",
  "https://search.lib.virginia.edu/catalog/u2457806.json",
  "https://search.lib.virginia.edu/catalog/u4819897.json",
  "https://search.lib.virginia.edu/catalog/u4819899.json",
  "https://search.lib.virginia.edu/catalog/u5231958.json",
  "https://search.lib.virginia.edu/catalog/u3929874.json",
  "https://search.lib.virginia.edu/catalog/u4043091.json",];
$('#results').html('');
  for (var i = 0; i < list_of_json.length; i++){
    find_search_results(list_of_json[i]);
  }
}
function find_women_search_results(json_file){
  d3.json(json_file, function(data)
  {
console.log(data['response']['docs'][0]['title_display']);
  let needle1 = 'Cabell';
  let needle2 = 'Charlottesville';
  let needle3 = 'Albemarle';
  let needle4 = 'Virginia';
  let needle5 = 'Va.';
  let needle6 = 'Va';
  let needle7 = 'Women'
  let needle8 = 'women';
  let needle9 = 'suffrage';
  let needle10 = 'female';
  let needle11 = 'feminine';
  let needle12 = 'co-ed';
  let needle13 = 'feminism';
  let needle14 = 'feminist';
  let data_parsed = data['response']['docs'][0];
  let final_list = [];
  Object.entries(data_parsed).map( (b) => {
    let key = b[0];
    let items = b[1];
    if (typeof(key) === "number" || typeof(items) === "number"){
      console.log('ignore');      }
     else if (key.includes(needle1) || items.includes(needle1))        {
       console.log("Related to Cabell Hall(s)");
            search_results = search_results + 1;
    }
    else if (key.includes(needle2) || items.includes(needle2)) {
              console.log("Related to Charlottesville");
                   search_results = search_results + 1;
}
else if (key.includes(needle3) || items.includes(needle3)) {
      console.log("Related to Charlottesville");
           search_results = search_results + 1;
}
else if (key.includes(needle4) || items.includes(needle4)) {
      console.log("Related to Charlottesville");
           search_results = search_results + 1;
}
else if (key.includes(needle5) || items.includes(needle5)) {
      console.log("Related to Charlottesville");
           search_results = search_results + 1;
}
else if (key.includes(needle6) || items.includes(needle6)) {
      console.log("Related to Charlottesville");
           search_results = search_results + 1;
}
else if (key.includes(needle7) || items.includes(needle7)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle8) || items.includes(needle8)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle9) || items.includes(needle9)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle10) || items.includes(needle10)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle11) || items.includes(needle11)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle12) || items.includes(needle12)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle13) || items.includes(needle13)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
else if (key.includes(needle14) || items.includes(needle14)) {
      console.log("Related to Women at UVa");
           search_results = search_results + 1;
}
     });
     if (search_results > 0) {
     $('#results').append(data['response']['docs'][0]['title_display'] + '<br>');
}
     //this will be a link
      // $('#results').append(json_file);
console.log("number of search hits: " + search_results);
});
}

// Get zoe to look at how to get the longer list of Json files from the file.
function search2(){
var list_of_json = ["https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u1750128.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161173.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161172.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2160729.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161270.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161038.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2160562.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2160622.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161447.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161221.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161218.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161217.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161215.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161216.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2154054.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161141.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2155943.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2159792.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2162580.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161214.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2153909.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2153907.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2161177.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2160320.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2162331.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2157687.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2160319.json",
"https://search.lib.virginia.edu/catalog/uva-lib:2156671.json",
"https://search.lib.virginia.edu/catalog/u2120757.json",
"https://search.lib.virginia.edu/catalog/u2152806.json",
"https://search.lib.virginia.edu/catalog/u2789131.json",
"https://search.lib.virginia.edu/catalog/u3714150.json",
"https://search.lib.virginia.edu/catalog/u3860734.json",
"https://search.lib.virginia.edu/catalog/u2759547.json",
"https://search.lib.virginia.edu/catalog/u2789363.json",
"https://search.lib.virginia.edu/catalog/u2096724.json",
"https://search.lib.virginia.edu/catalog/u2110347.json",
"https://search.lib.virginia.edu/catalog/u2786820.json",
"https://search.lib.virginia.edu/catalog/u2493611.json",
"https://search.lib.virginia.edu/catalog/u2079811.json",
"https://search.lib.virginia.edu/catalog/u2789057.json",
"https://search.lib.virginia.edu/catalog/u2789225.json",
"https://search.lib.virginia.edu/catalog/u2245956.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",];
$('#results').html('');
$('#results').append('Women search performed' + '<br>');
for (var i = 0; i < list_of_json.length; i++){
  find_search_results(list_of_json[i]);
}
}
