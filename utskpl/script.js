function getInputValue() {
  var tugas = parseInt(document.getElementById("inputTugas").value);
  var kuis = parseInt(document.getElementById("inputKuis").value);
  var uts = parseInt(document.getElementById("inputUts").value);
  var uas = parseInt(document.getElementById("inputUas").value);
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var nm_mk = document.getElementById("nm_mk").value;
  var outputnilai = document.getElementById("outputnilai");
  var ket;

  a = (tugas * 15) / 100;
  b = (kuis * 20) / 100;
  c = (uts * 30) / 100;
  d = (uas * 35) / 100;
  var totalnilai = 0;
  totalnilai = a + b + c + d;

//grading scale
  if(totalnilai <100 && totalnilai>=92 ){
    ip = "A";
    ket = 'Istimewa';
} else if (totalnilai<91 && totalnilai>= 86){
    ip = "A-";
    ket = 'Hampir Istimewa';
} else if (totalnilai<85 && totalnilai>= 81){
    ip = "B+";
    ket = 'Baik Sekali';
} else if (totalnilai<80 && totalnilai>= 76){
    ip = "B";
    ket = 'Baik';
} else if (totalnilai<75 && totalnilai>= 71){
    ip = "B-";
    ket = 'Cukup Baik';
} else if (totalnilai<70 && totalnilai>= 66){
    ip = "C+";
    ket= 'Lebih dari Cukup';
} else if (totalnilai<65 && totalnilai>= 60){
    ip = "C";
    ket = 'Cukup';
} else if (totalnilai<59 && totalnilai>= 55){
    ip = "D";
    ket = 'Kurang ';
} else {
    ip = "E";
    ket = 'GAGAL';
}

$("#hasil").html(ip)
$("#outputnilai").html(totalnilai)
$("#nama2").html(nama)
$("#nim2").html(nim)
$("#keterangan").html(ket)
$("#nm_mk2").html(nm_mk)

}