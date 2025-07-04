/*
  # Remove All Database Constraints for Fault Tolerance

  1. Constraint Removal
    - Drop all foreign key constraints
    - Drop all unique constraints (except primary keys)
    - Convert unique indexes to regular indexes
    - Make all columns nullable

  2. Fault Tolerance
    - Allow duplicate data everywhere
    - Remove referential integrity checks
    - Set sensible defaults for enum fields
    - Enable maximum write tolerance

  3. Performance
    - Keep important indexes for query performance
    - Maintain primary keys for basic structure
*/

-- Drop all foreign key constraints
DO $$
DECLARE
    constraint_record RECORD;
BEGIN
    FOR constraint_record IN 
        SELECT conname, conrelid::regclass AS table_name
        FROM pg_constraint 
        WHERE contype = 'f'
        AND connamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
    LOOP
        EXECUTE format('ALTER TABLE %s DROP CONSTRAINT IF EXISTS %I', 
                      constraint_record.table_name, 
                      constraint_record.conname);
    END LOOP;
END $$;

-- Drop unique constraints (keep primary keys)
DO $$
DECLARE
    constraint_record RECORD;
BEGIN
    FOR constraint_record IN 
        SELECT conname, conrelid::regclass AS table_name
        FROM pg_constraint 
        WHERE contype = 'u'
        AND connamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
    LOOP
        EXECUTE format('ALTER TABLE %s DROP CONSTRAINT IF EXISTS %I', 
                      constraint_record.table_name, 
                      constraint_record.conname);
    END LOOP;
END $$;

-- Drop unique indexes (keep primary key indexes)
DO $$
DECLARE
    index_record RECORD;
BEGIN
    FOR index_record IN 
        SELECT indexname
        FROM pg_indexes 
        WHERE schemaname = 'public'
        AND indexdef LIKE '%UNIQUE%'
        AND indexname NOT LIKE '%_pkey'
    LOOP
        EXECUTE format('DROP INDEX IF EXISTS %I', index_record.indexname);
    END LOOP;
END $$;

-- Recreate important indexes as non-unique for performance
CREATE INDEX IF NOT EXISTS idx_stripe_customers_customer_id ON stripe_customers(customer_id);
CREATE INDEX IF NOT EXISTS idx_stripe_customers_user_id ON stripe_customers(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_subscriptions_subscription_id ON stripe_subscriptions(subscription_id);
CREATE INDEX IF NOT EXISTS idx_stripe_subscriptions_customer_id ON stripe_subscriptions(customer_id);
CREATE INDEX IF NOT EXISTS idx_user_plans_user_id_nonunique ON user_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_orders_customer_id ON stripe_orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_stripe_orders_checkout_session ON stripe_orders(checkout_session_id);

-- Make columns nullable where they were NOT NULL
ALTER TABLE stripe_customers ALTER COLUMN customer_id DROP NOT NULL;
ALTER TABLE stripe_customers ALTER COLUMN user_id DROP NOT NULL;

ALTER TABLE stripe_subscriptions ALTER COLUMN customer_id DROP NOT NULL;
ALTER TABLE stripe_subscriptions ALTER COLUMN status DROP NOT NULL;

ALTER TABLE stripe_orders ALTER COLUMN checkout_session_id DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN payment_intent_id DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN customer_id DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN amount_subtotal DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN amount_total DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN currency DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN payment_status DROP NOT NULL;
ALTER TABLE stripe_orders ALTER COLUMN status DROP NOT NULL;

ALTER TABLE user_plans ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE user_plans ALTER COLUMN plan_type DROP NOT NULL;
ALTER TABLE user_plans ALTER COLUMN status DROP NOT NULL;

-- Set default values for enum columns to prevent errors
ALTER TABLE stripe_subscriptions ALTER COLUMN status SET DEFAULT 'not_started';
ALTER TABLE stripe_orders ALTER COLUMN status SET DEFAULT 'pending';
ALTER TABLE user_plans ALTER COLUMN plan_type SET DEFAULT 'free';
ALTER TABLE user_plans ALTER COLUMN status SET DEFAULT 'active';

-- Add some additional safety defaults
ALTER TABLE stripe_customers ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE stripe_customers ALTER COLUMN updated_at SET DEFAULT now();
ALTER TABLE stripe_subscriptions ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE stripe_subscriptions ALTER COLUMN updated_at SET DEFAULT now();
ALTER TABLE stripe_orders ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE stripe_orders ALTER COLUMN updated_at SET DEFAULT now();
ALTER TABLE user_plans ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE user_plans ALTER COLUMN updated_at SET DEFAULT now();
ALTER TABLE user_plans ALTER COLUMN plan_started_at SET DEFAULT now();
ALTER TABLE user_plans ALTER COLUMN plan_updated_at SET DEFAULT now();