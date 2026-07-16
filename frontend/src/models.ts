export type ViewType = "flashcard" | "login";

export class View {
    type: ViewType;
    view: FlashcardModel | undefined;

    constructor(type: ViewType, view: FlashcardModel | undefined) {
        this.type = type;
        this.view = view;
    }
}

export class FlashcardModel {
    front: string;
    back: string;
    constructor(front: string, back: string) {
        this.front = front;
        this.back = back;
    }
}