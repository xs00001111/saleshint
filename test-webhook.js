// Test script to simulate webhook call
// Run with: node test-webhook.js

const testWebhookCall = async () => {
  // Using your actual Supabase URL from environment
  const webhookUrl = `${process.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'}/functions/v1/stripe-webhook`;
  
  // You'll need to find the actual customer ID for shenx3@uci.edu from your Stripe dashboard
  // For now, using a placeholder - we'll update this after finding the real customer ID
  const customerIdForTestUser = 'cus_test_customer_id';
  
  // Sample webhook payload for subscription created
  const testPayload = {
    id: 'evt_test_webhook',
    object: 'event',
    api_version: '2020-08-27',
    created: Math.floor(Date.now() / 1000),
    data: {
      object: {
        id: 'sub_test_123',
        object: 'subscription',
        customer: customerIdForTestUser,
        status: 'active',
        current_period_start: Math.floor(Date.now() / 1000),
        current_period_end: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60), // 30 days from now
        cancel_at_period_end: false,
        items: {
          data: [{
            price: {
              id: 'price_1RgHsfLKBMTfyMxPU9RQZ07S' // Your actual price ID
            }
          }]
        },
        default_payment_method: {
          card: {
            brand: 'visa',
            last4: '4242'
          }
        }
      }
    },
    livemode: false,
    pending_webhooks: 1,
    request: {
      id: 'req_test_123',
      idempotency_key: null
    },
    type: 'customer.subscription.created'
  };

  try {
    console.log('🚀 Sending test webhook to:', webhookUrl);
    console.log('📦 Testing with customer ID:', customerIdForTestUser);
    console.log('📊 Event type:', testPayload.type);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Note: This will fail signature verification, but will test the endpoint
        'Stripe-Signature': 'test_signature_will_fail'
      },
      body: JSON.stringify(testPayload)
    });

    console.log('\n📊 Response status:', response.status);
    const responseText = await response.text();
    console.log('📄 Response body:', responseText);
    
    if (response.status === 400 && responseText.includes('signature verification failed')) {
      console.log('\n⚠️  Expected signature verification failure - this is normal for test calls');
      console.log('✅ The webhook endpoint is reachable and responding correctly');
      console.log('🔧 Next step: Find the real customer ID for shenx3@uci.edu and update the test');
    } else if (response.status === 200) {
      console.log('\n✅ Webhook processed successfully!');
      console.log('🎉 This means your webhook is working and database updates should have occurred');
    } else {
      console.log('\n❌ Unexpected response - check your webhook configuration');
    }
    
  } catch (error) {
    console.error('\n❌ Error calling webhook:', error.message);
    console.log('\n🔧 Possible issues:');
    console.log('   - Check if VITE_SUPABASE_URL is set correctly');
    console.log('   - Verify your Supabase project is running');
    console.log('   - Check if the edge function is deployed');
  }
};

console.log('🧪 Starting webhook test...\n');
console.log('🎯 This test will:');
console.log('   1. Send a test webhook to your Supabase edge function');
console.log('   2. Expect signature verification to fail (normal for test)');
console.log('   3. Verify the endpoint is reachable and responding\n');

testWebhookCall();