type ChronicleLayoutProps = {
  children: React.ReactNode;
};

export function ChronicleLayout({ children }: ChronicleLayoutProps) {
  return (
    <div className="library-bg game-viewport w-full">
      <div
        className="game-shell mx-auto w-full max-w-[430px] px-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      >
        {children}
      </div>
    </div>
  );
}
