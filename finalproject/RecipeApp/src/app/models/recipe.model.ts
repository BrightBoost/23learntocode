// ng generate class ./models/Recipe --skip-tests --type model
export class Recipe {
    constructor(
    public id: number,
    public description: string,
    public ingredients: string
    ) {}
}
