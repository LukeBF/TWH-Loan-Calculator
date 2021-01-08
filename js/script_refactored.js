MONTHS_IN_YEAR = 12

const totalPayments = (term)=>{
    const MONTHS_IN_YEAR = 12
    const totalPayments = term * MONTHS_IN_YEAR;
    return totalPayments;
}

//CONVERT THE TOTAL PAYMENTS IN MONTHS TO A NEGATIVE EXPONENT
const convertOperator = (totalPayments)=>{
    return -Math.abs(totalPayments);
}

function mthlyInterest(rate) {
    const ANNUAL_INT_RATE = 5;
    const mthlyRate = (ANNUAL_INT_RATE / 100) / MONTHS_IN_YEAR;
    return mthlyRate;
}

const newMthlyRate = ()=>{
    const ANNUAL_INT_RATE = 5
    const newRate = ((ANNUAL_INT_RATE / 100)/MONTHS_IN_YEAR)+1;
    return newRate;
}

const exponent = (payments)=>{
    //LOAN TERM
    const termInput = document.querySelector("#loan-inputs > input:nth-child(3)").value;
    const EXPONENT_VALUE = convertOperator(totalPayments(termInput))
    const sumRaised = 1-(Math.pow(newMthlyRate(), EXPONENT_VALUE));
    return sumRaised;
}

const clear = ()=>{
    //LOAN AMOUNT
    const loanAmt = document.querySelector("#loan-inputs > input");
    //LOAN TERM
    const termInput = document.querySelector("#loan-inputs > input:nth-child(3)");

    
}


function main()
{
    //CALCULATE BUTTON
    const calBtn = document.querySelector("#form-section > form > button");
    //RESET BUTTON
    const resetBtn = document.querySelector("#form-section > form > button:nth-child(4)");
    //LOAN TERM
    const termInput = document.querySelector("#loan-inputs > input:nth-child(3)");
    //RATE
    const annualIntRate = document.querySelector("#loan-inputs > input:nth-child(2)");
    //LOAN AMOUNT
    const loanAmt = document.querySelector("#loan-inputs > input");



    //ELEMENTS TO PRINT WHEN THE BUTTON IS CLICKED
    const heading2 = document.querySelector(".display > h2");

    const summaryHeadings = document.querySelectorAll(".display h3")

    const display = document.querySelector(".display")
   
    //EVENT LISTENERS
    calBtn.addEventListener("click", ()=>{

        const payments = parseInt(termInput.value);   

        const rate = parseInt(annualIntRate.value);

        const amount = parseInt(loanAmt.value);

        const value = mthlyInterest(rate) * amount;

        const mthlyInstalment = value / exponent();

        //DISPLAY AFTER THE CALCULATE BUTTON IS CLICKED
        heading2.innerText  = "Loan Summary";
        //<h2> STYLES
        heading2.style.textAlign = "center";
        heading2.style.fontSize = "250%";

        display.style.visibility = "visible";

        //PRINT LOAN DETAIL SUMMARY
        summaryHeadings[0].innerText = `Loan Amount: $${amount}`;
        summaryHeadings[1].innerText = `Annual Interest Rate: ${rate}`;
        summaryHeadings[2].innerText = `Loan Term (months): ${totalPayments(payments)}`;
        summaryHeadings[3].innerText = `Monthly Instalments: $${mthlyInstalment.toFixed(2)}`;
    })

    //CLEAR FIELDS    
    resetBtn.addEventListener("click", (clear)=>{
        loanAmt.value = "";
        termInput.value = "";
        
        // summaryHeadings[0].innerText = `Loan Amount: $ `;
        // summaryHeadings[1].innerText = `Annual Interest Rate: `;
        // summaryHeadings[2].innerText = `Loan Term (months): `;
        // summaryHeadings[3].innerText = `Monthly Instalments: `;

        display.style.visibility = "hidden"

        loanAmt.focus();
               
    })

}
main();