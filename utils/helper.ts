//Get a random num between 1 to array length
export const getRandomNum = function(maxNum: number) {
    const randomNum = Math.floor(Math.random() * maxNum);
    return randomNum
}