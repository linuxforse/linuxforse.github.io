document.addEventListener("DOMContentLoaded", buttonplus);

function buttonplus(){
	var vcc = document.getElementById('vexconfcenter');
	if(vcc){
		vcc.addEventListener("click",Vexconfcenter);
	}

var vac = document.getElementById('vexalertcenter');
	if(vac){
		vac.addEventListener("click",Vexalertcenter);
	}

var vpf = document.getElementById('vexpromptfooter');
	if(vpf){
		vpf.addEventListener("click",Vexpromptfooter);
	}

}

function Vexconfcenter (){vex.dialog.confirm({
    message: 'Запустить ли термоядерный реактор ?',
    callback: function (value) {
        if (value) {
            console.log('Конечно.')
        } else {
            console.log('Не сегодня !')
        }
    }
})

}

function Vexalertcenter(){
vex.dialog.alert({
    message: ' В Одессе иногда выпадает оранжевый снег...',
    className: 'vex-theme-flat-attack'
})

 document.getElementById('b').style.backgroundImage = 'url("img/sneg.jpg")';

}

function Vexpromptfooter(){
vex.dialog.prompt({
    message: 'What planet did the aliens come from?',
    placeholder: 'Planet name',
    className: 'vex-theme-bottom-right-corner',
    callback: function (value) {
        console.log(value)
    }
})


}