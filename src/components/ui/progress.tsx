
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  // Determine the indicator class dynamically from the parent class
  // This avoids the need for a separate indicatorClassName prop
  const isColorClass = className?.includes("bg-");
  let indicatorClass = "bg-primary";
  
  if (isColorClass) {
    // Extract bg color classes from the className
    const colorClasses = className.split(' ').filter(cls => cls.startsWith('bg-'));
    if (colorClasses.length > 0) {
      indicatorClass = colorClasses[0];
    }
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 transition-all", indicatorClass)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
