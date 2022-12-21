const calculateButon = document.querySelector('.calculateButon')

calculateButon.addEventListener('click', (eevent) => {
    eevent.preventDefault()
    console.log('clicou!');
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    
    const imc = (weight / (height/ 100) ** 2).toFixed(2)
    console.log(imc);

    if (height && weight) {
        
        
        
        
        let situation = ''
        
        if (imc < 18.5) {
            situation = "Magreza"
        } else if (imc >= 18.5 && imc < 29.&& imc < 24.9) {
            situation = 'Peso Normal'
        }else if (imc >= 24.9 && imc < 29.9) {
            situation = 'Sobrepeso'
        }else if (imc >= 29.9 && imc < 34.9) {
            situation = 'Obesidade I'
        }else if (imc >= 34.9 && imc < 39.9) {
            situation = 'Obesidade II'
        }else if (imc >= 39.9) {
            situation = 'Obesidade III'
        }
        
        
        const result = document.querySelectorAll('.result')
        result.forEach((result) => {
            result.innerHTML = `Seu IMC é ${imc} ${situation}`
        })
       const containerModal = document.querySelector('.containerModal')
       containerModal.style.display = 'grid'

       const closeButon = document.querySelector('.closeButon')
       closeButon.addEventListener('click', () => {
        const containerModal = document.querySelector('.containerModal')
        containerModal.style.display = 'none'
        
       })

    } else{
        alert('Por Favor Digite Peso e Altura')
    } 

})