# A/B Testing System Documentation

## Overview

This application implements an A/B testing system to compare two donation flow variants:
- **Flow A**: Multi-step donation checkout (amount → payment → summary → confirmation)
- **Flow B**: Single-step donation checkout (amount + payment on one page → confirmation)

## Architecture

### 1. ABTestContext (`src/contexts/ABTestContext.tsx`)

The core of the A/B testing system. It:
- Randomly assigns users to Flow A or Flow B (50/50 split)
- Persists the assignment in `localStorage` so users see the same variant consistently
- Provides a React context with the current variant and helper methods

**Key Features:**
- **Persistent Assignment**: Once assigned, users stay in the same variant
- **URL Override**: Add `?ab_test=A` or `?ab_test=B` to force a variant (useful for testing)
- **Type Safety**: Full TypeScript support

### 2. Router Components

#### `DonateRouter.tsx`
- `LearnerDonateRouter`: Routes to `LearnerDonatePage` (Flow A) or `LearnerDonatePageB` (Flow B)
- `ClassroomDonateRouter`: Routes to `ClassroomDonatePage` (Flow A) or `ClassroomDonatePageB` (Flow B)

#### `PaymentRouter.tsx`
- `PaymentRouter`: Only accessible in Flow A (Flow B doesn't have a separate payment page)
- `PaymentConfirmedRouter`: Routes to the appropriate confirmation page based on variant

### 3. Flow Structure

#### Flow A (Multi-step)
1. `/donate/learner/:id` → Enter amount
2. `/payment` → Enter payment details
3. `/donation-summary` → Review donation
4. `/payment-confirmed` → Confirmation

#### Flow B (Single-step)
1. `/donate/learner/:id` → Enter amount + payment details (all on one page)
2. `/payment-confirmed-b` → Confirmation

## Usage

### Accessing the A/B Test Variant

```tsx
import { useABTest } from "../contexts/ABTestContext";

function MyComponent() {
    const { variant, isFlowA, isFlowB } = useABTest();
    
    if (isFlowA) {
        // Flow A logic
    } else {
        // Flow B logic
    }
}
```

### Forcing a Variant (Testing)

Add a URL parameter to force a specific variant:
- `http://localhost:5173/?ab_test=A` - Force Flow A
- `http://localhost:5173/?ab_test=B` - Force Flow B

### Debug Component

Add `<ABTestDebug />` to any page to see the current variant (only visible in development):

```tsx
import { ABTestDebug } from "./components/ABTestDebug";

function App() {
    return (
        <>
            {/* Your app */}
            <ABTestDebug />
        </>
    );
}
```

## Implementation Details

### Assignment Logic

1. **First Visit**: User is randomly assigned to A or B (50/50)
2. **Subsequent Visits**: Assignment is retrieved from `localStorage`
3. **URL Override**: If `?ab_test=A` or `?ab_test=B` is present, it overrides the stored value

### Storage

- **Key**: `bookbridge_ab_test_variant`
- **Location**: `localStorage`
- **Values**: `"A"` or `"B"`

### Routes

The routing system automatically directs users to the correct flow:

```tsx
// In App.tsx
<Route path="/donate/learner/:id" element={<LearnerDonateRouter />} />
<Route path="/donate/classroom/:id" element={<ClassroomDonateRouter />} />
<Route path="/payment-confirmed" element={<PaymentConfirmedRouter />} />
<Route path="/payment-confirmed-b" element={<PaymentConfirmedRouter />} />
```

## Analytics & Tracking

To track which variant performs better, you can:

1. **Add analytics events** when users complete donations
2. **Track conversion rates** for each variant
3. **Monitor drop-off points** in each flow

Example tracking:

```tsx
const { variant } = useABTest();

// Track donation completion
analytics.track("donation_completed", {
    variant: variant,
    amount: donationAmount,
    // ... other data
});
```

## Best Practices

1. **Consistency**: Users should always see the same variant
2. **Testing**: Use URL parameters to test both variants during development
3. **Monitoring**: Track key metrics for both variants
4. **Cleanup**: After the test, remove the A/B test system and keep the winning variant

## Future Enhancements

- Server-side assignment (for more control)
- Weighted distribution (e.g., 70% A, 30% B)
- Time-based variants (test different variants at different times)
- Segment-based assignment (e.g., new vs. returning users)
