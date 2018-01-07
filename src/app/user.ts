export class User {
    sns: string;
    name: string;
    thumbnail: string;

    constructor() {
    }

    reset(): User {
        this.sns = "";
        this.name = "";
        this.thumbnail = "";
        
        return this;
    }
}
