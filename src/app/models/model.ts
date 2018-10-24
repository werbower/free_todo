
export interface ToDoItem {
    action: string;
    done: boolean;
}

export class Model {
    user: string;
    items: ToDoItem[];

    constructor() {
        this.defaultInit();
    }
    defaultInit() {
        this.user = 'Adam';
        this.items = [
            {action: 'Buy flowers', done: false}
            , {action: 'Get shoes', done: false}
            , {action: 'Collect tickets', done: false}
            , {action: 'Call Joe', done: false}
        ];
    }
}
