import { MdiContentCopy } from "solid-iconify/mdi";
import { createSignal, JSXElement, Show } from "solid-js";
import copy from "copy-to-clipboard";

export interface CopyProps {
  content: string;
  children: JSXElement;
}
export const Copy = (props: CopyProps) => {
  const [copied, setCopied] = createSignal(false);
  return (
    <div
      // border="1 indigo/50"
      p-4
      rounded-lg
      flex="row"
      justify-between
      items-center
      // hover="border-indigo"
      bg="gray/15"
      font-mono
    >
      {props.children}
      <Show
        when={copied()}
        fallback={
          <div cursor-pointer c-indigo hover="c-indigo-5" active="c-indigo-6">
            <MdiContentCopy
              size={20}
              onClick={() => {
                copy(props.content);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            />
          </div>
        }
      >
        <span c-indigo>Copied!</span>
      </Show>
    </div>
  );
};
