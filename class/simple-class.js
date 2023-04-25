class Human {
    constructor(gender, language) {
        this.gender = gender,
            this.language = language
    }
};

const bulgarian = new Human('male', 'Bulgarian');
console.log(bulgarian);
const latin = new Human('female', 'Latin');
console.log(latin);
latin.gender = 'male';
console.log(latin);
latin['language'] = 'Latin and Greece';
console.log(latin);