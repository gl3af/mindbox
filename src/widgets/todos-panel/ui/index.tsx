import { PanelFooter } from "./footer";
import { PanelHeader } from "./header";
import { PanelList } from "./list";

export function TodosPanel() {
  return (
    <section
      data-testid="todos-panel"
      className="relative w-full flex flex-col justify-center bg-background shadow-[0_0_0.5rem_rgba(0,0,0,0.1)] before:absolute before:inset-[0_4px_-8px_4px] before:-z-[1] before:bg-background before:border after:absolute after:inset-[0_8px_-16px_8px] after:bg-background after:border after:-z-[2]"
    >
      <PanelHeader />
      <PanelList />
      <PanelFooter />
    </section>
  );
}
