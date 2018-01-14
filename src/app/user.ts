export class User {
    sns: string;
    id: string;
    name: string;
    thumbnail: string;

    constructor() {
    }

    reset(): User {
        this.sns = "";
        this.id = "";
        this.name = "";
        this.thumbnail = "";
        
        return this;
    }
}
