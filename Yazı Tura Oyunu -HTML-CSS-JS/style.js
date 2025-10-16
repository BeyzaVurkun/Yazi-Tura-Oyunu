//tura yazı sayıları oluştur başlangıçta sıfırla
let tura=0;
let yazi=0;

//html de coin flip,reset seç

let coin=document.querySelector(".coin");
let flipBtn=document.querySelector("#flip-button");
let resetBtn=document.querySelector("#reset-button");

//flip butonuna tıklandığında
flipBtn.addEventListener('click',()=>{
    //rastgele 0 veya 1 seçer (0:tura 1:yazı)
    let i=Math.floor(Math.random()*2);
    //coin ani. geçici kapat
    coin.style.animation="none";

    if(i)
    {
        //eğer i:1 ise yazıysa 100 ms sonra coine flip-tura ani uygula
        setTimeout(()=>{
          coin.style.animation="spin-tura 3s forwards";
        },100);
        tura++;
    }
    else
    {
        setTimeout(()=>{
         coin.style.animation="spin-yazi 3s forwards";
        },100);
        yazi++;
    }
    //istatistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats,3000); //fonksiyonunu 3 saniye (3000 ms) sonra çalıştır diyor.
//animasyon bitmeden sayı güncellenmiyor, kullanıcı animasyonu görmüş oluyor.
    disableButton();//Buton tıklanamaz hâle gelir.
});
    //istatistikleri güncelleme fonk.
    function updateStats(){
        document.querySelector("#tura-count").textContent=`Tura:${tura}`;
        document.querySelector("#yazi-count").textContent=`Yazı:${yazi}`;
    }

function disableButton(){
    flipBtn.disabled=true;//tıklanmaz
    setTimeout(()=>{
     flipBtn.disabled=false;//3 sn sonra tıklanır
    },3000);
}

resetBtn.addEventListener('click',()=>{
   coin.style.animation="none";
   tura=0;
   yazi=0;
   updateStats();
});

