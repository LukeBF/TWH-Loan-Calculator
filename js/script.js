//GLOBAL VARIABLES
const ANNUAL_RATE = .05;
const MONTHS_IN_YEAR = 12

//CALCULATE MONTHLY INTEREST
function calMonthlyInterest()
{
    const monthlyInterest = ANNUAL_RATE / MONTHS_IN_YEAR;
    return monthlyInterest;
}


//CALCULATE STEPS 4 TO 6
function stepsFourToSix()
{
    const newValue1 = calMonthlyInterest() + 1
    const newValue2 = Math.pow(newValue1, -60)
    const newValue3 = 1 - newValue2;
    return newValue3;
}


//CALCULATE STEP 7
function stepSeven()
{
    const newValue = parseInt(document.querySelector("#loan-inputs > input").value) * calMonthlyInterest();
    return newValue;
}


//CALCULATE STEP 8 - MONTHLY INSTALLMENTS
function calMonthlyInstallments()
{
    const monthlyInstallment = stepSeven() / stepsFourToSix();
    return monthlyInstallment;
}


function main()
{
    //FETCH ELEMENTS FROM THE DOM
    const calButton = document.querySelector("#calculate-btn");

    const heading2 = document.querySelector("#display > h2");

    const summaryHeadings = document.querySelectorAll("#display h3")

    

    //MAKE THE BUTTON AN EVENT LISTENER
    calButton.addEventListener("click", function(){
            
            const loanAmount = parseInt(document.querySelector("#loan-inputs > input").value);
            const rate = parseInt(document.querySelector("#loan-inputs input:nth-child(2)").value);
            let loanTermInYears = parseInt(document.querySelector("#loan-inputs input:nth-child(2)").value)
            loanTermInMonths = loanTermInYears * 12;

            //DISPLAY AFTER THE CALCULATE BUTTON IS CLICKED
            heading2.innerText  = "Loan Summary";
            //<h2> STYLES
            heading2.style.textAlign = "center";
            heading2.style.fontSize = "250%"

            //PRINT LOAN DETAIL SUMMARY
            summaryHeadings[0].innerText = `Loan Amount: $${loanAmount}`
            summaryHeadings[1].innerText = `Annual Interest Rate: ${rate}`
            summaryHeadings[2].innerText = `Loan Term (months): ${loanTermInMonths}`
            summaryHeadings[3].innerText = `Monthly Payments: $${calMonthlyInstallments().toFixed(2)}`
    })
}
main();

