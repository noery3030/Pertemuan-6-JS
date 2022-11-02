
const option = () =>{
    let a = document.getElementById("metode").value
    if(a == "penjumlahan"){
        tambah()
    }else if( a == "pengurangan"){
        kurang()
    }else if(a == "pembagian"){
        bagi()
    }else if (a == "perkalian"){
        kali()
    }
    
}


const tambah = () => {

    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil  = document.getElementById("hasil")

    hasil.innerText = angka1 + angka2
    return hasil
   
}

const kurang = () => {

    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil  = document.getElementById("hasil")

    hasil.innerText = angka1 - angka2
    return hasil
   
}

const kali = () => {

    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil  = document.getElementById("hasil")

    hasil.innerText = angka1 * angka2
    return hasil
   
}

const bagi = () => {

    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil  = document.getElementById("hasil")

    hasil.innerText = angka1 / angka2
    return hasil
   
}





