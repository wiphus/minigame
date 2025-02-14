// tìm sinh viên cao điểm nhất 
document.querySelector("#btnSVCaoDiemNhat").onclick = () => {
    let taomangten = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    let mangchuanoidung = [];
    for(let i = 0; i < taomangten.length; i++){
        let ten = taomangten[i].innerHTML;
        mangchuanoidung.push(ten);
    }
    let taomangdiem = document.querySelectorAll(".td-scores");
    let mangchuadiem = [];
    for(let i = 0; i < taomangdiem.length; i++){
        let diem = +taomangdiem[i].innerHTML;
        mangchuadiem.push(diem)
    }
    let indexmax = 0;
    let diemmax = mangchuadiem[0];
    for ( let i = 0; i < mangchuadiem.length;i++ )
    {
        if (diemmax < mangchuadiem[i]){
            diemmax = mangchuadiem[i];
            indexmax = i;
        }
    }

    document.querySelector("#svGioiNhat").innerHTML = `${mangchuanoidung[indexmax]} - ${diemmax}`;
};
// tìm sinh viên thấp điểm nhất 
document.querySelector("#btnSVThapDiemNhat").onclick = () => {
    let arrayTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    let arrayTen = [];
    for(let i = 0; i < arrayTagTen.length; i ++){
        let ten = arrayTagTen[i].innerHTML;
        arrayTen.push(ten);
    }
    let arrayTagDiem = document.querySelectorAll(".td-scores");
    let arrayDiem = [];
    for(let i = 0; i < arrayTagDiem.length; i++){
        let diem = arrayTagDiem[i].innerHTML;
        arrayDiem.push(diem);
    }
    let indexMin = 0;
    let diemMin = arrayDiem[0];
    for(let i = 0; i < arrayDiem.length; i++){
        if (diemMin > arrayDiem[i])
        {
            diemMin = arrayDiem[i];
            indexMin = i;
        }
    }

    document.querySelector("#svYeuNhat").innerHTML = `${arrayTen[indexMin]} - ${diemMin}`;
};

// đếm sinh viên giỏi (điểm tb trên 8.)

document.querySelector("#btnSoSVGioi").onclick = () => {
    let arrayTagScore = document.querySelectorAll(".td-scores");
    let arrayScore = [];
    for ( let i = 0; i < arrayTagScore.length; i++)
    {
        let score = arrayTagScore[i].innerHTML;
        arrayScore.push(score);
    }
    let count = 0;
    for(let i = 0; i < arrayScore.length; i++)
    {
        if( arrayScore[i] >= 8.0)
        {
            count++;
        }
    }
    document.querySelector("#soSVGioi").innerHTML = `${count}`
};

// Danh sách sinh viên điểm TB lớn hơn 5

document.querySelector("#btnSVDiemHon5").onclick = () => {
    let arrayTagimg = document.querySelectorAll("#tableSinhVien td:nth-child(2)");
    let arrayImg = [];
    for ( let i = 0; i < arrayTagimg.length; i++)
    {
        let img = arrayTagimg[i].innerHTML;
        arrayImg.push(img);
    }
    let arrayTagScore = document.querySelectorAll(".td-scores");
    let arrayScore = [];
    for ( let i = 0; i < arrayTagScore.length; i++)
    {
        let score = arrayTagScore[i].innerHTML;
        arrayScore.push(score);
    }
    console.log(arrayScore);

    let arrayTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
    let arrayTen = [];
    for(let i = 0; i < arrayTagTen.length; i ++){
        let ten = arrayTagTen[i].innerHTML;
        arrayTen.push(ten);
    }
    // ds sv > 5
    let output = " ";
    for ( let i = 0; i < arrayScore.length; i++)
    {
        if(arrayScore[i] >  5.0)
        {
            output += `${arrayImg[i]} - ${arrayScore[i]} - ${arrayTen[i]}  <br>`;
        }

    }
    document.querySelector("#dsDiemHon5").innerHTML = 
    `<table>
        <tr>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>Điểm</th>
        </tr>
        <tr>
            <td>  </td>
        </tr>
    </table>`
};

