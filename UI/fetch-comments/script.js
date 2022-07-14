comments=[]
function getComments(){
    url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url).then(response => response.json()).then(json => comments = json);
}

function addComments(){
    postId = document.getElementById("postId").value;
    id = comments.length+1;
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    body = document.getElementById("body").value;

    comment = {
        postId:postId,
        id:id,
        name:username,
        email:email,
        body:body
    }
    url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url,
        {
            method:"post",
            body:JSON.stringify(comment),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(
                json => {
                    comments.unshift(json);
                }
            ).catch(reason => console.log(reason))



}

function displayComments(){
    data = "<tr> <th> Post ID </th> <th> Comment ID </th> <th> User Name </th> <th> Email </th> <th> Body </th> </tr>";
    for(comment of comments){
        data += `<tr> <td> ${comment.postId} </td> <td> ${comment.id} </td> <td> ${comment.name} </td> <td> ${comment.email} </td> <td> ${comment.body} </td> <td> <input type = "button" value = "Edit" id = "${comment.id}" onclick="editComment(${comment.id})"> </td>
        <td> <input type = "button" value = "Delete" id = "${comment.id}" onclick="deleteComment(${comment.id})"> </td> </tr>`
    }
    document.getElementById("display").innerHTML = data;
}
function editComment(id){
    document.getElementById("update-btn").style.visibility="visible";

    comment = comments.find((comment)=>comment.id === id);
    document.getElementById("postId").value=comment.postId
    document.getElementById("id").value=comment.id
    document.getElementById("name").value=comment.name
    document.getElementById("email").value=comment.email
    document.getElementById("body").value=comment.body
   
}

function updateComment(){
    commentId = document.getElementById("id").value;
    console.log(commentId)
    comments.find((comment)=>comment.id === commentId);
    console.log(comment)
    comment.postId = parseInt(document.getElementById("postId").value);
    comment.name = document.getElementById("name").value;
    comment.email=  document.getElementById("email").value;
    comment.body = document.getElementById("body").value;
    displayComments();
}

function deleteComment(id){
    comments.find((comment)=>comment.id === id);

    const indexOfComment = comments.findIndex( comment=> {
        return comment.id === comment.id;
      });
      
    comments.splice(indexOfComment, 1);
    displayComments();


}

