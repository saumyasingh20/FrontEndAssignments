function getUsers() {
    document.getElementById("fetch-btn").style.visibility = "hidden";
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){

            display(JSON.parse(this.responseText));
        }
    }

    xhr.open("get","http://jsonplaceholder.typicode.com/users");
    xhr.send();
    document.getElementById("clear-btn").style.visibility = "visible";
 
  }
  
  function display(users){
      
    data = "<tr> <th> Name </th> <th> Email </th> <th> City </th> <th> Phone </th> <th> Company Name </th></tr>";

    for(user of users){
        data += ` <tr> <td> ${user.name} </td> <td class = "lower"> ${user.email} </td> <td> ${user.address.city} </td> <td> ${user.phone} </td> <td> ${user.company.name} </td></tr>`
    }
    document.getElementById("display").innerHTML=data;
  }

  function cls(){
    blank = "<tr> </tr>"
    document.getElementById("display").innerHTML= blank;
    document.getElementById("fetch-btn").style.visibility = "visible";
    document.getElementById("clear-btn").style.visibility = "hidden";
  }