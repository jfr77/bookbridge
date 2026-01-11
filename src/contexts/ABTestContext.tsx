import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ABTestVariant = "A" | "B";

interface ABTestContextType {
    variant: ABTestVariant;
    setVariant: (variant: ABTestVariant) => void;
    isFlowA: boolean;
    isFlowB: boolean;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

const STORAGE_KEY = "bookbridge_ab_test_variant";

export function ABTestProvider({ children }: { children: ReactNode }) {
    const [variant, setVariantState] = useState<ABTestVariant>(() => {
        // Check if user already has an assignment
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "A" || stored === "B") {
            return stored as ABTestVariant;
        }
        
        // Randomly assign 50/50 split
        const assigned: ABTestVariant = Math.random() < 0.5 ? "A" : "B";
        localStorage.setItem(STORAGE_KEY, assigned);
        return assigned;
    });

    const setVariant = (newVariant: ABTestVariant) => {
        setVariantState(newVariant);
        localStorage.setItem(STORAGE_KEY, newVariant);
    };

    // Optional: Force variant via URL parameter (useful for testing)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const forceVariant = urlParams.get("ab_test");
        if (forceVariant === "A" || forceVariant === "B") {
            setVariant(forceVariant as ABTestVariant);
        }
    }, []);

    const value: ABTestContextType = {
        variant,
        setVariant,
        isFlowA: variant === "A",
        isFlowB: variant === "B",
    };

    return <ABTestContext.Provider value={value}>{children}</ABTestContext.Provider>;
}

export function useABTest() {
    const context = useContext(ABTestContext);
    if (context === undefined) {
        throw new Error("useABTest must be used within an ABTestProvider");
    }
    return context;
}
