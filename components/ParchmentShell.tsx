type ParchmentShellProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function ParchmentShell({ children, footer }: ParchmentShellProps) {
  return (
    <div className="parchment-page game-viewport w-full">
      <div className="parchment-shell mx-auto flex h-full w-full max-w-[430px] flex-col px-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {children}
        {footer}
      </div>
    </div>
  );
}
