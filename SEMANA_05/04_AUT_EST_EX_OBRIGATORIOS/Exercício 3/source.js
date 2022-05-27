function binarieSearch(focus, items){
    var medium = items.length/2
    var min = 0
    var max = items.length
    var boolean = false
    while(boolean == false){
        if (items[medium] == focus){
            boolean = true
            return medium
        }
        else if(focus > items[medium]){
            min = items[medium+1]
            medium = (max - min)/2
        }
        else{
            max = items[medium-1]
            medium = (max - min)/2
        }
    }
}

function bubbleSort() {
    var string = document.getElementById("text").value;
    var items= [];
    for (i = 0; i<string.length; i++){
    items.push(string[i])
    }
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
    focus = parseInt(document.getElementById("focus").value)
    document.getElementById("order").innerHTML = binarieSearch(focus, items)+"º"
}

