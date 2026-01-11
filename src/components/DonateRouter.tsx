import { useParams, Navigate } from "react-router-dom";
import { useABTest } from "../contexts/ABTestContext";
import LearnerDonatePage from "../flowA/LearnerDonatePage/LearnerDonatePage";
import LearnerDonatePageB from "../flowB/LearnerDonatePageB/LearnerDonatePageB";
import ClassroomDonatePage from "../flowA/ClassroomDonatePage/ClassroomDonatePage";
import ClassroomDonatePageB from "../flowB/ClassroomDonatePageB/ClassroomDonatePageB";

/**
 * Router component that directs users to Flow A or Flow B based on A/B test assignment
 */
export function LearnerDonateRouter() {
    const { id } = useParams();
    const { isFlowA } = useABTest();

    if (!id) {
        return <Navigate to="/" replace />;
    }

    return isFlowA ? (
        <LearnerDonatePage />
    ) : (
        <LearnerDonatePageB />
    );
}

export function ClassroomDonateRouter() {
    const { id } = useParams();
    const { isFlowA } = useABTest();

    if (!id) {
        return <Navigate to="/" replace />;
    }

    return isFlowA ? (
        <ClassroomDonatePage />
    ) : (
        <ClassroomDonatePageB />
    );
}
