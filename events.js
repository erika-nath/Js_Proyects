
function miFunc() {
const datos=  document.querySelectorAll('.data');


    var value = {};

    datos.forEach(function(dato) {
      value[dato.name] = dato.value;
    });


    let checkbox=[];
     document.querySelectorAll('[type="checkbox"]').forEach(item=>{
        if (item.checked === true){
            checkbox.push(item.value)
        }
    })
    value.miarray=checkbox;
  
    alert(JSON.stringify(value,null,2))
 }



