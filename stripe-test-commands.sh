#!/bin/bash

# First, you need to install Stripe CLI if you haven't:
# https://stripe.com/docs/stripe-cli

# Login to your Stripe account
stripe login

# Find the customer ID for shenx3@uci.edu
echo "Finding customer for shenx3@uci.edu..."
stripe customers list --email="shenx3@uci.edu"

# Replace CUSTOMER_ID with the actual customer ID from above
CUSTOMER_ID="cus_REPLACE_WITH_ACTUAL_ID"

# Send a test subscription created webhook
stripe events resend evt_REPLACE_WITH_EVENT_ID

# Or create a test event and send it
stripe trigger customer.subscription.created --add customer=$CUSTOMER_ID

# Forward webhooks to your local development (if testing locally)
# stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook

echo "Test webhook sent!"