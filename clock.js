class Clock {

  constructor() {
    const dateTime = new Date();
    this.hours = dateTime.getHours();
    this.minutes = dateTime.getMinutes();
    this.seconds = dateTime.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  };
  


  printTime() {
    const dateJoin = [this.hours, this.minutes, this.seconds].join(":");
    console.log(dateJoin);
  };



  _tick() {
    this.tickSeconds(); 
    this.printTime();
  };

  tickSeconds(){
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.tickMinute();
    }
  };

  tickMinute(){
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.tickHour();
    }
  };

  tickHour(){
    this.hours += 1;
    this.hours %= 24;
  }
};

const clock = new Clock(); 