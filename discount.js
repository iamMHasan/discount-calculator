// common function 
function elementValueById(elementId){
    const elementString = document.getElementById(elementId)
    const element = parseFloat(elementString.value)
    return element

}
// get and set value 
function setInnerValue(elementId,value){
    const elementString = document.getElementById(elementId)
    elementString.innerText = value.toFixed(2)
}

document.getElementById('lock-btn').addEventListener('keyup',function(event){
    const typedText = event.target.value
    // console.log(typedText)
    const getBtn = document.getElementById('discount-btn')
    if(typedText === 'SCRIPT'){
        getBtn.removeAttribute('disabled')
    } else{
        getBtn.setAttribute('disabled',true)
    }
})

document.getElementById('discount-btn').addEventListener('click',function(){
    const enterAmount = elementValueById('enter-amount')
   
    const discountAmount = enterAmount * 30 / 100
    const paybleAmount = enterAmount - discountAmount

    const payAmount = setInnerValue('payable-amount', paybleAmount)

    })