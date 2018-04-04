d3.json("http://search.lib.virginia.edu/catalog/u3703560.json", function(data)
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
console.log("number of search hits: " + search_results);
});


d3.json("http://search.lib.virginia.edu/catalog/u3903400.json", function(data)
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
console.log("number of search hits: " + search_results);
});

d3.json("http://search.lib.virginia.edu/catalog/u3902988.json", function(data)
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
  console.log("number of search hits: " + search_results);
  });

d3.json("https://search.lib.virginia.edu/catalog/u4454941.json", function (data)
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
 console.log("number of search hits: " + search_results);
 });

d3.json("https://search.lib.virginia.edu/catalog/u4402836.json", function (data)
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
console.log("number of search hits: " + search_results);

});
// d3.json("https://search.lib.virginia.edu/catalog/u4697122.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u3902531.json", function (data)
// {
//   console.log(data['response']['docs'][0]['title_display']);
//   let needle1 = 'Cabell';
//   let needle2 = 'Charlottesville';
//   let needle3 = 'Albemarle';
//   let needle4 = 'Virginia';
//   let needle5 = 'Va.';
//   let needle6 = 'Va';
//   let needle7 = 'music';
//   let data_parsed = data['response']['docs'][0];
//   let final_list = [];
//   let search_results = 0;
//   Object.entries(data_parsed).map( (b) => {
//     let key = b[0];
//     let items = b[1];
//     if (typeof(key) === "number" || typeof(items) === "number"){
//       console.log('ignore');      }
//      else if (key.includes(needle1) || items.includes(needle1))        {
//        console.log("Related to Cabell Hall(s)");
//        search_results = search_results + 1;
//     }
//     else if (key.includes(needle2) || items.includes(needle2)) {
//               console.log("Related to Charlottesville");
//                  search_results = search_results + 1;
//   }
//   else if (key.includes(needle3) || items.includes(needle3)) {
//       console.log("Related to Charlottesville");
//          search_results = search_results + 1;
//   }
//   else if (key.includes(needle4) || items.includes(needle4)) {
//       console.log("Related to Charlottesville");
//          search_results = search_results + 1;
//   }
//   else if (key.includes(needle5) || items.includes(needle5)) {
//       console.log("Related to Charlottesville");
//          search_results = search_results + 1;
//   }
//   else if (key.includes(needle6) || items.includes(needle6)) {
//       console.log("Related to Charlottesville");
//          search_results = search_results + 1;
//   }
//   else if (key.includes(needle7) || items.includes(needle7)) {
//       console.log("Related to music at UVa");
//          search_results = search_results + 1;
// }
//      });
// console.log("number of search hits: " + search_results);
// });
//
//
// d3.json("https://search.lib.virginia.edu/catalog/u3901059.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u3562234.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u2478997.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u4395005.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u1749488.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u2101073.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u6731744.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
// d3.json("https://search.lib.virginia.edu/catalog/u6098997.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u5390684.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
//
// d3.json("https://search.lib.virginia.edu/catalog/u4043091.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3929874.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u5231958.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4819899.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4819897.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2457806.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2341851.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2016117.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4443191.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4441703.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4865718.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3904369.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3902632.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2478969.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1749353.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2369217.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3971356.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2397669.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4015815.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3903347.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2636604.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1804265.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1990921.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1749708.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u4637451.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3545473.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1750464.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3834091.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3564444.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2785505.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3997399.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3902059.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3900733.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3931089.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1749058.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2100975.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1900234.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u1966989.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3943814.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2245956.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2789225.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2789057.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2079811.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2493611.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2786820.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2110347.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2096724.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2789363.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2759547.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3860734.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u3714150.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2789131.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2152806.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/u2120757.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2156671.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2160319.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2157687.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2162331.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2160320.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161177.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2153907.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2153909.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161214.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2162580.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2159792.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2155943.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161141.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2154054.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161216.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161215.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161217.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161218.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161221.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161447.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2160622.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2160562.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161038.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161270.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2160729.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161172.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
//
// d3.json("https://search.lib.virginia.edu/catalog/uva-lib:2161173.json", function (data)
//  {
//       console.log(data['response']['docs'][0]['title_display']);
//       let needle1 = 'Cabell';
//       let needle2 = 'Charlottesville';
//       let needle3 = 'Albemarle';
//       let needle4 = 'Virginia';
//       let needle5 = 'Va.';
//       let needle6 = 'Va';
//       let needle7 = 'music';
//       let data_parsed = data['response']['docs'][0];
//       let final_list = [];
//       Object.entries(data_parsed).map( (b) => {
//         let key = b[0];
//         let items = b[1];
//         if (typeof(key) === "number" || typeof(items) === "number"){
//           console.log('ignore');      }
//          else if (key.includes(needle1) || items.includes(needle1))        {
//            console.log("Related to Cabell Hall(s)");
//         }
//         else if (key.includes(needle2) || items.includes(needle2)) {
//                   console.log("Related to Charlottesville");
// }
// else if (key.includes(needle3) || items.includes(needle3)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle4) || items.includes(needle4)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle5) || items.includes(needle5)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle6) || items.includes(needle6)) {
//           console.log("Related to Charlottesville");
// }
// else if (key.includes(needle7) || items.includes(needle7)) {
//           console.log("Related to music at UVa");
// }
//       });
// });
