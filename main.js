/**
 * 1. Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
 * 
 * B1: Input: Ngày, Tháng, Năm người dùng nhập vào
 * B2: Handle
 *  - Đặt biến: ipNgay, ipThang, ipNam, ngayTruoc, ngaySau, thangTruoc, thangSau, namTruoc, namSau
 *  - Dùng hàm if so sánh các giá trị ngày tháng năm tăng giảm ngày tháng năm.
 * B3: Output: Xuat ngay tháng năm cua ngày trước và ngày sau
 */


var btnTimNgay = document.getElementById('btnTimNgay');
var kqTimNgay = document.getElementById('kqNgayTruoc');
var kqTimNgay = document.getElementById('kqNgaySau');



btnTimNgay.onclick = function () {
    var ipNgay = +document.getElementById('ipNgay').value;
    var ipNam = +document.getElementById('ipNam').value;
    var ipThang = +document.getElementById('ipThang').value;
    var ngayTruoc = ngaySau = ipNgay;
    var thangTruoc = thangSau = ipThang;
    var namTruoc = namSau = ipNam;

       // Ngày tiếp theo
    if (((ipNgay >= 1) && (ipNgay <= 29) && (ipThang != 2)) || ((ipNgay >= 1) && (ipNgay <= 27) && (ipThang == 2)) || ((ipNgay == 28) && (ipThang == 2) && ((ipNam % 4 == 0 && ipNam % 100 != 0) || (ipNam % 400 == 0)))) {
        ngaySau = ipNgay + 1;
    } else if ((ipNgay == 28 && ipThang == 2 && !((ipNam % 4 == 0 && ipNam % 100 != 0) || (ipNam % 400 == 0)) || (ipNgay == 29 && ipThang == 2 && ((ipNam % 4 == 0 && ipNam % 100 != 0) || (ipNam % 400 == 0))))) {
        ngaySau = 1;
        thangSau = 3;
    } else if (((ipNgay == 30) && (ipThang == 4 || ipThang == 6 || ipThang == 9 || ipThang == 11)) || ((ipNgay == 31) && (ipThang == 1 || ipThang == 3 || ipThang == 5 || ipThang == 7 || ipThang == 8 || ipThang == 10))) {
        ngaySau = 1;
        thangSau = ipThang + 1;
    } else if ((ipNgay == 30) && (ipThang == 1 || ipThang == 3 || ipThang == 5 || ipThang == 7 || ipThang == 8 || ipThang == 10)) {
        ngaySau = ++ipNgay;
    } else if (ipNgay == 31 && ipThang == 12) {
        ngaySau = 1;
        thangSau = 1;
        namSau = ipNam + 1;
    }

    // Ngày trước


    if (ipNgay >= 2 && ipNgay <= 31) {
        ngayTruoc = ipNgay - 1;
    } else if (ipNgay == 1 && ipThang == 3 && !((ipNam % 4 == 0 && ipNam % 100 != 0) || (ipNam % 400 == 0))) {
        ngayTruoc = 28;
        thangTruoc = 2;
    } else if (ipNgay == 1 && ipThang == 3 && ((ipNam % 4 == 0 && ipNam % 100 != 0) || (ipNam % 400 == 0))) {
        ngayTruoc = 29;
        thangTruoc = 3;
    } else if ((ipNgay == 1) && (ipThang == 4 || ipThang == 6 || ipThang == 9 || ipThang == 11)) {
        ngayTruoc = 31;
        thangTruoc = ipThang - 1;
    } else if (((ipNgay == 1) && (ipThang == 3 || ipThang == 5 || ipThang == 7 || ipThang == 8 || ipThang == 10 || ipThang == 12))) {
        ngayTruoc = 30;
        thangTruoc = --ipThang;
    } else if (ipNgay == 1 && ipThang == 1) {
        ngayTruoc = 31;
        thangTruoc = 12;
        namTruoc = ipNam - 1;
    }

    kqNgayTruoc.innerHTML = 'Ngày sau là: Ngày: ' + ngaySau + ' - ' + 'tháng: ' + thangSau + ' - ' + 'năm: ' + namSau;
    kqNgaySau.innerHTML = 'Ngày trước là: Ngày: ' + ngayTruoc + ' - ' + 'tháng: ' + thangTruoc + ' - ' + 'năm: ' + namTruoc;

}


