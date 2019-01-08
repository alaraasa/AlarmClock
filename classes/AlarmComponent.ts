class AlarmComponent {
    public id: string;
    private isRepeatable: boolean;
    private SoundMakerComponent: SoundMakerComponent;
    private ClockComponent: ClockComponent;
    private alarmHour: number;
    private alarmMinute: number;

    constructor( id: string, repeatable: boolean)
    {
        this.id = id;
        this.SoundMakerComponent = new SoundMakerComponent();
        this.ClockComponent = new ClockComponent();
        this.isRepeatable = repeatable;
        this.alarmHour = new Date().getHours();
        this.alarmMinute = new Date().getMinutes()-1;
    }

    public setAlarmTime( hours: number, minutes: number )
    {
        this.alarmHour = hours;
        this.alarmMinute = minutes;
    }

    public checkIfShouldPlay() {
        return this.alarmHour == this.ClockComponent.getCurrentHour() && this.alarmMinute == this.ClockComponent.getCurrentMinute();
    }

    public shouldDelete() {
        return ( this.alarmHour != this.ClockComponent.getCurrentHour() || this.alarmMinute != this.ClockComponent.getCurrentMinute() )
    && this.getSoundMaker().isPlaying && !this.isRepeatable
    }

    public setClock( clock: ClockComponent )
    {
        this.ClockComponent = clock;
    }

    public getSoundMaker()
    {
        return this.SoundMakerComponent;
    }

    public setSoundMaker( soundMaker: SoundMakerComponent )
    {
        this.SoundMakerComponent = soundMaker;
    }

    public setIsRepeatable( isRepeatable: boolean )
    {
        this.isRepeatable = isRepeatable;
    }

    public isAlarmRepeatable()
    {
        return this.isRepeatable == true ? true : false;
    }
}

function renderTemplate( alarm: AlarmComponent )
{
    let element = "<div id=" + this.id + ">" +
    "<input type='time'>" +
    "<input type='checkbox' name='repeatable'>Repeat" +
    "</div>";
    let smc = new SoundMakerComponent();
    smc.playAudio();
    return document.body.innerHTML += element ;
}