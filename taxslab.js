let am= 600000;

function taxc(amount){
    let tax=0;
    if(250000<amount<500000){
        tax+= (amount-250000)*0.05;
    }
    if(500000<amount && amount<750000){
        tax= (amount-500000)*0.1 + 250000*0.05; 
    }
    if(750000<amount && amount<1000000){
        tax+= (amount-750000)*0.15 + 250000*0.1 +250000*0.05;
    }
    if(1000000<amount && amount<1250000){
        tax+= (amount-1000000)*0.20 + 250000*0.15 + 250000*0.1 +250000*0.05;
    }
    if(1250000<amount && amount<1500000){
        tax+= (amount-1250000)*0.25 + 250000*0.20 + 250000*0.15 + 250000*0.1 +250000*0.05;
    }
    if(1500000<amount){
        tax+= (amount-1500000)*0.30 + 250000*0.25 + 250000*0.20 + 250000*0.15 + 250000*0.1 +250000*0.05 ;
    }
    console.log(tax);
}
taxc(am);
