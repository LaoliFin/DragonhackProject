const { UserModel, CommentModel, PostModel } = require('./api/models/schemas');

const seedData = async () => {
  try {
    const user1 = await UserModel.create({
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      salt: 'salt123',
      hash: 'hashedPassword123',
      description: 'Hello, I am John Doe'
    });

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Run the seedData function
seedData();
