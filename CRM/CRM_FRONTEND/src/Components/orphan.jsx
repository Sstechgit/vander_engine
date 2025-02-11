import { useState } from "react";
import { Input, Card, Button } from 'antd';
export default function TwoFactor() {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStep(2);
    }, 2000); // Simulating API call
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulating API call
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card>

        <h2 className='text-center text-xl font-semibold'>
          Two-Factor Authentication
        </h2>

        <div>
          {step === 1 ? (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <p className="text-gray-600 text-center">Enter your mobile number or email</p>
              <Input
                type="text"
                placeholder="Mobile number or Email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="text-center text-lg"
              />
              <Button type="submit" className="w-full" disabled={loading || !contact}>
                {loading ? <Loader2 className="animate-spin" /> : "Send OTP"}
              </Button>
            </form>
          ) : (
            <>
              <p className="text-gray-600 text-center mb-4">
                Enter the OTP sent to your email or phone
              </p>
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <Input
                  type="text"
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-center tracking-widest text-lg"
                />
                <Button type="submit" className="w-full" disabled={loading || otp.length !== 6}>
                  {loading ? <Loader2 className="animate-spin" /> : "Verify OTP"}
                </Button>
              </form>
              <div className="text-center mt-4">
                <Button className="text-blue-600 hover:underline" onClick={() => setStep(1)} disabled={loading}>
                  Resend OTP
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
