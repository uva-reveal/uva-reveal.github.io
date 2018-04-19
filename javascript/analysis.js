//find search results
function find_search_results(json_file) {
  d3.json(json_file, function(data) {
    console.log(data['response']['docs'][0]['title_display']);

    // define search terms
    var needleArray1 = ['cabell']; ['old cabell']; ['new cabell']; ['music building']; ['music department']; ['concert hall']; ['cabell hall']; ['mcintire'];

    // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];

      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');
      }
      else if (key.includes(needleArray1) || items.includes(needleArray1)) {
        search_results = search_results + 1;
      }
    });
    // if >0 results, add to html

    let titleText = data['response']['docs'][0]['title_display'];
    let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
    console.log(html)
    console.log("number of search hits: " + search_results);
    if (search_results > 0) {
      $('#results').append(html);
    }
  });
}

// Get zoe to look at how to get the longer list of Json files from the file.
function search(){
  var list_of_json = [
    "http://search.lib.virginia.edu/catalog/u3703560.json",
    "http://search.lib.virginia.edu/catalog/u3903400.json",
    "http://search.lib.virginia.edu/catalog/u3902988.json",
    "https://search.lib.virginia.edu/catalog/u4454941.json",
    "https://search.lib.virginia.edu/catalog/u4402836.json",
    "https://search.lib.virginia.edu/catalog/u4697122.json",
    "https://search.lib.virginia.edu/catalog/u3902531.json",
    "https://search.lib.virginia.edu/catalog/u3901059.json",
    "https://search.lib.virginia.edu/catalog/u3562234.json",
    "https://search.lib.virginia.edu/catalog/u2478997.json",
    "https://search.lib.virginia.edu/catalog/u4395005.json",
    "https://search.lib.virginia.edu/catalog/u1749488.json",
    "https://search.lib.virginia.edu/catalog/u2101073.json",
    "https://search.lib.virginia.edu/catalog/u6731744.json",
    "https://search.lib.virginia.edu/catalog/u6098997.json",
    "https://search.lib.virginia.edu/catalog/u5390684.json",
    "https://search.lib.virginia.edu/catalog/u4043091.json",
    "https://search.lib.virginia.edu/catalog/u3929874.json",
    "https://search.lib.virginia.edu/catalog/u5231958.json",
    "https://search.lib.virginia.edu/catalog/u4819899.json",
    "https://search.lib.virginia.edu/catalog/u4819897.json",
    "https://search.lib.virginia.edu/catalog/u2457806.json",
    "https://search.lib.virginia.edu/catalog/u2341851.json",
    "https://search.lib.virginia.edu/catalog/u2016117.json",
    "https://search.lib.virginia.edu/catalog/u4443191.json",
    "https://search.lib.virginia.edu/catalog/u4441703.json",
    "https://search.lib.virginia.edu/catalog/u4865718.json",
    "https://search.lib.virginia.edu/catalog/u3904369.json",
    "https://search.lib.virginia.edu/catalog/u3902632.json",
    "https://search.lib.virginia.edu/catalog/u2478969.json",
    "https://search.lib.virginia.edu/catalog/u1749353.json",
    "https://search.lib.virginia.edu/catalog/u2369217.json",
    "https://search.lib.virginia.edu/catalog/u3971356.json",
    "https://search.lib.virginia.edu/catalog/u2397669.json",
    "https://search.lib.virginia.edu/catalog/u4015815.json",
    "https://search.lib.virginia.edu/catalog/u3903347.json",
    "https://search.lib.virginia.edu/catalog/u2636604.json",
    "https://search.lib.virginia.edu/catalog/u1804265.json",
    "https://search.lib.virginia.edu/catalog/u1990921.json",
    "https://search.lib.virginia.edu/catalog/u1749708.json",
    "https://search.lib.virginia.edu/catalog/u4637451.json",
    "https://search.lib.virginia.edu/catalog/u3545473.json",
    "https://search.lib.virginia.edu/catalog/u1750464.json",
    "https://search.lib.virginia.edu/catalog/u3834091.json",
    "https://search.lib.virginia.edu/catalog/u3564444.json",
    "https://search.lib.virginia.edu/catalog/u2785505.json",
    "https://search.lib.virginia.edu/catalog/u3997399.json",
    "https://search.lib.virginia.edu/catalog/u3902059.json",
    "https://search.lib.virginia.edu/catalog/u3900733.json",
    "https://search.lib.virginia.edu/catalog/u3931089.json",
    "https://search.lib.virginia.edu/catalog/u1749058.json",
    "https://search.lib.virginia.edu/catalog/u2100975.json",
    "https://search.lib.virginia.edu/catalog/u1900234.json",
    "https://search.lib.virginia.edu/catalog/u1966989.json",
    "https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_search_results(list_of_json[i]); }
  var checkBox = document.getElementById ("cabell");
    if (checkBox.checked == true){
       results.style.display = "block"; }
    else {
      results.style.display = "none"; } }

//find search results
function find_women_search_results(json_file){
  d3.json(json_file, function(data)
  {
console.log(data['response']['docs'][0]['title_display']);

// define search terms
var needleArray1 = ['women']; ['female']; ['suffrage']; ['feminine']; ['co-ed']; ['feminism']; ['feminist']; ['coeducation']; ['integration'];

// define parsed data
  let data_parsed = data['response']['docs'][0];
  let final_list = [];
  let search_results = 0;
  let search_results2 = 0;

  // start map
  Object.entries(data_parsed).map( (b) => {

  // using the [key, value] pairs from the parsed entries
    let key = b[0];
    let items = b[1];
    if (typeof(key) === "number" || typeof(items) === "number"){
      console.log('ignore');      }
     else if (key.includes(needleArray1) || items.includes(needleArray1)) {
            search_results = search_results + 1;

    }

   });
   // if >0 results, add to html

   let titleText = data['response']['docs'][0]['title_display'];
   let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
   console.log(html)
   console.log("number of search hits: " + search_results);
   if (search_results > 0) {
     $('#results').append(html);
   }
 });
}

// Get zoe to look at how to get the longer list of Json files from the file.
function search2(){
var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
  find_women_search_results(list_of_json[i]);
}
var checkBox = document.getElementById ("women");
 if (checkBox.checked == true){
     results.style.display = "block";
 } else {
    results.style.display = "none";
 }

}

