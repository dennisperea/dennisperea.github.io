"using strict"

class MyDate {
    constructor(hour,minute,second) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
    }

    getHour(){
        return this._hour;
    }

    getMinute(){
        return this._minute;
    }

    getSecond(){
        return this._second;
    }

    setHour(hour){
        this._hour = hour;
    }

    setMinute(minute){
        this._minute = minute;
    }

    setSecond(second){
        this._second = second;
    }

    getFormattedDate(){
        let outputStr = "";

        if (this._hour < 10){
            outputStr += "0" + this._hour +":";
        } else {
            outputStr += this._hour + ":";
        }

        if (this._minute < 10){
            outputStr += "0" + this._minute + ":";
        } else {
            outputStr += this._minute + ":";
        }

        if (this._second < 10){
            outputStr += "0" + this._second;
        } else {
            outputStr += this._second;
        }

        return outputStr;

    }
}

me = new MyDate(4,35,30);
console.log(me.getFormattedDate());