class AlarmComponent {
    private isRepeatable: boolean;
    private SoundMakerComponent: SoundMakerComponent;
    private ClockComponent: ClockComponent;

    constructor( clock: ClockComponent, sound: SoundMakerComponent, repeatable: boolean )
    {
        this.SoundMakerComponent = sound;
        this.ClockComponent = clock;
        this.isRepeatable = repeatable;
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
}