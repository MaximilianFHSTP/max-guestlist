const socket = io.connect('http://localhost:8100');
socket.emit('connectClient');

addImages();
var guestlistUsers;

socket.on('displayData', (data) => {
    guestlistUsers = data.guestlistUsers;
    console.log('guestlistUsers',data.guestlistUsers);
    updateGuestlist();
});

function addImages(){
    let guestlistImg = document.getElementById('guestlistImg');
    var guestImg = document.createElement("IMG");
    guestImg.src = '../assets/img/Freigestellt.png';
    guestImg.style.height = '160px';
    guestlistImg.appendChild(guestImg);

    let adelImg = document.getElementById('adelImg');
    var adImg = document.createElement("IMG");
    adImg.src = '../assets/img/adelicon.png';
    adImg.style.height = '80px';
    adelImg.appendChild(adImg);

    let buergertumImg = document.getElementById('buergertumImg');
    var buetImg = document.createElement("IMG");
    buetImg.src = '../assets/img/buergertumicon.png';
    buetImg.style.height = '80px';
    buergertumImg.appendChild(buetImg);
}

function updateGuestlist() {
    let adell = document.getElementById('adel1');
    let adel2 = document.getElementById('adel2');
    let adel3 = document.getElementById('adel3');
    let adel4 = document.getElementById('adel4');
    let adel5 = document.getElementById('adel5');
    let adel6 = document.getElementById('adel6');    
    let buergertuml = document.getElementById('buergertum1');
    let buergertum2 = document.getElementById('buergertum2');
    let buergertum3 = document.getElementById('buergertum3');
    let buergertum4 = document.getElementById('buergertum4');
    let buergertum5 = document.getElementById('buergertum5');
    let buergertum6 = document.getElementById('buergertum6');
    let buergertum7 = document.getElementById('buergertum7');
    let buergertum8 = document.getElementById('buergertum8');


    switch(guestlistUsers.adel.length) { 
        case 1: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            break; 
        }         
        case 2: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            adel2.innerHTML = guestlistUsers.adel[1].name;
            break; 
        }         
        case 3: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            adel2.innerHTML = guestlistUsers.adel[1].name;
            adel3.innerHTML = guestlistUsers.adel[2].name;
            break; 
        }         
        case 4: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            adel2.innerHTML = guestlistUsers.adel[1].name;
            adel3.innerHTML = guestlistUsers.adel[2].name;
            adel4.innerHTML = guestlistUsers.adel[3].name;
            break; 
        }         
        case 5: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            adel2.innerHTML = guestlistUsers.adel[1].name;
            adel3.innerHTML = guestlistUsers.adel[2].name;
            adel4.innerHTML = guestlistUsers.adel[3].name;
            adel5.innerHTML = guestlistUsers.adel[4].name;
            break; 
        }         
        case 6: { 
            adell.innerHTML = guestlistUsers.adel[0].name;
            adel2.innerHTML = guestlistUsers.adel[1].name;
            adel3.innerHTML = guestlistUsers.adel[2].name;
            adel4.innerHTML = guestlistUsers.adel[3].name;
            adel5.innerHTML = guestlistUsers.adel[4].name;
            adel6.innerHTML = guestlistUsers.adel[5].name;
            break; 
        } 
    }


    switch(guestlistUsers.buergertum.length) { 
        case 1: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            break; 
        }         
        case 2: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            break; 
        }         
        case 3: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            break; 
        }         
        case 4: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            buergertum4.innerHTML = guestlistUsers.buergertum[3].name;
            break; 
        }         
        case 5: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            buergertum4.innerHTML = guestlistUsers.buergertum[3].name;
            buergertum5.innerHTML = guestlistUsers.buergertum[4].name;
            break; 
        }         
        case 6: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            buergertum4.innerHTML = guestlistUsers.buergertum[3].name;
            buergertum5.innerHTML = guestlistUsers.buergertum[4].name;
            buergertum6.innerHTML = guestlistUsers.buergertum[5].name;
            break; 
        } 
        case 7: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            buergertum4.innerHTML = guestlistUsers.buergertum[3].name;
            buergertum5.innerHTML = guestlistUsers.buergertum[4].name;
            buergertum6.innerHTML = guestlistUsers.buergertum[5].name;
            buergertum7.innerHTML = guestlistUsers.buergertum[6].name;
            break; 
        } 
        case 8: { 
            buergertuml.innerHTML = guestlistUsers.buergertum[0].name;
            buergertum2.innerHTML = guestlistUsers.buergertum[1].name;
            buergertum3.innerHTML = guestlistUsers.buergertum[2].name;
            buergertum4.innerHTML = guestlistUsers.buergertum[3].name;
            buergertum5.innerHTML = guestlistUsers.buergertum[4].name;
            buergertum6.innerHTML = guestlistUsers.buergertum[5].name;
            buergertum7.innerHTML = guestlistUsers.buergertum[6].name;
            buergertum8.innerHTML = guestlistUsers.buergertum[7].name;
            break; 
        } 
    }
}
