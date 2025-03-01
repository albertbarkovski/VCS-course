let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function() {
    console.log('clicked')
    let employeeCount = document.getElementById('employee-count').valueAsNumber
    let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
    let orderCount = document.getElementById('order-count').valueAsNumber

    let kepyklaTotal = employeeCount * loavesPerEmployee
    let arPavyks = kepyklaTotal >= orderCount

    let results = document.getElementById('results')
    results.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${kepyklaTotal} kepalų</p>`
    results.innerHTML += `<p><strong>Reikia pagaminti:</strong> ${orderCount} kepalų</p>`
    results.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
})

document.getElementById('employee-count').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
})

/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/