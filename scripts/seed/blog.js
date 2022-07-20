const { faker } = require('@faker-js/faker')
const connectDatabase = require('../../database')
const {blogModel} = require('../../database/blog')
const {categoryModel} = require('../../database/category');

async function createFakeBlogs(count) {

     const categories = await categoryModel.find({});
    
    for (let i = 0; i < count; i++) {
        const blog = {
            title: faker.hacker.phrase(),
            body: faker.lorem.paragraph(100),
            categories : [categories[Math.floor(Math.random()*7)], categories[Math.floor(Math.random()*7)] ]
        };

        await blogModel.create(blog)

    }
}

connectDatabase().then(() => {
    createFakeBlogs(500);
})