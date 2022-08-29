import { faker } from '@faker-js/faker';

function randomProfile() {
    const role = ['teacher', "student"]
    return {
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: role[Math.floor(Math.random()* role.length)],
        contact:'0909090909',
        status:'inactive'
    }
}
const profile = function (max_size: any) {
    const  users = [];
    for (let index = 0; index < max_size; index++) {
        users.push(randomProfile());
    }
    return users;
};
export const userData = profile(10);
