const timesince = (timestamp)=> {
    const seconds = (new Date() - new Date(timestamp)) / 1000;
    const minutes = 60;
    const hours = 60 * 60;
    const days = hours * 24;
    const months = days * 30;
    const years = months * 12;
    switch (true) {
        case (seconds > years):
            return `${Math.floor(seconds/years)} years ago`;
        case (seconds > months):
            return `${Math.floor(seconds / months)} months ago`;
        case (seconds > days):
            return `${Math.floor(seconds / days)} days ago`;
        case (seconds > hours):
            return `${Math.floor(seconds / hours)} hours ago`;
        case (seconds > minutes):
            return `${Math.floor(seconds / minutes)} minutes ago`;
        default:
            return `${Math.floor(seconds/1)} seconds ago`;
    }
}

export default timesince;