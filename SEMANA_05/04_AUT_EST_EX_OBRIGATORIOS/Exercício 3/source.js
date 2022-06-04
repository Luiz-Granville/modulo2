
function binarieSearch(key, sortedArray){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle+"º";
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return "Não foi encontrado";
}
function bubbleSort() {
    var string = document.getElementById("text").value;
    var itemsStr= string.split(",");
    items = [];
    itemsStr.forEach(str => {
        items.push(Number(str));
    });

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
    console.log(focus)
    document.getElementById("order").innerHTML = binarieSearch(focus, items)
}

