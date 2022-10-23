const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    //alert('Copia este links: https://forms.office.com/pages/designpagev2.aspx?origin=OfficeDotCom&lang=es&sessionid=855b992f-a53a-4816-b8f9-e04034b7738b&route=Templates&subpage=design&id=Dpn32j-KnECbdipUdQmAAGmknbOtrvpAj0gzui1mpaFUN0hXUEhaNzdMMEc2RDFaSlBFN1hRRTZRTS4u&analysis=false&branchingelementid=rd1dc605bd0a64f668cf8fd975603b2ad')
    document.write('ESOOOO, ahora solo copia este links (tranqui no es un virus): https://forms.office.com/r/2mW3Vn1zzL');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})