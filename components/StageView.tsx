import { BackButton } from "@/components/BackButton";
import { ChronicleLayout } from "@/components/ChronicleLayout";
import { ContinueButton } from "@/components/ContinueButton";
import { Header } from "@/components/Header";
import { HeroQuote } from "@/components/HeroQuote";
import { PasswordGate } from "@/components/PasswordGate";
import { ParchmentCard } from "@/components/ParchmentCard";
import { stagePaths } from "@/config/routes";
import type { Stage } from "@/config/stages";

type StageViewProps = {
  stage: Stage;
};

export function StageView({ stage }: StageViewProps) {
  const messages = "messages" in stage ? stage.messages : undefined;
  const hasPasswordGate = "password" in stage && stage.password;
  const hasContinueButton =
    !!messages && "continue" in messages && !hasPasswordGate;

  return (
    <ChronicleLayout>
      <Header title={stage.title} />
      <HeroQuote
        subtitle={stage.subtitle}
        quote={stage.quote}
        icon={"heroIcon" in stage ? stage.heroIcon : undefined}
      />
      <main className="game-main">
        <ParchmentCard
          paragraphs={stage.paragraphs}
          typing={stage.slug !== stagePaths.dziekujemy}
          passwordHint={
            hasPasswordGate && "passwordHint" in stage
              ? stage.passwordHint
              : undefined
          }
        >
          {"backSlug" in stage && stage.backSlug && (
            <BackButton href={stage.backSlug} />
          )}
          {hasPasswordGate && messages && "submit" in messages && (
            <PasswordGate
              password={stage.password}
              nextSlug={"nextSlug" in stage ? stage.nextSlug : undefined}
              placeholder={messages.placeholder}
              submitLabel={messages.submit}
              successMessage={messages.success}
              errorMessage={messages.error}
            />
          )}
          {hasContinueButton && messages && "continue" in messages && (
            <ContinueButton
              label={messages.continue}
              nextSlug={"nextSlug" in stage ? stage.nextSlug : undefined}
            />
          )}
        </ParchmentCard>
      </main>
    </ChronicleLayout>
  );
}
