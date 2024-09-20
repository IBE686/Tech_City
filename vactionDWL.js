var dForm = document.getElementById("detailForm");
dForm.addEventListener('submit', subHandler)


function subHandler(event){
    event.preventDefault();
    var dName = event.target.elements["name"].value;
    var dest = event.target.elements["location"].value;
    var pUrl = event.target.elements["photo"].value;
    var descDest = event.target.elements["desc"].value;
    
    //Clearing the form
    for(var i=0; i < dForm.length; i++){
        dForm.elements[i].value ="";
    }

    var destCard = destCardCreator(dName, dest, pUrl, descDest );
    //Changing the title

var destcontainer = document.querySelector('#overalCardContainer');
if(destcontainer.children.length==0){
    document.getElementById('title').innerHTML = 'My Wish List';
    
}

document.querySelector('#overalCardContainer').appendChild(destCard);
}


//Destination Card Creator
function destCardCreator(Name, location, pix, descript ){
    var cardDiv = document.createElement('div');
    cardDiv.className= "cardCont";

    var image = document.createElement('img');
    image.setAttribute('alt', Name );

    var constPix = "signpost.jpg";
    if(pix.length=== 0){
        image.setAttribute('src', constPix);
    }
    else{
        image.setAttribute('src',pix);
    }
    
    cardDiv.appendChild(image);
    
    var cardB = document.createElement('div');
    cardB.className= "cardBody";

    var h3 = document.createElement('h3');
    h3.innerText = Name;
    cardB.appendChild(h3);

    var h4 = document.createElement('h4');
    h4.innerText= location;
    cardB.appendChild(h4);

    
    if(descript.length !== 0){
        var CardP = document.createElement('p');
        CardP.innerText = descript;
        cardB.appendChild(CardP);
    }


    var clrbtn = document.createElement('button');
    clrbtn.innerText ="Remove";

    clrbtn.addEventListener('click',removeDestination);
    cardB.appendChild(clrbtn);
    cardDiv.appendChild(cardB);
    
    return cardDiv;

}

function removeDestination(event){
    cardDiv = event.target.parentElement.parentElement;
    cardDiv.remove();
}