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
       $('#results').append(data['response']['docs'][0]['title_display'] + '<br>');
       $('#results').append(json_file);
  console.log("number of search hits: " + search_results);
  });
}

// Get zoe to look at how to get the longer list of Json files from the file.
function search(){
  var list_of_json = ["https://search.lib.virginia.edu/catalog/u5390684.json", "https://search.lib.virginia.edu/catalog/u1750128.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161173.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161172.json", "https://search.lib.virginia.edu/catalog/uva-lib:2160729.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161270.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161038.json", "https://search.lib.virginia.edu/catalog/uva-lib:2160562.json", "https://search.lib.virginia.edu/catalog/uva-lib:2160622.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161447.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161221.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161218.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161217.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161215.json", "https://search.lib.virginia.edu/catalog/uva-lib:2161216.json"];

  for (var i = 0; i < list_of_json.length; i++){
    find_search_results(list_of_json[i]);
  }
  var our_json = "http://search.lib.virginia.edu/catalog/u3703560.json"
  find_search_results(our_json);
}
