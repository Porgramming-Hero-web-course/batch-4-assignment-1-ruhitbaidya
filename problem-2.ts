{
    //
    const removeDuplicates = (duplicateArray : number[]): number[]=>{
        let singalArr: number[] = [];
        duplicateArray.forEach((item)=>{
            if(!singalArr.includes(item)){
                singalArr.push(item)
            }
        })

        return singalArr
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
    //
}