{
    //
    const countWordOccurrences = (sentence : string, word : string)=>{
        const sentace = sentence.toLocaleLowerCase();
        const words = word.toLocaleLowerCase();
        
        const getTotleWord = new RegExp(`\\b${words}\\b`, 'g');
        const match = sentace.match(getTotleWord)
        return match?.length;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"))
    //
}