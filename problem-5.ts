{
    //
    
    const getProperty = <T, X extends keyof T>(obj: T, key:X ): T[X] => {
        return obj[key]
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    //
}