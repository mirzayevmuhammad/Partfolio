// "use client";

// import * as React from "react";
// import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import { cn } from "../../lib/utils";

// const Dialog = DialogPrimitive.Root;
// const DialogTrigger = DialogPrimitive.Trigger;

// const DialogPortal = ({
//   children,
//   className,
//   ...props
// }: DialogPrimitive.DialogPortalProps & { className?: string }) => (
//   <DialogPrimitive.Portal {...props}>
//     <div className={cn(className)}>{children}</div>
//   </DialogPrimitive.Portal>
// );

// const DialogOverlay = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
//       className
//     )}
//     {...props}
//   />
// ));
// DialogOverlay.displayName = "DialogOverlay";

// const DialogContent = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <DialogPortal>
//     <DialogOverlay />
//     <DialogPrimitive.Content
//       ref={ref}
//       className={cn(
//         "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-white dark:bg-black p-6 shadow-lg duration-200 sm:rounded-lg",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <DialogPrimitive.Close className="absolute right-4 top-4">
//         <Cross2Icon className="h-4 w-4 opacity-70 hover:opacity-100" />
//       </DialogPrimitive.Close>
//     </DialogPrimitive.Content>
//   </DialogPortal>
// ));
// DialogContent.displayName = "DialogContent";

// const DialogHeader = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
// );

// const DialogFooter = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
// );

// const DialogTitle = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Title>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Title
//     ref={ref}
//     className={cn("text-lg font-semibold leading-none tracking-tight", className)}
//     {...props}
//   />
// ));
// DialogTitle.displayName = "DialogTitle";

// const DialogDescription = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Description>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Description
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// DialogDescription.displayName = "DialogDescription";

// export {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
//   DialogDescription,
// };