//find search results
function find_music_search_results(json_file){
  d3.json(json_file, function(data)
  {
    console.log(data['response']['docs'][0]['title_display']);

    // define search terms
    var needleArray1 = ['music']; ['piano']; ['concert']; ['performance']; ['band']; ['dance']; ['choir']; ['ensemble'];

    // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }

       else if (key.includes(needleArray1) || items.includes(needleArray1)) {
              search_results = search_results + 1;

      }

     });
     // if >0 results, add to html

     let titleText = data['response']['docs'][0]['title_display'];
     let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
     console.log(html)
     console.log("number of search hits: " + search_results);
     if (search_results > 0) {
       $('#results').append(html);
     }
   });
 }

// Get zoe to look at how to get the longer list of Json files from the file.
function search3(){
  var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_music_search_results(list_of_json[i]);
  }
  var checkBox = document.getElementById ("music");
   if (checkBox.checked == true){
       results.style.display = "block";
   } else {
      results.style.display = "none";
   }

  }

  //find search results
function find_rotunda_search_results(json_file){
  d3.json(json_file, function(data)
  {
    console.log(data['response']['docs'][0]['title_display']);

    // define search terms
    var needleArray1 = ['rotunda']; ['academical village']; ['lawn']; ['corner']; ['board of visitors']; ['pavillion'];

    // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }
        else if (key.includes(needleArray1) || items.includes(needleArray1)) {
               search_results = search_results + 1;

       }

      });
      // if >0 results, add to html

      let titleText = data['response']['docs'][0]['title_display'];
      let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
      console.log(html)
      console.log("number of search hits: " + search_results);
      if (search_results > 0) {
        $('#results').append(html);
      }
    });
  }

