function areaOfTriangle (){
    let base = document.querySelector('[data-base]').value
    let height = document.querySelector('[data-height]').value
    document.querySelector('[data-output]').textContent = ` ${((1/2)*base) * height} Square units`  
}

let btn = document.querySelector('[data-button]')
btn.addEventListener('click', areaOfTriangle)
