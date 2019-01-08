class AlarmClock {
    alarms: AlarmComponent[];
    lastAlarmId: number = 1;
    timerChecker: number;
    constructor() {
        this.timerChecker = setInterval(this.timerCheck, 1000);
    }

    timerCheck() {
        this.alarms.forEach( (alarm) => {
            if (alarm.shouldDelete()) {
                alarm.getSoundMaker().stopAudio();
                this.deleteAlarm(alarm.id);
            } else if (alarm.checkIfShouldPlay() && !alarm.getSoundMaker().isPlaying) {
                alarm.getSoundMaker().playAudio();
            } if (!alarm.checkIfShouldPlay() && alarm.getSoundMaker().isPlaying) {
                alarm.getSoundMaker().stopAudioRepeating();
            }
        })
    }

    deleteAlarm(id: string) {
        for (let i=0; i < this.alarms.length-1; i++) {
            if (this.alarms[i].id == id) {
                this.alarms[i] = null;
            }
        }
        // Should delete the front-end element.
        document.getElementById(id).outerHTML = "";
    }

    // Call from front-end - Button to create alarm (+)
    createNewAlarm() {
        let newAlarm = new AlarmComponent(this.generateId(), false);
        this.alarms.push(newAlarm);
    }

    // Call from front-end - Button to save changes (Apply changes)
    changeAlarmTime(hour: number, minute: number) {
        this.alarms.forEach( (alarm) => {
            alarm.setAlarmTime(hour, minute);
        })
    }

    generateId() {
        this.lastAlarmId++;
        return "alarm_" + this.lastAlarmId;
    }
}