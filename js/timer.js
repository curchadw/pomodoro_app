class Timer{
    constructor(type = 'pomodoro'){
        this.type = type
        this.pomodoro = 25;
        this.shortbreak = 5;
        this.longbreak = 15;
        this.timeElement = window[type];
        this.clock = document.getElementById('time');//in the html we are updating the state at id time in the html doc
        this.actionElement = document.getElementById('action');
        this.time = this.timeElement;
        this.text = this.time <= 9 ? `0 ${this.time}` : `${this.time}`; //format the clock 06:00 23:00, etc. if less than or equal to 9 --> 00:00 - 09:00
        this.circle = document.querySelector('#ring > circle');
        this.interval = 0;
        

    }

    select(type){
        this.type = type;
        //this.reset()
        console.log(this.type)
    }

        

    //start method
    start(){
       const format = (time) =>{
           time < 10 ? "0" + time : time;
       }
           let time = this[this.type] * 60;//this.pomodoro, this.shortbreak..etc
           this.clock.innerText = `${this.text}:00`;
           this.circle.style.strokeDashoffset = 1024;
           let startTime= time
           let minutes = 0;
           let seconds = 0;

           time--
           const countdown = () =>{
               minutes = Math.floor(time/60);
               seconds = Math.floor(time % 60)

               minutes = format(minutes);
               seconds = format(seconds);

               this.clock.innerText = `${minutes} : ${seconds}`;
               const percent = ((time%startTime)/startTime)*100;
               const offset = (percent/100)*1024;
               this.circle.style.strokeDashoffset = offset;

               if(--time < 0){
                   time = 0;
                   clearInterval(this.interval)
                   this.actionElement.innerText = 'reset'
               }
           }
           this.interval = setInterval(countdown,1000)
    
        
    }


    //reset method
    reset(){
        this.stop()
        this.circle.style.strokeDashoffset = 1024;
        this.time = this[this.type] *60
        this.text = this.time <= 9 ? `0${this.time}` : `${this.time}`;
        this.actionElement.innerText = 'start'
        this.clock.innerText = `${this.text}:00`
        
    }

    //stop method
    stop(){
        clearInterval(this.interval)
        this.actionElement.innerText = 'start'
    }


}