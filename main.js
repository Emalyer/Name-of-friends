name_of_friends=[];
function sumit(){
    var name_one=document.getElementById("friend_1").value;
    var name_two=document.getElementById("friend_2").value;
    var name_three=document.getElementById("friend_3").value;
    var name_four=document.getElementById("friend_4").value;
    name_of_friends.push(name_one);
    name_of_friends.push(name_two);
    name_of_friends.push(name_three);
    name_of_friends.push(name_four);
    console.log(name_of_friends);
    document.getElementById("display_name").innerHTML=name_of_friends;
    document.getElementById("sumit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_of_friends.sort();
console.log(name_of_friends);
document.getElementById("display_name").innerHTML=name_of_friends;
}