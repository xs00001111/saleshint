import React from 'react';
import { Mail, X, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface EmailVerificationBannerProps {
  onDismiss?: () => void;
  showDismiss?: boolean;
}

const EmailVerificationBanner: React.FC<EmailVerificationBannerProps> = ({ 
  onDismiss, 
  showDismiss = true 
}) => {
  const { user } = useAuth();
  const [isResending, setIsResending] = React.useState(false);

  const handleResendVerification = async () => {
    if (!user?.email) return;

    setIsResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user.email,
      });

      if (error) {
        toast.error('Failed to resend verification email');
      } else {
        toast.success('Verification email sent! Check your inbox.');
      }
    } catch (error) {
      toast.error('An error occurred while resending verification email');
    } finally {
      setIsResending(false);
    }
  };

  // Don't show if user is already verified
  if (user?.email_confirmed_at) {
    return null;
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <Mail className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-amber-800 mb-1">
            Please verify your email address
          </h3>
          <p className="text-sm text-amber-700 mb-3">
            We've sent a verification email to <strong>{user?.email}</strong>. 
            Please check your inbox and click the verification link to activate your account.
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleResendVerification}
              disabled={isResending}
              className="inline-flex items-center text-sm font-medium text-amber-800 hover:text-amber-900 transition-colors disabled:opacity-50"
            >
              {isResending ? (
                <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
              ) : (
                <Mail className="h-4 w-4 mr-1" />
              )}
              {isResending ? 'Sending...' : 'Resend verification email'}
            </button>
          </div>
        </div>
        {showDismiss && onDismiss && (
          <button
            onClick={onDismiss}
            className="text-amber-500 hover:text-amber-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationBanner;