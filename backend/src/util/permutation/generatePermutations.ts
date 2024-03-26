const vowels = ["a", "e"]; //, "i", "o", "u"]
export default function generatePermutations(names: string[]): string[] {
    return names.flatMap(getNamePermutations);
}

function replaceVowelAtPosition(word: string, vowelIndex: number, replacementVowel: string): string {
    return word.substring(0, vowelIndex) + replacementVowel + word.substring(vowelIndex + 1);
}

function getNamePermutations(name: string): string[]{
    const permutations: string[] = [name];

    for (let i = 0; i < name.length; i++) {
        const character = name[i];
        const characterIsVowel = vowels.includes(character.toLowerCase());
        if(!characterIsVowel){
            continue;
        }

        const vowelIndexToSkip = vowels.indexOf(character.toLowerCase());

        vowels.forEach((vowel, index) => {
            if (index === vowelIndexToSkip) {
                return;
            }

            const replacedWord = replaceVowelAtPosition(name, i, vowel);
            permutations.push(replacedWord);
        });
    }

    return permutations;
}
