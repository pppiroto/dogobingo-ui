export class User {
    id: string;
    sns: string;
    sns_id: string;
    name: string;
    thumbnail: string;

    constructor() {
    }

    reset(): User {
        this.id = "";
        this.sns = "";
        this.sns_id = "";
        this.name = "";
        this.thumbnail = "";
        
        return this;
    }
}
