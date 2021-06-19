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
        

    }

    select(type){
        this.type = type;
        //this.reset()
        console.log(this.type)
    }

    // let start_time = this.pomodoro;//setting the time to display the 25 min start
    //     const countdown = () =>{
    //         --start_time;
    //         this.clock.innerHTML = start_time
    //         start_time === 0 ? clearInterval(timeinterval) : '';
    //     }
    //     let timeinterval = setInterval(countdown,1000)
        

    //start method
    start(){
        let start_time = this.pomodoro;
       
        const countdown = () =>{
            --start_time;
            this.clock.innerHTML = start_time;
            if(start_time === 0){
                clearInterval(timeinterval)
            }
        }
        let timeinterval = setInterval(countdown,1000)
    }


    //reset method
    reset(){
        this.clock.innerHTML = 25
        this.stop()
    }

    //stop method
    stop(){
        
    }


}