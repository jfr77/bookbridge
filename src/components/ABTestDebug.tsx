import { useABTest } from "../contexts/ABTestContext";

/**
 * Debug component to display current A/B test assignment
 * Useful for development and testing
 * 
 * Usage: Add <ABTestDebug /> to any page to see the current variant
 */
export function ABTestDebug() {
    const { variant, isFlowA, isFlowB, setVariant } = useABTest();

    // Only show in development
    if (process.env.NODE_ENV === "production") {
        return null;
    }

    return (
        <div
            style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                background: variant === "A" ? "#4f3aa6" : "#ff6b6b",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                zIndex: 9999,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
        >
            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                A/B Test: Flow {variant}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.9 }}>
                {isFlowA ? "Multi-step" : "Single-step"} donation flow
            </div>
            <button
                onClick={() => setVariant(variant === "A" ? "B" : "A")}
                style={{
                    marginTop: "6px",
                    padding: "4px 8px",
                    fontSize: "10px",
                    background: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "4px",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Switch to {variant === "A" ? "B" : "A"}
            </button>
        </div>
    );
}
