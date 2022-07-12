function calculateDiscount(){
    amt = parseInt(document.getElementById("amt").value);
    discPercent = 0
    if(amt<=10000){
        discPercent = 10;
    }else if(amt>10000 && amt<=20000){
        discPercent = 20;
    }else if(amt>20000) {
        discPercent = 25;
    }
    discount = (discPercent/100)*amt;
    document.getElementById("disc").value = discount;
    netpay = amt-discount;
    document.getElementById("pay").value = netpay;
    document.getElementById("savings").value = discPercent;

}