// Get zoe to look at how to get the longer list of Json files from the file.
function search4(){
  var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_rotunda_search_results(list_of_json[i]);
  }
  var checkBox = document.getElementById ("rotunda");
   if (checkBox.checked == true){
       results.style.display = "block";
   } else {
      results.style.display = "none";
   }

  }

  //find search results
  function find_womenmusic_search_results(json_file){
    d3.json(json_file, function(data)
    {
  console.log(data['response']['docs'][0]['title_display']);

  // define search terms
  var needleArray1 = ['women']; ['female']; ['suffrage']; ['feminine']; ['co-ed']; ['feminism']; ['feminist']; ['coeducation']; ['integration'];
  var needleArray2 = ['music']; ['piano']; ['concert']; ['performance']; ['band']; ['dance']; ['choir']; ['ensemble'];

  // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;
    let search_results2 = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }
       else if (key.includes(needleArray1) || items.includes(needleArray1)) {
              search_results = search_results + 1;
  // this is +5 to make the search results ONLY include things that are above 5, meaning that it has BOTH array 1 and array 2
             if (key.includes(needleArray2) || items.includes(needleArray2)) {
                             search_results2 = search_results2 + 5;
               }
      }
   });


   // if >0 results, add to html

   let titleText = data['response']['docs'][0]['title_display'];
   let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
   console.log(html)
   console.log("number of search hits: " + search_results);
if (search_results + search_results2 > 4) {
       $('#results').append(html);
   }
 });
}


  // Get zoe to look at how to get the longer list of Json files from the file.
  function search8(){
  var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_womenmusic_search_results(list_of_json[i]);
  }
  var checkBox = document.getElementById ("womenmusic");
   if (checkBox.checked == true){
       results.style.display = "block";
   } else {
      results.style.display = "none";
   }

  }

  //find search results
  function find_cabellmusic_search_results(json_file){
    d3.json(json_file, function(data)
    {
  console.log(data['response']['docs'][0]['title_display']);

  // define search terms
    var needleArray1 = ['music']; ['piano']; ['concert']; ['performance']; ['band']; ['dance']; ['choir']; ['ensemble'];

  var needleArray2 = ['cabell']; ['old cabell']; ['new cabell']; ['music building']; ['music department']; ['concert hall']; ['cabell hall']; ['mcintire'];

  // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;
    let search_results2 = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }
       else if (key.includes(needleArray1) || items.includes(needleArray1)) {
              search_results = search_results + 1;
  // this is +5 to make the search results ONLY include things that are above 5, meaning that it has BOTH array 1 and array 2
             if (key.includes(needleArray2) || items.includes(needleArray2)) {
                             search_results2 = search_results2 + 5;
               }
      }
   });

   let titleText = data['response']['docs'][0]['title_display'];
   let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
   console.log(html)
   console.log("number of search hits: " + search_results);
