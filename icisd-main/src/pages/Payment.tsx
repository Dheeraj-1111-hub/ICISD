// icisd-main/src/pages/Payment.tsx
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

export default function Payment() {
  const { getToken } = useAuth();

  useEffect(() => {
    const startPayment = async () => {
      const token = await getToken();

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      window.location.href = data.url;
    };

    startPayment();
  }, []);

  return <p className="text-center mt-40">Redirecting to payment...</p>;
}
