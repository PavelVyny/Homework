

var pet;

        function choose(){
			var petName = document.querySelector("[name=petName]");
		
			if (!petName.value){
				alert("Enter nephew's name");
				return;
			}
			
			
			var animal = document.getElementsByName("animal");

			for (var i = 0; i<animal.length; i++){
				if (animal[i].checked){ 
					break;
				}
			}  // ищем checked персонажа;


			if( i == 0) {
				pet = new Nephew_1;
				
			} else if( i == 1) {
				pet = new Nephew_2;
				
			} else if( i == 2) {
				pet = new Nephew_3;

			} else {
				alert('Choose your nephew!');
			}
			

			

			petBehavior.classList.remove('prevent');
		} 
		 
		function PetBehavior(name){
			this.name = name;
			this.rest = 70;
			this.mood = 70;
			this.satiety = 70;
			this.hygiene = 70;
			this.health = 70;
			PetBehavior.updateInfo(this);

			window.onwheel = function() {
 				this.mood ++;
 			}.bind(this);	//всегда приписывается к функции, переопределяет указатель this внутри функции, отправленное как параметр в методе bind будет виден внутри функции в виде this;

 			this.educate = function(){
			this.timeOut('mood', -10, 1000);
			PetBehavior.updateInfo(this);
			}

			this.eat = function(){
			this.timeOut('satiety', 10, 1000); 
			PetBehavior.updateInfo(this);
			}

			this.walk = function(){
			this.timeOut('health', 10, 1000);
			this.timeOut('hygiene', -10, 1000);
			PetBehavior.updateInfo(this);
			}

			this.sleep = function(){
			this.timeOut('rest', 10, 1000);
			PetBehavior.updateInfo(this);
			}

			this.entertain = function(){
			this.timeOut('rest', -10, 1000);
			this.timeOut('mood', 10, 1000);
			PetBehavior.updateInfo(this);
			}

			this.wash = function(){
			this.timeOut('hygiene', 10, 1000);
			PetBehavior.updateInfo(this);
			}


			this.timeOut = function(variable, value, time) {
			 var timeout = setTimeout(() => {
		    		this[variable] += value;
		    	}, time);
			} // функция, которая будет исполняться при вызове   this.timeOut( с порядком агрументов внутри)для прототипов,значение variable будет добавлять значение value. Это описан сам процесс. Variable добавит как +value так и +(-value) и в конце выполнятеся time c заданым значением.

			this.timer = setInterval(() => {
	    		this.rest--;
				this.mood--;
				this.satiety--;
				this.hygiene--;
				this.health--;
				PetBehavior.updateInfo(this);
			}, 1000);
		}					//снижение всех характеристик питомца на 1 каждую секунду;
				  	 			 		

		PetBehavior.updateInfo = function(tamagochi) {
			animalRest.value = tamagochi.rest;
			animalMood.value = tamagochi.mood;
			animalSatiety.value = tamagochi.satiety;
			animalHygiene.value = tamagochi.hygiene;
			animalHealth.value = tamagochi.health;
		}									//?

		PetBehavior.prototype.eat = function(){
			this.timeOut('satiety', 10, 1000); 
			PetBehavior.updateInfo(this);
		}

		PetBehavior.prototype.walk = function(){
			this.timeOut('health', 10, 1000);
			this.timeOut('hygiene', -10, 1000);
			PetBehavior.updateInfo(this);
		}

		PetBehavior.prototype.sleep = function(){
			this.timeOut('rest', 10, 1000);
			PetBehavior.updateInfo(this);
		}

		PetBehavior.prototype.entertain = function(){
			this.timeOut('rest', -10, 1000);
			this.timeOut('mood', 10, 1000);
			PetBehavior.updateInfo(this);
		}

		PetBehavior.prototype.wash = function(){
			this.timeOut('hygiene', 10, 1000);
			PetBehavior.updateInfo(this);
		}





		function Nephew_1(name){
			PetBehavior.call(this, name); //call(что наследуем, куда отправляем);
			this.wash = function(){
				this.timeOut('rest', -50, 1000);
				this.timeOut('hygiene', 50, 1000);
				PetBehavior.updateInfo(this);
			}
		}


		function Nephew_2(name){
			PetBehavior.call(this,name);
			this.eat = function(){
				this.timeOut('mood', -40, 1000);
				this.timeOut('satiety', 10, 1000);
				PetBehavior.updateInfo(this);
			}
			this.sleep = function(){
				this.timeOut('rest', 40, 1000);
				PetBehavior.updateInfo(this);
			}
		}

		function Nephew_3(name){
			PetBehavior.call(this,name);
			this.entertain = function(){
				this.timeOut('satiety', -40, 1000);
				this.timeOut('mood', 70, 1000);
				PetBehavior.updateInfo(this);	
			}	
			
		}	// реализация отличий между питамоцами;