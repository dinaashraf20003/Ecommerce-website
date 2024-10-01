const mongoose = require('mongoose');
const fetch = require('node-fetch'); // Ensure you install node-fetch
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Import your Product model

dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDatabase = async () => {
    try {
        // Fetch data from DummyJSON API
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        
        // Transform the fetched data
        const products = data.products.map(item => ({
            name: item.title, // Use the title from the API as product name
            description: 'A description for ' + item.title, // Placeholder description
            price: item.price, // Use the price from the API
            category: 'General', // Set a default category or modify this as needed
            imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
        }));

        // Clear existing products
        await Product.deleteMany({});
        
        // Insert fetched products into MongoDB
        await Product.insertMany(products);
        console.log('Database seeded with products from DummyJSON!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
