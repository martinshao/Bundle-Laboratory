export declare type SexType = "man" | "woman";
export interface IHuman {
    name: string;
    age: string;
    sex: SexType;
}
export declare class Human implements IHuman {
    name: string;
    age: string;
    sex: SexType;
    constructor(name: string, age: string, sex: SexType);
    getName(): string;
    getAge(): string;
}
export declare function HumanFactory(name: string, age: string, sex: SexType): IHuman;