/**
 * Bài 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm thángcủa năm nhuận).
 * 
 * B1: Input: tháng năm người dùng nhập
 * B2: Handle 
 *  - Đặt biến: ipThangB2, ipNamB2, ngayTrongThang
 *  - Kiểm tra người dùng nhập đã đúng tháng năm chưa
 *  - Dùng hàm if để xét các trường hợp tháng nào trả về số ngày tháng đó, nếu năm nhuận thì tháng 2 có 29 ngày.
 * B3: Output Xuất kết quả ra màn hình
 */



var btnTinhNgay = document.getElementById('btnTinhNgay');
var kqNgayTrongThang = document.getElementById('kqNgayTrongThang');


btnTinhNgay.onclick = function () {
    var ipThangB2 = document.getElementById('ipThangB2').value;
    var ipNamB2 = document.getElementById('ipNamB2').value;
    var ngayTrongThang = 0;

    if (isNaN(ipThangB2) || isNaN(ipNamB2) || ipThangB2 < 0 || ipThangB2 > 12 || ipNamB2 <= 0|| Number.isInteger(+ipThangB2) == false ||Number.isInteger(+ipNamB2) == false ) {
        kqNgayTrongThang.innerHTML = 'Vui lòng nhập lại ngày tháng năm'
    }else {
        if (ipThangB2 == 1 || ipThangB2 == 3 || ipThangB2 == 5 || ipThangB2 == 7 || ipThangB2 == 8 || ipThangB2 == 10 || ipThangB2 == 12) {
            ngayTrongThang = 31;
        } else if (ipThangB2 == 4 || ipThangB2 == 6 || ipThangB2 == 9 || ipThangB2 == 11) {
            ngayTrongThang = 30;
        } else if (ipThangB2 == 2 && !((ipNamB2 % 4 == 0 && ipNamB2 % 100 != 0) || (ipNamB2 % 400 == 0))) {
            ngayTrongThang = 28;
        } else {
            ngayTrongThang = 29;
        }
        kqNgayTrongThang.innerHTML = 'Tháng ' + ipThangB2 + ' năm ' + ipNamB2 + ' có: ' + ngayTrongThang + ' ngày'
    }
    
}






/**
 * Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
 * 
 * B1: Input : Số có 3 chữ số người dùng nhập vào
 * B2: Handle  
 *  - Đặt biến soCoBaChuSo, soHangDonVi, soHangChuc, soHangTram
 *  - Tính toán các số và đặt vào biến
 * B3:Output : Xuất kết quả ra màn hình
 */


var btnDocSo = document.getElementById('btnDocSo');
var kqDocSo = document.getElementById('kqDocSo');

btnDocSo.onclick = function() {
    var soCoBaChuSo = +document.getElementById('soCoBaChuSo').value;
    var soHangDonVi, soHangChuc, soHangTram;

    if (isNaN(soCoBaChuSo) ||  (Math.abs(soCoBaChuSo) / 100) < 1 || (Math.abs(soCoBaChuSo) / 1000) > 1  || Number.isInteger(soCoBaChuSo) == false) {
        kqDocSo.innerHTML = 'Vui lòng nhập lại số nguyên có 3 chữ số'
        
    } else {
        soHangDonVi = Math.abs(soCoBaChuSo) % 10;
        soHangChuc = ((Math.abs(soCoBaChuSo) - soHangDonVi) /10) % 10;
        soHangTram = ((Math.abs(soCoBaChuSo) - soHangDonVi - soHangChuc*10)/100);
        if (soCoBaChuSo < 0) {
            if (soHangDonVi != 0 && soHangChuc != 0 && soHangTram != 0) {
            kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: Âm ' + soHangTram + ' trăm ' + soHangChuc +' mươi ' + soHangDonVi;  
            } else if (soHangDonVi == 0 && soHangChuc != 0 && soHangTram != 0) {
                kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: Âm ' + soHangTram + ' trăm ' + soHangChuc +' mươi ';
            } else if (soHangDonVi == 0 && soHangChuc == 0 && soHangTram != 0) {
                kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: Âm ' + soHangTram + ' trăm ';  
            } else if (soHangDonVi != 0 && soHangChuc == 0 && soHangTram != 0) {
                kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: Âm ' + soHangTram + ' trăm ' + ' lẻ ' + soHangDonVi;  
    
            }
    
        } else {
            if (soHangDonVi != 0 && soHangChuc != 0 && soHangTram != 0) {
                kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: ' + soHangTram + ' trăm ' + soHangChuc +' mươi ' + soHangDonVi;  
                } else if (soHangDonVi == 0 && soHangChuc != 0 && soHangTram != 0) {
                    kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: ' + soHangTram + ' trăm ' + soHangChuc +' mươi ';
                } else if (soHangDonVi == 0 && soHangChuc == 0 && soHangTram != 0) {
                    kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: ' + soHangTram + ' trăm ';  
                } else if (soHangDonVi != 0 && soHangChuc == 0 && soHangTram != 0) {
                    kqDocSo.innerHTML = 'Số ' + soCoBaChuSo + ' được đọc là: ' + soHangTram + ' trăm ' + ' lẻ ' + soHangDonVi;  
        
                }
        }
    }
}


