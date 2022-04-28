function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



  var url = "https://jsonplaceholder.typicode.com/posts";
  var container = document.querySelector(".blog");
  
  fetch(url)
     .then(res => res.json())
     .then((result) => {
        console.log(result);
        
        for( i = 0; i < result.length; i++) {
           result[i];
  
           var div1 = document.createElement("div");
           div1.classList.add("details");
           container.appendChild(div1);
  
           var span1 = document.createElement("span");
           span1.classList.add("name");
           span1.innerText = "userId";
  
           var span2 = document.createElement("span");
           span2.classList.add("data");
           span2.innerText = result[i].userId;
  
           var span3 = document.createElement("span");
           span3.classList.add("name");
           span3.innerText = "id";
  
           var span4 = document.createElement("span");
           span4.classList.add("data");
           span4.innerText = result[i].id;

           
  
           div1.append(span1, span2, span3, span4);
           
        }
  
     });


function showDetails(){
 var container = document.querySelector(".data");
 var id = container.innerHTML;
 
 console.log(id);
var url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  
  fetch(url)
     .then(res => res.json())
     .then((result) => {
         alert(result.title);
        // console.log(result);
        // var div1 = document.createElement("div");
        // div1.classList.add("overlay");
        // container.appendChild(div1);

        // var span1 = document.createElement("span");
        // span1.classList.add("name");
        // span1.innerText = result.id.title;
        // div1.append(span1);
        
        
  
     });
     }


     function show(){
        console.log('name: '+document.getElementById('name').value + ' date: '+document.getElementById('date').value +':feedbacktitle '+document.getElementById('feedbacktitle').value+
        ':feedbackmessage '+document.getElementById('feedbackmessage').value+
        ':gender '+document.getElementById('exampleRadios').value+
        ':checkbox '+document.getElementById('checkbox').value
        
        );
     }