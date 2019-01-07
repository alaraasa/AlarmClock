class ClockComponent {
    public getCurrentHour() {
        return new Date().getHours();
    }

    public getCurrentMinute() {
        return new Date().getMinutes();
    }

    public getCurrentSecond() {
        return new Date().getSeconds();
    }
}