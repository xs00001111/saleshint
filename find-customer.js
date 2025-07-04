// Script to find customer ID for a specific email
// You'll need to set your Stripe secret key

const stripe = require('stripe')('sk_test_YOUR_STRIPE_SECRET_KEY'); // Replace with your key

async function findCustomer(email) {
  try {
    const customers = await stripe.customers.list({
      email: email,
      limit: 1
    });
    
    if (customers.data.length > 0) {
      console.log(`Customer found for ${email}:`);
      console.log(`Customer ID: ${customers.data[0].id}`);
      console.log(`Created: ${new Date(customers.data[0].created * 1000)}`);
      return customers.data[0].id;
    } else {
      console.log(`No customer found for ${email}`);
      return null;
    }
  } catch (error) {
    console.error('Error finding customer:', error);
  }
}

findCustomer('shenx3@uci.edu');