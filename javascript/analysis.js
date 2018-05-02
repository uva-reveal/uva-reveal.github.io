var list_of_json = [
  "http://search.lib.virginia.edu/catalog/u4803799.json",
  "http://search.lib.virginia.edu/catalog/u3904089.json",
  "http://search.lib.virginia.edu/catalog/u3903211.json",
  "http://search.lib.virginia.edu/catalog/u3902102.json",
  "http://search.lib.virginia.edu/catalog/u3901008.json",
  "http://search.lib.virginia.edu/catalog/u2146122.json",
  "http://search.lib.virginia.edu/catalog/u2242714.json",
  "http://search.lib.virginia.edu/catalog/u2388183.json",
  "http://search.lib.virginia.edu/catalog/u2681381.json",
  "http://search.lib.virginia.edu/catalog/u2461768.json",
  "http://search.lib.virginia.edu/catalog/u2488928.json",
  "http://search.lib.virginia.edu/catalog/u1749696.json",
  "http://search.lib.virginia.edu/catalog/u4790779.json",
  "http://search.lib.virginia.edu/catalog/u2518530.json",
  "http://search.lib.virginia.edu/catalog/u3929567.json",
  "http://search.lib.virginia.edu/catalog/u2388230.json",
  "http://search.lib.virginia.edu/catalog/u2420743.json",
  "http://search.lib.virginia.edu/catalog/u2101990.json",
  "http://search.lib.virginia.edu/catalog/u2831254.json",
  "http://search.lib.virginia.edu/catalog/u5502437.json",
  "http://search.lib.virginia.edu/catalog/u4803951.json",
  "http://search.lib.virginia.edu/catalog/u4804069.json",
  "http://search.lib.virginia.edu/catalog/u4803949.json",
  "http://search.lib.virginia.edu/catalog/u6624977.json",
  "http://search.lib.virginia.edu/catalog/u3999563.json",
  "http://search.lib.virginia.edu/catalog/u2079717.json",
  "http://search.lib.virginia.edu/catalog/u3929422.json",
  "http://search.lib.virginia.edu/catalog/u1749099.json",
  "http://search.lib.virginia.edu/catalog/u2096871.json",
  "http://search.lib.virginia.edu/catalog/u2787886.json",
  "http://search.lib.virginia.edu/catalog/u2482400.json",
  "http://search.lib.virginia.edu/catalog/u2397331.json",
  "http://search.lib.virginia.edu/catalog/u3910968.json",
  "http://search.lib.virginia.edu/catalog/u2396348.json",
  "http://search.lib.virginia.edu/catalog/u2396599.json",
  "http://search.lib.virginia.edu/catalog/u1867345.json",
  "http://search.lib.virginia.edu/catalog/u2429423.json",
  "http://search.lib.virginia.edu/catalog/u4223176.json",
  "http://search.lib.virginia.edu/catalog/u2629250.json",
  "http://search.lib.virginia.edu/catalog/u2637827.json",
  "http://search.lib.virginia.edu/catalog/u2687399.json",
  "http://search.lib.virginia.edu/catalog/u1750215.json",
  "http://search.lib.virginia.edu/catalog/u3903804.json",
  "http://search.lib.virginia.edu/catalog/u4015699.json",
  "http://search.lib.virginia.edu/catalog/u3900060.json",
  "http://search.lib.virginia.edu/catalog/u2451293.json",
  "http://search.lib.virginia.edu/catalog/u3900333.json",
  "http://search.lib.virginia.edu/catalog/u2646604.json",
  "http://search.lib.virginia.edu/catalog/u4006422.json",
  "http://search.lib.virginia.edu/catalog/u3929824.json",
  "http://search.lib.virginia.edu/catalog/u3707132.json",
  "http://search.lib.virginia.edu/catalog/u3697936.json",
  "http://search.lib.virginia.edu/catalog/u3691351.json",
  "http://search.lib.virginia.edu/catalog/u3684872.json",
  "http://search.lib.virginia.edu/catalog/u3885879.json",
  "http://search.lib.virginia.edu/catalog/u3885316.json",
  "http://search.lib.virginia.edu/catalog/u4380473.json",
  "http://search.lib.virginia.edu/catalog/u4449954.json",
  "http://search.lib.virginia.edu/catalog/u4468870.json",
  "http://search.lib.virginia.edu/catalog/u4711138.json",
  "http://search.lib.virginia.edu/catalog/u2403820.json",
  "http://search.lib.virginia.edu/catalog/u2703562.json",
  "http://search.lib.virginia.edu/catalog/u2490499.json",
  "http://search.lib.virginia.edu/catalog/u4343064.json",
  "http://search.lib.virginia.edu/catalog/u3708835.json",
  "http://search.lib.virginia.edu/catalog/u3901893.json",
  "http://search.lib.virginia.edu/catalog/u3900215.json",
  "http://search.lib.virginia.edu/catalog/u3524388.json",
  "http://search.lib.virginia.edu/catalog/u1895834.json",
  "http://search.lib.virginia.edu/catalog/u2790949.json",
  "http://search.lib.virginia.edu/catalog/u2821264.json",
  "http://search.lib.virginia.edu/catalog/u2814460.json",
  "http://search.lib.virginia.edu/catalog/u2509555.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:330784.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:328484.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2155359.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166925.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166825.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2154823.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166920.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166819.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2154417.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:330615.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166815.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166810.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166809.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166807.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166806.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2156906.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166805.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2159605.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2159800.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2156600.json",
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

var needle = {
  'cabell':['cabell', 'old cabell', 'new cabell', 'music building','music department','concert hall','cabell hall', 'mcintire'],
  'women':['women', 'female', 'suffrage', 'feminine', 'co-ed', 'feminism', 'feminist', 'coeducation', 'integration'],
  'music':['music', 'piano', 'concert', 'performance', 'band', 'dance', 'choir', 'ensemble'],
  'rotunda':['rotunda', 'academical', 'lawn', 'corner', 'board of visitors', 'BOV', 'pavillion'],
  'berlin':['berlin', 'cold war', 'berlin wall', 'germany', 'german', 'reagan', 'gorbachev', 'iron curtain', 'honecker'],
  'language':['language words'],
  'Cemetery':['cemetery words']

};
//find search results
function find_search_results(json_file, needleArray) {
  d3.json(json_file, function(data) {
    // console.log(data['response']['docs'][0]['title_display']);

    // define search terms

    // define parsed data
    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results = 0;
    // start map
    Object.entries(data_parsed).map( (b) => {
      if (typeof b[1] === 'object'){
        // console.log( search_results, data['response']['docs'][0]['title_display']);
        // using the [key, value] pairs from the parsed entries
        b[1].map((word) => {
            needleArray.map((key) => {
             if (word.toLowerCase().includes(key)) {
               search_results = search_results + 1;
             } 
            });
         });
         // console.log( search_results);
       }
    });
    // if >0 results, add to html
    let titleText = data['response']['docs'][0]['title_display'];
    let url = data['response']['docs'][0]['id'];
    let size = search_results + 1;
    // this part is what I'm working on
    
      if (search_results > 0) {
          let paddingSize = 1 + size;
          let circleSize = 80 + size;
          let colors = ['red', 'green', 'blue', 'orange', 'yellow'];
          var myElement = document.getElementsByClassName("result-wrapper");
          myElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          if (size >= 9) {
            let multiplier = 2.8;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
          else if (size < 9 && size > 4) {
            let multiplier = 1.8;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
          else {
            let multiplier = 1;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
      }

      // let html = `<li class="pretty-text" height="${circleSize.toString()}" width="${circleSize.toString()}"><a href="https://search.lib.virginia.edu/catalog/${url}" target="_blank"><text style="padding: ${paddingSize.toString()+'em;'}">${titleText} <br> ${size}</text></a></li>`;

      //  height="${circleSize.toString()}" width="${circleSize.toString()}"

  });

}

function search(searchNeedle){
$('.results-list').html('');
  for (var i = 0; i < list_of_json.length; i++) {
    find_search_results(list_of_json[i], needle[searchNeedle]); 
  } 
}


// end of function


var list_of_json = [
  "http://search.lib.virginia.edu/catalog/u4803799.json",
  "http://search.lib.virginia.edu/catalog/u3904089.json",
  "http://search.lib.virginia.edu/catalog/u3903211.json",
  "http://search.lib.virginia.edu/catalog/u3902102.json",
  "http://search.lib.virginia.edu/catalog/u3901008.json",
  "http://search.lib.virginia.edu/catalog/u2146122.json",
  "http://search.lib.virginia.edu/catalog/u2242714.json",
  "http://search.lib.virginia.edu/catalog/u2388183.json",
  "http://search.lib.virginia.edu/catalog/u2681381.json",
  "http://search.lib.virginia.edu/catalog/u2461768.json",
  "http://search.lib.virginia.edu/catalog/u2488928.json",
  "http://search.lib.virginia.edu/catalog/u1749696.json",
  "http://search.lib.virginia.edu/catalog/u4790779.json",
  "http://search.lib.virginia.edu/catalog/u2518530.json",
  "http://search.lib.virginia.edu/catalog/u3929567.json",
  "http://search.lib.virginia.edu/catalog/u2388230.json",
  "http://search.lib.virginia.edu/catalog/u2420743.json",
  "http://search.lib.virginia.edu/catalog/u2101990.json",
  "http://search.lib.virginia.edu/catalog/u2831254.json",
  "http://search.lib.virginia.edu/catalog/u5502437.json",
  "http://search.lib.virginia.edu/catalog/u4803951.json",
  "http://search.lib.virginia.edu/catalog/u4804069.json",
  "http://search.lib.virginia.edu/catalog/u4803949.json",
  "http://search.lib.virginia.edu/catalog/u6624977.json",
  "http://search.lib.virginia.edu/catalog/u3999563.json",
  "http://search.lib.virginia.edu/catalog/u2079717.json",
  "http://search.lib.virginia.edu/catalog/u3929422.json",
  "http://search.lib.virginia.edu/catalog/u1749099.json",
  "http://search.lib.virginia.edu/catalog/u2096871.json",
  "http://search.lib.virginia.edu/catalog/u2787886.json",
  "http://search.lib.virginia.edu/catalog/u2482400.json",
  "http://search.lib.virginia.edu/catalog/u2397331.json",
  "http://search.lib.virginia.edu/catalog/u3910968.json",
  "http://search.lib.virginia.edu/catalog/u2396348.json",
  "http://search.lib.virginia.edu/catalog/u2396599.json",
  "http://search.lib.virginia.edu/catalog/u1867345.json",
  "http://search.lib.virginia.edu/catalog/u2429423.json",
  "http://search.lib.virginia.edu/catalog/u4223176.json",
  "http://search.lib.virginia.edu/catalog/u2629250.json",
  "http://search.lib.virginia.edu/catalog/u2637827.json",
  "http://search.lib.virginia.edu/catalog/u2687399.json",
  "http://search.lib.virginia.edu/catalog/u1750215.json",
  "http://search.lib.virginia.edu/catalog/u3903804.json",
  "http://search.lib.virginia.edu/catalog/u4015699.json",
  "http://search.lib.virginia.edu/catalog/u3900060.json",
  "http://search.lib.virginia.edu/catalog/u2451293.json",
  "http://search.lib.virginia.edu/catalog/u3900333.json",
  "http://search.lib.virginia.edu/catalog/u2646604.json",
  "http://search.lib.virginia.edu/catalog/u4006422.json",
  "http://search.lib.virginia.edu/catalog/u3929824.json",
  "http://search.lib.virginia.edu/catalog/u3707132.json",
  "http://search.lib.virginia.edu/catalog/u3697936.json",
  "http://search.lib.virginia.edu/catalog/u3691351.json",
  "http://search.lib.virginia.edu/catalog/u3684872.json",
  "http://search.lib.virginia.edu/catalog/u3885879.json",
  "http://search.lib.virginia.edu/catalog/u3885316.json",
  "http://search.lib.virginia.edu/catalog/u4380473.json",
  "http://search.lib.virginia.edu/catalog/u4449954.json",
  "http://search.lib.virginia.edu/catalog/u4468870.json",
  "http://search.lib.virginia.edu/catalog/u4711138.json",
  "http://search.lib.virginia.edu/catalog/u2403820.json",
  "http://search.lib.virginia.edu/catalog/u2703562.json",
  "http://search.lib.virginia.edu/catalog/u2490499.json",
  "http://search.lib.virginia.edu/catalog/u4343064.json",
  "http://search.lib.virginia.edu/catalog/u3708835.json",
  "http://search.lib.virginia.edu/catalog/u3901893.json",
  "http://search.lib.virginia.edu/catalog/u3900215.json",
  "http://search.lib.virginia.edu/catalog/u3524388.json",
  "http://search.lib.virginia.edu/catalog/u1895834.json",
  "http://search.lib.virginia.edu/catalog/u2790949.json",
  "http://search.lib.virginia.edu/catalog/u2821264.json",
  "http://search.lib.virginia.edu/catalog/u2814460.json",
  "http://search.lib.virginia.edu/catalog/u2509555.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:330784.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:328484.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2155359.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166925.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166825.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2154823.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166920.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166819.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2154417.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:330615.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166815.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166810.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166809.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166807.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166806.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2156906.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2166805.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2159605.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2159800.json",
  "http://search.lib.virginia.edu/catalog/uva-lib:2156600.json",
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

  var needle1 = {
  'women':['women', 'female', 'suffrage', 'feminine', 'co-ed', 'feminism', 'feminist', 'coeducation', 'integration']
  };

  var needle2 = {
  'music':['music', 'piano', 'concert', 'performance', 'band', 'dance', 'choir', 'ensemble']
  };


  function find_search2_results(json_file, needle1Array, needle2Array) {
  d3.json(json_file, function(data) {

    let data_parsed = data['response']['docs'][0];
    let final_list = [];
    let search_results1 = 0;
    let search_results2 = 0;
    let all_search_results = 0;
    // start map
    Object.entries(data_parsed).map((b) => {
      if (typeof b[1] === 'object'){

        b[1].map((word) => {
            needle1Array.map((key) => {
             if (word.toLowerCase().includes(key)) {
               search_results1 = search_results1 + 1;
               console.log('1', search_results1);
             }
            });
        
            needle2Array.map((key2) => {
              if (word.toLowerCase().includes(key2)) {
                search_results2 = search_results2 +1;
                console.log('2', search_results2);
              }
            });
            if (search_results1 > 0 && search_results2 > 0){
              all_search_results = search_results1 + search_results2;
              console.log('all', all_search_results);
            }
        });
       }
    });
let titleText = data['response']['docs'][0]['title_display'];
let url = data['response']['docs'][0]['id'];
let size = all_search_results + 1;
      if (all_search_results > 0) {
          let paddingSize = 1 + size;
          let circleSize = 80 + size;
          if (size >= 9) {
            let multiplier = 2.8;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
          else if (size < 9 && size > 4) {
            let multiplier = 1.8;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
          else {
            let multiplier = 1;
            let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText}</span></a></li>`;
            $('.results-list').append(html);
          }
      }
  });

  }

  function search2(search2Needle, search2Needle1){

  $('.results-list').html('');
  for (var i = 0; i < list_of_json.length; i++){
    find_search2_results(list_of_json[i], needle1[search2Needle], needle2[search2Needle1]);
      } 
}


// end of function

// dual search below that doesn't work

// var list_of_json = [
//   "http://search.lib.virginia.edu/catalog/u4803799.json",
//   "http://search.lib.virginia.edu/catalog/u3904089.json",
//   "http://search.lib.virginia.edu/catalog/u3903211.json",
//   "http://search.lib.virginia.edu/catalog/u3902102.json",
//   "http://search.lib.virginia.edu/catalog/u3901008.json",
//   "http://search.lib.virginia.edu/catalog/u2146122.json",
//   "http://search.lib.virginia.edu/catalog/u2242714.json",
//   "http://search.lib.virginia.edu/catalog/u2388183.json",
//   "http://search.lib.virginia.edu/catalog/u2681381.json",
//   "http://search.lib.virginia.edu/catalog/u2461768.json",
//   "http://search.lib.virginia.edu/catalog/u2488928.json",
//   "http://search.lib.virginia.edu/catalog/u1749696.json",
//   "http://search.lib.virginia.edu/catalog/u4790779.json",
//   "http://search.lib.virginia.edu/catalog/u2518530.json",
//   "http://search.lib.virginia.edu/catalog/u3929567.json",
//   "http://search.lib.virginia.edu/catalog/u2388230.json",
//   "http://search.lib.virginia.edu/catalog/u2420743.json",
//   "http://search.lib.virginia.edu/catalog/u2101990.json",
//   "http://search.lib.virginia.edu/catalog/u2831254.json",
//   "http://search.lib.virginia.edu/catalog/u5502437.json",
//   "http://search.lib.virginia.edu/catalog/u4803951.json",
//   "http://search.lib.virginia.edu/catalog/u4804069.json",
//   "http://search.lib.virginia.edu/catalog/u4803949.json",
//   "http://search.lib.virginia.edu/catalog/u6624977.json",
//   "http://search.lib.virginia.edu/catalog/u3999563.json",
//   "http://search.lib.virginia.edu/catalog/u2079717.json",
//   "http://search.lib.virginia.edu/catalog/u3929422.json",
//   "http://search.lib.virginia.edu/catalog/u1749099.json",
//   "http://search.lib.virginia.edu/catalog/u2096871.json",
//   "http://search.lib.virginia.edu/catalog/u2787886.json",
//   "http://search.lib.virginia.edu/catalog/u2482400.json",
//   "http://search.lib.virginia.edu/catalog/u2397331.json",
//   "http://search.lib.virginia.edu/catalog/u3910968.json",
//   "http://search.lib.virginia.edu/catalog/u2396348.json",
//   "http://search.lib.virginia.edu/catalog/u2396599.json",
//   "http://search.lib.virginia.edu/catalog/u1867345.json",
//   "http://search.lib.virginia.edu/catalog/u2429423.json",
//   "http://search.lib.virginia.edu/catalog/u4223176.json",
//   "http://search.lib.virginia.edu/catalog/u2629250.json",
//   "http://search.lib.virginia.edu/catalog/u2637827.json",
//   "http://search.lib.virginia.edu/catalog/u2687399.json",
//   "http://search.lib.virginia.edu/catalog/u1750215.json",
//   "http://search.lib.virginia.edu/catalog/u3903804.json",
//   "http://search.lib.virginia.edu/catalog/u4015699.json",
//   "http://search.lib.virginia.edu/catalog/u3900060.json",
//   "http://search.lib.virginia.edu/catalog/u2451293.json",
//   "http://search.lib.virginia.edu/catalog/u3900333.json",
//   "http://search.lib.virginia.edu/catalog/u2646604.json",
//   "http://search.lib.virginia.edu/catalog/u4006422.json",
//   "http://search.lib.virginia.edu/catalog/u3929824.json",
//   "http://search.lib.virginia.edu/catalog/u3707132.json",
//   "http://search.lib.virginia.edu/catalog/u3697936.json",
//   "http://search.lib.virginia.edu/catalog/u3691351.json",
//   "http://search.lib.virginia.edu/catalog/u3684872.json",
//   "http://search.lib.virginia.edu/catalog/u3885879.json",
//   "http://search.lib.virginia.edu/catalog/u3885316.json",
//   "http://search.lib.virginia.edu/catalog/u4380473.json",
//   "http://search.lib.virginia.edu/catalog/u4449954.json",
//   "http://search.lib.virginia.edu/catalog/u4468870.json",
//   "http://search.lib.virginia.edu/catalog/u4711138.json",
//   "http://search.lib.virginia.edu/catalog/u2403820.json",
//   "http://search.lib.virginia.edu/catalog/u2703562.json",
//   "http://search.lib.virginia.edu/catalog/u2490499.json",
//   "http://search.lib.virginia.edu/catalog/u4343064.json",
//   "http://search.lib.virginia.edu/catalog/u3708835.json",
//   "http://search.lib.virginia.edu/catalog/u3901893.json",
//   "http://search.lib.virginia.edu/catalog/u3900215.json",
//   "http://search.lib.virginia.edu/catalog/u3524388.json",
//   "http://search.lib.virginia.edu/catalog/u1895834.json",
//   "http://search.lib.virginia.edu/catalog/u2790949.json",
//   "http://search.lib.virginia.edu/catalog/u2821264.json",
//   "http://search.lib.virginia.edu/catalog/u2814460.json",
//   "http://search.lib.virginia.edu/catalog/u2509555.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:330784.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:328484.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2155359.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166925.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166825.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2154823.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166920.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166819.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2154417.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:330615.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166815.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166810.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166809.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166807.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166806.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2156906.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2166805.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2159605.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2159800.json",
//   "http://search.lib.virginia.edu/catalog/uva-lib:2156600.json",
//   "http://search.lib.virginia.edu/catalog/u3703560.json",
//   "http://search.lib.virginia.edu/catalog/u3903400.json",
//   "http://search.lib.virginia.edu/catalog/u3902988.json",
//   "https://search.lib.virginia.edu/catalog/u4454941.json",
//   "https://search.lib.virginia.edu/catalog/u4402836.json",
//   "https://search.lib.virginia.edu/catalog/u4697122.json",
//   "https://search.lib.virginia.edu/catalog/u3902531.json",
//   "https://search.lib.virginia.edu/catalog/u3901059.json",
//   "https://search.lib.virginia.edu/catalog/u3562234.json",
//   "https://search.lib.virginia.edu/catalog/u2478997.json",
//   "https://search.lib.virginia.edu/catalog/u4395005.json",
//   "https://search.lib.virginia.edu/catalog/u1749488.json",
//   "https://search.lib.virginia.edu/catalog/u2101073.json",
//   "https://search.lib.virginia.edu/catalog/u6731744.json",
//   "https://search.lib.virginia.edu/catalog/u6098997.json",
//   "https://search.lib.virginia.edu/catalog/u5390684.json",
//   "https://search.lib.virginia.edu/catalog/u4043091.json",
//   "https://search.lib.virginia.edu/catalog/u3929874.json",
//   "https://search.lib.virginia.edu/catalog/u5231958.json",
//   "https://search.lib.virginia.edu/catalog/u4819899.json",
//   "https://search.lib.virginia.edu/catalog/u4819897.json",
//   "https://search.lib.virginia.edu/catalog/u2457806.json",
//   "https://search.lib.virginia.edu/catalog/u2341851.json",
//   "https://search.lib.virginia.edu/catalog/u2016117.json",
//   "https://search.lib.virginia.edu/catalog/u4443191.json",
//   "https://search.lib.virginia.edu/catalog/u4441703.json",
//   "https://search.lib.virginia.edu/catalog/u4865718.json",
//   "https://search.lib.virginia.edu/catalog/u3904369.json",
//   "https://search.lib.virginia.edu/catalog/u3902632.json",
//   "https://search.lib.virginia.edu/catalog/u2478969.json",
//   "https://search.lib.virginia.edu/catalog/u1749353.json",
//   "https://search.lib.virginia.edu/catalog/u2369217.json",
//   "https://search.lib.virginia.edu/catalog/u3971356.json",
//   "https://search.lib.virginia.edu/catalog/u2397669.json",
//   "https://search.lib.virginia.edu/catalog/u4015815.json",
//   "https://search.lib.virginia.edu/catalog/u3903347.json",
//   "https://search.lib.virginia.edu/catalog/u2636604.json",
//   "https://search.lib.virginia.edu/catalog/u1804265.json",
//   "https://search.lib.virginia.edu/catalog/u1990921.json",
//   "https://search.lib.virginia.edu/catalog/u1749708.json",
//   "https://search.lib.virginia.edu/catalog/u4637451.json",
//   "https://search.lib.virginia.edu/catalog/u3545473.json",
//   "https://search.lib.virginia.edu/catalog/u1750464.json",
//   "https://search.lib.virginia.edu/catalog/u3834091.json",
//   "https://search.lib.virginia.edu/catalog/u3564444.json",
//   "https://search.lib.virginia.edu/catalog/u2785505.json",
//   "https://search.lib.virginia.edu/catalog/u3997399.json",
//   "https://search.lib.virginia.edu/catalog/u3902059.json",
//   "https://search.lib.virginia.edu/catalog/u3900733.json",
//   "https://search.lib.virginia.edu/catalog/u3931089.json",
//   "https://search.lib.virginia.edu/catalog/u1749058.json",
//   "https://search.lib.virginia.edu/catalog/u2100975.json",
//   "https://search.lib.virginia.edu/catalog/u1900234.json",
//   "https://search.lib.virginia.edu/catalog/u1966989.json",
//   "https://search.lib.virginia.edu/catalog/u3943814.json",
//   "https://search.lib.virginia.edu/catalog/u1750128.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161173.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161172.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2160729.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161270.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161038.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2160562.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2160622.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161447.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161221.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161218.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161217.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161215.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161216.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2154054.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161141.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2155943.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2159792.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2162580.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161214.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2153909.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2153907.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2161177.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2160320.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2162331.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2157687.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2160319.json",
//   "https://search.lib.virginia.edu/catalog/uva-lib:2156671.json",
//   "https://search.lib.virginia.edu/catalog/u2120757.json",
//   "https://search.lib.virginia.edu/catalog/u2152806.json",
//   "https://search.lib.virginia.edu/catalog/u2789131.json",
//   "https://search.lib.virginia.edu/catalog/u3714150.json",
//   "https://search.lib.virginia.edu/catalog/u3860734.json",
//   "https://search.lib.virginia.edu/catalog/u2759547.json",
//   "https://search.lib.virginia.edu/catalog/u2789363.json",
//   "https://search.lib.virginia.edu/catalog/u2096724.json",
//   "https://search.lib.virginia.edu/catalog/u2110347.json",
//   "https://search.lib.virginia.edu/catalog/u2786820.json",
//   "https://search.lib.virginia.edu/catalog/u2493611.json",
//   "https://search.lib.virginia.edu/catalog/u2079811.json",
//   "https://search.lib.virginia.edu/catalog/u2789057.json",
//   "https://search.lib.virginia.edu/catalog/u2789225.json",
//   "https://search.lib.virginia.edu/catalog/u2245956.json",
//   "https://search.lib.virginia.edu/catalog/u3943814.json",
//   "https://search.lib.virginia.edu/catalog/u1966989.json",
//   "https://search.lib.virginia.edu/catalog/u1900234.json",
//   "https://search.lib.virginia.edu/catalog/u2100975.json",
//   "https://search.lib.virginia.edu/catalog/u1749058.json",
//   "https://search.lib.virginia.edu/catalog/u3931089.json",
//   "https://search.lib.virginia.edu/catalog/u3900733.json",
//   "https://search.lib.virginia.edu/catalog/u3902059.json",
//   "https://search.lib.virginia.edu/catalog/u3997399.json",
//   "https://search.lib.virginia.edu/catalog/u2785505.json",
//   "https://search.lib.virginia.edu/catalog/u3564444.json",
//   "https://search.lib.virginia.edu/catalog/u3834091.json",
//   "https://search.lib.virginia.edu/catalog/u1750464.json",
//   "https://search.lib.virginia.edu/catalog/u3545473.json",
//   "https://search.lib.virginia.edu/catalog/u4637451.json",
//   "https://search.lib.virginia.edu/catalog/u1749708.json",
//   "https://search.lib.virginia.edu/catalog/u1990921.json",
//   "https://search.lib.virginia.edu/catalog/u1804265.json",
//   "https://search.lib.virginia.edu/catalog/u2636604.json",
//   "https://search.lib.virginia.edu/catalog/u3903347.json",
//   "https://search.lib.virginia.edu/catalog/u4015815.json",
//   "https://search.lib.virginia.edu/catalog/u2397669.json",
//   "https://search.lib.virginia.edu/catalog/u3971356.json",
//   "https://search.lib.virginia.edu/catalog/u2369217.json",
//   "https://search.lib.virginia.edu/catalog/u1749353.json",
//   "https://search.lib.virginia.edu/catalog/u2478969.json",
//   "https://search.lib.virginia.edu/catalog/u3902632.json",
//   "https://search.lib.virginia.edu/catalog/u3904369.json",
//   "https://search.lib.virginia.edu/catalog/u4865718.json",
//   "https://search.lib.virginia.edu/catalog/u4441703.json",
//   "https://search.lib.virginia.edu/catalog/u4443191.json",
//   "https://search.lib.virginia.edu/catalog/u2016117.json",
//   "https://search.lib.virginia.edu/catalog/u2341851.json",
//   "https://search.lib.virginia.edu/catalog/u2457806.json",
//   "https://search.lib.virginia.edu/catalog/u4819897.json",
//   "https://search.lib.virginia.edu/catalog/u4819899.json",
//   "https://search.lib.virginia.edu/catalog/u5231958.json",
//   "https://search.lib.virginia.edu/catalog/u3929874.json",
//   "https://search.lib.virginia.edu/catalog/u4043091.json",];

//   var needle1 = {
//   'cabell':['cabell', 'old cabell', 'new cabell', 'music building','music department','concert hall','cabell hall', 'mcintire']
//   };

//   var needle2 = {
//   'music':['music', 'piano', 'concert', 'performance', 'band', 'dance', 'choir', 'ensemble']
//   };


//   function find_search3_results(json_file, needle1Array, needle2Array) {
//   d3.json(json_file, function(data) {

//     let data_parsed = data['response']['docs'][0];
//     let final_list = [];
//     let search_results1 = 0;
//     let search_results2 = 0;
//     let all_search_results = 0;
//     // start map
//     Object.entries(data_parsed).map((b) => {
//       if (typeof b[1] === 'object'){
//         // console.log(search_results1, data['response']['docs'][0]['title_display']);
//         // console.log(search_results2, data['response']['docs'][0]['title_display']);
//         // using the [key, value] pairs from the parsed entries
//         // let items = Object.values(b[1]).map(w => w.toLowerCase());

//   // this part below isn't working
//         b[1].map((word) => {
//             needle1Array.map((key) => {
//              if (word.toLowerCase().includes(key)) {
//                search_results1 = search_results1 + 1;
//                console.log('1', search_results1);
//              }
//             });
        
//             needle2Array.map((key2) => {
//               if (word.toLowerCase().includes(key2)) {
//                 search_results2 = search_results2 +1;
//                 console.log('2', search_results2);
//               }
//             });
//             if (search_results1 > 0 && search_results2 > 0){
//               all_search_results = search_results1 + search_results2;
//               console.log('all', all_search_results);
//             }
//         });
//        }
//     });
// let titleText = data['response']['docs'][0]['title_display'];
// let url = data['response']['docs'][0]['id'];
// let size = all_search_results + 1;
//       if (all_search_results > 0) {
//           let paddingSize = 1 + size;
//           let circleSize = 80 + size;
//           if (size >= 9) {
//             let multiplier = 2.8;
//             let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText} <br> ${size}</span></a></li>`;
//             $('.results-list').append(html);
//           }
//           else if (size < 9 && size > 4) {
//             let multiplier = 1.8;
//             let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText} <br> ${size}</span></a></li>`;
//             $('.results-list').append(html);
//           }
//           else {
//             let multiplier = 1;
//             let html = `<li class="result-wrapper" style="height:${80 * multiplier}px;width:${80 * multiplier}px;"><a href="https://search.lib.virginia.edu/catalog/${url}" class="result__link" target="_blank"><span class="result-link__text">${titleText} <br> ${size}</span></a></li>`;
//             $('.results-list').append(html);
//           }
//       }
//   });

//   }

//   function search3(search3Needle, search3Needle1){

//   $('.results-list').html('');
//   for (var i = 0; i < list_of_json.length; i++){
//     find_search3_results(list_of_json[i], needle1[search3Needle], needle2[search3Needle1]); } }