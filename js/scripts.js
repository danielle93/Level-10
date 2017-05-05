const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    //Check if shift key down
    //also check they are checking (not unchecking)
    
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //go ahead and do what we pls
        //loop over all checkboxes
        checkboxes.forEach(checkbox => {
           if(checkbox === this || checkbox === lastChecked){
               inBetween = !inBetween;
           } 
            
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))