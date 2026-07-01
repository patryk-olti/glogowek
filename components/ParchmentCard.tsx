import { ParchmentCardBody } from "@/components/ParchmentCardBody";



type ParchmentCardProps = {

  paragraphs: readonly string[];

  passwordHint?: string;

  typing?: boolean;

  children?: React.ReactNode;

};



export function ParchmentCard({

  paragraphs = [],

  passwordHint,

  typing = false,

  children,

}: ParchmentCardProps) {

  return (

    <div className="animate-card-rise anim-delay-200 game-card rounded-sm parchment-texture shadow-2xl shadow-black/50 ring-1 ring-chronicle-parchment-dark/60">

      <ParchmentCardBody

        paragraphs={paragraphs}

        passwordHint={passwordHint}

        typing={typing}

      >

        {children}

      </ParchmentCardBody>

    </div>

  );

}

