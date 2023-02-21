 function hesapla(){
    var tutar,vade;            //değişkenlerimizi oluşturduk , bir kredi çekileceği zaman,
    var taksit,odenecekTutar; //kredi tutarı ,vadesi,taksit seçenekleri ve geri ödeme tutarları hesaplanır 

    var list;

    tutar=document.getElementById("krediTutari").value; //html sayfaamızla bağlantı kurduk
    list=document.getElementById("liste");
    vade=list.options[list.selectedIndex].value;    //seçtiğimiz listenin değerini olduğu gibi akatarır
    
    if(vade==12){
        odenecekTutar=tutar*1.1;    //faiz tutarları aylar uzadıkça arttığı için , kontrol sağlanıyor
    }
    else if(vade==24){
        odenecekTutar=tutar*1.2;
    }
    else if(vade==36){
        odenecekTutar=tutar*1.3;
    }
    else
    odenecekTutar=tutar*1.4;

    taksit=odenecekTutar/vade;

    document.querySelector("#sonuc").innerHTML="Ödenecek Toplam Tutar:"+odenecekTutar+ 
    "<br>"+"Aylık Taksit Tutarı:"+taksit.toFixed(2); //ve ödenecek tutar yazdırılıyor.
}