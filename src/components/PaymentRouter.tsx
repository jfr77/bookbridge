import { Navigate } from "react-router-dom";
import { useABTest } from "../contexts/ABTestContext";
import PaymentPage from "../flowA/PaymentPage/PaymentPage";
import PaymentConfirmedPage from "../flowA/PaymentConfirmedPage/PaymentConfirmedPage";
import PaymentConfirmedPageB from "../flowB/PaymentConfirmedPageB/PaymentConfirmedPageB";

/**
 * Router for payment confirmation pages
 * Flow A uses PaymentConfirmedPage, Flow B uses PaymentConfirmedPageB
 */
export function PaymentConfirmedRouter() {
    const { isFlowA } = useABTest();

    return isFlowA ? (
        <PaymentConfirmedPage />
    ) : (
        <PaymentConfirmedPageB />
    );
}

/**
 * PaymentPage is only used in Flow A (multi-step)
 * Flow B handles payment on the same page, so this shouldn't be accessed
 */
export function PaymentRouter() {
    const { isFlowA } = useABTest();

    if (!isFlowA) {
        // Flow B doesn't have a separate payment page
        // Redirect to home if someone tries to access it
        return <Navigate to="/" replace />;
    }

    return <PaymentPage />;
}