if (search_results + search_results2 > 4) {
       $('#results').append(html);
   }
 });
}

  // Get zoe to look at how to get the longer list of Json files from the file.
  function search9(){
  var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_cabellmusic_search_results(list_of_json[i]);
  }
  var checkBox = document.getElementById ("cabellmusic");
   if (checkBox.checked == true){
       results.style.display = "block";
   } else {
      results.style.display = "none";
   }

  }

  //find search results
  function find_rotundawomen_search_results(json_file){
    d3.json(json_file, function(data)
    {
  console.log(data['response']['docs'][0]['title_display']);

  // define search terms
    var needleArray1 = ['women']; ['female']; ['suffrage']; ['feminine']; ['co-ed']; ['feminism']; ['feminist']; ['coeducation']; ['integration'];

  var needleArray2 = ['rotunda']; ['academical village']; ['lawn']; ['corner']; ['board of visitors']; ['pavillion'];

  // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;
    let search_results2 = 0;

    // start map
    Object.entries(data_parsed).map( (b) => {

      // using the [key, value] pairs from the parsed entries
      let key = b[0];
      let items = b[1];
      if (typeof(key) === "number" || typeof(items) === "number"){
        console.log('ignore');      }
       else if (key.includes(needleArray1) || items.includes(needleArray1)) {
              search_results = search_results + 1;
  // this is +5 to make the search results ONLY include things that are above 5, meaning that it has BOTH array 1 and array 2
             if (key.includes(needleArray2) || items.includes(needleArray2)) {
                             search_results2 = search_results2 + 5;
               }
      }
   });

   let titleText = data['response']['docs'][0]['title_display'];
   let html = `<li class="pretty-text" data-num-results="${search_results}">${titleText}</li>`;
   console.log(html)
   console.log("number of search hits: " + search_results);
if (search_results + search_results2 > 4) {
       $('#results').append(html);
   }
 });
}

  // Get zoe to look at how to get the longer list of Json files from the file.
  function search10(){
  var list_of_json = [
"http://search.lib.virginia.edu/catalog/u3703560.json",
"http://search.lib.virginia.edu/catalog/u3903400.json",
"http://search.lib.virginia.edu/catalog/u3902988.json",
"https://search.lib.virginia.edu/catalog/u4454941.json",
"https://search.lib.virginia.edu/catalog/u4402836.json",
"https://search.lib.virginia.edu/catalog/u4697122.json",
"https://search.lib.virginia.edu/catalog/u3902531.json",
"https://search.lib.virginia.edu/catalog/u3901059.json",
"https://search.lib.virginia.edu/catalog/u3562234.json",
"https://search.lib.virginia.edu/catalog/u2478997.json",
"https://search.lib.virginia.edu/catalog/u4395005.json",
"https://search.lib.virginia.edu/catalog/u1749488.json",
"https://search.lib.virginia.edu/catalog/u2101073.json",
"https://search.lib.virginia.edu/catalog/u6731744.json",
"https://search.lib.virginia.edu/catalog/u6098997.json",
"https://search.lib.virginia.edu/catalog/u5390684.json",
"https://search.lib.virginia.edu/catalog/u4043091.json",
"https://search.lib.virginia.edu/catalog/u3929874.json",
"https://search.lib.virginia.edu/catalog/u5231958.json",
"https://search.lib.virginia.edu/catalog/u4819899.json",
"https://search.lib.virginia.edu/catalog/u4819897.json",
"https://search.lib.virginia.edu/catalog/u2457806.json",
"https://search.lib.virginia.edu/catalog/u2341851.json",
"https://search.lib.virginia.edu/catalog/u2016117.json",
"https://search.lib.virginia.edu/catalog/u4443191.json",
"https://search.lib.virginia.edu/catalog/u4441703.json",
"https://search.lib.virginia.edu/catalog/u4865718.json",
"https://search.lib.virginia.edu/catalog/u3904369.json",
"https://search.lib.virginia.edu/catalog/u3902632.json",
"https://search.lib.virginia.edu/catalog/u2478969.json",
"https://search.lib.virginia.edu/catalog/u1749353.json",
"https://search.lib.virginia.edu/catalog/u2369217.json",
"https://search.lib.virginia.edu/catalog/u3971356.json",
"https://search.lib.virginia.edu/catalog/u2397669.json",
"https://search.lib.virginia.edu/catalog/u4015815.json",
"https://search.lib.virginia.edu/catalog/u3903347.json",
"https://search.lib.virginia.edu/catalog/u2636604.json",
"https://search.lib.virginia.edu/catalog/u1804265.json",
"https://search.lib.virginia.edu/catalog/u1990921.json",
"https://search.lib.virginia.edu/catalog/u1749708.json",
"https://search.lib.virginia.edu/catalog/u4637451.json",
"https://search.lib.virginia.edu/catalog/u3545473.json",
"https://search.lib.virginia.edu/catalog/u1750464.json",
"https://search.lib.virginia.edu/catalog/u3834091.json",
"https://search.lib.virginia.edu/catalog/u3564444.json",
"https://search.lib.virginia.edu/catalog/u2785505.json",
"https://search.lib.virginia.edu/catalog/u3997399.json",
"https://search.lib.virginia.edu/catalog/u3902059.json",
"https://search.lib.virginia.edu/catalog/u3900733.json",
"https://search.lib.virginia.edu/catalog/u3931089.json",
"https://search.lib.virginia.edu/catalog/u1749058.json",
"https://search.lib.virginia.edu/catalog/u2100975.json",
"https://search.lib.virginia.edu/catalog/u1900234.json",
"https://search.lib.virginia.edu/catalog/u1966989.json",
"https://search.lib.virginia.edu/catalog/u3943814.json",
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
    find_rotundawomen_search_results(list_of_json[i]);
  }
  var checkBox = document.getElementById ("rotundawomen");
   if (checkBox.checked == true){
       results.style.display = "block";
   } else {
      results.style.display = "none";
   }

  }
