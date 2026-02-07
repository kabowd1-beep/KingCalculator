let string="";
let textField=document.getElementById("textField");
let buttons=document.querySelectorAll("button");
let records=[];

buttons.forEach((e)=>{
    e.addEventListener('click', f);         // f stands for function name
})


function f(buttons){
    if (buttons.target.innerHTML=='C') {
        textField.value="";
        string="";
    }
    
    else if(buttons.target.innerHTML=='DEL'){
        let temp=textField.value.toString();
        textField.value=temp.slice(0,string.length-1);
        string=textField.value;
    }

    else if(buttons.target.innerHTML=='='){
        let result=execute(textField.value);
        textField.value=result;
        string=result;
        records.push(string);
    }

    else if(buttons.target.innerHTML=='⏱'){
        let result=history();
        textField.value=result;
        string=result;
    }

    else{
        string+=buttons.target.innerHTML;
        textField.value=string;
    }
}



function execute(expression){
    try {
        return eval(expression);
    } catch (error) {
        console.log(error);
        return 'ERROR';
    }
}

function history(){
    try {
        if (records=='') {
            return 'EMPTY';
        }

        else
            return records.pop();
    } catch (error) {
        return 'ERROR';
    }
}