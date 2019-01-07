class AlarmComponent {
    private isRepeatable: boolean;
    private SoundMakerComponent: SoundMakerComponent;
    private ClockComponent: ClockComponent;
    private alarmTime: string;

    constructor( clock: ClockComponent, sound: SoundMakerComponent, repeatable: boolean, time: string )
    {
        this.SoundMakerComponent = sound;
        this.ClockComponent = clock;
        this.isRepeatable = repeatable;
        this.alarmTime = time;
    }

    public setAlarmTime( time: string )
    {
        this.alarmTime = time;
    }

    public setClock( clock: ClockComponent )
    {
        this.ClockComponent = clock;
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
    let element = "<div>" + 
    "<input type='time'>" +
    "<input type='checkbox' name='repeatable'>Repeat" +
    "</div>";
    return document.body.innerHTML = element ;
}