/**
 * bài 4: Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất
 * 
 * B1: Input : Tên 3 học sinh và tọa đồ nhà 3 học sinh
 * B2: Handle : 
 *  - Đặt biến: tenHS1, toaDoXHS1, toaDoYHS1, tenHS2, toaDoXHS2, toaDoYHS2, tenHS3, toaDoXHS3, toaDoYHS3, khoangCachHS1, khoangCachHS2, khoangCachHS3
 *  - Tính khoảng cách từng nhà và so sánh xem nhà học sinh nào xa nhất giả sư trường học có tọa độ (0,0)
 * B3: Xuất tên học sinh có nhà xa nhất ra màn hình
 */


var btnTimKhoangCach = document.getElementById('btnTimKhoangCach');
var kqHocSinh = document.getElementById('kqHocSinh');

btnTimKhoangCach.onclick = function() {
    var tenHS1 = document.getElementById('tenHS1').value;
    var toaDoXHS1 = document.getElementById('toaDoXHS1').value;
    var toaDoYHS1 = document.getElementById('toaDoYHS1').value;
    var tenHS2 = document.getElementById('tenHS2').value;
    var toaDoXHS2 = document.getElementById('toaDoXHS2').value;
    var toaDoYHS2 = document.getElementById('toaDoYHS2').value;
    var tenHS3 = document.getElementById('tenHS3').value;
    var toaDoXHS3 = document.getElementById('toaDoXHS3').value;
    var toaDoYHS3 = document.getElementById('toaDoYHS3').value;

    if (isNaN(toaDoXHS1) || isNaN(toaDoYHS1)){
        kqHocSinh.innerHTML = 'Vui lòng nhập lại tọa độ nhà học sinh thứ nhất'
    }else if (isNaN(toaDoXHS2) || isNaN(toaDoYHS2)){
        kqHocSinh.innerHTML = 'Vui lòng nhập lại tọa độ nhà học sinh thứ hai'
    }else if (isNaN(toaDoXHS3) || isNaN(toaDoYHS3)){
        kqHocSinh.innerHTML = 'Vui lòng nhập lại tọa độ nhà học sinh thứ ba'
    }else {
        var khoangCachHS1, khoangCachHS2, khoangCachHS3;
        khoangCachHS1 = Math.sqrt(toaDoXHS1**2 + toaDoYHS1**2);
        khoangCachHS2 = Math.sqrt(toaDoXHS2**2 + toaDoYHS2**2);
        khoangCachHS3 = Math.sqrt(toaDoXHS3**2 + toaDoYHS3**2);
    
        if (khoangCachHS1 == khoangCachHS2 && khoangCachHS2 == khoangCachHS3) {
            kqHocSinh.innerHTML = 'Cả ba học sinh ' + tenHS1 + ', ' + tenHS2 + ', ' + tenHS3 + ' có nhà xa bằng nhau';
        } else if(khoangCachHS1 > khoangCachHS2 && khoangCachHS1 > khoangCachHS3) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS1 + ' có nhà xa nhất';
        } else if(khoangCachHS1 == khoangCachHS2 && khoangCachHS1 > khoangCachHS3) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS1 + ', ' + tenHS2 + ' có nhà xa nhất';
        } else if(khoangCachHS1 == khoangCachHS3 && khoangCachHS1 > khoangCachHS2) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS1 + ', ' + tenHS3 + ' có nhà xa nhất';
        } else if(khoangCachHS2 > khoangCachHS1 && khoangCachHS2 > khoangCachHS3) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS2 + ' có nhà xa nhất';
    
        } else if(khoangCachHS2 == khoangCachHS3 && khoangCachHS3 > khoangCachHS1) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS2 + ', ' + tenHS3 + ' có nhà xa nhất';
        } else if(khoangCachHS3 > khoangCachHS1 && khoangCachHS3 > khoangCachHS2) {
            kqHocSinh.innerHTML = 'Học sinh ' + tenHS3 + ' có nhà xa nhất';
        }
    }
}



