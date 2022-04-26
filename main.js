/**
 * WHILE
 */
 var n = 0;
 while( n < 5) {
     // hhành động
      console.log("hello cybersoft");
     // bước nhảy
     n++ ;
 }
 
 // BÀI TẬP
 document.getElementById("xuat").onclick = function() {
     var number = document.getElementById("soNguyen").value*1;
     var count = 0;
     var ketqua = "";
     while(number > 1) {
         count++;
         // bước nhảy
         number = Math.floor(number/2);
         // show kq
         ketqua += "<div> count: " + count + " - number: " + number + "</div>";
     }
     document.getElementById("thongbao").innerHTML = ketqua;
 }
 
 /**
  * DO WHILE
  */
 var m = 0;
 do {
     // hành động
     console.log("hi cybersoft");
     // bước nhảy
     m++;
 }
 while( m < 5);
 
 // Bài tập
 document.getElementById("tinhTong").onclick = function() {
     var num = document.getElementById("nhapSo").value*1;
     var tong = 0;
     var count = 1;
     do {
         tong += count;
         count++;
     } while(count <= num);
     document.getElementById("thongbao1").innerHTML = "Tổng là: "+ tong;
 }
 /**
  * tong =1 , count = 2, count < num
  * tong =3 , count = 3, count < num
  * tong =6 , count = 4, count < num
  * tong =10 , count = 5, count = num
  * tong =15 , false => stop
  */


 /**
  * FOR
  for ( đặt biến, điều kiện, bước nhảy){ hành động} 
  */
 
 for(var a = 0; a < 5; a++) {
     // hành động
     console.log("hello Cybersoft");
     // khởi tạo => điều kiện => hành động => bước nhảy
 }
 // Bài tập
 document.getElementById("inSo").onclick = function() {
     var num = document.getElementById("nhapso").value*1;
     var soChan = "";
     var soLe = "";
     for(var i = 0; i < num; i++) {
         console.log(i);
         if(i%2 == 0) {
             // chẫn
             soChan += i + " ";
         } else {
             // lẻ
             soLe += i + " ";
         }
     }
     document.getElementById("thongbao2").innerHTML = "Số chẵn là: "+ soChan;
     document.getElementById("thongbao3").innerHTML = "Số lẻ là: "+ soLe;
 }
 
 
 function demoVongLapLong() {
     var content = "";
     // tạo dòng
     for(var i = 0; i < 5; i++) {
         // tạo cột
         for(var j = 0; j < 5; j++) {
             content += "* "
         } // xuống dòng
         content += "\n";
     }
     console.log(content);
 }
 demoVongLapLong();
 /**
  * i = 0 ; i < 5
  *      j = 0 ; j < 5 ; "* " => j = 1
  *      j = 1 ; j < 5 ; "* * " => j = 2
  *      j = 2 ; j < 5 ; "* * * " => j = 3
  *      j = 3 ; j < 5 ; "* * * * " => j = 4
  *      j = 4 ; j < 5 ; "* * * * * " => j = 5
  *      j = 5 ; false => stop
  * i = 1 ; i < 5
  *      j = 0 ; j < 5 ; "* " => j = 1
  *      j = 1 ; j < 5 ; "* * " => j = 2
  *      j = 2 ; j < 5 ; "* * * " => j = 3
  *      j = 3 ; j < 5 ; "* * * * " => j = 4
  *      j = 4 ; j < 5 ; "* * * * * " => j = 5
  *      j = 5 ; false => stop
  * i = 2 ; i < 5
  *      j = 0 ; j < 5 ; "* " => j = 1
  *      j = 1 ; j < 5 ; "* * " => j = 2
  *      j = 2 ; j < 5 ; "* * * " => j = 3
  *      j = 3 ; j < 5 ; "* * * * " => j = 4
  *      j = 4 ; j < 5 ; "* * * * * " => j = 5
  *      j = 5 ; false => stop
  * i = 3 ; i < 5
  *      j = 0 ; j < 5 ; "* " => j = 1
  *      j = 1 ; j < 5 ; "* * " => j = 2
  *      j = 2 ; j < 5 ; "* * * " => j = 3
  *      j = 3 ; j < 5 ; "* * * * " => j = 4
  *      j = 4 ; j < 5 ; "* * * * * " => j = 5
  *      j = 5 ; false => stop
  * i = 5 ; i < 5
  *      j = 0 ; j < 5 ; "* " => j = 1
  *      j = 1 ; j < 5 ; "* * " => j = 2
  *      j = 2 ; j < 5 ; "* * * " => j = 3
  *      j = 3 ; j < 5 ; "* * * * " => j = 4
  *      j = 4 ; j < 5 ; "* * * * * " => j = 5
  *      j = 5 ; false => stop
  * i = 5 ; false => stop
  */
 
 /**
  * BREAK
  */
 function demoBreak() {
     for(var i = 0; i < 10; i++) {
         if( i === 3) {
             console.log("Tìm thấy số: " + i);
             break;
         }
     }
 }
 demoBreak();
 
 /**
  * CONTINUE
  */
 function demoContinue() {
     for(var i = 0; i < 10; i++) {       
         if(i === 3) {
             continue;
         }
         console.log(i);
     }
 }
 demoContinue();
 
 /**
  * RETURN
  */
 function demoReturn() {
     if( 1 === 1) {
         console.log("Điều kiện đúng");
         return;
     }
     console.log("hello cybersoft");
 }
 demoReturn();