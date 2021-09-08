function ageCalculate(){
    if(document.getElementById('resulth1'))
    {
        document.getElementById('resulth1').remove();
        var birthYear = prompt("Enter your birth year ");
        var days = (2021-birthYear) * 365;
        var h1 = document.createElement('h1');
        h1.setAttribute('id','resulth1');
        h1.textContent = 'You are '+days+' days old';
        // var answer = document.createTextNode('You are '+days+' days old');
        // h1.setAttribute('id','resulth1');
        // h1.appendChild(answer);
        document.getElementById("result").appendChild(h1);
    }
    else{
    var birthYear = prompt("Enter your birth year ");
    var days = (2021-birthYear) * 365;
    var h1 = document.createElement('h1');
    h1.setAttribute('id','resulth1');
    h1.textContent = 'You are '+days+' days old';
    // var answer = document.createTextNode('You are '+days+' days old');
    // h1.setAttribute('id','resulth1');
    // h1.appendChild(answer);
    document.getElementById("result").appendChild(h1);
    }
}
function reset(){
    document.getElementById('resulth1').remove();
}