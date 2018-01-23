class Person {
    public firstName: string;
    public lastName: string;

    public getInfo(): void {
        document.write(`<br/>firstName:${this.firstName}, <br/>lastName: ${this.lastName} <br/>`);
    }
}