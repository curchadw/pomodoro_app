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
        let time_left = 0;
       
        if(this.type == 'pomodoro'){
            this.time_left = this.pomodoro;
            const countdown = () =>{
                if(time_left <=0){
                    clearInterval(this.interval)
                    let time = document.getElementById('time');
                    time.innerHTML = 0
                }else{
                    let time = document.getElementById('time');
                    time.innerHTML = time_left;
                }

                time_left--;
            }

            this.interval = setInterval(countdown, 2500)

        }else if(this.type == 'shortbreak'){
            this.time_left = this.shortbreak;
            const countdown = () =>{
                if(time_left <=0){
                    clearInterval(this.interval)
                    let time = document.getElementById('time');
                    time.innerHTML = 0
                }else{
                    let time = document.getElementById('time');
                    time.innerHTML = time_left;
                }

                time_left--;
            }

            this.interval = setInterval(countdown, 500)
        }else{
            this.time_left = this.longbreak;
            const countdown = () =>{
                if(time_left <=0){
                    clearInterval(this.interval)
                    let time = document.getElementById('time');
                    time.innerHTML = 0
                }else{
                    let time = document.getElementById('time');
                    time.innerHTML = time_left;
                }

                time_left--;
            }

            this.interval = setInterval(countdown, 1500)
        }

        
    }


    //reset method
    reset(){
        this.stop()
        if(this.type == 'pomodoro'){
            this.clock.innerText = this.pomodoro;
        }else if(this.type = 'shortbreak'){
            this.clock.innerText = this.shortbreak;
        }else{
            this.clock.innerText = this.longbreak;
        }
    }

    //stop method
    stop(){
        clearInterval(this.interval)
    }


}